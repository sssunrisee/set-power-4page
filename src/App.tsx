import { HashRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Mission from './components/Mission'
import Vision from './components/Vision'
import WhySET from './components/WhySET'
import Directions from './components/Directions'
import Services from './components/Services'
import Industries from './components/Industries'
import Projects from './components/Projects'
import Academy from './components/Academy'
import Partners from './components/Partners'
import CEO from './components/CEO'
import Documents from './components/Documents'
import News from './components/News'
import Contact from './components/Contact'
import Footer from './components/Footer'

function HomePage() {
  return (
    <div className="bg-white text-[#0A1628] min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Mission />
        <Vision />
        <WhySET />
        <CEO />
      </main>
      <Footer />
    </div>
  )
}

function ServicesPage() {
  return (
    <div className="bg-white text-[#0A1628] min-h-screen">
      <Nav />
      <main>
        <Directions />
        <Services />
        <Industries />
      </main>
      <Footer />
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="bg-white text-[#0A1628] min-h-screen">
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
    <div className="bg-[#F8FAFC] text-[#0A1628] min-h-screen">
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
