import React from "react";
import Poor from "./Assests/poor5.png";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import AOS from "aos";

const Blogs = () => {
  const changeScreen = () => {
    const proo = document.querySelector(".gal2");
    proo.style.marginLeft = "0vw";

    var element = document.querySelector(".pro10");
    element.classList.add("acctive");
    var element1 = document.querySelector(".pro11");
    element1.classList.remove("acctive");
    // var element2 = document.querySelector(".pro12");
    // element2.classList.remove("acctive");
    // var element3 = document.querySelector(".pro13");
    // element3.classList.remove("acctive");
  };
  const changeScreen1 = () => {
    const prooo = document.querySelector(".gal2");
    prooo.style.marginLeft = "-100vw";

    var element = document.querySelector(".pro10");
    element.classList.remove("acctive");
    var element1 = document.querySelector(".pro11");
    element1.classList.add("acctive");
    // var element2 = document.querySelector(".pro12");
    // element2.classList.remove("acctive");
    // var element3 = document.querySelector(".pro13");
    // element3.classList.remove("acctive");
  };
  const changeScreen2 = () => {
    const proooo = document.querySelector(".gal2");
    proooo.style.marginLeft = "-200vw";

    var element = document.querySelector(".pro10");
    element.classList.remove("acctive");
    var element1 = document.querySelector(".pro11");
    element1.classList.remove("acctive");
    // var element2 = document.querySelector(".pro12");
    // element2.classList.add("acctive");
    // var element3 = document.querySelector(".pro13");
    // element3.classList.remove("acctive");
  };
  const changeScreen3 = () => {
    const prooooo = document.querySelector(".gal2");
    prooooo.style.marginLeft = "-300vw";

    var element = document.querySelector(".pro10");
    element.classList.remove("acctive");
    var element1 = document.querySelector(".pro11");
    element1.classList.remove("acctive");
    // var element2 = document.querySelector(".pro12");
    // element2.classList.remove("acctive");
    // var element3 = document.querySelector(".pro13");
    // element3.classList.add("acctive");
  };

  AOS.init({
    offset: 200,
    duration: 500,
    delay: 0,
  });

  return (
    <div style={{ overflow: "hidden" }}>
      <div className="gal1">
        <h2>Blogs / Stories of Change</h2>
      </div>
      <div data-aos="zoom-in" className="gal22">
        <div className="gal2">
          <div className="gal3">
            <div className="gal4">
              <Container fluid>
                <Row>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3" id="a1">
                        <h5>Bobby Jain</h5>
                        <br></br>
                        <p>
                          There are two things which keep Bobby Jain going. One
                          is the passion to become a dancer...
                        </p>
                        <a href="https://www.notion.so/Bobby-Jain-5ae9031267be4d679cd9cba73437b3b4">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3">
                        <h5>Jaikishan</h5>
                        <br></br>
                        <p>
                          As Jaikishan danced for his sixth-grade school annual
                          day, he realised that this was something..
                        </p>
                        <a href="https://www.notion.so/Jaikishan-0673a97fec594db88b6a979595ac8904">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
              <Container fluid>
                <Row>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3">
                        <h5>Karan Ahirwar</h5>
                        <br></br>
                        <p>
                          Dancer Karan Ahirwar has performed in star hotels, met
                          Pranab Mukharjee and he...
                        </p>

                        <a href="https://www.notion.so/Karan-Ahirwar-e8327eabbb54434894be1aa3b843144c">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3">
                        <h5>Lucky Sharma</h5>
                        <br></br>

                        <p>
                          As a child, Lucky Sharma was fascinated by dance. All
                          through her growing years, she enthus...
                        </p>
                        <a href="https://www.notion.so/Lucky-Sharma-ec7e17fab26244bdb704ef9f23e20ad2">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="gal3">
            <div className="gal4">
              <Container fluid>
                <Row>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3">
                        <h5>Kaushal</h5>
                        <br></br>
                        <p>
                          Kaushal readies himself for his dance audition with
                          Dance Out of Poverty the next day and he...
                        </p>
                        <a href="https://www.notion.so/Kaushal-cff77e5d73864ed49070caa119194486">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                  <Col sm={6} lg={6}>
                    <div className="blog1">
                      <div className="blog2">
                        <img src={Poor} alt="altimage" />
                      </div>
                      <div className="blog3">
                        <h5>Zeba Ansari</h5>
                        <br></br>

                        <p>
                          A father bursts into the Dance Out of Poverty Studio
                          and takes his daughter away, furious...
                        </p>
                        <a href="https://www.notion.so/Zeba-Ansari-92a1f8b40deb48e0b8fcce5bb1e9fb9e">
                          Read More
                        </a>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="zoom-out" className="pro3">
        <ul className="pro4">
          <li onClick={changeScreen} className="galll18">
            <i className="fa fa-arrow-left"></i>
          </li>
          <li onClick={changeScreen}>
            <button className="pro10 acctive">1</button>
          </li>
          <li onClick={changeScreen1}>
            <button className="pro11">2</button>
          </li>

          <li onClick={changeScreen1} className="galll18">
            <i className="fa fa-arrow-right"></i>
          </li>
        </ul>
      </div>
      <div className="aboo">
        <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
      </div>
    </div>
  );
};

export default Blogs;
