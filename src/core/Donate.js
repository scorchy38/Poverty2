import React, { useEffect } from "react";
import "../Style/Donate.css";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import donate2 from "./Assests/poor3.jpg";
import donate3 from "./Assests/poor4.jpg";
import { ProgressBar } from "react-bootstrap";

export const DonateCTA = () => {
  const DonateDiv = [
    {
      img: donate2,
      mission: "Dance Out of Poverty",
      progress: 678,
      butonText: "Donate",
    },
    {
      img: donate3,
      mission: "Dance Out of Poverty",
      progress: 778,
      butonText: "Help a Child",
    },
    {
      img: donate2,
      mission: "Dance Out of Poverty",
      progress: 978,
      butonText: "Donate",
    },
  ];

  return (
    <div data-aos="fade-up" className="donate-mission-parent">
      {DonateDiv.map((mission, index) => {
        return (
          <div className="donate-mission">
            <img src={mission.img} />
            <p> Mission : {mission.mission} </p>
            <ProgressBar
              max={1000}
              now={mission.progress}
              variant="warning"
              style={{ margin: "20px auto" }}
              label={parseInt((mission.progress / 1000) * 100) + "%"}
            />
            <button> {mission.butonText} </button>
          </div>
        );
      })}
    </div>
  );
};

export const DonateData = () => {
  const dataArray = [
    {
      number: (
        <CountUp end={100} start={0} delay={0.5} duration={1.5} suffix="+" />
      ),
      task: "earning as choreographers",
    },
    {
      number: (
        <CountUp end={2500} start={0} delay={0.5} duration={1.25} suffix="+" />
      ),
      task: "children impacted",
    },
    {
      number: (
        <CountUp end={25} start={0} delay={0.5} duration={1} suffix="+" />
      ),
      task: "locations",
    },
    {
      number: (
        <CountUp end={50} start={0} delay={0.5} duration={1} suffix="+" />
      ),
      task: "earning as event dancers",
    },
  ];

  return (
    <div className="donate-data">
      {dataArray.map((item) => {
        return (
          <div className="donate-data-text">
            <h3>{item.number}</h3>
            <p>{item.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export const Donate = () => {
  return (
    <div data-aos="fade-up" className="donate-comp">
      <div className="donate-text">
        <h2>Help children express themselves through the art of dance.</h2>
        <p>Select an amount you wish to donate</p>
      </div>
      <div className="donate-buttons">
        <a
          href="https://www.payumoney.com/webfronts/#/index/da"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="donate">{"\u20B9"} 50</button>
        </a>
        <a
          href="https://www.payumoney.com/webfronts/#/index/da"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="donate">{"\u20B9"} 100</button>
        </a>
        <a
          href="https://www.payumoney.com/webfronts/#/index/da"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="donate">{"\u20B9"} 200</button>
        </a>
        <a
          href="https://www.payumoney.com/webfronts/#/index/da"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="donate">{"\u20B9"} 500</button>
        </a>
      </div>
    </div>
  );
};

export default Donate;
