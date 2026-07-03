import { useState } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  {
    label: 'Email',
    value: 'info@setpower.az',
    icon: (
      <path d="M2 4h16v12H2V4zm0 0l8 7 8-7" stroke="#0056B3" strokeWidth="1.2" strokeLinecap="round" />
    ),
  },
  {
    label: 'Телефон',
    value: '+994 50 247 50 57',
    icon: (
      <path d="M3 3h4l2 4-2.5 1.5a9 9 0 004 4L12 10l4 2v4a2 2 0 01-2 2C7 18 2 13 2 7a2 2 0 012-4z" stroke="#0056B3" strokeWidth="1.2" strokeLinecap="round" />
    ),
  },
  {
    label: 'Адрес',
    value: 'Баку, Азербайджан',
    icon: (
      <>
        <path d="M10 2a6 6 0 016 6c0 4-6 10-6 10S4 12 4 8a6 6 0 016-6z" stroke="#0056B3" strokeWidth="1.2" />
        <circle cx="10" cy="8" r="2" stroke="#0056B3" strokeWidth="1.2" />
      </>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+994 50 247 50 57',
    icon: (
      <path d="M10 2a8 8 0 018 8c0 4.4-3.6 8-8 8a7.9 7.9 0 01-4-1.1L2 18l1.1-4A8 8 0 0110 2zm-2 9.5c1.5 2 3 3 5 3.5.5 0 .7-.2.8-.5l.3-1c-.5-.3-1-.5-1.5-.7l-.7.5a7 7 0 01-2-2l.5-.7c-.2-.5-.4-1-.7-1.5l-1 .3c-.3.1-.5.3-.5.8.5 1 1 2 1.8 3.3z" stroke="#0056B3" strokeWidth="1.2" />
    ),
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section className="bg-[#F5F7FA] py-20 lg:py-28 border-t border-[#DDE3ED]">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-16 lg:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#D4AF37]" />
              <span className="font-condensed text-[11px] tracking-[0.3em] uppercase text-[#0056B3] font-semibold">Контакты</span>
            </div>
            <h2 className="font-condensed font-bold text-[clamp(2rem,4vw,3.2rem)] text-[#0B1D3A] tracking-tight mb-6">
              Начнём работать вместе
            </h2>
            <p className="text-[#5A7090] leading-relaxed mb-10 text-[15px]">
              Расскажите о вашем проекте — мы ответим в течение одного рабочего дня.
            </p>

            <div className="space-y-6">
              {contactInfo.map((c, i) => (
                <motion.div
                  key={c.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-white border border-[#DDE3ED] flex items-center justify-center flex-shrink-0">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">{c.icon}</svg>
                  </div>
                  <div>
                    <div className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] font-semibold">{c.label}</div>
                    <div className="text-[#0B1D3A] font-medium text-sm mt-0.5">{c.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white border border-[#DDE3ED] p-8 lg:p-10"
          >
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-14 h-14 bg-[#0056B3] flex items-center justify-center mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12l4 4L19 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="font-condensed font-bold text-2xl text-[#0B1D3A] mb-3">Сообщение отправлено</h3>
                <p className="text-[#5A7090] mb-6">Мы свяжемся с вами в течение одного рабочего дня.</p>
                <button
                  onClick={() => setSent(false)}
                  className="font-condensed text-[12px] tracking-[0.15em] uppercase text-[#0056B3] font-bold underline underline-offset-4"
                >
                  Новый запрос
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="font-condensed font-bold text-[11px] tracking-[0.2em] uppercase text-[#5A7090] mb-6 pb-4 border-b border-[#DDE3ED]">
                  Форма обратной связи
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] block mb-1.5 font-semibold">
                      Имя<span className="text-[#D4AF37] ml-1">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      required
                      value={form.name}
                      onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                      className="w-full bg-[#F5F7FA] border border-[#DDE3ED] px-4 py-2.5 text-sm text-[#0B1D3A] placeholder-[#AABBCC] focus:outline-none focus:border-[#0056B3] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] block mb-1.5 font-semibold">
                      Компания
                    </label>
                    <input
                      type="text"
                      placeholder="Название компании"
                      value={form.company}
                      onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                      className="w-full bg-[#F5F7FA] border border-[#DDE3ED] px-4 py-2.5 text-sm text-[#0B1D3A] placeholder-[#AABBCC] focus:outline-none focus:border-[#0056B3] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] block mb-1.5 font-semibold">
                      Email<span className="text-[#D4AF37] ml-1">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className="w-full bg-[#F5F7FA] border border-[#DDE3ED] px-4 py-2.5 text-sm text-[#0B1D3A] placeholder-[#AABBCC] focus:outline-none focus:border-[#0056B3] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] block mb-1.5 font-semibold">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      placeholder="+994 ..."
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className="w-full bg-[#F5F7FA] border border-[#DDE3ED] px-4 py-2.5 text-sm text-[#0B1D3A] placeholder-[#AABBCC] focus:outline-none focus:border-[#0056B3] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-condensed text-[10px] tracking-[0.2em] uppercase text-[#5A7090] block mb-1.5 font-semibold">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Опишите вашу задачу или вопрос..."
                    value={form.message}
                    onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full bg-[#F5F7FA] border border-[#DDE3ED] px-4 py-2.5 text-sm text-[#0B1D3A] placeholder-[#AABBCC] focus:outline-none focus:border-[#0056B3] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#D4AF37] text-[#0B1D3A] font-condensed font-bold text-[13px] tracking-[0.12em] uppercase hover:bg-[#E8C84A] transition-colors duration-200"
                >
                  Отправить запрос
                </button>

                <p className="text-center text-[11px] text-[#5A7090]">
                  Ответим в течение одного рабочего дня
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
