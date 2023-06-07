import { Container, Row, Col } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

import '../../static/2dSite.css'

//IMAGES
import css from '../../../public/icons/css.png'
import html from '../../../public/icons/html-icon.png'
import react from '../../../public/icons/icons8-react.svg'
import js from '../../../public/icons/icons8-javascript.svg'
import three from '../../../public/icons/three.png'
import blender from '../../../public/icons/blender.png'
import vite from '../../../public/icons/vite.png'
import sqlite from '../../../public/icons/sqlite.png'

import aboutBuildings from '../../../public/2dModels/aboutBuildings.png'

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 9,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  }

  return (
    <section className="skill" id="skills">
      <h2 className="tech-stack-header">TECH STACK</h2>
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={css} alt="#" className="tech-icon" />
                  <p>CSS</p>
                </div>

                <div className="item">
                  <img src={html} alt="#" />
                  <p>HTML</p>
                </div>

                <div className="item">
                  <img src={react} alt="#" />
                  <p>React & R3F</p>
                </div>

                <div className="item">
                  <img src={js} alt="#" />
                  <p>Javascript</p>
                </div>

                <div className="item">
                  <img src={three} alt="#" />
                  <p>Three.js</p>
                </div>
                <div className="item">
                  <img src={blender} alt="#" />
                  <p>Blender</p>
                </div>
                <div className="item">
                  <img src={vite} alt="#" />
                  <p>Vite</p>
                </div>
                <div className="item">
                  <img src={sqlite} alt="#" />
                  <p>Sqlite</p>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
        <img
          className="about-buildings-img float-img"
          src={aboutBuildings}
          alt="3d models inspired by buildings from the 1960s cartoon the Jetsons, made by Manuela on blender"
        />
      </Container>
    </section>
  )
}
