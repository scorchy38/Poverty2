import React from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/button'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import Youtube from './Youtube'

const StudentPlay = () => {

  AOS.init({
    offset: 150,
    duration: 500,
    delay: 12
  })

  return (

    <div className="container p-2 mt-4">
      <div className="row m-auto">
        <div data-aos="fade-in" className="offset-md-1 mt-5 col-sm-5 pt-5 play">
          <div className="row m-auto pt-4 col-sm-qw">
            <div data-aos="slide-up" className="col-sm-12 text-center p-2">
              <h2 className="text-light mt-3 font2">Encourage Their Art</h2>
              <button className="btn btn-warning mt-3">Youtube</button>
            </div>
          </div>
        </div>
        <div data-aos="zoom-in" className="offset-md-1 col-sm-5">
          <h1 data-aos="fade-in" className="mt-5 m-3 font">Students's Playground
          </h1>
          <p data-aos="zoom-in" className="m-3 font3 mt-5">
            Students Playground is meant to empower the students by giving them the freedom to express themselves through our social media platforms. A platform where students themselves will be the choreographers and editors. With no moderation, the students can showcase their creativity without any fear of judgement.

            This initiative allows the kids to go wild with their imagination and truly create what their heart desires.
          </p>
        </div>

        <div className="col-sm-12 mt-4">
          <h1 data-aos="slide-up" className="mt-5 mb-4 font2">Video Gallery</h1>
          <div className="row m-auto">
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/77ldvySlAUo?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/77ldvySlAUo/hqdefault.jpg"/>

                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/i6mNlyvmogE?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/i6mNlyvmogE/hqdefault.jpg"/>

                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/ycKSa0ncXv0?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/ycKSa0ncXv0/hqdefault.jpg"/>

                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/KM3lpZvtwvY?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/KM3lpZvtwvY/hqdefault.jpg"/>

                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/jJ2aj7ppY88?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/jJ2aj7ppY88/hqdefault.jpg"/>

                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube link="https://www.youtube.com/embed/AyJ82Q88vuA?autoplay=1&mute=0" title="Delhi Right to Dance Event" date="20 January 2020" imgSrc="http://img.youtube.com/vi/AyJ82Q88vuA/hqdefault.jpg"/>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

  )

}

export default StudentPlay;