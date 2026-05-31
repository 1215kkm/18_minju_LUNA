import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Header from './Header'
import Footer from './Footer'

const SNAP_DOWN = 0.60

function Layout({ children }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const lenis = new Lenis({
      wrapper: container,
      content: container.firstElementChild,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false,
    })

    let snapCache = []
    let snapping = false
    let snapTimeout = null

    const setSnapping = (val) => {
      snapping = val
      if (snapTimeout) clearTimeout(snapTimeout)
      if (val) snapTimeout = setTimeout(() => { snapping = false }, 1500)
    }

    const buildCache = () => {
      const sections = Array.from(container.querySelectorAll('.snap-section[id]'))
      const ch   = container.clientHeight
      const cTop = container.getBoundingClientRect().top
      snapCache = sections.map((sec) => {
        const absTop = Math.round(
          sec.getBoundingClientRect().top - cTop + container.scrollTop
        )
        const isCentered = sec.style?.scrollSnapAlign === 'center'
        const snapTop = isCentered
          ? Math.max(0, absTop - Math.round((ch - sec.offsetHeight) / 2))
          : absTop
        return { snapTop, height: sec.offsetHeight }
      })
    }

    buildCache()
    const initTimer = setTimeout(buildCache, 500)
    window.addEventListener('resize', buildCache)

    lenis.on('scroll', ({ scroll }) => {
      if (snapping || snapCache.length === 0) return
      const y = scroll
      for (let i = 0; i < snapCache.length; i++) {
        const { snapTop, height } = snapCache[i]
        const nextSnapTop = snapCache[i + 1]?.snapTop ?? Infinity
        if (y >= snapTop - 1 && y < nextSnapTop) {
          const progress = (y - snapTop) / height
          if (progress >= SNAP_DOWN && i + 1 < snapCache.length) {
            setSnapping(true)
            lenis.scrollTo(snapCache[i + 1].snapTop, {
              duration: 1.0,
              easing: (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
              onComplete: () => setSnapping(false),
            })
          }
          break
        }
      }
    })

    let rafId
    const raf = (time) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      clearTimeout(initTimer)
      clearTimeout(snapTimeout)
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', buildCache)
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <div className="snap-container" ref={containerRef}>
        <div>
          <main>{children}</main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Layout
