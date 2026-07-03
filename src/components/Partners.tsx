import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const formats = [
  {
    num: '01',
    title: 'Пилотный проект',
    desc: 'Начинаем с ограниченного пилота — тестируем технологию на реальном объекте.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V14l8-6 8 6v10H8z" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M13 24v-6h6v6" stroke="#0056B3" strokeWidth="1.5" />
        <circle cx="24" cy="8" r="3" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Договор на разработку',
    desc: 'Технический договор на проектирование и внедрение. Чёткие KPI, фиксированные этапы.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="4" width="20" height="24" rx="1" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M10 10h12M10 15h12M10 20h8" stroke="#0056B3" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 21l2 2 4-4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Модель разделения результата',
    desc: 'Работаем за долю от экономического эффекта — наши интересы совпадают с интересами партнёра.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="11" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M16 8v2M16 22v2M8 16h2M22 16h2" stroke="#0056B3" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 13h6v6h-6z" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Стратегическое партнёрство',
    desc: 'Долгосрочный технологический альянс с совместными R&D и обучением персонала.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 20c0-5.5 4-10 10-10s10 4.5 10 10" stroke="#0056B3" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="10" cy="22" r="3" stroke="#0056B3" strokeWidth="1.5" />
        <circle cx="22" cy="22" r="3" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
  },
]

export default function Partners() {
  return (
    <section className="bg-white py-20 lg:py-28 border-t border-[#DDE3ED]">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Партнёрам</span>
            </div>
            <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight mb-6">
              Как мы работаем с партнёрами
            </h2>
            <p className="text-[#5A7090] leading-relaxed mb-8 text-[15px]">
              SET предлагает гибкие форматы сотрудничества — от коротких пилотов до
              долгосрочных стратегических альянсов.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#0056B3] text-white font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#0068D6] transition-colors duration-200"
            >
              Обсудить партнёрство
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {formats.map((f, i) => (
              <motion.div
                key={f.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#F5F7FA] border border-[#DDE3ED] p-6 group hover:bg-white hover:shadow-[0_4px_24px_rgba(0,86,179,0.08)] hover:border-[#0056B3]/30 transition-all duration-300"
              >
                <div className="mb-4">{f.icon}</div>
                <div className="font-condensed font-bold text-[11px] tracking-[0.2em] text-[#DDE3ED] mb-1">{f.num}</div>
                <h3 className="font-condensed font-bold text-[#0B1D3A] text-base mb-3 group-hover:text-[#0056B3] transition-colors">
                  {f.title}
                </h3>
                <p className="text-[#5A7090] text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
