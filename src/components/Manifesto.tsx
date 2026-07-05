import { motion } from 'framer-motion'

export default function Manifesto() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
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
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Манифест SET</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h1 className="font-display font-bold text-[clamp(2.5rem,5vw,4rem)] text-[#0A1628] leading-tight tracking-tight mb-6">
            Мы создаём будущее
          </h1>
          <p className="text-[#5A7090] text-lg max-w-2xl mx-auto font-light">
            Мы не просто создаём инженерные решения. Мы создаём будущее.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-[#5A7090] text-lg leading-relaxed font-light"
        >
          <p className="text-xl text-[#0A1628] font-normal">
            Каждая эпоха имеет свою движущую силу. Когда-то мир изменили паровые машины. 
            Позже — электричество. Затем компьютеры и Интернет.
          </p>
          <p>
            Сегодня начинается новая эпоха — эпоха интеллектуальной инженерии, где искусственный интеллект, 
            цифровые технологии, большие данные и инженерная наука работают как единая система.
          </p>
          <p>
            Мы убеждены, что именно эта эпоха определит развитие энергетики, промышленности и экономики XXI века. 
            Именно поэтому была создана Smart Engineering Technologies (SET).
          </p>

          <h2 className="font-display font-bold text-2xl text-[#0A1628] mt-12 mb-4">SET — это не просто инженерная компания</h2>
          <p>
            SET — это объединение инженерного опыта, научной школы, современных технологий и стратегического мышления.
          </p>
          <p>
            Мы рассматриваем инженерию не как совокупность расчётов и оборудования. Для нас инженерия — это искусство 
            создавать решения, которые продолжают работать спустя десятилетия.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#0A1628] mt-12 mb-4">Наше видение</h2>
          <p>
            Мы верим, что наука должна работать для производства. Инновации должны приносить измеримый результат. 
            Технологии должны делать жизнь безопаснее. А инженерия должна быть инструментом развития общества.
          </p>
          <p>
            Мы смотрим значительно дальше отдельных проектов. Мы строим экосистему знаний. Мы создаём культуру 
            инженерного мышления. Мы развиваем профессиональные компетенции.
          </p>

          <h2 className="font-display font-bold text-2xl text-[#0A1628] mt-12 mb-4">Наша ответственность</h2>
          <p>
            Мы понимаем свою ответственность. Каждое принятое инженерное решение влияет на безопасность 
            энергетических объектов, устойчивость промышленности, экономическую эффективность предприятий 
            и качество жизни людей.
          </p>
          <p>
            Поэтому мы никогда не идём на компромисс с профессиональной этикой, инженерной точностью и качеством 
            выполняемых работ.
          </p>

          {/* Principle Block */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] p-12 my-12 text-center">
            <h2 className="font-display font-bold text-2xl text-[#0A1628] mb-6">Принцип SET</h2>
            <p className="font-display text-2xl text-[#00A9E0] font-semibold italic">
              "Мы не ждём будущее. Мы проектируем его."
            </p>
          </div>

          <h2 className="font-display font-bold text-2xl text-[#0A1628] mt-12 mb-4">Наше обещание</h2>
          <ul className="space-y-3 my-8">
            {[
              'Мы не обещаем невозможного.',
              'Мы обещаем работать честно.',
              'Мы обещаем мыслить стратегически.',
              'Мы обещаем постоянно развиваться.',
              'Мы обещаем уважать знания.',
              'Мы обещаем говорить правду заказчику даже тогда, когда она неудобна.',
              'Мы обещаем принимать решения, за которые не будет стыдно через много лет.',
            ].map((promise, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-[#00A9E0] font-bold mt-1">✓</span>
                <span>{promise}</span>
              </li>
            ))}
          </ul>

          <h2 className="font-display font-bold text-2xl text-[#0A1628] mt-12 mb-4">Заключение</h2>
          <p>
            Smart Engineering Technologies создаётся не ради краткосрочного успеха. Мы создаём компанию, 
            которая будет приносить пользу обществу, промышленности и энергетике на протяжении десятилетий.
          </p>
          <p>
            Мы убеждены, что настоящее инженерное наследие измеряется не количеством проектов. 
            Оно измеряется количеством решений, которые продолжают работать спустя годы.
          </p>

          <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
            <p className="font-display font-bold text-lg text-[#0A1628]">
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
