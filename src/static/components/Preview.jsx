import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import portfolioRecording from '../../../public/portfolio-recording.mp4'

export default function Preview() {
  return (
    <>
      <Container>
        <Link to="/3d" className="marble-run-link">
          <Row className="site-preview">
            <h1>My 3d Portfolio</h1>
            <p className="site-preview-p">
              Check out the 3d Version of this site
            </p>

            <video
              className="3d-vid"
              src={portfolioRecording}
              loop
              autoPlay
              muted
            ></video>
          </Row>
        </Link>
      </Container>
    </>
  )
}
