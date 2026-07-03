import { motion } from 'framer-motion'

const docs = [
  {
    code: 'DOC-01',
    title: 'Корпоративная презентация SET',
    type: 'PDF',
    pages: '28 стр.',
    desc: 'Полная презентация компании: миссия, направления, команда, проекты и видение до 2035 года.',
    file: '/presentations/SET-Corporate-Presentation.html',
    highlight: true,
  },
  {
    code: 'DOC-02',
    title: 'Коммерческое предложение',
    type: 'PDF',
    pages: '12 стр.',
    desc: 'Стандартное коммерческое предложение по направлениям Smart Grids и Smart Wells.',
    file: '/presentations/SET-Commercial-Offer.html',
    highlight: false,
  },
  {
    code: 'DOC-03',
    title: 'Письмо для партнёров',
    type: 'PDF',
    pages: '4 стр.',
    desc: 'Официальное письмо с описанием форматов сотрудничества и контактами.',
    file: '/presentations/SET-Partner-Letter.html',
    highlight: false,
  },
  {
    code: 'DOC-04',
    title: 'Roadmap проектов SET 2025–2030',
    type: 'PDF',
    pages: '8 стр.',
    desc: 'Стратегическая дорожная карта ключевых проектов компании на горизонт 5 лет.',
    file: '/presentations/SET-Roadmap-2025-2030.html',
    highlight: false,
  },
]

export default function Documents() {
  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28 border-y border-[#DDE3ED]">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Документы</span>
          </div>
          <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight">
            Материалы и презентации
          </h2>
        </motion.div>

        <div className="space-y-3">
          {docs.map((d, i) => (
            <motion.a
              key={d.code}
              href={d.file}
              download
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group flex items-center gap-6 p-6 border transition-all duration-200 ${
                d.highlight
                  ? 'bg-[#0B1D3A] border-[#0B1D3A] hover:bg-[#0D2144]'
                  : 'bg-white border-[#DDE3ED] hover:border-[#0056B3]/40 hover:shadow-[0_2px_16px_rgba(0,86,179,0.07)]'
              }`}
            >
              <div className={`w-12 h-14 flex-shrink-0 border flex flex-col items-center justify-end pb-1.5 ${
                d.highlight ? 'border-[#D4AF37]/40' : 'border-[#DDE3ED] group-hover:border-[#0056B3]/40'
              }`}>
                <div className={`font-condensed text-[9px] tracking-widest uppercase font-bold ${d.highlight ? 'text-[#D4AF37]' : 'text-[#0056B3]'}`}>
                  {d.type}
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h3 className={`font-condensed font-bold text-base leading-snug transition-colors ${
                  d.highlight ? 'text-white group-hover:text-[#D4AF37]' : 'text-[#0B1D3A] group-hover:text-[#0056B3]'
                }`}>
                  {d.title}
                </h3>
                <p className={`text-sm mt-1 leading-relaxed ${d.highlight ? 'text-[#7A9CC0]' : 'text-[#5A7090]'}`}>
                  {d.desc}
                </p>
              </div>

              <div className="flex items-center gap-6 flex-shrink-0">
                <div className="text-right hidden sm:block">
                  <div className={`text-[11px] font-medium ${d.highlight ? 'text-[#A0B8D8]' : 'text-[#5A7090]'}`}>{d.pages}</div>
                  <div className={`font-condensed text-[9px] tracking-widest uppercase ${d.highlight ? 'text-[#6888A8]' : 'text-[#AABBCC]'}`}>{d.code}</div>
                </div>
                <div className={`w-10 h-10 border flex items-center justify-center flex-shrink-0 transition-all ${
                  d.highlight
                    ? 'border-[#D4AF37]/40 group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37]'
                    : 'border-[#DDE3ED] group-hover:border-[#0056B3] group-hover:bg-[#0056B3]'
                }`}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className={`transition-colors ${d.highlight ? 'text-[#D4AF37] group-hover:text-[#0B1D3A]' : 'text-[#5A7090] group-hover:text-white'}`}>
                    <path d="M7 1v8M4 6l3 3 3-3M1 13h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 p-8 bg-white border border-[#DDE3ED] text-center">
          <h3 className="font-condensed font-bold text-xl text-[#0B1D3A] mb-3">Нужны дополнительные материалы?</h3>
          <p className="text-[#5A7090] text-sm mb-6">Свяжитесь с нами — отправим любую документацию в течение рабочего дня</p>
          <a href="mailto:info@setpower.az" className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0056B3] text-white font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#0068D6] transition-colors duration-200">
            info@setpower.az
          </a>
        </div>
      </div>
    </section>
  )
}
