import { motion } from 'framer-motion'

const milestones = [
  {
    year: '2026–2028',
    title: 'Market Entry',
    desc: 'Establish presence in Azerbaijan. Complete first strategic projects with AzərEnerji and SOCAR. Build local engineering team.',
    status: 'current',
  },
  {
    year: '2028–2030',
    title: 'Regional Expansion',
    desc: 'Expand to South Caucasus and Central Asia. Develop partnerships with international technology providers.',
    status: 'planned',
  },
  {
    year: '2030–2035',
    title: 'International Growth',
    desc: 'Become a leading engineering-technological partner for energy and industrial sectors in CIS and Middle East regions.',
    status: 'planned',
  },
]

export default function Vision() {
  return (
    <section className="bg-[#0A1628] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-px bg-[#00A9E0]" />
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Vision 2035</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-white leading-tight tracking-tight">
            Our Roadmap to 2035
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00A9E0]/50 via-[#00A9E0]/30 to-transparent" />

          <div className="space-y-12 lg:space-y-0">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 0 ? 'lg:text-right' : ''
                } ${i < milestones.length - 1 ? 'lg:mb-16' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#00A9E0] rounded-full border-4 border-[#0A1628] z-10">
                  {m.status === 'current' && (
                    <div className="absolute inset-0 bg-[#00A9E0] rounded-full animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div className={`lg:col-span-1 ${i % 2 === 0 ? 'lg:pr-16' : 'lg:col-start-2 lg:pl-16'}`}>
                  <div className={`bg-[#0D1F3C] border border-[#1A3058] p-8 lg:p-10 hover:border-[#00A9E0]/50 transition-colors duration-300 ${
                    i % 2 === 0 ? 'lg:text-right' : ''
                  }`}>
                    <div className="font-display font-bold text-[3rem] leading-none text-[#00A9E0] mb-4">{m.year}</div>
                    <h3 className="font-display font-bold text-2xl text-white mb-4">{m.title}</h3>
                    <p className="text-[#A0B8D8] leading-relaxed font-light">{m.desc}</p>
                    {m.status === 'current' && (
                      <div className={`inline-flex items-center gap-2 mt-6 px-4 py-2 bg-[#00A9E0]/10 border border-[#00A9E0]/30 rounded-full ${
                        i % 2 === 0 ? 'lg:ml-auto' : ''
                      }`}>
                        <div className="w-2 h-2 bg-[#00A9E0] rounded-full animate-pulse" />
                        <span className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#00A9E0] font-semibold">In Progress</span>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
