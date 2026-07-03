import { motion } from 'framer-motion'

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 2L26 8v12L14 26 2 20V8L14 2z" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M14 8v8M10 12h8" stroke="#0056B3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Инженерная точность',
    desc: 'Каждое решение основано на стандартах, расчётах и глубокой технической экспертизе.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="11" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M14 8v6l4 2" stroke="#0056B3" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: 'Цифровое мышление',
    desc: 'Проектируем системы будущего: от SCADA до ИИ-аналитики и предиктивного обслуживания.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 24V10l10-8 10 8v14H4z" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M10 24v-8h8v8" stroke="#0056B3" strokeWidth="1.5" />
      </svg>
    ),
    title: 'Результат для клиента',
    desc: 'Наш KPI — реальный экономический эффект и операционная эффективность заказчика.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="14" r="6" stroke="#0056B3" strokeWidth="1.5" />
        <circle cx="20" cy="14" r="6" stroke="#0056B3" strokeWidth="1.5" />
        <path d="M14 10v8" stroke="#0056B3" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
    title: 'Открытое партнёрство',
    desc: 'Работаем по модели разделения результата — наш успех зависит от успеха клиента.',
  },
]

export default function About() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="bg-[#0B1D3A] py-20 lg:py-28">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#D4AF37]" />
                <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">О компании</span>
              </div>
              <h2 className="font-condensed font-bold text-[clamp(2.2rem,4.5vw,3.8rem)] text-white leading-tight tracking-tight mb-6">
                Инженерная компания с фокусом на результат
              </h2>
              <p className="text-[#A0B8D8] leading-relaxed text-base font-light">
                SET — это команда инженеров и разработчиков из Баку. Мы проектируем и внедряем
                системы автоматизации для энергетики и нефтегаза.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="border-l-2 border-[#D4AF37] pl-6">
                <div className="font-condensed text-[11px] tracking-[0.2em] uppercase text-[#D4AF37] mb-2 font-semibold">Миссия</div>
                <p className="text-white font-display font-medium text-lg leading-snug">
                  Ускорить цифровую трансформацию стратегических отраслей.
                </p>
              </div>
              <div className="border-l-2 border-[#0056B3] pl-6 mt-6">
                <div className="font-condensed text-[11px] tracking-[0.2em] uppercase text-[#00A9E0] mb-2 font-semibold">Видение 2030–2035</div>
                <p className="text-[#A0B8D8] leading-relaxed">
                  Стать ведущим инженерно-технологическим партнёром для энергетического сектора СНГ.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-20 lg:py-28 bg-white">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-[#0056B3]" />
              <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Ценности</span>
            </div>
            <h3 className="font-condensed font-bold text-[clamp(1.8rem,3.5vw,2.8rem)] text-[#0B1D3A] tracking-tight">
              Принципы нашей работы
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-[#F5F7FA] p-8 group hover:shadow-[0_4px_24px_rgba(0,86,179,0.1)] hover:bg-white transition-all duration-300 cursor-default border border-transparent hover:border-[#DDE3ED]"
              >
                <div className="mb-5">{v.icon}</div>
                <h4 className="font-condensed font-bold text-[#0B1D3A] text-lg mb-3 group-hover:text-[#0056B3] transition-colors">
                  {v.title}
                </h4>
                <p className="text-[#5A7090] text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
