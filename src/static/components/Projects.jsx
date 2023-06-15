import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'

import ProjectCards from './ProjectCards'

import { posts } from '../blog/blogData.js'

export default function Projects() {
  const blogData = posts

  const projectElements = blogData.map((work) => {
    return <ProjectCards key={work.id} {...work} />
  })
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <>
      <section className="project" id="projects">
        <h2 className="project-section-header">Projects</h2>
        <Container>
          <Row>
            <Col>
              <div className="project-bx">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="project-slider"
                >
                  {projectElements.map((element) => (
                    <div className="project-item" key={element.key}>
                      {element}
                    </div>
                  ))}
                </Carousel>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}
