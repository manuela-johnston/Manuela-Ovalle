import { Col } from 'react-bootstrap'

export default function ProjectCards(props) {
  return (
    <Col>
      <div className="project-card-item">
        <img src={props.imgUrl} />
        <div className="project-card-text">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
    </Col>
  )
}
