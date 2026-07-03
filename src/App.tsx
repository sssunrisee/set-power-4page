import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Industries from './components/Industries'
import Projects from './components/Projects'
import Academy from './components/Academy'
import Partners from './components/Partners'
import Documents from './components/Documents'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="bg-[#080C14] text-[#E2EAF4] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="bg-white text-[#0B1D3A] min-h-screen">
      <Nav />
      <main>
        <Services />
        <Industries />
      </main>
      <Footer />
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="bg-white text-[#0B1D3A] min-h-screen">
      <Nav />
      <main>
        <Projects />
        <Academy />
        <Partners />
      </main>
      <Footer />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="bg-[#F5F7FA] text-[#0B1D3A] min-h-screen">
      <Nav />
      <main>
        <Documents />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </HashRouter>
  )
}
