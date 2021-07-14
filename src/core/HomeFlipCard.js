import React from "react";
import "../Style/HomeFlipCard.css";
import Sin from './Assests/Sinhayana Logo.png';
import Jor from './Assests/VWU.jpg';
import Vis from './Assests/ourprog.JPG';

const HomeFlipCard = () => {
  const flipCardInfo = [
    {
      flipCardHead: "About Us",
      flipCardContent: "Started in 2016, Dance Out of Poverty is the flagship initiative of Sinhayana Foundation, an independent, non-profit organization. The initiative aims at empowering underprivileged children by providing free of cost dance education and instilling life skills.",
      flipCardRedirect: "/about us",
      flipCardImg: Sin
    },
    {
      flipCardHead: "Our Program",
      flipCardContent: "By organizing workshops within the slum areas, we try to use dance as a therapy to channelize their energy and teach them life skills. For they are more receptive to knowledge while they are happy and happiness comes naturally with dance.",
      flipCardRedirect: "/all/program",
      flipCardImg: Vis
    },
    {
      flipCardHead: "Our Team",
      flipCardContent: "Meet our team of passionate individuals who made this campaign a success",
      flipCardRedirect: "/involve",
      flipCardImg: Jor
    }
  ];

  return (
    <div className = "ad-flip-card-container" data-aos="fade-up" >
      {
        flipCardInfo.map((item) => {
          return (   
            <div className = "ad-flip-card-parent">         
              <div className = "ad-flip-card">
                <div className = "ad-flip-card-front">
                  <img src = {item.flipCardImg} />
                  {item.flipCardHead}
                </div>
                <div className = "ad-flip-card-back">
                  {item.flipCardContent}
                  <a href={item.flipCardRedirect}>Read more</a>
                </div>
              </div>
            </div>
          )
        })
      }
    </div> 
  )
}

export default HomeFlipCard;