import React, { useState } from "react";
import AOS from "aos";
import { Carousel } from "react-bootstrap";
import Footer from "../PageHelper/Footer";
import Sin from "./Assests/Sinhayana Logo.png";
import Jor from "./Assests/VWU.jpg";
import Par from "./Assests/partner.svg";
import Vis from "./Assests/ourprog.JPG";
import Team from "./Assests/team.svg";
// import Shi from './Assests/Shimak.png';
// import car1 from './Assests/car1.svg'
// import car2 from './Assests/car2.svg'
// import car3 from './Assests/car3.svg'
import "aos/dist/aos.css";
import { Modal, Button } from "react-bootstrap";
import "./component.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import Youtube from "./Youtube";
import "bootstrap/js/dist/button";
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
// import Map0 from './Assests/India Map.png';
// import Map3 from '../images_icons/Vector.svg';
// import Map4 from '../images_icons/Vector2.svg';
// import Cele from '../cele/amit.jpg'
// import Cele1 from '../cele/disha.jpg'
// import Cele2 from '../cele/divya.jpg'
// import Cele3 from '../cele/hritik.jpg'
// import Cele4 from '../cele/kriti.jpeg'
// import Cele5 from '../cele/rakul.jpg'
// import Cele6 from '../cele/ranvir.jpg'
// import Cele7 from '../cele/saroj.jpg'
// import Cele8 from '../cele/sid.jpg'
// import Cele9 from '../cele/tiger.jpg'
import Poor3 from "../gallery/1(2).jpg";
import Poor4 from "../gallery/1(7).JPG";
import Poor5 from "../gallery/1(15).jpg";
import Poor6 from "../gallery/1(16).jpg";
import Poor7 from "../gallery/113).jpg";
import Poor8 from "../gall/aka13.JPG";
// import R1 from '../images_icons/roadmap.jpg';
// import R2 from './Assests/r2.jpg';
// import R3 from './Assests/r3.jpg';
import Donors from "./Donors";
import Timeline from "./Timeline";
import { Donate, DonateCTA, DonateData } from "./Donate";
// import card from './card'
// import asia from './Assests/asian.jpg';
// import pink from './Assests/pink.png';
// import dc from './Assests/dc.png';
// import abp from './Assests/abp.jpg'
// import hindustan from './Assests/hindustan.png';
// import bombay from './Assests/bombay.png';
// import film from './Assests/film.jpeg';
// import better from './Assests/film.jpeg';
// import yahoo from './Assests/Yahoo.png';
// import mid from './Assests/mid.jpg';
// import TOI from './Assests/TOI.png';
// import pk from './Assests/pk.jpg'

