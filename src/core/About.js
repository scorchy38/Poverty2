import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutt from "../images_icons/About1.svg";
import Circle from "../images_icons/Aboutcircle.png";
import AOS from "aos";

import Cause from "./Cause";
import Curriculum from "./Curriculum";
import Ourvision from "./Ourvision";
import Concert from "./Concert";

const About = () => {
  AOS.init({
    offset: 400,
    duration: 500,
    delay: 12,
  });
  return (
    <div className="abo4">
      <div data-aos="fade-in" className="abo3">
        <Container fluid>
          <Row>
            <Col lg={5} sm={6} xs={12}>
              <div className="abo1">
                <img src={Aboutt} alt="aboutimage" />
              </div>
            </Col>
            <Col lg={7} sm={6} xs={12}>
              <div className="abooo">
                <h2>All for Dance & Dance for All</h2>
              </div>
              <div className="abo2">
                <img src={Circle} alt="altimage" />
                <p>
                  Started in 2016, Dance Out of Poverty is the flagship
                  initiative of Sinhayana Foundation, an independent, non-profit
                  organization. The initiative aims at empowering
                  underprivileged children by providing free of cost dance
                  education and instilling life skills. At Dance Out Of Poverty,
                  their energy is channelized by keeping them away from bad
                  influences like drugs, stealing, etc. The focus is on
                  nurturing the students and making them proficient to dance
                  their way out of poverty!
                </p>
                <p>
                  Dance Out of Poverty enables them to develop skills and
                  confidence to face the world and achieve their dreams. Its
                  group-based dance learning program supports children from
                  marginalized communities, under-resourced schools &
                  institutions to realize their true potential and be the
                  narrator of their own stories. They are provided with various
                  platforms to showcase their talent.
                </p>
                <p>
                  In addition to free training and employment opportunities,
                  Dance Out Of Poverty promotes a culture of happiness, social
                  inclusion and fitness.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Cause />
      <Ourvision />

      <Curriculum />
      <Concert />
      <div className="aboo">
        <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
      </div>
    </div>
  );
};

export default About;
