import Header from '../layout/Header'
import Footer from '../layout/Footer'
import brandBg from '../../assets/images/brand/brand_bg.webp'

const socials = [
  { label: 'Instagram', href: 'https://instagram.com/' },
  { label: 'KakaoChannel', href: 'https://pf.kakao.com/' },
]

function ContactPage() {
  return (
    <div className="min-h-screen bg-[#6e6a85] text-[#161319]">
      <Header tone="dark" rightTone="light" logoTone="light" />

      <main>
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#c6c0d0] px-6 pt-[var(--header-h)] sm:px-14 md:px-20">
          <img
            src={brandBg}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-40 brightness-[1.08] contrast-[1.08] saturate-[1.04]"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#c6c0d0]/55" aria-hidden="true" />

          <article className="relative z-10 flex w-full max-w-[560px] flex-col items-center text-center">
            <p className="mb-5 font-pretendard text-[9px] font-light uppercase tracking-[0.32em] text-[#4a4460]/70">
              Contact
            </p>
            <h1 className="font-didot text-[34px] font-normal leading-[1.1] text-[#17141a] sm:text-[48px] lg:text-[56px]">
              We'd love to hear from you.
            </h1>

            <p className="mt-7 max-w-[440px] font-pretendard text-[14px] font-light leading-[1.95] text-[#3a3640] sm:text-[14.5px]">
              제품, 협업, 미디어 문의 모두 환영합니다. 아래 이메일로 편하게 연락주세요.
            </p>

            <a
              href="mailto:hello@lunare.kr"
              className="mt-10 inline-flex items-center font-didot text-[22px] font-normal leading-none text-[#17141a] transition-opacity hover:opacity-65 sm:text-[26px]"
            >
              hello@lunare.kr
            </a>

            <div className="mt-12 flex items-center gap-1 border-t border-[#a09ab0]/40 pt-6">
              <p className="mr-5 font-pretendard text-[10px] font-light uppercase tracking-[0.28em] text-[#7a7388]">
                Follow
              </p>
              {socials.map((s, idx) => (
                <span key={s.label} className="flex items-center">
                  {idx > 0 && (
                    <span className="mx-3 inline-block h-[10px] w-px bg-[#a09ab0]/60" aria-hidden="true" />
                  )}
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="font-pretendard text-[12.5px] font-light tracking-[0.06em] text-[#3a3640] transition-opacity hover:opacity-60"
                  >
                    {s.label}
                  </a>
                </span>
              ))}
            </div>
          </article>
        </section>
      </main>

      <Footer compact />
    </div>
  )
}

export default ContactPage
