import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Poor from "../core/Assests/poor3.jpg";
import Tri from "../images_icons/Protri.svg";
import Aos from "aos";
import Poor2 from "../gal/1(1).JPG";
import Poor3 from "../gal/1(2).jpg";
import Poor4 from "../gal/1(3).JPG";
import Poor5 from "../gal/1(4).JPG";
import Poor6 from "../gal/1(5).JPG";
import Poor7 from "../gal/1(6).JPG";
import Poor8 from "../gal/1(7).JPG";
import Poor9 from "../gal/1(8).JPG";
import Poor10 from "../gal/1(9).jpg";
import Poor11 from "../gal/1(10).JPG";
import Poor12 from "../gal/1(11).JPG";
import Poor13 from "../gal/1(12).JPG";
import Poor14 from "../gal/1(13).JPG";
import Poor15 from "../gal/1(14).JPG";
import Poor16 from "../gal/1(15).JPG";
import Poor17 from "../gal/1(16).JPG";
import SLumm from "./Slum";
import Studplay from "./Studplay";

const Program = () => {
  Aos.init({
    offset: 300,
    duration: 500,
    delay: 12,
  });

  return (
    <>
      <div className="abo4">
        <div data-aos="zoom-in" className="abo">
          <h2>Indian Dancers Relief Program</h2>
        </div>
        <div data-aos="fade-up" className="pro1">
          <Container fluid>
            <Row>
              <Col lg={7} sm={12} xs={12}>
                <div className="pro2">
                  <p>
                    During the first lockdown, 41% of the creative sector
                    closed, and 53% of the events and entertainment management
                    sector experienced 90% of their business cancelled between
                    March and July 2020 itself. The creative sector continues to
                    struggle, and the impact of such closures has and continues
                    to cause artists to struggle, specifically dancers. The
                    community of dancers is, undeniably, a huge and diverse
                    sector, but also unorganized. Small studio owners,
                    struggling dancers as well as folk artists are a part of the
                    performing arts community that has been deeply affected by
                    the pandemic.
                  </p>

                  <p>
                    The nature of the art form is such that it is interwoven
                    with bringing people together, and due to the restrictions
                    on gatherings, the effect on dancers has been drastic and
                    immediate. Due to this, they are forced to look at
                    alternative ways of providing for themselves, outside of
                    dance. This has created unique challenges for all those who
                    depended on dance for their livelihood. Those operating at
                    the intersections of caste, class, religion, gender-based
                    vulnerabilities have faced multiple systematic challenges
                    over the years, which the lockdown has only added onto.
                  </p>
                  <ol>
                    <li>
                      DIRECT CASH TRANSFER: Provide direct cash transfers to
                      cover base expenses.
                    </li>
                    <li>
                      ESSENTIAL SUPPLIES: Provide ration and essential supplies.
                    </li>
                    <li>
                      NETWORKING: Create a network of dancers across the country
                      to initiate coordinated conversation and dialogue around
                      common challenges.
                    </li>
                    <li>
                      MENTORSHIP: Link renowned stalwarts of dance to
                      small-scale dancers through periodic interactions,
                      masterclasses, etc.
                    </li>
                    <li>
                      VISIBILITY: To highlight struggles and challenges faced by
                      vulnerable dancers, especially during the COVID-19
                      pandemic.
                    </li>
                    <li>
                      SYSTEMATIC REFORM: Push for social security measures for
                      dancers by initiating conversations with governmental
                      bodies carrying out policy research.
                    </li>
                  </ol>
                </div>
              </Col>
              <Col lg={5} sm={12} xs={12}>
                <div className="pro3">
                  <img src={Poor} alt="altimage" />
                  <div style={{ paddingLeft: "48px" }}>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.payumoney.com/webfronts/#/index/da"
                    >
                      <button
                        className="btn btn-warning mt-3"
                        onClick={() => {
                          const navlinks = document.querySelector(".navlink");
                          navlinks.classList.toggle("open");
                        }}
                      >
                        Contribute to the livelihood of Dancers in India
                      </button>
                    </a>
                  </div>
                </div>
                <img className="pro33" src={Tri} alt="altimage" />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="port6">
          <h4 style={{ fontWeight: "bolder", fontSize: "2rem" }}>Gallery</h4>
          <Container fluid>
            <Row>
              <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor2} target="_black" rel="noopener noreferrer">
                    <img src={Poor2} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor3} target="_black" rel="noopener noreferrer">
                    <img src={Poor3} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor4} target="_black" rel="noopener noreferrer">
                    <img src={Poor4} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-left" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor5} target="_black" rel="noopener noreferrer">
                    <img src={Poor5} alt="altimage" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid data-aos="zoom-in">
            <Row>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor6} target="_black" rel="noopener noreferrer">
                    <img src={Poor6} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor7} target="_black" rel="noopener noreferrer">
                    <img src={Poor7} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor8} target="_black" rel="noopener noreferrer">
                    <img src={Poor8} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor10} target="_black" rel="noopener noreferrer">
                    <img src={Poor10} alt="altimage" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid>
            <Row>
              <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor11} target="_black" rel="noopener noreferrer">
                    <img src={Poor11} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor12} target="_black" rel="noopener noreferrer">
                    <img src={Poor12} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor13} target="_black" rel="noopener noreferrer">
                    <img src={Poor13} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col data-aos="flip-right" sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor14} target="_black" rel="noopener noreferrer">
                    <img src={Poor14} alt="altimage" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
          <Container fluid data-aos="zoom-in">
            <Row>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor15} target="_black" rel="noopener noreferrer">
                    <img src={Poor15} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor16} target="_black" rel="noopener noreferrer">
                    <img src={Poor16} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor17} target="_black" rel="noopener noreferrer">
                    <img src={Poor17} alt="altimage" />
                  </a>
                </div>
              </Col>
              <Col sm={6} md={4} lg={3}>
                <div className="port7">
                  <a href={Poor9} target="_black" rel="noopener noreferrer">
                    <img src={Poor9} alt="altimage" />
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <SLumm />
        <Studplay />
        <div className="aboo">
          <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
        </div>
      </div>
    </>
  );
};

export default Program;
