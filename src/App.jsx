import { useState } from 'react'
import Loader from './components/Loader/Loader'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import ScrollBanner from './components/ScrollBanner/ScrollBanner'
import Technologies from './components/Technologies/Technologies'
import Certificates from './components/Certificates/Certificates'
import Experience from './components/Experience/Experience'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
{loading && <Loader onFinish={() => setLoading(false)} />}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <ScrollBanner />
        <Technologies />
        <Certificates />
        <Experience />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
