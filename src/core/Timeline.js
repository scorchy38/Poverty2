import React from 'react';
import Poor3 from '../gallery/1(2).jpg';
import Poor4 from '../gallery/1(7).JPG';
import Poor5 from '../gallery/1(15).jpg';
import Poor6 from '../gallery/1(16).jpg';
import Poor7 from '../gallery/113).jpg';
import Poor8 from '../gall/aka13.JPG';
import '../Style/Timeline.css';
import 'aos/dist/aos.css';

const Timeline = () => {
  const timeline = [
    {
      date: "April-Aug 2016",
      task: "First workshop with 250 kids & organized Slum to Stage 1.0 - our first ever showcase event with the late Saroj Khan as the chief guest",
      img: Poor3
    },
    {
      date: "July 2017",
      task: "Got the Organization registered",
      img: Poor4
    },
    {
      date: "Sept 2018",
      task: "Our students made it to 4th round of dance reality show 'dance+' 1sr milestone for our talent ",
      img: Poor5
    },
    {
      date: "Jan 2019",
      task: "Kickstarted RTD(Right to Dance) and expanded to Delhi-NCR locations",
      img: Poor6
    },
    {
      date: "April 2019",
      task: "Expanded to Mumbai with Juhu as our first location",
      img: Poor7
    },
    {
      date: "May 2019",
      task: "Did a month workshop at 3 locations - Lingampally, Ghatkesar, Hyderabad",
      img: Poor8
    },
    {
      date: "March 2020",
      task: "Expanded to 25 locations in Delhi and Mumbai for RTD",
      img: Poor3
    },
  ]

  return (
    <div className="timeline-grid" >
      {
        timeline.map((item) => {
          return (
            <div className="timeline-grid-item" data-aos="flip-up">
              <img src={item.img} />
              <h3> {item.date} </h3>
              <p> {item.task} </p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Timeline;