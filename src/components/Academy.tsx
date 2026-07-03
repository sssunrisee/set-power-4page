import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const courses = [
  { code: 'SG-101', title: 'Smart Grids: основы и архитектура', duration: '24 ч', level: 'Базовый', color: '#5A9C6E' },
  { code: 'SC-201', title: 'SCADA / EMS / DMS: проектирование систем', duration: '40 ч', level: 'Продвинутый', color: '#D4AF37' },
  { code: 'DS-301', title: 'Цифровые подстанции и IEC 61850', duration: '32 ч', level: 'Продвинутый', color: '#D4AF37' },
  { code: 'AU-202', title: 'Автоматизация электросетей', duration: '28 ч', level: 'Средний', color: '#0056B3' },
  { code: 'AI-401', title: 'Искусственный интеллект в энергетике', duration: '36 ч', level: 'Экспертный', color: '#C0392B' },
  { code: 'OG-102', title: 'Нефтегазовые технологии и Smart Wells', duration: '30 ч', level: 'Средний', color: '#0056B3' },
]

export default function Academy() {
  return (
    <section className="bg-[#0B1D3A] py-20 lg:py-28">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">SET Academy</span>
            </div>
            <h2 className="font-condensed font-bold text-[clamp(2.2rem,4.5vw,3.8rem)] text-white leading-tight tracking-tight mb-6">
              Digital Energy Academy
            </h2>
            <p className="text-[#A0B8D8] leading-relaxed mb-8 font-light text-[15px]">
              Корпоративная академия нового поколения. Подготовка и сертификация специалистов
              в области цифровой энергетики.
            </p>

            <div className="grid grid-cols-2 gap-px bg-[#1A3058] mb-8">
              {[
                { num: '6', label: 'Курсов в каталоге' },
                { num: '190+', label: 'Учебных часов' },
                { num: '4', label: 'Уровня сложности' },
                { num: '100%', label: 'Практических кейсов' },
              ].map((s) => (
                <div key={s.label} className="bg-[#0D2144] p-6">
                  <div className="font-condensed font-bold text-[2.5rem] leading-none text-[#D4AF37]">{s.num}</div>
                  <div className="text-[#6888A8] text-[11px] font-medium mt-1 uppercase tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#D4AF37] text-[#0B1D3A] font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#E8C84A] transition-colors duration-200"
            >
              Записаться на курс
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="font-condensed text-[11px] tracking-[0.2em] uppercase text-[#6888A8] mb-4 font-semibold">
              Каталог курсов
            </div>
            <div className="divide-y divide-[#1A3058] border border-[#1A3058]">
              {courses.map((c, i) => (
                <motion.div
                  key={c.code}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-5 px-6 py-4 bg-[#0D2144] hover:bg-[#122352] transition-colors group cursor-pointer"
                >
                  <span className="font-condensed font-bold text-2xl text-[#1A3058] w-6 text-center flex-shrink-0 group-hover:text-[#2A4058] transition-colors">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-condensed font-bold text-sm text-white group-hover:text-[#00A9E0] transition-colors leading-snug">
                      {c.title}
                    </div>
                    <div
                      className="font-condensed text-[10px] tracking-[0.15em] uppercase font-semibold mt-0.5"
                      style={{ color: c.color }}
                    >
                      {c.level}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[#A0B8D8] text-sm font-medium">{c.duration}</div>
                    <div className="font-condensed text-[9px] tracking-[0.15em] uppercase text-[#6888A8]">{c.code}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 text-[#1A3058] group-hover:text-[#00A9E0] transition-colors">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