const Home = () => {
  AOS.init({
    offset: 250,
    duration: 500,
    delay: 0,
  });
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const state1 = [
  //     <img src={Poor3} className="esst" alt="Alt" />,
  //     <img src={Poor4} className="esst" alt="Alt" />,
  //     <img src={Poor5} className="esst" alt="Alt" />,
  //     <img src={Poor6} className="esst" alt="Alt" />,
  //     <img src={Poor7} className="esst" alt="Alt" />,
  //     <img src={Poor8} className="esst" alt="Alt" />,
  // ]

  return (
    <div>
      <div className="hh">
        <div className="amegira">
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/1.1-01.jpg?alt=media&token=d019af1b-f6b2-4390-9994-68fcfff61f51"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/2F-01.jpg?alt=media&token=c2f2f167-f7fb-4d5a-92a9-d1a58b9a48ce"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/3F-01.jpg?alt=media&token=4bb42b01-6920-4211-b7b0-ea2a62fe9eaf"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/4F-01.jpg?alt=media&token=a8ff6688-30e9-4759-af3c-8f65dd03c0c5"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/5.4f.jpg?alt=media&token=9b0214ec-17c0-4d07-bc2c-74adb28a9924"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://firebasestorage.googleapis.com/v0/b/cabapp-574ca.appspot.com/o/6-01.jpg?alt=media&token=43d73bd6-2afa-4776-9d8e-cc80a531b14e"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>

        {/* <div data-aos="fade-in" className="container mt-2 p-2">
                    <div className="row m-auto">
                        <div className="col-sm-12 col-md-6  mt-5">
                            <div className="row m-auto">
                                <div className="col-sm-12 p-2">
                                    <h1 className="font">Empowering through wealth of Art</h1>
                                </div>
                                <div className="col-sm-4 p-3 m-3">
                                    <img src={Sin} style={{ width: '100%' }} />
                                </div>
                                <div className="col-sm-7 p-3">
                                    <p className="font3">Started in 2016, Dance Out of Poverty is the flagship initiative of Sinhayana Foundation, an independent, non-profit organization. The initiative aims at empowering underprivileged children by providing free of cost dance education and instilling life skills.</p>
                                    <a className="m-2 text-warning" href="/about us">Read more</a>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="col-sm-12 col-md-6  map">
                        </div>
                    </div>
                </div> */}

        <DonateData />

        {/* <div data-aos="zoom-in" className="container p-2 mt-5 homw">
                    <div className="row m-auto">
                        <div className="col-sm-12 col-md-6 mt-4 pt-4">
                            <img src={Vis} style={{ width: '85%' }} />
                        </div>
                        <div className="col-sm-12 col-md-6  p-5">
                            <h2 className="mb-3 font2">Our Programs</h2>
                            <p className="font3">By organizing workshops within the slum areas, we try to use dance as a therapy to channelize their energy and teach them life skills. For they are more receptive to knowledge while they are happy and happiness comes naturally with dance.

                        At Dance out of Poverty we take auditions to select children who have talent and passion for dance. In the process, a lot of kids get left out because they never had the opportunity to get any sort of dance training.</p>
                            <a className="text-warning" href="/all/program">Read More</a>
                        </div>
                    </div>

                </div> */}

        <div
          className="modal-play"
          size="lg"
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <div className="container mt-2">
            <div className="row m-auto">
              <div className="col-sm-12 mb-1">
                <iframe
                  width="100%"
                  height="600rem"
                  src="https://www.youtube.com/embed/FTT1wJvNuyQ"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="allowfullscreen"
                  mozallowfullscreen="mozallowfullscreen"
                  msallowfullscreen="msallowfullscreen"
                  oallowfullscreen="oallowfullscreen"
                  webkitallowfullscreen="webkitallowfullscreen"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        {/* <div data-aos="zoom-in" className="container p-2 mt-5 homw1">
          <div className="row m-auto">
            <div className="col-sm-12 col-md-6  pt-4  p-5">
              <h2 className="mb-3 font2">Our Journey</h2>
              <p className="font3">
                Started in 2016, Dance Out of Poverty is the flagship initiative
                of Sinhayana Foundation, an independent, non-profit
                organization. The initiative aims at empowering underprivileged
                children by providing free of cost dance education and
                instilling life skills. At Dance Out Of Poverty, their energy is
                channelized by keeping them away from bad influences like drugs,
                stealing, etc. The focus is on nurturing the students and making
                them proficient to dance their way out of poverty!
              </p>
            </div>
            <div className="col-sm-12 col-md-6 mt-4">
              <img src={Jor} style={{ width: "85%" }} className="mn" />
            </div>
          </div>
        </div> */}

        <Timeline />

        {/* <DonateCTA /> */}

        {/* <div data-aos="zoom-in" className="container p-2 mt-3 homw2">
                    <div className="row m-auto">
                        <div className="col-sm-12 col-md-6 ">
                            <img src={Team} style={{ width: '75%' }} />
                        </div>
                        <div className="col-sm-12 col-md-6  p-5">
                            <h2 className="mb-3 font2">The Team</h2>
                            <p className="font3">Qui architecto est consequatur consequuntur qui. Qui fuga at ducimus. Officia tempore voluptas deleniti voluptatem dolorem deleniti est. Qui dolore eos et perferendis qui omnis. Rerum odio sequi aut.

  Error labore eos ad et et saepe est harum. Ipsum magni natus ut sint eligendi fugit perferendis aliquid. Neque earum itaque necessitatibus iste architecto ipsam sunt. Dolores rerum odio esse saepe. </p>
                            <a className="text-warning" href="/involve">Volunteer</a>
                        </div>
                    </div> 

                </div>*/}

        <div
          data-aos="zoom-in"
          id=""
          className="container p-2 mt-5 mb-5 homw3"
          style={{ margin: "30px auto" }}
        >
          <div className="row m-auto">
            <div className="col-sm-12 col-md-6 ">
              <img src={Jor} style={{ marginTop: "100px", width: "85%" }} />
            </div>
            <div className="col-sm-12 col-md-6  p-5">
              <h2 className="mb-3 font2">Volunteer with us</h2>
              <p className="font3">
                “Volunteers don’t necessarily have time, but they have heart. As
                Volunteer, you will learn not just more about the needs of
                others, you will also learn more about your own needs and you
                will discover that in helping other, you help yourself most of
                all. A Volunteer can be anybody. There is no age limit to begin
                a volunteer, no preferred categories, no salary specification,
                no special degree or work experience. All that is required is a
                dedication to the cause, sincerity about the work that one in
                doing and commitment to a regular and sustained efforts with the
                organisation.” – MAHATAMA GANDHI{" "}
              </p>
              <a className="text-warning text-right" href="/contact us">
                Join Us
              </a>
            </div>
          </div>
        </div>

        <Donate />
      </div>
      <Donors />
      <Footer />
    </div>
  );
};

export default Home;

/* <div className="container p-2 mt--2">
                    <div className="row m-auto">
                        <div className="col-sm-12 frame pt-1 text-center">
                            <img src={R1} className="r1" />
                            <img src={R2} className="r2" />
                            <img src={R3} className="r3" />
                        </div>
                    </div>
                </div> */

/* <div data-aos="zoom-in" className="scale container mt-5">
                    <div className="row m-auto">
                        <div className="offset-md-1 col-sm-7 text-left text-light p-5" style={{
                            'overflow': 'hidden', 'text-overflow': 'ellipsis'
                        }}>
                            <h2>Help children express themselves through the art of dance.</h2>
                        </div>
                        <div className="offset-md-1 scale-btn col-sm-1 text-center pt-5">
                            <a href="https://www.payumoney.com/webfronts/#/index/da" rel="noopener noreferrer" target="_blank"><button className="btn btn-warning m-3 btn-sm" style={{ 'border-radius': '17px' }}><h5 className="text-light m-1">Donate</h5></button></a>
                        </div>
                    </div>
                </div> */
