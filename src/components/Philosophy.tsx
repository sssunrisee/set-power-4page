import { motion } from 'framer-motion'

const principles = [
  {
    num: '01',
    title: 'Мы создаём ценность, а не просто выполняем работу',
    desc: 'Каждый проект должен приносить измеримый результат. Если после нашей работы предприятие становится эффективнее, надёжнее, безопаснее и технологичнее — значит, мы выполнили свою миссию.'
  },
  {
    num: '02',
    title: 'Инженерия начинается с понимания проблемы',
    desc: 'Современный мир предлагает тысячи технологий. Но настоящая инженерия начинается не с выбора оборудования. Она начинается с вопроса: «Какую проблему необходимо решить?»'
  },
  {
    num: '03',
    title: 'Наука должна работать для промышленности',
    desc: 'SET объединяет научные исследования, инженерную практику и цифровые технологии в единую систему. Мы считаем, что знания должны превращаться в реальные проекты.'
  },
  {
    num: '04',
    title: 'Цифровизация — это инструмент, а не цель',
    desc: 'Искусственный интеллект. Big Data. Digital Twin. Smart Grids. SCADA. IoT. Все эти технологии обладают огромным потенциалом. Но сами по себе они не делают предприятие успешнее.'
  },
  {
    num: '05',
    title: 'Простые решения требуют глубоких знаний',
    desc: 'Мы стремимся создавать решения, которые кажутся простыми. Но простота никогда не должна быть следствием упрощения. Она должна быть результатом глубокого понимания процессов.'
  },
  {
    num: '06',
    title: 'Мы проектируем на десятилетия',
    desc: 'Каждое решение должно учитывать не только сегодняшние задачи. Мы обязаны понимать, каким будет объект через десять, двадцать и тридцать лет.'
  },
  {
    num: '07',
    title: 'Доверие важнее скорости',
    desc: 'Иногда быстрее — не значит лучше. Мы никогда не будем жертвовать качеством ради сроков. Мы предпочитаем выполнить работу один раз, но так, чтобы к ней не пришлось возвращаться.'
  },
  {
    num: '08',
    title: 'Мы постоянно учимся',
    desc: 'Мир меняется быстрее, чем когда-либо прежде. Инженер, который перестал учиться, начинает отставать. Поэтому постоянное обучение является не преимуществом, а обязанностью каждого сотрудника SET.'
  },
  {
    num: '09',
    title: 'Этика выше выгоды',
    desc: 'Любое инженерное решение влияет на безопасность людей, окружающую среду и устойчивость предприятий. Поэтому профессиональная честность не может быть предметом компромисса.'
  },
  {
    num: '10',
    title: 'Партнёрство важнее контракта',
    desc: 'Контракт имеет срок действия. Доверие не имеет срока. Мы стремимся строить долгосрочные отношения, основанные на уважении, профессионализме и взаимной ответственности.'
  },
  {
    num: '11',
    title: 'Мы инвестируем в знания',
    desc: 'Главный актив SET — не здания. Не оборудование. Не программное обеспечение. Главный капитал компании — знания её людей.'
  },
  {
    num: '12',
    title: 'Мы работаем для будущего',
    desc: 'Каждое поколение инженеров получает мир таким, каким его создали предыдущие поколения. И оставляет его тем, кто придёт после. Мы понимаем эту ответственность.'
  },
]

export default function Philosophy() {
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
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Философия SET</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#0A1628] leading-tight tracking-tight mb-6">
            Инженерия, которая создаёт будущее
          </h1>
          <p className="text-[#5A7090] text-lg max-w-3xl mx-auto font-light">
            Каждая великая компания начинается не с капитала, не с офиса и даже не с первого контракта. 
            Она начинается с убеждений.
          </p>
        </motion.div>

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <p className="text-xl text-[#0A1628] leading-relaxed font-normal mb-6">
            Именно убеждения определяют решения. Решения формируют культуру. Культура рождает доверие. 
            А доверие создаёт историю.
          </p>
          <p className="text-[#5A7090] text-lg leading-relaxed font-light">
            Философия Smart Engineering Technologies — это система принципов, которыми мы руководствуемся 
            сегодня и будем руководствоваться завтра, независимо от масштабов компании, количества сотрудников 
            или географии проектов.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {principles.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group bg-[#F8FAFC] border border-[#E2E8F0] p-8 lg:p-10 hover:border-[#00A9E0]/30 hover:shadow-[0_20px_40px_rgba(0,169,224,0.08)] transition-all duration-500"
            >
              <div className="font-display font-bold text-5xl text-[#E2E8F0] group-hover:text-[#00A9E0]/20 transition-colors duration-500 mb-6">
                {p.num}
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A1628] mb-4 group-hover:text-[#00A9E0] transition-colors duration-300">
                {p.title}
              </h3>
              <p className="text-[#5A7090] leading-relaxed font-light">
                {p.desc}
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
          <ul className="max-w-3xl mx-auto space-y-4">
            {[
              'Мы не обещаем невозможного.',
              'Мы обещаем работать честно.',
              'Мы обещаем мыслить стратегически.',
              'Мы обещаем постоянно развиваться.',
              'Мы обещаем уважать знания.',
              'Мы обещаем говорить правду заказчику даже тогда, когда она неудобна.',
              'Мы обещаем принимать решения, за которые не будет стыдно через много лет.',
            ].map((promise, i) => (
              <li key={i} className="flex items-start gap-4 text-lg text-[#5A7090] font-light">
                <span className="text-[#00A9E0] font-bold text-xl mt-1">✓</span>
                <span>{promise}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display font-bold text-2xl text-[#0A1628] mb-6">Заключение</h2>
          <p className="text-[#5A7090] text-lg leading-relaxed font-light mb-6">
            Smart Engineering Technologies создаётся не ради краткосрочного успеха. 
            Мы создаём компанию, которая будет приносить пользу обществу, промышленности и энергетике на протяжении десятилетий.
          </p>
          <p className="text-[#5A7090] text-lg leading-relaxed font-light mb-12">
            Мы убеждены, что настоящее инженерное наследие измеряется не количеством проектов. 
            Оно измеряется количеством решений, которые продолжают работать спустя годы.
          </p>
          <div className="pt-8 border-t border-[#E2E8F0]">
            <p className="font-display font-bold text-xl text-[#0A1628] mb-2">
              Smart Engineering Technologies
            </p>
            <p className="text-[#00A9E0] font-semibold">
              Engineering Intelligence for Energy & Industry
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
