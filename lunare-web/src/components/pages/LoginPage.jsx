import { useState } from 'react'
import smallLogo from '../../assets/images/main/small_logo.webp'
import heroLeft from '../../assets/images/main/hero_left.webp'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="min-h-screen relative flex items-center justify-center">

      {/* 배경 이미지 */}
      <img
        src={heroLeft}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />

      {/* 로고 — 좌상단 */}
      <div className="absolute top-9 left-10 z-10">
        <a href="#" onClick={() => { window.location.hash = ''; window.scrollTo(0, 0) }}>
          <img src={smallLogo} alt="LUNARÉ" className="h-[26px] object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
        </a>
      </div>

      {/* 박스 */}
      <div className="relative z-10 w-full max-w-[700px] mx-6 bg-white/90 backdrop-blur-md px-20 py-16">

        <button
          type="button"
          onClick={() => { window.location.hash = ''; window.scrollTo(0, 0) }}
          className="flex items-center gap-1.5 font-pretendard text-[13px] font-light text-[#b0a8ba] hover:text-[#2a2630] transition-colors duration-300 mb-10 -ml-0.5"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 2L4 7L9 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          뒤로
        </button>

        <div className="mb-8">
          <h1 className="font-didot text-[30px] font-normal text-[#2a2630] leading-tight tracking-wide">
            Welcome back
          </h1>
          <p className="font-pretendard text-[13px] font-light text-[#b0a8ba] mt-1.5 tracking-[0.03em]">
            루나레 계정으로 로그인하세요
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="이메일 주소"
              required
              className="font-pretendard text-[14px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="font-pretendard text-[11px] font-medium uppercase tracking-[0.12em] text-[#8a8095]">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="비밀번호"
              required
              className="font-pretendard text-[14px] font-light text-[#2a2630] placeholder-[#cdc6d6] bg-transparent border-b border-[#ddd7e6] px-0 py-2.5 outline-none focus:border-[#6b6472] transition-colors duration-300"
            />
          </div>

          <div className="flex justify-end mt-0.5">
            <button
              type="button"
              className="font-pretendard text-[12px] font-light text-[#b0a8ba] hover:text-[#6b6472] transition-colors"
            >
              비밀번호를 잊으셨나요?
            </button>
          </div>

          <button
            type="submit"
            className="mt-2 bg-[#2a2630] text-white font-pretendard text-[12px] font-light tracking-[0.15em] uppercase py-3.5 hover:bg-[#3d3649] transition-colors duration-300"
          >
            로그인
          </button>
        </form>

        <div className="mt-7 pt-6 border-t border-[#ece8f2]">
          <p className="font-pretendard text-[13px] font-light text-[#b0a8ba] text-center">
            아직 계정이 없으신가요?{' '}
            <a
              href="#/signup"
              onClick={() => window.scrollTo(0, 0)}
              className="text-[#6b6472] hover:text-[#2a2630] transition-colors underline underline-offset-[3px]"
            >
              회원가입
            </a>
          </p>
        </div>

      </div>

      {/* 하단 카피라이트 */}
      <div className="absolute bottom-7 left-10 z-10">
        <p className="font-pretendard text-[12px] font-light text-white/35">
          © 2025 LUNARÉ. All rights reserved.
        </p>
      </div>

    </div>
  )
}

export default LoginPage
