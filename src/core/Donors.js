import React from "react";
import Carousel from "react-bootstrap/Carousel";
import donor1 from "../cele/amit.jpg";
import "../Style/Donor.css";

import Cele from "../cele/amit.jpg";
import Cele1 from "../cele/disha.jpg";
import Cele2 from "../cele/divya.jpg";
import Cele3 from "../cele/hritik.jpg";
import Cele4 from "../cele/kriti.jpeg";
import Cele5 from "../cele/rakul.jpg";
import Cele6 from "../cele/ranvir.jpg";
import Cele7 from "../cele/saroj.jpg";
import Cele8 from "../cele/sid.jpg";
import Cele9 from "../cele/tiger.jpg";
import Shi from "./Assests/Shimak.png";

import p1 from "./Assests/partners/abp.jpg";
import p2 from "./Assests/partners/asian.jpg";
import p3 from "./Assests/partners/bombay.png";
import p4 from "./Assests/partners/dc.png";
import p5 from "./Assests/partners/film.jpeg";
import p6 from "./Assests/partners/hindustan.png";
import p7 from "./Assests/partners/mid.jpg";
import p8 from "./Assests/partners/pink.png";
import p9 from "./Assests/partners/pk.jpg";
import p10 from "./Assests/partners/TOI.png";
import p11 from "./Assests/partners/Yahoo.png";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

// const donorArray = [
//   {
//     donor: "Amit Ji",
//     quote: "Wonderful",
//     donorImg: donor1
//   },
//   {
//     donor: "Amit Ji",
//     quote: "fantastic",
//     donorImg: donor1
//   },
//   {
//     donor: "Amit Ji",
//     quote: "Adbhut",
//     donorImg: donor1
//   }
// ];

export const OurPartners = () => {
  const ourPartnerImg = [
    <a
      href="https://www.abplive.in/movies/hrithik-roshan-launches-dance-with-hrithik-a-facebook-group-to-promote-self-expression-1029538 "
      target="_blank"
    >
      <img src={p1} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.asianage.com/life/more-features/290817/a-dance-revolution.html"
      target="_blank"
    >
      <img src={p2} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.bombaytimes.com/movies/india/kriti-sanon-gets-a-tribute-from-an-ngo-for-five-years-in-the-industry/articleshow/69495161.cms?     "
      target="_blank"
    >
      <img src={p3} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.deccanchronicle.com/entertainment/bollywood/090719/hrithik-roshan-and-mrunal-thakur-launch-dance-with-hrithik-chec.html 
    "
      target="_blank"
    >
      <img src={p4} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.filmfare.com/photos/hrithik-roshan-and-mrunal-thakur-promote-super-30-with-kids-34846.html "
      target="_blank"
    >
      <img src={p5} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.hindustantimes.com/videos/entertainment/hrithik-roshan-mrunal-thakur-dance-with-ngo-kids-at-super-30-promotions/video-L0zdFLfZF9nTUodtLQUBfI.html "
      target="_blank"
    >
      <img src={p6} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.mid-day.com/articles/kriti-sanon-gets-a-tribute-from-an-ngo-for-five-years-in-the-industry/21014159 "
      target="_blank"
    >
      <img src={p7} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.pinkvilla.com/news/music/360586/underprivileged-children-put-spectacular-show-dance-out-poverty-showcase"
      target="_blank"
    >
      <img src={p8} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://www.thebetterindia.com/113068/can-poverty-be-lifted-through-dance-this-ngo-is-proving-that-it-can/
    "
      target="_blank"
    >
      <img src={p9} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://timesofindia.indiatimes.com/entertainment/hindi/bollywood/news/super-30-hrithik-roshan-and-mrunal-thakur-dance-with-ngo-kids/articleshow/70145447.cms
    "
      target="_blank"
    >
      <img src={p10} style={{ width: "200px", margin: "10px" }} />
    </a>,
    <a
      href="https://in.style.yahoo.com/hrithik-roshan-launches-dance-hrithik-123116412.html
    "
      target="_blank"
    >
      <img src={p11} style={{ width: "200px", margin: "10px" }} />
    </a>,
  ];

  const responsive = {
    0: { items: 2 },
    776: { items: 3 },
    1100: { items: 4 },
    1400: { items: 5 },
  };

  return (
    <div style={{ margin: "3% 4%" }}>
      <h2 className="donor-head" style={{ margin: "20px auto" }}>
        In the News
      </h2>
      <AliceCarousel
        items={ourPartnerImg}
        responsive={responsive}
        disableDotsControls={true}
        infinite={true}
        disableButtonsControls={true}
        autoPlay={true}
        autoPlayInterval={2000}
        paddingLeft={10}
      />
    </div>
  );
};

