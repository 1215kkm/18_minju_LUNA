import { useState, useEffect, useCallback } from 'react'

export function useAutoSlide(total, interval = 4000) {
  const [current, setCurrent] = useState(0)
  const [key, setKey] = useState(0)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total)
    setKey((k) => k + 1)
  }, [total])

  useEffect(() => {
    const timer = setInterval(next, interval)
    return () => clearInterval(timer)
  }, [next, interval])

  return { current, key, setCurrent }
}
