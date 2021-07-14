import React from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/button'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import dance from './Assests/dance-cause.svg'


const Cause = () => {
    AOS.init({
        offset: 200,
        duration: 900,
        delay: 140
    });

    return (
        <div className="container mt-3 p-2">
            <div className="row m-auto">
                <div data-aos="fade-up" className="col-sm-5 m-3 pt-5">
                    <img src={dance} style={{ width: '100%' }} />
                </div>
                <div data-aos="zoom-in" className="col-sm-6 col-md-6 offset-md-1 m-1">
                    <h1 className="mt-5 mb-5 font5">Why Dance as a Cause?</h1>
                    The <b>world acknowledges poverty</b> as a massive problem and consider education to be
                    a primary weapon to fight poverty. Unfortunately in India, just like music &amp; theatre,
                    <b>dance is not considered a proper part of the education system but a hobby or a
                    luxury.</b> When it comes to educating the underprivileged, dance can be a powerful tool
                    that can act as a <b>therapy to channelize energy and condition the minds</b> by shaping
                    their overall character.
            </div>
            <div className="col-sm-12 p-1 m-1">
                <p data-aos="zoom-in" className="mt-5 font3">
                    Dance promotes a culture of happiness, social inclusion and fitness. In addition to that,
                    proficient dancers have several employment opportunities in teaching, background
             dancing and choreography. Therefore, it is a legitimate profession.</p>
                <p data-aos="zoom-in" className="mt-4 font3">
                    There is an old saying “Give a man a fish and you feed him for a day, teach a man to
                    fish and you feed him for a lifetime” If Poverty is a disease, then the only cure is making
                    them empowered through education and skill. We believe in making these students
                    proficient. The skills they acquire will act as a tool that they can use to become self-
                    dependent.
                    </p>
                <p data-aos="zoom-in" className="mt-4 font3">
                    Even though a child may pick another career path, dance education has important
                    benefits for students’ social relationships, physical &amp; mental wellbeing and shaping of
                    their overall character. Students have a better understanding of spatial relationships and
                    learn to think and conceptualize thoughts better. Dance is a beautiful form of therapy
                    that helps one channelize their inner energy, restore happiness, confidence and stability
                    in troubled lives and ease the tensions that may exist due to their socio-economic
                    background.
                    </p>
                <p data-aos="zoom-in" className="mt-4 font3">
                    Dance can help improve social relationships while cultivating a rich culture of
                    collaboration, respect and compassion. Dance as a physical activity has a positive
                    influence on memory, concentration and general behavior. It helps in dealing with
                    physical factors such as obesity, cardiovascular fitness, blood pressure and bone
                    density, as well as depression, anxiety, self-concept and academic performance.
                    </p>
                <p data-aos="zoom-in" className="mt-4 font3">

                    Apart from the benefits listed above, dance has economic benefits too. In addition to
                    being a field of employment, dance promotes many personal qualities like creativity,
                    discipline, work ethics, commitment, etc.,that employers recognize as essential in a
                    collaborative, adaptable workforce. Long-term learning goes far beyond practical
                    applications in dance. Art forms like dance are important to create well-rounded
                    individuals who can apply the skills, knowledge and experience from being involved in
                    the arts to their careers and lives.
                    </p>
                <p data-aos="zoom-in" className="mt-4 font3">
                    Apart from the benefits listed above, dance has economic benefits too. In addition to
                    being a field of employment, dance promotes many personal qualities like creativity,
                    discipline, work ethics, commitment, etc.,that employers recognize as essential in a
                    collaborative, adaptable workforce. Long-term learning goes far beyond practical
                    applications in dance. Art forms like dance are important to create well-rounded
                    individuals who can apply the skills, knowledge and experience from being involved in
                    the arts to their careers and lives.      </p>
                <p data-aos="zoom-in" data-aos-offset="50" className="mt-4 font3">
                    Through Dance Out of Poverty, thousands of lives have been positively impacted in the
                    past 3 years. There are plenty of students who have started earning through it, and all
             have become confident <b>enough to pursue their dreams</b>.
                    </p>
            </div>
        </div>
        </div >
    )
}

export default Cause;
