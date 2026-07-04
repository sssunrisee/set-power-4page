import { motion } from 'framer-motion'

const reasons = [
  {
    num: '01',
    title: 'Engineering Excellence',
    desc: 'Every solution is based on international standards, rigorous calculations, and deep technical expertise from practicing engineers.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L28 10v12L16 28 4 22V10L16 4z" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M16 10v8M12 14h8" stroke="#00A9E0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Digital-First Approach',
    desc: 'We design future-ready systems: from SCADA and EMS to AI analytics and predictive maintenance solutions.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M16 8v8l5 3" stroke="#00A9E0" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Client-Centric Results',
    desc: 'Our KPI is real economic impact and operational efficiency for the client. We succeed when you succeed.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V12l10-8 10 8v14H6z" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M12 26v-10h8v10" stroke="#00A9E0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Open Partnership Model',
    desc: 'We work on a results-sharing model — our success depends entirely on the success of our clients.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="12" cy="16" r="7" stroke="#00A9E0" strokeWidth="1.5" />
        <circle cx="22" cy="16" r="7" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M16 11v10" stroke="#00A9E0" strokeWidth="1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Full-Cycle Engineering',
    desc: 'From initial audit to final implementation and ongoing support. We handle every phase of the project lifecycle.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 24V14l8-6 8 6v10H8z" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M13 24v-6h6v6" stroke="#00A9E0" strokeWidth="1.5" />
        <circle cx="24" cy="10" r="3" stroke="#00A9E0" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Regional Expertise',
    desc: 'Deep understanding of CIS and Middle East markets, combined with international technology standards.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="#00A9E0" strokeWidth="1.5" />
        <path d="M16 4v24M4 16h24" stroke="#00A9E0" strokeWidth="1" />
        <path d="M6 10h20M6 22h20" stroke="#00A9E0" strokeWidth="1" />
      </svg>
    ),
  },
]

export default function WhySET() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
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
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Why SET</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628] leading-tight tracking-tight mb-6">
            What Makes Us Different
          </h2>
          <p className="text-[#5A7090] text-lg max-w-2xl mx-auto font-light">
            Six principles that define every project we deliver — from initial audit to final implementation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={r.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white border border-[#E2E8F0] p-8 lg:p-10 hover:border-[#00A9E0]/30 hover:shadow-[0_20px_40px_rgba(0,169,224,0.08)] transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="text-[#00A9E0]">{r.icon}</div>
                <span className="font-display font-bold text-4xl text-[#E2E8F0] group-hover:text-[#00A9E0]/20 transition-colors duration-500">
                  {r.num}
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-[#0A1628] mb-4 group-hover:text-[#00A9E0] transition-colors duration-300">
                {r.title}
              </h3>
              <p className="text-[#5A7090] leading-relaxed font-light">
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
