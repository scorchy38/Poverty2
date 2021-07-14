import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import { OurPartners } from "../core/Donors";
import Logo from "../images_icons/Footerlogo.svg";
// import { FacebookShareButton, FacebookIcon,
//   WhatsappShareButton, WhatsappIcon,
//   TwitterIcon, TwitterShareButton, LinkedinShareButton, LinkedinIcon} from 'react-share';
import "../Style/Footer.css";

// export const ShareCampaign = () => {
//   return (
//     <div  className="icon-bar icon-bar-small">
//       <FacebookShareButton
//         url={"http://www.danceoutofpoverty.org"}
//         quote={"Be the part of this beautiful campaign"}
//         hashtag="#danceoutofpoverty"
//       ><FacebookIcon size={45} /></FacebookShareButton><br />
//       <WhatsappShareButton
//         url={"http://www.danceoutofpoverty.org"}
//         title={"Be the part of this beautiful campaign"}
//         separator=":: "
//       ><WhatsappIcon size={45} /></WhatsappShareButton><br />
//       <TwitterShareButton
//         url={"http://www.danceoutofpoverty.org"}
//         title={"Be the part of this beautiful campaign"}
//         hashtag="#danceoutofpoverty"
//       ><TwitterIcon size={45} /></TwitterShareButton><br />
//       <LinkedinShareButton
//         title={"Be the part of this beautiful campaign"}
//         source={"http://www.danceoutofpoverty.org"}
//       ><LinkedinIcon size={45} /></LinkedinShareButton>
//     </div>
//   )
// }

export const DonateButton = () => {
  return (
    <button className="donate-vertical">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.payumoney.com/webfronts/#/index/da"
      >
        Donate
      </a>
    </button>
  );
};

const Footer = () => {
  return (
    <div>
      <DonateButton />
      <OurPartners />
      <div className="footer">
        <div className="footer-content">
          <div className="footer-comp">
            <img src={Logo} alt="" />
            <h4>
              INITIATIVE BY:
              <br /> SINHAYANA FOUNDATION
            </h4>
          </div>
          <div className="footer-comp">
            <h4>About Us</h4>
            <p>
              Initiated in 2016, Dance Out of Poverty is the flagship program of
              Sinhayana Foundation, an independent, non-profit organisation. The
              program aims at uplifting children from underprivileged background
              and instill passion, creativity and life skills in them through
              dance.
            </p>
          </div>
          <div className="footer-comp">
            <h4>Social Media</h4>

            <li>
              <a target="_blank" href="https://Facebook.com/danceoutofpoverty">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/danceoutpoverty">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://twitter.com/danceoutpoverty">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://YouTube.com/danceoutofpoverty">
                <i className="fa fa-youtube-play"></i>
              </a>
            </li>
            <li>
              <a target="_blank" href="https://instagram.com/danceoutofpoverty">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </div>
          <div className="footer-comp">
            <h4>Quick Contact</h4>
            <p>
              {" "}
              A-178, First Floor, Gulabbagh
              <br />
              Uttam Nagar
              <br />
              PIN Code: 110059
              <br />
              Email: info@danceoutofpoverty.org
              <br />
              Phone: +91 9990766799
            </p>
          </div>
          <div className="footer-comp">
            <h4>Newsletter</h4>
            <p>Subscribe to our Newsletter</p>
            <input
              type="email"
              placeholder="Enter your mail"
              className="email-input"
            />
            <button>Subscribe</button>
          </div>
        </div>
        <div className="home21">
          <p>© 2020, Dance Out Of Poverty. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

// <Col xs={12} sm={6} md={4} lg={2}>
// <div className="home18">
//     <h3>Quick Link</h3>
//     <ul>
//         <li><a href="/about us">About Us</a></li>
//         <li><a href="/involve">Volunteer</a></li>
//         <li><a href="/blogs">Blog / Stories</a></li>
//         <li><a href="/gallery">Gallery</a></li>
//         <li><a href="/contact us">Contact Us</a></li>
//         <li><a href="/coming/soon">Media Center</a></li>
//         <li><a href="/coming/soon">Privacy Policy</a></li>
//     </ul>
// </div>
// </Col>

// 3 2 3
