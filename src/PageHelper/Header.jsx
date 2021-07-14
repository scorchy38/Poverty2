import React, { useEffect } from "react";
import "../Style/nav.css";
import { Link, withRouter } from "react-router-dom";
import Frame from "../images_icons/logo.png";
import { Dropdown } from "react-bootstrap";
import { DonateButton, ShareCampaign } from "./Footer";

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#F2B23D" };
  } else {
    return { color: "#4F4F4F" };
  }
};

const Navbar = ({ history }) => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navlinks = document.querySelector(".navlink");

    hamburger.addEventListener("click", () => {
      navlinks.classList.toggle("open");
    });
  }, []);

  const changeScreen1 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.add("is-active");
  };
  const changeScreen2 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.add("is-active");
  };
  const changeScreen3 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.add("is-active");
  };
  const changeScreen4 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen5 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen6 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen7 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen8 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen9 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen10 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.add("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };

  const changeScree1 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.add("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScree2 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.add("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScree3 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.add("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScree4 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.add("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen11 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen13 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");
    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen14 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen15 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };
  const changeScreen16 = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");

    var element1 = document.querySelector(".spa2");
    element1.classList.remove("is-active");
    var element6 = document.querySelector(".spa7");
    element6.classList.remove("is-active");
    var element7 = document.querySelector(".spa8");
    element7.classList.remove("is-active");
  };

  const carrychange = () => {
    const navlinks = document.querySelector(".navlink");
    navlinks.classList.toggle("open");
  };

  return (
    <div className="shunang">
      <div className="nav">
        <div onClick={carrychange} className="logo">
          <Link exact style={isActive(history, "/")} to="/">
            <img src={Frame} alt="logo" />
          </Link>
        </div>
        <div className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className="navlink">
          <li>
            <Link
              onClick={carrychange}
              style={isActive(history, "/")}
              className="link"
              to="/"
            >
              <span className="spa1">Home</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/about us")}
              to="/about us"
            >
              <span className="spa4">About Us</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/programs")}
              to="/programs"
            >
              <span className="spa4">Our Programs</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/gallery")}
              to="/gallery"
            >
              <span className="spa4">Gallery</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/our/location")}
              to="/our/location"
            >
              <span className="spa3">Locations</span>
            </Link>
          </li>

          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/blogs")}
              to="/blogs"
            >
              <span className="spa4">Stories of Change</span>
            </Link>
          </li>
          <li>
            <Link
              onClick={carrychange}
              className="link"
              style={isActive(history, "/contact us")}
              to="/contact us"
            >
              <span className="spa6">Contact Us</span>
            </Link>
          </li>
          <li className="linkeeee">
            <div className="linkeeeee">
              <button
                onClick={() => {
                  const navlinks = document.querySelector(".navlink");
                  navlinks.classList.toggle("open");
                }}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.payumoney.com/webfronts/#/index/da"
                >
                  CONTRIBUTE
                </a>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(Navbar);

// <Dropdown >
//                         <Dropdown.Toggle variant="tra" id="dropdown-basic">
//                             <span className="spa7">About Us</span>
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             <Dropdown.Item className="as"><Link onClick={changeScreen4} className="linke" style={isActive(history, '/about us')} to="/about us"><span>Overview</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as2"><Link onClick={changeScreen5} className="linke" style={isActive(history, '/curriculum')} to="/curriculum"><span>Curriculum & Pedagogy</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as3"><Link onClick={changeScreen6} className="linke" style={isActive(history, '/cause')} to="/cause"><span>Why dance as a cause?</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as4"><Link onClick={changeScreen7} className="linke" style={isActive(history, '/concert')} to="/concert"><span>Audition Concert</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as5"><Link onClick={changeScreen8} className="linke" style={isActive(history, '/our/vision')} to="/our/vision"><span>Vision & Mission </span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as6"><Link onClick={changeScreen9} className="linke" style={isActive(history, '/our')} to="/our"><span>Founder's Message </span></Link></Dropdown.Item>
//                             <Dropdown.Item className="as7"><Link onClick={changeScreen10} className="linke" style={isActive(history, '/our/')} to="/our/"><span>Advisory Board </span></Link></Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                     <Dropdown >
//                         <Dropdown.Toggle variant="tra" id="dropdown-basic">
//                             <span className="spa8" >Programs</span>
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             <Dropdown.Item className="ass"><Link onClick={changeScreen1} className="linke" style={isActive(history, '/programs')} to="/programs"><span>Right to Dance</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="ass1"><Link onClick={changeScreen2} className="linke" style={isActive(history, '/studplay')} to="/studplay"><span>Student's Playground</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="ass2"><Link onClick={changeScreen3} className="linke" style={isActive(history, '/slum')} to="/slum"><span>Slum 2 Stage</span></Link></Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
//                     <Dropdown >
//                         <Dropdown.Toggle variant="tra" id="dropdown-basic">
//                             <span className="spa2" >Get Involved</span>
//                         </Dropdown.Toggle>
//                         <Dropdown.Menu>
//                             <Dropdown.Item className="sass"><Link onClick={changeScree1} className="linke" style={isActive(history, '/involve')} to="/involve"><span>Volunteer</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="sass1"><Link onClick={changeScree2} className="linke" style={isActive(history, '/slum')} to="https://www.payumoney.com/webfronts/#/index/da"><span>Contribute</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="sass2"><Link onClick={changeScree3} className="linke" style={isActive(history, '/partner')} to="/partner"><span>Partner</span></Link></Dropdown.Item>
//                             <Dropdown.Item className="sass3"><Link onClick={changeScree4} className="linke" style={isActive(history, '/sign/up')} to="/sign/up"><span>Sign Up</span></Link></Dropdown.Item>
//                         </Dropdown.Menu>
//                     </Dropdown>
// <li>
// <Link onClick={changeScreen15} className="link" style={isActive(history, '/gallery')} to="/gallery"><span className="spa5">Gallery</span></Link>
// </li>
