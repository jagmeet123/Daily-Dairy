import { Carousel } from "react-bootstrap";
import "./Home.css";

let Slider = () => {
    return (
        <div className="slider123">

            <Carousel>
                <Carousel.Item>


                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(62).jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Life is what happens when you're busy making other plans.” — John Lennon.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>

                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(69).jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>“ Get busy living or get busy dying.”</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://mdbootstrap.com/img/Photos/Slides/img%20(67).jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>“ You only live once, but if you do it right, once is enough.” </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Slider;