"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "WriteFlow는 한국어에 최적화되어 있나요?",
      answer: "네, WriteFlow는 한국어 자연어 처리 모델을 기반으로 학습되어 매우 자연스럽고 정확한 한국어 문장 생성이 가능합니다. 한국어 특유의 뉘앙스와 어조까지 섬세하게 반영합니다."
    },
    {
      question: "생성된 콘텐츠의 저작권은 누구에게 있나요?",
      answer: "WriteFlow를 통해 생성된 모든 콘텐츠의 저작권은 전적으로 사용자 본인에게 있습니다. 상업적 용도를 포함하여 자유롭게 사용하실 수 있습니다."
    },
    {
      question: "무료 체험 기간이 있나요?",
      answer: "네, 처음 가입하시면 7일 동안 Pro 요금제의 모든 기능을 무료로 체험해 보실 수 있습니다. 체험 기간이 끝나기 전에는 결제되지 않습니다."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-zinc-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">자주 묻는 질문</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-zinc-200 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
              >
                <span className="font-medium text-zinc-900">{faq.question}</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="20" 
                  height="20" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className={`text-zinc-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </button>
              
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-zinc-600 leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
