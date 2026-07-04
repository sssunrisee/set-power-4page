import { motion } from 'framer-motion'

const directions = [
  {
    num: '01',
    title: 'Smart Grids',
    subtitle: 'Digital Energy Management',
    desc: 'Intelligent power grid systems with advanced monitoring, automation, and optimization capabilities.',
    tags: ['EMS', 'DMS', 'OMS', 'Smart Metering', 'IEC 61850'],
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '02',
    title: 'Digital Substations',
    subtitle: 'Next-Generation Infrastructure',
    desc: 'Fully automated digital substations with integrated protection, control, and monitoring systems.',
    tags: ['Automation', 'Protection', 'SCADA', 'Remote Control'],
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '03',
    title: 'SCADA / EMS / DMS',
    subtitle: 'Control Systems',
    desc: 'Advanced supervisory control and data acquisition systems for energy management and distribution.',
    tags: ['Real-time Monitoring', 'Data Analytics', 'Control', 'Optimization'],
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '04',
    title: 'Renewable Energy',
    subtitle: 'Sustainable Solutions',
    desc: 'Integration of solar, wind, and alternative energy sources into existing power infrastructure.',
    tags: ['Solar', 'Wind', 'Grid Integration', 'Energy Storage'],
    img: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '05',
    title: 'Artificial Intelligence',
    subtitle: 'Predictive Analytics',
    desc: 'AI-powered solutions for predictive maintenance, load forecasting, and operational optimization.',
    tags: ['Machine Learning', 'Predictive Maintenance', 'Forecasting', 'Optimization'],
    img: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '06',
    title: 'Smart Wells',
    subtitle: 'Intelligent Oil & Gas',
    desc: 'Advanced well monitoring and optimization technologies for enhanced oil recovery.',
    tags: ['Well Monitoring', 'Production Optimization', 'Digital Oilfield', 'IoT'],
    img: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '07',
    title: 'Digital Oil & Gas',
    subtitle: 'Industry 4.0',
    desc: 'Comprehensive digital transformation solutions for oil & gas production and distribution.',
    tags: ['Pipeline Monitoring', 'Process Automation', 'Safety Systems', 'Efficiency'],
    img: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&auto=format',
  },
  {
    num: '08',
    title: 'Research & Development',
    subtitle: 'Innovation Hub',
    desc: 'Cutting-edge research in energy technologies, AI applications, and industrial automation.',
    tags: ['R&D', 'Innovation', 'Prototyping', 'Testing'],
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format',
  },
]

export default function Directions() {
  return (
    <section className="bg-white py-24 lg:py-32">
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
            <span className="font-condensed text-[11px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">Key Directions</span>
            <div className="w-12 h-px bg-[#00A9E0]" />
          </div>
          <h2 className="font-display font-bold text-[clamp(2rem,4vw,3.5rem)] text-[#0A1628] leading-tight tracking-tight mb-6">
            Our Areas of Expertise
          </h2>
          <p className="text-[#5A7090] text-lg max-w-2xl mx-auto font-light">
            Eight strategic directions where SET delivers measurable value to clients across energy and industrial sectors.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {directions.map((d, i) => (
            <motion.div
              key={d.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group bg-[#F8FAFC] border border-[#E2E8F0] overflow-hidden hover:border-[#00A9E0]/30 hover:shadow-[0_20px_40px_rgba(0,169,224,0.08)] transition-all duration-500"
            >
              <div className="relative h-48 overflow-hidden bg-[#E2E8F0]">
                <img
                  src={d.img}
                  alt={d.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />
                <div className="absolute top-4 left-4 font-display font-bold text-5xl text-white/20">
                  {d.num}
                </div>
              </div>
              <div className="p-8">
                <div className="font-condensed text-[10px] tracking-[0.3em] uppercase text-[#00A9E0] font-semibold mb-2">
                  {d.subtitle}
                </div>
                <h3 className="font-display font-bold text-2xl text-[#0A1628] mb-4 group-hover:text-[#00A9E0] transition-colors duration-300">
                  {d.title}
                </h3>
                <p className="text-[#5A7090] leading-relaxed mb-6 font-light">
                  {d.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {d.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-3 py-1.5 bg-white border border-[#E2E8F0] text-[#0A1628] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
