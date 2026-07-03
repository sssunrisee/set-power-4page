import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const services = [
  {
    id: 'smart-grids',
    num: '01',
    title: 'Smart Grids и цифровая энергетика',
    short: 'SCADA · EMS · DMS · OMS',
    desc: 'Проектирование и внедрение интеллектуальных энергосистем: автоматизация диспетчерского управления, цифровые подстанции.',
    tags: ['SCADA', 'EMS', 'DMS', 'OMS', 'Цифровые подстанции', 'Smart Metering'],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=900&h=560&fit=crop&auto=format',
    color: '#0056B3',
  },
  {
    id: 'smart-wells',
    num: '02',
    title: 'Smart Wells и нефтегазовые технологии',
    short: 'Интеллектуальный мониторинг скважин',
    desc: 'Технологии повышения дебита скважин, низкочастотное вибровоздействие на пласт, интеллектуальный мониторинг.',
    tags: ['Повышение дебита', 'Вибровоздействие', 'Телеметрия', 'Мониторинг'],
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=900&h=560&fit=crop&auto=format',
    color: '#00A9E0',
  },
  {
    id: 'academy',
    num: '03',
    title: 'SET Academy',
    short: 'Digital Energy Academy',
    desc: 'Корпоративное обучение и сертификация специалистов в области цифровой энергетики.',
    tags: ['Корпоративные курсы', 'Сертификация SET', 'Digital Energy'],
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&h=560&fit=crop&auto=format',
    color: '#0056B3',
  },
  {
    id: 'consulting',
    num: '04',
    title: 'Инженерный консалтинг',
    short: 'Аудит · ТЭО · Дорожные карты',
    desc: 'Технический аудит энергосистем, разработка технико-экономических обоснований.',
    tags: ['Технический аудит', 'ТЭО', 'Дорожная карта', 'Экспертиза'],
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&h=560&fit=crop&auto=format',
    color: '#00A9E0',
  },
  {
    id: 'rnd',
    num: '05',
    title: 'R&D и инновационные проекты',
    short: 'Исследования · Пилоты · Внедрение',
    desc: 'Разработка новых технологий, пилотные проекты внедрения.',
    tags: ['R&D', 'Пилотные проекты', 'ИИ', 'Digital Twin'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=560&fit=crop&auto=format',
    color: '#0056B3',
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const s = services[active]

  return (
    <section className="bg-white py-20 lg:py-28">
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
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Направления деятельности</span>
          </div>
          <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight">
            Что мы делаем
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-[300px_1fr] border border-[#DDE3ED]"
        >
          <div className="border-r border-[#DDE3ED]">
            {services.map((sv, i) => (
              <button
                key={sv.id}
                onClick={() => setActive(i)}
                className={`w-full text-left px-6 py-5 border-b border-[#DDE3ED] last:border-b-0 transition-all duration-200 group relative ${
                  active === i ? 'bg-[#F5F7FA]' : 'bg-white hover:bg-[#F5F7FA]'
                }`}
              >
                {active === i && (
                  <motion.div
                    layoutId="activeIndicator4"
                    className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#D4AF37]"
                  />
                )}
                <div className="flex items-center gap-4 pl-1">
                  <span
                    className={`font-condensed font-bold text-2xl transition-colors leading-none ${
                      active === i ? 'text-[#DDE3ED]' : 'text-[#EEF1F6] group-hover:text-[#DDE3ED]'
                    }`}
                  >
                    {sv.num}
                  </span>
                  <div>
                    <div
                      className={`font-condensed font-bold text-sm leading-snug transition-colors ${
                        active === i ? 'text-[#0056B3]' : 'text-[#0B1D3A] group-hover:text-[#0056B3]'
                      }`}
                    >
                      {sv.title}
                    </div>
                    <div className="text-[#5A7090] text-[11px] mt-0.5">{sv.short}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div>
            <div className="relative h-52 lg:h-64 bg-[#F5F7FA] overflow-hidden">
              <motion.img
                key={s.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                transition={{ duration: 0.5 }}
                src={s.img}
                alt={s.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/20 to-transparent" />
              <div className="absolute top-5 left-8">
                <span
                  className="font-condensed text-[11px] tracking-[0.2em] uppercase font-bold px-3 py-1.5"
                  style={{ color: s.color, background: `${s.color}18`, border: `1px solid ${s.color}40` }}
                >
                  {s.num} / {services.length}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-10">
              <motion.h3
                key={s.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                className="font-condensed font-bold text-2xl text-[#0B1D3A] mb-4"
              >
                {s.title}
              </motion.h3>
              <motion.p
                key={`desc-${s.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="text-[#5A7090] leading-relaxed mb-8 text-[15px]"
              >
                {s.desc}
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-3 py-1.5 bg-[#F5F7FA] border border-[#DDE3ED] text-[#2A4A7A] font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-[#0056B3] font-condensed font-bold text-[13px] tracking-[0.1em] uppercase hover:gap-5 transition-all duration-200 group"
              >
                Запросить консультацию
                <svg width="20" height="8" viewBox="0 0 20 8" fill="none" className="group-hover:translate-x-2 transition-transform">
                  <path d="M0 4h18M15 1l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
