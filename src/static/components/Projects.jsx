import { Container, Row, Col, Tab, Nav } from 'react-bootstrap'

import ProjectCards from './ProjectCards'

import works from '../../../public/2dModels/worksSign.png'
import aboutBuildings from '../../../public/2dModels/contactBuildings.png'
import bowie from '../../../public/img/bowie.png'

export default function Projects() {
  const project = [
    {
      title: 'Frankie Ruins',
      description: 'design, development and 3dModels',
      imgUrl: bowie,
    },
    {
      title: 'Elf.co',
      description: 'development and design',
      imgUrl: bowie,
    },
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
              magnam?
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {project.map((project, index) => {
                      return <ProjectCards key={index} {...project} />
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">Lorem Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">Lorem Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={works} className="project-img float-img" />
      <img src={aboutBuildings} className="contact-buildings float-img" />
    </section>
  )
}
