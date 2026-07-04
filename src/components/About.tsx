import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#00A9E0]" />
              <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">About SET</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628] leading-tight tracking-tight mb-8">
              Engineering Company Focused on Results
            </h2>
            <p className="text-[#5A7090] leading-relaxed text-lg font-light mb-6">
              SET is a team of engineers and developers from Baku, Azerbaijan. We design and implement 
              automation systems for energy and oil & gas sectors, working with real challenges — 
              from initial audit to launch and ongoing support.
            </p>
            <p className="text-[#5A7090] leading-relaxed text-lg font-light">
              Founded by practicing engineers, we bring deep industry knowledge combined with 
              cutting-edge digital technologies to every project we undertake.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="border-l-2 border-[#00A9E0] pl-8">
              <div className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#00A9E0] mb-3 font-semibold">Our Mission</div>
              <p className="font-display text-[#0A1628] text-xl font-medium leading-snug">
                Accelerate the digital transformation of strategic industries by implementing 
                world-class solutions with respect for regional specifics.
              </p>
            </div>
            <div className="border-l-2 border-[#0A1628]/20 pl-8">
              <div className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0A1628]/60 mb-3 font-semibold">Vision 2030–2035</div>
              <p className="text-[#5A7090] leading-relaxed text-lg font-light">
                Become the leading engineering-technological partner for the energy and industrial 
                sectors in CIS and Middle East regions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
