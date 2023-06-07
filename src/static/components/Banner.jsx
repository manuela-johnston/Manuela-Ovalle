import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import { useEffect, useState } from 'react'

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
              <span className="tagline">Welcome to my portfolio</span>
              <h1>
                Kia ora! <br /> I'm Manuela
              </h1>
              <p>
                I am a creative web developer based in Auckland, New Zealand.
              </p>
              <button
                className=" banner-connect-btn"
                onClick={() => console.log('connect')}
              >
                Let's connect
                <ArrowRightCircle size={25} />
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
