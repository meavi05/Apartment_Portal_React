import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { MovingCarousel } from '../../ImportComponents'

const Welcome = (props) => {
    return (
        <Container>
            <Row>
                <Col>
                    <MovingCarousel />
                </Col>
            </Row>
        </Container>
    )
}
export default Welcome;