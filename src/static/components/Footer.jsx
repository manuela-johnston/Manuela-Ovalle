import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import MailchimpForm from './MailchimpForm'
import NewsLetter from './Newsletter'

import github from '../../../public/icons/github.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import email from '../../../public/icons/email.png'
import portfolioRecording from '../../../public/portfolio-recording.mp4'
export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-left">
          {/* <MailchimpForm /> */}

          <Col sm={12} className="text-center text-sm-end">
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
            <p className="copy">
              Copyright 2023, All Rights Reserved by Manuela Ovalle
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
