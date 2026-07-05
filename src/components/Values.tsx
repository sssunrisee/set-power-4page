import { motion } from 'framer-motion'

const values = [
  {
    icon: '⚙️',
    title: 'Инженерное совершенство',
    desc: 'Каждое решение основано на стандартах, расчётах и глубокой технической экспертизе. Мы не допускаем компромиссов в качестве инженерной работы.'
  },
  {
    icon: '💡',
    title: 'Цифровое мышление',
    desc: 'Проектируем системы будущего: от SCADA до ИИ-аналитики и предиктивного обслуживания. Цифровые технологии — наш повседневный инструмент.'
  },
  {
    icon: '🎯',
    title: 'Результат для клиента',
    desc: 'Наш KPI — реальный экономический эффект и операционная эффективность заказчика. Успех проекта измеряется не контрактом, а работой решения спустя годы.'
  },
  {
    icon: '',
    title: 'Открытое партнёрство',
    desc: 'Работаем по модели разделения результата — наш успех зависит от успеха клиента. Строим долгосрочные отношения на основе доверия.'
  },
  {
    icon: '🔬',
    title: 'Наука для промышленности',
    desc: 'Объединяем научные исследования, инженерную практику и цифровые технологии в единую систему. Знания должны превращаться в реальные проекты.'
  },
  {
    icon: '⚡',
    title: 'Инновации',
    desc: 'Постоянные исследования и разработки. Создаём технологии завтрашнего дня, а не используем вчерашние решения.'
  },
  {
    icon: '🛡️',
    title: 'Ответственность',
    desc: 'Каждое решение влияет на безопасность людей и устойчивость предприятий. Мы никогда не идём на компромисс с качеством и этикой.'
  },
  {
    icon: '📚',
    title: 'Непрерывное обучение',
    desc: 'Мир меняется быстро. Инженер, который перестал учиться, начинает отставать. Постоянное развитие — обязанность каждого сотрудника SET.'
  },
  {
    icon: '🌍',
    title: 'Работа для будущего',
    desc: 'Проектируем на десятилетия вперёд. Каждое решение учитывает развитие технологий и будущие потребности заказчика.'
  },
]

export default function Values() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#00A9E0]" />
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Наши Ценности</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#0A1628] leading-tight tracking-tight mb-6">
            Принципы, которыми мы руководствуемся каждый день
          </h1>
          <p className="text-[#5A7090] text-lg max-w-3xl mx-auto font-light">
            Ценности SET — это не просто слова на стене. Это реальные принципы, которые определяют каждое наше решение, 
            каждый проект и каждое взаимодействие с партнёрами.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-[#F8FAFC] border border-[#E2E8F0] p-8 lg:p-10 hover:border-[#00A9E0]/30 hover:shadow-[0_20px_40px_rgba(0,169,224,0.08)] transition-all duration-500 text-center"
            >
              <div className="text-5xl mb-6">{v.icon}</div>
              <h3 className="font-display font-bold text-xl text-[#0A1628] mb-4 group-hover:text-[#00A9E0] transition-colors duration-300">
                {v.title}
              </h3>
              <p className="text-[#5A7090] leading-relaxed font-light">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Promise Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 bg-[#F8FAFC] border border-[#E2E8F0] p-12 lg:p-16"
        >
          <h2 className="font-display font-bold text-3xl text-[#0A1628] mb-8 text-center">Наше обещание</h2>
          <div className="max-w-3xl mx-auto space-y-4 text-lg text-[#5A7090] font-light">
            <p>Мы не обещаем невозможного. Мы обещаем работать честно.</p>
            <p>Мы обещаем мыслить стратегически. Мы обещаем постоянно развиваться.</p>
            <p>Мы обещаем уважать знания. Мы обещаем говорить правду заказчику даже тогда, когда она неудобна.</p>
            <p>Мы обещаем принимать решения, за которые не будет стыдно через много лет.</p>
          </div>
        </motion.div>

        {/* Signature */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center max-w-3xl mx-auto pt-8 border-t border-[#E2E8F0]"
        >
          <p className="font-display font-bold text-xl text-[#0A1628] mb-2">
            Smart Engineering Technologies
          </p>
          <p className="text-[#00A9E0] font-semibold">
            Engineering Intelligence for Energy & Industry
          </p>
        </motion.div>
      </div>
    </section>
  )
}
