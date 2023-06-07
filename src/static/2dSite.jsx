import { NavLink } from 'react-router-dom'
import '../static/2dSite.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

const entry = './2dModels/Entrance.png'
const works = './2dModels/works.png'
const contact = './2dModels/contactFar.png'
const about = './2dModels/aboutFar.png'
const game = './2dModels/game.png'

export default function StaticPage() {
  return (
    <>
      <main>
        {/* HEADER */}

        <NavBar />
        <Banner />
        <Skills />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
