import { Container, Row, Col } from 'react-bootstrap'

import MailchimpForm from './MailchimpForm'
import NewsLetter from './Newsletter'

import github from '../../../public/icons/github.svg'
import linkedin from '../../../public/icons/linkedin.svg'
import email from '../../../public/icons/email.png'
import manuela from '../../../public/icons/manuela.svg'

import worksBuilding from '../../../public/2dModels/worksBuildings.png'

export default function Footer() {
  return (
    <footer className="footer">
      <img src={worksBuilding} className="works-buildings float-img" />
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
            <img src={manuela} alt="website Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="">
                <img src={github} />
              </a>
              <a href="">
                <img src={linkedin} />
              </a>
              <a href="">
                <img src={email} />
              </a>
            </div>
            <p>Copyright 2023, All Rights Reserved by Manuela Ovalle</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
