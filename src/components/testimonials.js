import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import img01 from '../assets/images/testimonials/square.png'
import img02 from '../assets/images/testimonials/mazepath.png'

const Testimonials = (props) => (
    <div id="testimonials-component">
        <Container>
            <Row>
                <Col>
                    <Row className="testimonial">
                        <Col className="image" md="4">
                            <img src={img01} alt="Blanco Square"/>
                        </Col>
                        <Col className="text" md="8">
                            <h5><strong>Testimonial title</strong></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis fringilla elit, a efficitur risus blandit non. Nullam semper consectetur euismod. Vivamus tempus pulvinar dolor.</p>
                        </Col>
                    </Row>
                </Col>
                <Col>
                    <Row className="testimonial">
                        <Col className="image" md="4">
                            <img src={img02} alt="Mazepath"/>
                        </Col>
                        <Col className="text" md="8">
                            <h5><strong>Testimonial title</strong></h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis fringilla elit, a efficitur risus blandit non. Nullam semper consectetur euismod. Vivamus tempus pulvinar dolor.</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
)

export default Testimonials