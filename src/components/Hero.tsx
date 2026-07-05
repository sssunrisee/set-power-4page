import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A1628]">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40"
          poster="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1920&h=1080&fit=crop&auto=format"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-futuristic-devices-99786-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1628]/90 via-[#0A1628]/70 to-[#0A1628]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A1628] via-transparent to-transparent" />
      </div>

      {/* Animated Grid Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0,169,224,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,169,224,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            {/* Company Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-[#00A9E0]" />
              <span className="font-condensed text-[12px] tracking-[0.4em] uppercase text-[#00A9E0] font-semibold">
                Smart Engineering Technologies
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="font-display font-bold leading-[1.1] mb-8"
            >
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tight">
                Engineering Intelligence
              </span>
              <span className="block text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tight">
                for Energy & Industry
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#A0B8D8] text-lg leading-relaxed mb-12 max-w-xl font-light"
            >
              Создаём интеллектуальные инженерные решения для энергетики, нефтегаза и промышленности. 
              Объединяем знания, технологии и ответственность ради устойчивого развития.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#00A9E0] text-white font-condensed font-bold text-[13px] tracking-[0.15em] uppercase hover:bg-[#00BFFF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,169,224,0.3)]"
              >
                Связаться с нами
              </Link>
              <Link
                to="/manifesto"
                className="px-8 py-4 border border-white/30 text-white font-condensed font-semibold text-[13px] tracking-[0.15em] uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
              >
                Читать манифест
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-px bg-white/10">
              {[
                { num: '7', label: 'Стратегических', sub: 'платформ' },
                { num: '2035', label: 'Видение', sub: 'развития' },
                { num: '12', label: 'Принципов', sub: 'философии' },
                { num: '∞', label: 'Инженерное', sub: 'наследие' },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.1 }}
                  className="bg-[#0A1628]/60 backdrop-blur-sm p-8 hover:bg-[#0A1628]/80 transition-colors duration-300"
                >
                  <div className="font-display font-bold text-[3rem] leading-none text-[#00A9E0] mb-2">{stat.num}</div>
                  <div className="text-white text-sm font-medium mb-1">{stat.label}</div>
                  <div className="text-[#5A7890] text-xs">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-1 h-1 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
