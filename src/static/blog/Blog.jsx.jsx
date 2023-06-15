import { useEffect, useState, useRef } from 'react'
import { useParams } from 'react-router'
import { posts } from './blogData'
import { Container, Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import Error from '../components/Error'
import Preview from '../components/Preview'

export default function Blog() {
  const { id } = useParams()
  const [blog, setBlog] = useState(null)
  const postRef = useRef(null)

  useEffect(() => {
    let blog = posts.find((blog) => blog.id === parseInt(id))
    if (blog) {
      setBlog(blog)
      postRef.current.scrollIntoView()
    }
  }, [])

  return (
    <>
      <NavBar />
      <section className="blog-post" id="post" ref={postRef}>
        {blog ? (
          <>
            <Container>
              <Row>
                <h2>{blog.title}</h2>

                <NavLink className="blog-site-button" to={blog.site}>
                  3D Site
                </NavLink>
                <NavLink className="blog-site-button" to={blog.github}>
                  Github repo
                </NavLink>
              </Row>
              <h3>Kaupapa</h3>
              <h4 className="Kaupapa">{blog.kaupapa}</h4>
              <img src={blog.preview}></img>

              <div>
                <Row className="blog-post-row">
                  <Col>
                    <h3>Design</h3>
                    <p>{blog.design}</p>
                  </Col>
                  <Col>
                    <img classname="post-img" src={blog.img1} />
                  </Col>
                </Row>
              </div>

              <div>
                <Row>
                  <Col>
                    <img classname="post-img" src={blog.img2} />
                  </Col>
                  <Col>
                    <h3>3D Models</h3>
                    <p>{blog.p2}</p>
                  </Col>
                </Row>
              </div>
              <Row>
                <Col>
                  <h3>Development</h3>
                  <p>{blog.p3}</p>
                </Col>
                <Col>
                  <img classname="post-img" src={blog.img3} />
                </Col>
              </Row>
            </Container>
            <Preview />

            <Footer />
          </>
        ) : (
          <Error />
        )}
      </section>
    </>
  )
}
