export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-zinc-50 pt-[120px] pb-[100px] flex items-center justify-center min-h-[600px]">
      {/* Background Gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#e0e7ff]/60 via-[#f3e8ff]/40 to-zinc-50"></div>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d8b4fe]/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-6">
          AI와 함께 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] to-[#9333ea]">더 빠르게 더 잘 쓰세요</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          아이디어를 몇 초 만에 완성된 콘텐츠로 바꿔보세요. 현대적인 전문가와 크리에이터를 위한 마법 같은 AI 글쓰기 환경.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="w-full sm:w-auto px-8 py-3.5 bg-[#4f46e5] text-white rounded-full font-medium hover:bg-[#4338ca] transition-colors shadow-lg shadow-indigo-200">
            무료 체험 시작
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 bg-white text-zinc-700 border border-zinc-200 rounded-full font-medium hover:bg-zinc-50 transition-colors shadow-sm">
            데모 보기
          </button>
        </div>
      </div>
    </section>
  );
}
