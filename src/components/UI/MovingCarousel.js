import React from 'react'
import { Alert, Carousel } from 'react-bootstrap'
import Apartment1 from './../../static/apartment1.jpg'
import Apartment2 from './../../static/apartment2.jpg'
import Apartment3 from './../../static/apartment3.jpg'
const MovingCarousel = (props) => {
    return (<div>
        <Carousel>
            <Carousel.Item>
                <img
                    src={Apartment1}
                    width={800} height={400} alt="400x500"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={Apartment2}
                    width={800} height={400} alt="400x500"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    src={Apartment3}
                    width={800} height={400} alt="400x500"
                />
            </Carousel.Item>
        </Carousel>
        <Alert variant="primary">
            The idea behind creating this Apartment Portal is to have the transparency and clear view of the Apartment.
        </Alert>
    </div>
    )
}
export default MovingCarousel