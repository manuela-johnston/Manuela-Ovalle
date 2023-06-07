import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'

import about from '../../../public/2dModels/aboutSign.png'

export default function Banner() {
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
              <h1 className="section-header">ABOUT</h1>

              <p className="about-bio">
                Kia ora! Ko Manuela toku ingoa. I am a passionate artist who
                brings ideas to life through code. <br /> <br />
                The world of web development has drawn me in because of the
                endless possibilities it offers for creative exploration and the
                broad potential reach of any online project. <br /> <br />
                As a self-employed business owner, I have needed to delve into
                design, branding and online media. I have a rich background as a
                self-employed musician, teacher and jeweller. Through this
                experience I have had many opportunities to delve into web
                design, brand development and online media. My enthusiasm to
                find solutions has given me the confidence to put myself in new
                learning situations.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
