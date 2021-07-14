import React from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/carousel";
import "bootstrap/js/dist/button";
import "font-awesome/css/font-awesome.min.css";
import "aos/dist/aos.css";
import Youtube from "./Youtube";

const Slum = () => {
  AOS.init({
    offset: 150,
    duration: 500,
    delay: 12,
  });

  return (
    <div className="container p-2 mt-4">
      <div className="row m-auto">
        <div data-aos="zoom-in" className="offset-md-1 col-sm-5 pt-4">
          <h1 data-aos="fade-in" className="mt-5 font">
            Slum 2 Stage
          </h1>
          <p data-aos="zoom-in" className="m-3 mt-5 font3">
            Slum to Stage represents the rise of a Phoenix. It is meant to give
            students from poor socio-economic backgrounds, slum areas, a
            platform to express their craft in an unimaginable way- on a stage!
          </p>

          <p data-aos="zoom-in" className="m-3 mt-5 font3">
            The idea is to provide a stage to street and slum children who are
            filled with an abundance of untapped potential. Most of the times,
            the experience itself is so powerful that the children start looking
            at themselves from a different perspective and it acts as a spark
            that makes them believe that they can be whoever they want to be in
            life, irrespective of their circumstances!
          </p>
        </div>
        <div data-aos="fade-in" className="offset-md-1 col-sm-5 pt-5 play2">
          <div className="row m-auto pt-4 col-sm-qw">
            <div data-aos="slide-up" className="col-sm-12 text-center mt-4 p-3">
              <h2 className="text-light mt-5 pt-5">Help us Enpower Them</h2>
            </div>
          </div>
        </div>

        <div className="col-sm-11 offset-md-1 mt-4">
          <h1 data-aos="slide-up" className="mt-5 ml-3 mb-4">
            Gallery
          </h1>
          <div className="row m-auto">
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/aKkeNwhCyY4?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/aKkeNwhCyY4/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/QG9qBXy0dTk?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/QG9qBXy0dTk/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/wv5ZEJX6ll8?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/wv5ZEJX6ll8/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/QilvwjxkKTU?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/QilvwjxkKTU/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/LXZgkQGnVhU?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/LXZgkQGnVhU/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
            <div data-aos="flip-down" className="card2 col-sm-4 ">
              <div className="row m-auto p-1">
                <div className="col-sm-12 mb-1">
                  <Youtube
                    link="https://www.youtube.com/embed/KzLmOLQXeTg?autoplay=1&mute=0"
                    title="Delhi Right to Dance Event"
                    date="20 January 2020"
                    imgSrc="http://img.youtube.com/vi/KzLmOLQXeTg/hqdefault.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slum;
