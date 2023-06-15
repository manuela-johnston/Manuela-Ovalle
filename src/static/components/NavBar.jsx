import { useState, useEffect } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'

import '../../static/2dSite.css'

import github from '../../../public/icons/github.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import email from '../../../public/icons/email.png'
import manuela from '../../../public/icons/manuela.svg'

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', onScroll)
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          {/* <Navbar.Brand href="#home">
            <img src={manuela} alt="logo" />
          </Navbar.Brand> */}

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="/2d/#home"
                className={
                  activeLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/2d/#about"
                className={
                  activeLink === 'about' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('about')}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/2d/#projects"
                className={
                  activeLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Manuela-Ovalle">
                  <img src={github} alt="" />
                </a>
                <a href="https://www.linkedin.com/in/manuela-ovalle-b5660a259/">
                  <img src={linkedin} alt="" />
                </a>
                <a href="mailto:manuelaovalle1@gmail.com">
                  <img src={email} alt="" />
                </a>
              </div>

              <button>
                <Nav.Link
                  href="#connect"
                  className={
                    activeLink === 'projects'
                      ? 'active navbar-link'
                      : 'navbar-link'
                  }
                  onClick={() => onUpdateActiveLink('projects')}
                >
                  <span className="button-text">Let's Connect</span>
                </Nav.Link>
              </button>
              <button className="vvd">
                <NavLink to="/3d">
                  <span className="button-text">3d site</span>
                </NavLink>
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
