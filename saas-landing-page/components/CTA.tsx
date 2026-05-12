export default function CTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-[#6366f1]">
      {/* Dot pattern overlay */}
      <div 
        className="absolute inset-0 opacity-20" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      <div className="container relative z-10 mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          이미 10,000+ 명의 작가들이 사용하고 있습니다
        </h2>
        <p className="text-indigo-100 text-lg mb-10 max-w-2xl mx-auto">
          지금 바로 가입하고 첫 번째 AI 글쓰기를 경험해보세요.
        </p>
        <button className="px-8 py-3.5 bg-white text-[#6366f1] rounded-full font-bold hover:bg-zinc-50 transition-colors shadow-xl shadow-indigo-900/20">
          무료로 시작하기
        </button>
      </div>
    </section>
  );
}
