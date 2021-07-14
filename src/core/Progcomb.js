import React from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/button'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'


const Progcomb = () => {
    AOS.init({
        offset: 200,
        duration: 900,
        delay: 140
    });

    return (
        <>
            <div data-aos="fade-left" className="container p-2 mt-5">
                <div className="row m-auto">
                    <div className="col-sm-6 text-center">
                        <img src={require('./Assests/rtd.svg')} style={{ width: '50%', 'border-radius': '14px' }} />
                    </div>
                    <div className="col-sm-6 p-5">
                        <h2 className="mb-5 font2">Right To Dance</h2>
                        <p className="font3">Right to Dance advocates for equal right to get dance education for all, irrespective of their backgrounds. Under this, we give free dance education to all the students who wish to learn dance but have no prior knowledge of dance.

             By organizing workshops within the slum areas, we try to use dance as a therapy to channelize their energy and teach them life skills. For they are more receptive to knowledge while they are happy and happiness comes naturally with dance.</p>
                    </div>
                </div>

            </div>

            <div data-aos="fade-right" className="container p-2 mt-5">
                <div className="row m-auto">
                    <div className="col-sm-6 p-5">
                        <h2 className="mb-5 font2">Students's Playground</h2>
                        <p className="font3">Students Playground is meant to empower the students by giving them the freedom to express themselves through our social media platforms. A platform where students themselves will be the choreographers and editors. With no moderation, the students can showcase their creativity without any fear of judgement. This initiative allows the kids to go wild with their imagination and truly create what their heart desires. </p>
                    </div>
                    <div className="col-sm-6 text-center">
                        <img src={require('./Assests/playground.png')} style={{ width: '80%', 'border-radius': '14px' }} />

                    </div>
                </div>

            </div>



            <div data-aos="fade-left" className="container p-2 mt-3">
                <div className="row m-auto">
                    <div className="col-sm-6 text-center">
                        <img src={require('./Assests/slum.svg')} style={{ width: '80%', 'border-radius': '14px' }} />
                    </div>
                    <div className="col-sm-6 p-5">
                        <h2 className="mb-5 font2">Slum 2 Stage</h2>
                        <p className="font3">Right to Dance advocates for equal right to get dance education for all, irrespective of their backgrounds. Under this, we give free dance education to all the students who wish to learn dance but have no prior knowledge of dance.

                        By organizing workshops within the slum areas, we try to use dance as a therapy to channelize their energy and teach them life skills. For they are more receptive to knowledge while they are happy and happiness comes naturally with dance. </p>
                    </div>
                </div>

            </div>
            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </>
    )
}

export default Progcomb;