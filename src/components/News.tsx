import { motion } from 'framer-motion'

const articles = [
  {
    date: '18 июня 2025',
    category: 'Smart Grids',
    catColor: '#0056B3',
    title: 'Smart Grids в Азербайджане: от концепции к реализации',
    excerpt: 'Анализ текущего состояния энергосети АР и перспективы внедрения интеллектуальных технологий.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=450&fit=crop&auto=format',
    readTime: '8 мин',
    featured: true,
  },
  {
    date: '05 июня 2025',
    category: 'Нефтегаз',
    catColor: '#7A5C28',
    title: 'Умные скважины: как технологии меняют нефтедобычу',
    excerpt: 'Обзор технологий интеллектуального мониторинга и методов увеличения дебита.',
    img: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=500&h=320&fit=crop&auto=format',
    readTime: '6 мин',
    featured: false,
  },
  {
    date: '28 мая 2025',
    category: 'ИИ в энергетике',
    catColor: '#5A3E9C',
    title: 'ИИ в управлении энергосистемами: практика 2025',
    excerpt: 'Где машинное обучение уже работает в энергетике.',
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&h=320&fit=crop&auto=format',
    readTime: '10 мин',
    featured: false,
  },
  {
    date: '14 мая 2025',
    category: 'SET Academy',
    catColor: '#2A7A3A',
    title: 'Запуск SET Academy: первые курсы и форматы обучения',
    excerpt: 'SET открывает корпоративную академию с авторскими курсами.',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=320&fit=crop&auto=format',
    readTime: '5 мин',
    featured: false,
  },
]

export default function News() {
  const featured = articles[0]
  const rest = articles.slice(1)

  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#DDE3ED]">
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
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Новости / Блог</span>
          </div>
          <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight">
            Актуальные материалы
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group cursor-pointer border border-[#DDE3ED] overflow-hidden hover:shadow-[0_4px_32px_rgba(0,86,179,0.09)] hover:border-[#0056B3]/30 transition-all duration-300"
          >
            <div className="relative h-64 overflow-hidden bg-[#EEF1F6]">
              <img
                src={featured.img}
                alt={featured.title}
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D3A]/60 to-transparent" />
              <div className="absolute top-5 left-5">
                <span
                  className="font-condensed text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1.5 text-white"
                  style={{ background: featured.catColor }}
                >
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="p-7">
              <div className="flex items-center gap-3 mb-3 text-[11px] text-[#5A7090]">
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} чтения</span>
              </div>
              <h3 className="font-condensed font-bold text-xl text-[#0B1D3A] mb-3 leading-tight group-hover:text-[#0056B3] transition-colors">
                {featured.title}
              </h3>
              <p className="text-[#5A7090] text-sm leading-relaxed">{featured.excerpt}</p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-5">
            {rest.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group flex gap-5 border border-[#DDE3ED] p-4 cursor-pointer hover:border-[#0056B3]/30 hover:shadow-[0_2px_16px_rgba(0,86,179,0.07)] transition-all duration-200"
              >
                <div className="w-24 h-20 flex-shrink-0 overflow-hidden bg-[#EEF1F6]">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className="font-condensed text-[9px] tracking-[0.15em] uppercase font-bold px-2 py-0.5 text-white"
                      style={{ background: a.catColor }}
                    >
                      {a.category}
                    </span>
                    <span className="text-[10px] text-[#5A7090]">{a.readTime}</span>
                  </div>
                  <h4 className="font-condensed font-bold text-sm text-[#0B1D3A] leading-snug group-hover:text-[#0056B3] transition-colors line-clamp-2">
                    {a.title}
                  </h4>
                  <div className="text-[10px] text-[#5A7090] mt-1.5">{a.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
