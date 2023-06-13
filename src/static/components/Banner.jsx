import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'

import start from '../../../public/2dModels/Entrance.png'

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const toRotate = ['Creative Web Developer', 'Artist', 'Creative']
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(300 - Math.random() * 100)
  const period = 2000

  useEffect(() => {
    let ticker = setInterval(() => {
      tick()
    }, delta)
    return () => {
      clearInterval(ticker)
    }
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length
    let fullText = toRotate[i]
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1)

    setText(updatedText)

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setDelta(period)
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setDelta(500)
    }
  }

  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            <Col sx={12} md={6} xl={7}>
              <h2>Kia ora!</h2>
              <h1>I'm Manuela</h1>
              <p>
                A creative web developer <br />
                based in Tāmaki Makaurau, Auckland
                <br /> New Zealand.
              </p>
              <button className="vvd" onClick={() => console.log('connect')}>
                <span>Get to know me</span>
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={start} alt="header-image" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
