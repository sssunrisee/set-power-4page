import { motion } from 'framer-motion'

const industries = [
  {
    num: '01',
    title: 'Электроэнергетика',
    items: ['Управление энергосистемами', 'Автоматизация подстанций', 'Smart Metering'],
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=500&h=300&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Нефтегаз',
    items: ['Интеллектуальные скважины', 'Мониторинг трубопроводов', 'Оптимизация добычи'],
    img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=500&h=300&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'Промышленность',
    items: ['Промышленный IoT', 'MES / SCADA интеграция', 'Предиктивное ТО'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop&auto=format',
  },
  {
    num: '04',
    title: 'Государственные структуры',
    items: ['Регуляторные системы', 'Мониторинг инфраструктуры', 'Национальные энергопланы'],
    img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&h=300&fit=crop&auto=format',
  },
  {
    num: '05',
    title: 'Университеты и учебные центры',
    items: ['Лабораторные решения', 'Учебные симуляторы', 'Партнёрские программы'],
    img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop&auto=format',
  },
  {
    num: '06',
    title: 'Строительный и коммерческий сектор',
    items: ['Умные здания (BMS)', 'Управление энергопотреблением', 'Интеграция ВИЭ'],
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop&auto=format',
  },
]

export default function Industries() {
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
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Отраслевая экспертиза</span>
          </div>
          <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight">
            Решения для отраслей
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-white border border-[#DDE3ED] overflow-hidden hover:shadow-[0_4px_24px_rgba(0,86,179,0.08)] hover:border-[#0056B3]/30 transition-all duration-300"
            >
              <div className="relative h-36 overflow-hidden bg-[#EEF1F6]">
                <img
                  src={ind.img}
                  alt={ind.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
                <span className="absolute top-3 left-4 font-condensed font-bold text-3xl text-[#0B1D3A]/10">
                  {ind.num}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-condensed font-bold text-[#0B1D3A] text-base mb-4 group-hover:text-[#0056B3] transition-colors">
                  {ind.title}
                </h3>
                <ul className="space-y-1.5">
                  {ind.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <div className="w-1 h-1 rounded-full bg-[#00A9E0] flex-shrink-0" />
                      <span className="text-[#5A7090] text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
