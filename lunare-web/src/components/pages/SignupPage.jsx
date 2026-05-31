import { useState } from 'react'
import smallLogo from '../../assets/images/main/small_logo.webp'
import heroRight from '../../assets/images/main/hero_right.webp'

function SignupPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center">

      {/* 배경 이미지 */}
      <img
        src={heroRight}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* 로고 — 좌상단 */}
      <div className="absolute top-9 left-10 z-10">
        <a href="#" onClick={() => { window.location.hash = ''; window.scrollTo(0, 0) }}>
          <img src={smallLogo} alt="LUNARÉ" className="h-[13px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
      </div>

      {/* 박스 */}
      <div className="relative z-10 w-full max-w-[620px] mx-6 bg-white/90 backdrop-blur-md px-16 py-16">

        <div className="mb-8">
          <h1 className="font-didot text-[24px] font-normal text-[#2a2630] leading-tight tracking-wide">
            Create account
          </h1>
          <p className="font-pretendard text-[11px] font-light text-[#b0a8ba] mt-1.5 tracking-[0.03em]">
            루나레와 함께하는 첫 번째 단계
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[9px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름"
              required
              className="font-pretendard text-[12px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[9px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="이메일 주소"
              required
              className="font-pretendard text-[12px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[9px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="8자 이상"
              required
              className="font-pretendard text-[12px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[9px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Confirm Password
            </label>
            <input
              type="password"
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChange={handleChange}
              placeholder="비밀번호 확인"
              required
              className="font-pretendard text-[12px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <label className="flex items-start gap-3 mt-1 cursor-pointer">
            <div className="relative mt-0.5 flex-shrink-0">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="sr-only"
                required
              />
              <div className={`w-3.5 h-3.5 border transition-colors duration-200 ${form.agree ? 'bg-[#2a2630] border-[#2a2630]' : 'bg-transparent border-[#cdc6d6]'}`}>
                {form.agree && (
                  <svg viewBox="0 0 12 10" fill="none" className="w-full h-full p-[2px]">
                    <path d="M1 5l3.5 3.5L11 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )}
              </div>
            </div>
            <span className="font-pretendard text-[11px] font-light text-[#8a8095] leading-[1.6]">
              <button type="button" className="underline underline-offset-[3px] hover:text-[#2a2630] transition-colors">이용약관</button> 및{' '}
              <button type="button" className="underline underline-offset-[3px] hover:text-[#2a2630] transition-colors">개인정보 처리방침</button>에 동의합니다
            </span>
          </label>

          <button
            type="submit"
            className="mt-2 bg-[#2a2630] text-white font-pretendard text-[10px] font-light tracking-[0.15em] uppercase py-3.5 hover:bg-[#3d3649] transition-colors duration-300"
          >
            회원가입
          </button>
        </form>

        <div className="mt-7 pt-6 border-t border-[#ece8f2]">
          <p className="font-pretendard text-[11px] font-light text-[#b0a8ba] text-center">
            이미 계정이 있으신가요?{' '}
            <a
              href="#/login"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#6b6472] hover:text-[#2a2630] transition-colors underline underline-offset-[3px]"
            >
              로그인
            </a>
          </p>
        </div>

      </div>

      {/* 하단 카피라이트 */}
      <div className="absolute bottom-7 left-10 z-10">
        <p className="font-pretendard text-[10px] font-light text-white/35">
          © 2025 LUNARÉ. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default SignupPage
