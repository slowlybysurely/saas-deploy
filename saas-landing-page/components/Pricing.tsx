"use client";
import { useState } from "react";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const CheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#4f46e5] mr-3 shrink-0">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
      <polyline points="22 4 12 14.01 9 11.01"/>
    </svg>
  );

  return (
    <section id="pricing" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">합리적인 요금제</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto mb-10">
            당신의 필요에 딱 맞는 요금제를 선택하세요.
          </p>
          
          <div className="flex items-center justify-center">
            <div className="bg-white p-1 rounded-full border border-zinc-200 inline-flex shadow-sm">
              <button 
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${!isAnnual ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                월간
              </button>
              <button 
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors flex items-center gap-2 ${isAnnual ? 'bg-zinc-100 text-zinc-900' : 'text-zinc-500 hover:text-zinc-900'}`}
              >
                연간 <span className="text-xs bg-indigo-100 text-indigo-600 px-2 py-0.5 rounded-full">-20%</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic */}
          <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col mt-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Basic</h3>
            <p className="text-sm text-zinc-500 mb-6">가볍게 시작하는 개인 사용자</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-zinc-900">₩{isAnnual ? '7,900' : '9,900'}</span>
              <span className="text-zinc-500"> /월</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-700">
              <li className="flex items-center"><CheckIcon /> 월 50,000자 생성</li>
              <li className="flex items-center"><CheckIcon /> 기본 템플릿 제공</li>
              <li className="flex items-center"><CheckIcon /> 문법 검사기</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-zinc-300 text-zinc-900 font-medium hover:bg-zinc-50 transition-colors">
              시작하기
            </button>
          </div>

          {/* Pro */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#4f46e5] shadow-xl relative flex flex-col transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-[#4f46e5] text-white text-xs font-bold px-4 py-1.5 rounded-full">
                가장 인기
              </span>
            </div>
            <h3 className="text-xl font-bold text-[#4f46e5] mb-2">Pro</h3>
            <p className="text-sm text-zinc-500 mb-6">전문적인 콘텐츠 크리에이터</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-zinc-900">₩{isAnnual ? '19,900' : '24,900'}</span>
              <span className="text-zinc-500"> /월</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-700">
              <li className="flex items-center"><CheckIcon /> 무제한 글자 생성</li>
              <li className="flex items-center"><CheckIcon /> 모든 프리미엄 템플릿</li>
              <li className="flex items-center"><CheckIcon /> 고급 스타일 변환</li>
              <li className="flex items-center"><CheckIcon /> 우선 지원 서비스</li>
            </ul>
            <button className="w-full py-3 rounded-full bg-[#4f46e5] text-white font-medium hover:bg-[#4338ca] transition-colors shadow-lg shadow-indigo-200">
              Pro 시작하기
            </button>
          </div>

          {/* Team */}
          <div className="bg-white rounded-3xl p-8 border border-zinc-200 shadow-sm flex flex-col mt-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Team</h3>
            <p className="text-sm text-zinc-500 mb-6">협업이 필요한 비즈니스 팀</p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-zinc-900">₩{isAnnual ? '39,900' : '49,900'}</span>
              <span className="text-zinc-500"> /월/인</span>
            </div>
            <ul className="space-y-4 mb-8 flex-1 text-sm text-zinc-700">
              <li className="flex items-center"><CheckIcon /> Pro의 모든 기능</li>
              <li className="flex items-center"><CheckIcon /> 팀 워크스페이스 공유</li>
              <li className="flex items-center"><CheckIcon /> 브랜드 보이스 설정</li>
              <li className="flex items-center"><CheckIcon /> 관리자 대시보드</li>
            </ul>
            <button className="w-full py-3 rounded-full border border-zinc-300 text-zinc-900 font-medium hover:bg-zinc-50 transition-colors">
              문의하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
