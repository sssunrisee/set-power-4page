import { motion } from 'framer-motion'

export default function CEO() {
  return (
    <section className="bg-[#F8FAFC] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 items-center">
          {/* Photo Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-[#0A1628] to-[#1A3058] relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 border-2 border-[#00A9E0]/30 rounded-full flex items-center justify-center">
                    <span className="font-display font-bold text-4xl text-[#00A9E0]">SET</span>
                  </div>
                  <div className="font-condensed text-[10px] tracking-[0.3em] uppercase text-[#00A9E0]/60">
                    Founder & CEO
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-20 h-20 border border-[#00A9E0]/20" />
              <div className="absolute bottom-8 left-8 w-16 h-16 border border-[#00A9E0]/20" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-[#00A9E0]" />
              <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Leadership</span>
            </div>
            <h2 className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-[#0A1628] leading-tight tracking-tight mb-8">
              Founded by Engineers, Driven by Vision
            </h2>
            <div className="space-y-6 text-[#5A7090] text-lg font-light leading-relaxed">
              <p>
                SET was founded by practicing engineers with extensive experience in energy and oil & gas sectors. 
                Our leadership combines deep technical expertise with strategic vision for digital transformation.
              </p>
              <p>
                With decades of combined experience in implementing large-scale engineering projects, 
                our team understands both the technical challenges and business requirements of modern energy systems.
              </p>
              <p>
                We believe that the future of energy lies in the intelligent integration of digital technologies 
                with traditional engineering excellence — and that's exactly what SET delivers.
              </p>
            </div>

            <div className="mt-10 pt-10 border-t border-[#E2E8F0]">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <div className="font-display font-bold text-3xl text-[#00A9E0] mb-2">15+</div>
                  <div className="text-[#5A7090] text-sm">Years Experience</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-[#00A9E0] mb-2">50+</div>
                  <div className="text-[#5A7090] text-sm">Projects Completed</div>
                </div>
                <div>
                  <div className="font-display font-bold text-3xl text-[#00A9E0] mb-2">10+</div>
                  <div className="text-[#5A7090] text-sm">Countries Served</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
