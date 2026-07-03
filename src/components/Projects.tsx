import { motion } from 'framer-motion'

const projects = [
  {
    code: 'PRJ-01',
    title: 'SET for AzərEnerji',
    status: 'Стратегический',
    statusColor: '#0056B3',
    category: 'Smart Grids',
    desc: 'Разработка и внедрение системы EMS/DMS для оптимизации управления национальной энергосистемой Азербайджана.',
    tags: ['EMS', 'DMS', 'SCADA'],
    year: '2025–2027',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&h=440&fit=crop&auto=format',
  },
  {
    code: 'PRJ-02',
    title: 'SET for SOCAR',
    status: 'Планируемый',
    statusColor: '#00A9E0',
    category: 'Smart Wells',
    desc: 'Внедрение технологий интеллектуального мониторинга и управления скважинами на месторождениях SOCAR.',
    tags: ['Smart Wells', 'Телеметрия', 'Нефтегаз'],
    year: '2025–2026',
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=700&h=440&fit=crop&auto=format',
  },
  {
    code: 'PRJ-03',
    title: 'Digital Energy Competence Center',
    status: 'Инициирован',
    statusColor: '#D4AF37',
    category: 'Инфраструктура',
    desc: 'Создание национального центра компетенций в области цифровой энергетики.',
    tags: ['R&D', 'Образование', 'Инновации'],
    year: '2025–2030',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=440&fit=crop&auto=format',
  },
]

export default function Projects() {
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
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Проекты</span>
          </div>
          <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight">
            Стратегические проекты
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.code}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-[#DDE3ED] overflow-hidden hover:shadow-[0_4px_24px_rgba(0,86,179,0.08)] hover:border-[#0056B3]/30 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden bg-[#EEF1F6]">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="font-condensed text-[9px] tracking-widest uppercase text-[#5A7090]">{p.code}</span>
                  <span
                    className="font-condensed text-[9px] tracking-widest uppercase font-bold px-2 py-0.5"
                    style={{ color: p.statusColor, background: `${p.statusColor}14`, border: `1px solid ${p.statusColor}40` }}
                  >
                    {p.status}
                  </span>
                </div>
                <h3 className="font-condensed font-bold text-lg text-[#0B1D3A] mb-2 leading-snug group-hover:text-[#0056B3] transition-colors">
                  {p.title}
                </h3>
                <p className="text-[#5A7090] text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-[10px] px-2 py-1 bg-[#F5F7FA] border border-[#DDE3ED] text-[#2A4A7A] font-medium">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="font-condensed font-bold text-[#D4AF37] text-sm">{p.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
