import { motion } from 'framer-motion'

export default function Mission() {
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
              <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Our Mission</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628] leading-tight tracking-tight mb-8">
              Accelerating the digital transformation of strategic industries
            </h2>
            <p className="text-[#5A7090] leading-relaxed text-lg font-light mb-6">
              SET helps enterprises transition to digital energy and intelligent industrial technologies. 
              We deliver world-class engineering solutions tailored to regional specifics.
            </p>
            <p className="text-[#5A7090] leading-relaxed text-lg font-light">
              Our mission is to bridge the gap between cutting-edge technology and practical implementation, 
              creating measurable value for our clients in energy, oil & gas, and industrial sectors.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-[#00A9E0]/10 to-transparent rounded-lg" />
            <div className="relative bg-[#F8FAFC] border border-[#E2E8F0] p-10 lg:p-12">
              <div className="font-display text-[6rem] leading-none text-[#00A9E0]/20 mb-4">"</div>
              <p className="font-display text-[#0A1628] text-xl lg:text-2xl font-medium leading-snug italic -mt-8">
                To accelerate the digital transformation of strategic industries by implementing 
                world-class solutions with respect for regional specifics.
              </p>
              <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
                <div className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#00A9E0] font-semibold mb-2">
                  SET Engineering Group
                </div>
                <div className="text-[#5A7090] text-sm">Baku, Azerbaijan</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