const Donors = () => {
  const actorArray = [
    {
      actor: "Ranbir Kapoor",
      quote:
        "I understand that these children come for underprivileged families, the fact that you can give them dance and some form to express themselves,there is nothing better than this.",
      donorImg: Cele6,
    },
    {
      actor: "Amitabh Bachchan",
      quote: "Dance Out of Poverty delivered a performance full of talent.",
      donorImg: Cele,
    },
    {
      actor: "Disha Patani",
      quote:
        "Dance Out of Poverty’s performance was one of the best live performance I’ve seen dedicated to our film.The presentation was beautiful.",
      donorImg: Cele1,
    },
    {
      actor: "Divya Khosla Kumar",
      quote:
        "It's such a big opportunity for underprivileged children and i am so happy to be a part of it.",
      donorImg: Cele2,
    },
    {
      actor: "Hrithik Roshan",
      quote:
        "What an initiative this is, absolutely incredible. The passion with which the kids dance is really inspiring, It’s been an honour to dance with them. If there is anything that I can do for any of the kids or for this initiative, do let me know because i really want to.",
      donorImg: Cele3,
    },
    {
      actor: "Kriti Sanon",
      quote:
        "I really support this, its very very nice. I would love to come and dance with the kids someday.",
      donorImg: Cele4,
    },
    {
      actor: "Rakul Preet Kaur",
      quote:
        "Kudos to this initiative for providing a plateform for these kids and making sure that they do well in different walks of life.The presentation was beautiful",
      donorImg: Cele5,
    },
    {
      actor: "Saroj Khan",
      quote:
        "If people lend support to Dance out of poverty,no talented kid will be left out on the streets.The presentation was beautiful.You have all our support",
      donorImg: Cele7,
    },
    {
      actor: "Siddharth Malhotra",
      quote:
        "I was blown away by their genuine skill and talent that they have been training for.Its a lovely initiative and full power to all the kids at “Dance out of Poverty”",
      donorImg: Cele8,
    },
    {
      actor: "Tiger Shroff",
      quote:
        "It’s a fantastic initiative, these kids get to express their talents, especially because they dont’t get the chance to do it on their own. So because of the initiative,they are getting a chance to do it.",
      donorImg: Cele9,
    },
    {
      actor: "Shiamak Davar",
      quote:
        "Dance out of poverty is one the most beautiful things I’ve heard of, because its actually making people empowered, they are empowered to now not be where they are in their poverty areas, but to come out through dance.",
      donorImg: Shi,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "rgb(242, 242, 242)",
        padding: "10px",
        margin: "5% auto",
      }}
    >
      <div>
        <h2 className="donor-head">Supported and Appreciated By</h2>
        <Carousel className="donor-carousel">
          {actorArray.map((item) => {
            return (
              <Carousel.Item interval={1000}>
                <div className="donor-card">
                  <div className="donor-img">
                    <img src={item.donorImg} />
                  </div>
                  <div className="donor-say">
                    <p> " {item.quote} " </p> <hr />
                    <h4> {item.actor} </h4>
                  </div>
                </div>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
      {/* <div>
          <h2 className="donor-head">Our Donors</h2>
          <Carousel className='donor-carousel'>
            {
              donorArray.map((item, index) => {
                return (
                  <Carousel.Item key={index}>
                    <div className='donor-card'>
                      <div className='donor-img'>
                        <img src={item.donorImg} />
                      </div>
                      <div className='donor-say'>
                        <p> " {item.quote} " </p> <hr />
                        <h4> {item.donor} </h4>
                      </div>
                    </div>
                  </Carousel.Item>
                )
              })
            }
          </Carousel>
        </div> */}
    </div>
  );
};

export default Donors;
