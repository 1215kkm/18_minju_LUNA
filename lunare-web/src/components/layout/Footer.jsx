import { FOOTER_LINKS } from '../../constants'
import smallLogo from '../../assets/images/main/small_logo.png'

function Footer() {
  return (
    <footer className="bg-[#111] text-white/55 px-12 md:px-20 lg:px-28 xl:px-40 pt-20 pb-10">
      <div className="flex flex-col md:flex-row gap-16 md:gap-0 justify-between mb-16">
        {/* 브랜드 */}
        <div className="flex-shrink-0">
          <img src={smallLogo} alt="LUNARÉ" className="h-[13px] object-contain mb-7 opacity-70" />
          <p className="font-pretendard text-[12px] leading-[2] font-light max-w-[200px]">
            Light in its softest form.<br />
            Beauty distilled to its essence.
          </p>
        </div>

        {/* 링크 컬럼 */}
        <div className="flex gap-16 md:gap-24">
          {Object.entries(FOOTER_LINKS).map(([col, links]) => (
            <div key={col}>
              <p className="font-pretendard text-[10px] tracking-[0.25em] text-white/25 uppercase mb-6 font-light">{col}</p>
              <ul className="flex flex-col gap-3.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-pretendard text-[12px] font-light hover:text-white/80 transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* 하단 */}
      <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-pretendard text-[11px] font-light">© 2025 LUNARÉ. All rights reserved.</p>
        <div className="flex gap-7">
          {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((t) => (
            <a key={t} href="#" className="font-pretendard text-[11px] font-light hover:text-white/75 transition-colors duration-300">
              {t}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
