import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'

import about from '../../../public/2dModels/aboutSign.png'
import Skills from './Skills.jsx'

export default function About() {
  return (
    <>
      <section className="about-banner" id="about">
        <Container>
          <Row className="align-items-center">
            <Col sx={10} md={4} xl={6}>
              <img
                src={about}
                className="about-sign float-img"
                alt="header-image"
              />
            </Col>
            <Col xs={12} md={6} xl={5}>
              <h2 className="section-header">About</h2>

              <p className="about-bio">
                I'm captivated by the limitless creative possibilities of web
                development and the vast audience it can reach. As a
                self-employed artist with a diverse background in music,
                teaching, and jewelry, I've immersed myself in design, branding,
                and online media. Through my experiences, I've honed my skills
                in web design and online media, constantly seeking new learning
                opportunities.
              </p>

              <Skills />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
