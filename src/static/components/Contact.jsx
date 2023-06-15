import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import contactImg from '../../../public/2dModels/contactSign.png'
import email from '../../../public/icons/email.png'

export default function Contact() {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('send')
  const [status, setStatus] = useState({})

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault() //Prevents the page reloading after submit
    setButtonText('Sending ...')
    let response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formDetails),
    })

    setButtonText('Send')
    let result = await response.json()
    setFormDetails(formInitialDetails)
    if (result.done === 200) {
      setStatus({ success: true, message: 'Message sent successfully' })
    } else {
      setStatus({
        success: false,
        message: 'Something went wrong, please try again later',
      })
    }
  }

  return (
    <section className="contact" id="connect">
      <Container className="contact-bx">
        <Row className="align-items-center">
          <Col md={6} className="contact-form-col">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate('firstName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate('lastName', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email Address"
                    onChange={(e) => onFormUpdate('email', e.target.value)}
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone Number"
                    onChange={(e) => onFormUpdate('phone', e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="Message"
                    onChange={(e) => onFormUpdate('message', e.target.value)}
                  />
                  <button className="contact-form-send" type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? 'danger' : 'success'
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
              <a
                href="mailto:manuelaovalle1@gmail.com"
                className="contact-email-link"
              >
                <p>Or Flick me an email </p>
              </a>
            </form>
          </Col>
          <Col md={6}>
            <img
              src={contactImg}
              className="float-img contact-sign-img"
              alt="Contact us"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}
