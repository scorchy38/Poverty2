import React from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/button'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import Curi from './Assests/curriculum.svg'


const Curriculum = () => {
    AOS.init({
        offset: 110,
        duration: 500,
        delay: 12
    })
    return (
        <div className="container mt-3 p-1">
            <div className="row m-auto p-2">
                <div data-aos="fade" data-aos-duration="2000" className="col-sm-5 text-center">
                    <img src={Curi} style={{ width: '100%' }} />
                </div>
                <div data-aos="zoom-in" className="offset-md-1 col-sm-6 p-2">
                    <h1 className="m-2 font5">Our Curriculum & Pedagogy</h1>
                    <p className="m-2 mt-5 font3">The program’s pedagogy focuses on building functional learning over technical or theoretical learning for students. We take a dynamic, fluid approach creating a highly engaging environment. </p>
                    <h6 className="m-2 mt-5 text-bold">DOOP’s curriculum is comprised of five key aspects:</h6>
                </div>
                <div className="col-sm-12 mt-4 p-3">
                    <h4 data-aos="zoom-in" data-aos-duration="1300" className="text-warning m-2">Fundamentals of Dance</h4>
                    <p data-aos="fade-up" className="m-2 font3">Introduction to different dance forms and developing the building blocks of creative expression through learning the tools of the discipline, paving the way for an all-round understanding.
         </p>
                </div>
                <div className="col-sm-12 mt-4 p-3">
                    <h4 data-aos="zoom-in" data-aos-duration="1300" className="text-warning m-2">Theory and techniques</h4>
                    <p data-aos="fade-up" className="m-2 font3">Technical and theoretical knowledge of origins of dance styles, their culture, genres and terminologies.

         </p>
                </div>
                <div className="col-sm-12 mt-4 p-3">
                    <h4 data-aos="zoom-in" data-aos-duration="1300" className="text-warning m-2">Fitness and nutrition</h4>
                    <p data-aos="fade-up" className="m-2 font3">Study of anatomy of human body, physical conditioning, workout techniques, pattern and the basic components of physical fitness. Study of different foods and their nutritional value.

         </p>
                </div>
                <div className="col-sm-12 mt-4 p-3">
                    <h4 data-aos="zoom-in" data-aos-duration="1300" className="text-warning m-2">Feeding the Soul
         </h4>
                    <p data-aos="fade-up" className="m-2 font3">Establishing an essential connect with how dance is changing the world around us, one step at a time. Recognizing the role of dance and its influence on the personal journey of dancers, community culture and incorporating those learnings in a student’s life through film screenings, value creation workshops, meditation and yoga.

         </p>
                </div>
                <div className="col-sm-12 mt-4 p-3">
                    <h4 data-aos="zoom-in" data-aos-duration="1300" className="text-warning m-2">Performance and production
         </h4>
                    <p data-aos="fade-up" className="m-2 font3">Teaching the art of self-expression, body language and stage performance along with the essentials of stage setups, lighting, sound, audio-video editing.

         </p>
                </div>
            </div>
        </div>
    )
}

export default Curriculum;