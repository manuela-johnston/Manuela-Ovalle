import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'

import ProjectCards from './ProjectCards'

import works from '../../../public/2dModels/worksSign.png'
import aboutBuildings from '../../../public/2dModels/contactBuildings.png'
import bowie from '../../../public/img/bowie.png'

export default function Projects() {
  const project = [
    {
      id: 1,
      title: 'Frankie Ruins',
      description: 'design, development and 3dModels',
      imgUrl: bowie,
    },
    {
      id: 2,
      title: 'Elf.co',
      description: 'development and design',
      imgUrl: bowie,
    },
  ]

  const projectElements = project.map((work) => {
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
      <section className="project" id="project">
        <h2 className="section-header">Projects</h2>
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
        {/* <img src={works} className="project-img float-img" />
      <img src={aboutBuildings} className="contact-buildings float-img" /> */}
      </section>
    </>
  )
}
