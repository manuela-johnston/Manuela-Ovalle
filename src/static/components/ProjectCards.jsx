import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function ProjectCards(props) {
  return (
    <Col>
      <Link to={props.blogUrl} className="blog-button">
        <div className="project-card">
          <div className="image-container">
            <video
              className="project-vid"
              src={props.video}
              autoPlay
              loop
              muted
            />
          </div>
          <div className="project-card-content">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </Col>
  )
}
