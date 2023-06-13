import { NavLink } from 'react-router-dom'
import '../static/2dSite.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function StaticPage() {
  return (
    <>
      <main>
        {/* HEADER */}

        <NavBar />
        <Banner />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
