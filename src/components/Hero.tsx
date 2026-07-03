import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let t = 0

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight

    const draw = () => {
      ctx.clearRect(0, 0, W(), H())

      const cols = 14, rows = 8
      for (let r = 0; r <= rows; r++) {
        const y = (r / rows) * H()
        const a = 0.03 + Math.sin(r * 0.5 + t * 0.4) * 0.015
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(W(), y)
        ctx.strokeStyle = `rgba(255,255,255,${a})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }
      for (let c = 0; c <= cols; c++) {
        const x = (c / cols) * W()
        const a = 0.03 + Math.cos(c * 0.4 + t * 0.3) * 0.015
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, H())
        ctx.strokeStyle = `rgba(255,255,255,${a})`
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      for (let r = 0; r <= rows; r++) {
        for (let c = 0; c <= cols; c++) {
          const x = (c / cols) * W()
          const y = (r / rows) * H()
          const wave = Math.sin(c * 0.6 + t) * Math.cos(r * 0.8 + t * 0.6)
          const a = Math.max(0, wave) * 0.5
          if (a > 0.05) {
            ctx.beginPath()
            ctx.arc(x, y, 1.5, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(0,169,224,${a})`
            ctx.fill()
          }
        }
      }

      const grad = ctx.createLinearGradient(W() * 0.2 + Math.sin(t * 0.2) * W() * 0.1, 0, W() * 0.7, H())
      grad.addColorStop(0, 'rgba(0,86,179,0)')
      grad.addColorStop(0.5, 'rgba(0,86,179,0.06)')
      grad.addColorStop(1, 'rgba(0,86,179,0)')
      ctx.fillStyle = grad
      ctx.fillRect(0, 0, W(), H())

      t += 0.007
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#0B1D3A]">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1800&h=1000&fit=crop&auto=format"
          alt="Energy infrastructure"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D3A]/60 via-[#0B1D3A]/50 to-[#0B1D3A]" />
      </div>

      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-[1380px] mx-auto px-6 lg:px-10 pb-20 pt-36 w-full">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-8 h-px bg-[#D4AF37]" />
            <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] font-semibold">
              setpower.az
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-condensed font-bold leading-[1.0] mb-8"
          >
            <span className="block text-[clamp(3.2rem,7.5vw,6.5rem)] text-white tracking-tight">
              Инженерные
            </span>
            <span className="block text-[clamp(3.2rem,7.5vw,6.5rem)] text-white tracking-tight">
              решения
            </span>
            <span className="block text-[clamp(1.8rem,4vw,3.2rem)] text-[#00A9E0] tracking-tight font-semibold mt-2">
              для энергетики и нефтегаза
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#A0B8D8] text-lg leading-relaxed mb-10 max-w-xl font-light"
          >
            SET разрабатывает и внедряет интеллектуальные системы управления
            для электроэнергетики, нефтегазовой отрасли и промышленности.
            Работаем в Азербайджане и регионе СНГ.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/services"
              className="px-8 py-3.5 bg-[#0056B3] text-white font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#0068D6] transition-colors duration-200"
            >
              Наши услуги
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-[#D4AF37] text-[#0B1D3A] font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#E8C84A] transition-colors duration-200"
            >
              Связаться с нами
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10"
        >
          {[
            { num: '5', sub: 'Направлений', label: 'деятельности' },
            { num: '10+', sub: 'Стратегических', label: 'проектов' },
            { num: '2035', sub: 'Горизонт', label: 'видения' },
            { num: '360°', sub: 'Инженерный', label: 'охват' },
          ].map((s) => (
            <div key={s.num} className="bg-[#0B1D3A]/80 backdrop-blur-sm px-7 py-6">
              <div className="font-condensed font-bold text-[2.8rem] leading-none text-[#D4AF37]">{s.num}</div>
              <div className="text-white text-sm font-medium mt-1">{s.sub}</div>
              <div className="text-[#5A7890] text-xs">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-[#0B1D3A]" />
    </section>
  )
}
