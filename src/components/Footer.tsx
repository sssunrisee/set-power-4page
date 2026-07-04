import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const cols = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Services', href: '/services' },
      { label: 'Projects', href: '/projects' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Services',
    links: [
      { label: 'Smart Grids', href: '/services' },
      { label: 'Digital Substations', href: '/services' },
      { label: 'SCADA / EMS / DMS', href: '/services' },
      { label: 'Smart Wells', href: '/services' },
      { label: 'AI Solutions', href: '/services' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About SET', href: '/' },
      { label: 'Mission', href: '/' },
      { label: 'Vision 2035', href: '/' },
      { label: 'Academy', href: '/projects' },
      { label: 'Partners', href: '/projects' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#0A1628]">
      {/* CTA Band */}
      <div className="border-b border-[#1A3058] py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col lg:flex-row items-center justify-between gap-8"
          >
            <div>
              <div className="font-display font-bold text-2xl text-white mb-2">
                Ready to Start Your Project?
              </div>
              <div className="text-[#7A9CC0] text-base">
                Contact us — we'll respond within one business day.
              </div>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Link
                to="/contact"
                className="px-8 py-4 bg-[#00A9E0] text-white font-condensed font-bold text-[12px] tracking-[0.15em] uppercase hover:bg-[#00BFFF] transition-colors duration-300"
              >
                Contact Us
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border border-[#1A3058] text-[#A0B8D8] font-condensed font-bold text-[12px] tracking-[0.15em] uppercase hover:border-[#00A9E0] hover:text-[#00A9E0] transition-all duration-300"
              >
                Download Presentation
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr_1fr_1fr] gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo.png" alt="SET" className="h-12 w-auto" />
              <div>
                <div className="font-display font-bold text-white text-lg tracking-wide">SET</div>
                <div className="font-condensed text-[#7A9CC0] text-[10px] tracking-[0.15em] uppercase">Smart Engineering Technologies</div>
              </div>
            </div>
            <p className="text-[#7A9CC0] text-base leading-relaxed mb-8 max-w-sm font-light">
              International engineering company delivering intelligent solutions 
              for energy, oil & gas, and industrial sectors.
            </p>
            <div className="space-y-3 text-base">
              <div className="text-[#7A9CC0]">
                <span className="text-[#5A7090] font-medium">Website:</span>{' '}
                <a href="https://setpower.az" className="text-[#A0B8D8] hover:text-[#00A9E0] transition-colors">setpower.az</a>
              </div>
              <div className="text-[#7A9CC0]">
                <span className="text-[#5A7090] font-medium">Phone:</span>{' '}
                <a href="tel:+994502475057" className="text-[#A0B8D8] hover:text-[#00A9E0] transition-colors">+994 50 247 50 57</a>
              </div>
              <div className="text-[#7A9CC0]">
                <span className="text-[#5A7090] font-medium">Email:</span>{' '}
                <a href="mailto:info@setpower.az" className="text-[#A0B8D8] hover:text-[#00A9E0] transition-colors">info@setpower.az</a>
              </div>
            </div>
            <div className="flex gap-3 mt-8">
              <a href="#" className="w-10 h-10 border border-[#1A3058] flex items-center justify-center text-[#7A9CC0] hover:border-[#00A9E0] hover:text-[#00A9E0] transition-all text-xs font-condensed font-bold">
                in
              </a>
              <a href="#" className="w-10 h-10 border border-[#1A3058] flex items-center justify-center text-[#7A9CC0] hover:border-[#00A9E0] hover:text-[#00A9E0] transition-all">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm2.9 2.9h-1.2c-.5 0-.6.2-.6.6v1h1.8L10.6 8H9v4.6H7.1V8H5.7V5.5h1.4V4.4c0-1.3.8-2.2 2-2.2h1.8v1.7z" fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <div className="font-condensed text-[10px] tracking-[0.3em] uppercase text-[#00A9E0] mb-6 font-semibold">{col.title}</div>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.href}
                      className="text-[#7A9CC0] text-base hover:text-[#00A9E0] transition-colors font-light"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-[#1A3058]">
          <div className="text-[#4A6888] text-sm">
            © 2026 SET — Smart Engineering Technologies. All rights reserved.
          </div>
          <div className="flex gap-8">
            <a href="#" className="text-[#4A6888] text-sm hover:text-[#7A9CC0] transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#4A6888] text-sm hover:text-[#7A9CC0] transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
