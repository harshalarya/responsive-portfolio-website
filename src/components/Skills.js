import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/Image/meter1.svg";
import meter2 from "../assets/Image/meter2.svg";
import meter3 from "../assets/Image/meter3.svg";
import colorsharp from "../assets/Image/color-sharp.png";
import '../App.css';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return (
        <section className="Skills" id="Skills"> 
            <Container>
                <Row>
                    <Col>
                        <div className="Skill-bx">
                            <h2>Skills</h2>
                            <p>Programming: Python (Beginner), C++(Intermediate) <br></br> Frontend: JavaScript (Intermediate) [React.js] <br></br> Designing: Brand Design (Intermediate), Product Design (Intermediate)</p>
                            <Carousel responsive={responsive} infinite={true} className="skills-slider">
                                <div className="items">
                                    <img src={meter1} alt=""/>
                                    <h5>Frontend engineer</h5>
                                </div>
                                <div className="items">
                                    <img src={meter2} alt=""/>
                                    <h5>Designer</h5>
                                </div>
                                <div className="items">
                                    <img src={meter3} alt=""/>
                                    <h5>Web Designer</h5>
                                </div>
                                <div className="items">
                                    <img src={meter1} alt=""/>
                                    <h5>Product Designer</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorsharp} alt="Image" />
        </section>
      )
}