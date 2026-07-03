import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const cols = [
  {
    title: 'Навигация',
    links: [
      { label: 'Главная', href: '/' },
      { label: 'Услуги', href: '/services' },
      { label: 'Проекты', href: '/projects' },
      { label: 'Контакты', href: '/contact' },
    ],
  },
  {
    title: 'Услуги',
    links: [
      { label: 'Smart Grids', href: '/services' },
      { label: 'Smart Wells', href: '/services' },
      { label: 'SET Academy', href: '/services' },
      { label: 'Консалтинг', href: '/services' },
    ],
  },
  {
    title: 'Отрасли',
    links: [
      { label: 'Электроэнергетика', href: '/services' },
      { label: 'Нефтегаз', href: '/services' },
      { label: 'Промышленность', href: '/services' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0B1D3A]">
      <div className="border-b border-[#1A3058] py-12">
        <div className="max-w-[1380px] mx-auto px-6 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            <div>
              <div className="font-condensed font-bold text-xl text-white mb-1">
                Готовы начать проект?
              </div>
              <div className="text-[#7A9CC0] text-sm">
                Свяжитесь с нами — ответим в течение рабочего дня.
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-7 py-3 bg-[#D4AF37] text-[#0B1D3A] font-condensed font-bold text-[12px] tracking-[0.12em] uppercase hover:bg-[#E8C84A] transition-colors"
              >
                Запросить встречу
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-[1380px] mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img src="/logo.png" alt="SET" className="h-12 w-auto" />
              <div>
                <div className="font-condensed font-bold text-white text-sm tracking-[0.1em] uppercase">SET Power</div>
                <div className="font-condensed text-[#7A9CC0] text-[10px] tracking-[0.1em] uppercase">setpower.az</div>
              </div>
            </div>
            <p className="text-[#7A9CC0] text-sm leading-relaxed mb-6 max-w-xs">
              Инженерные технологии для цифровой энергетики и интеллектуальной промышленности.
            </p>
            <div className="space-y-2 text-sm">
              <div className="text-[#7A9CC0]">
                <span className="text-[#5A7090]">Сайт:</span>{' '}
                <a href="https://setpower.az" className="text-[#A0B8D8] hover:text-white transition-colors">setpower.az</a>
              </div>
              <div className="text-[#7A9CC0]">
                <span className="text-[#5A7090]">Тел:</span>{' '}
                <a href="tel:+994502475057" className="text-[#A0B8D8] hover:text-white transition-colors">+994 50 247 50 57</a>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <a href="#" className="w-9 h-9 border border-[#1A3058] flex items-center justify-center text-[#7A9CC0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all text-xs font-condensed font-bold">
                in
              </a>
              <a href="#" className="w-9 h-9 border border-[#1A3058] flex items-center justify-center text-[#7A9CC0] hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 1C3.7 1 1 3.7 1 7s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6zm2.5 2.5h-1c-.4 0-.5.2-.5.5v.8h1.5L9.3 6.3H8v4H6.3v-4H5V4.8h1.3V4c0-1.1.7-1.8 1.7-1.8H9.5v1.3z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-condensed text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] mb-5 font-bold">{col.title}</div>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-[#7A9CC0] text-sm hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-[#1A3058]">
          <div className="text-[#4A6888] text-[12px]">
            © 2026 SET Power. Все права защищены. setpower.az
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#4A6888] text-[12px] hover:text-[#7A9CC0] transition-colors">Политика конфиденциальности</a>
            <a href="#" className="text-[#4A6888] text-[12px] hover:text-[#7A9CC0] transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
