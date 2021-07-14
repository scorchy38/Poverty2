import React from 'react';
import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/carousel';
import 'bootstrap/js/dist/button'
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import Audi from './Assests/audi.svg'


const Concert = () => {
    AOS.init({
        offset: 110,
        duration: 500,
        delay: 12
    })
    return (

        <div className="container mt-3 p-1">
            <div className="row m-auto p-3">
                <div data-aos="zoom-in" className="text-center col-sm-5 mt-2 p-1">
                    <img src={Audi} style={{ width: '50%' }} />
                </div>
                <div className="col-sm-6 offset-md-1 mt-4 p-2">
                    <h1 data-aos="zoom-in" className="m-3" style={{fontWeight:'bolder'}}>Auditions and
         Showcase Concert</h1>
                    <p data-aos="zoom-in" className="mt-5 m-2">There are two rounds of auditions, the first round is for selection and second round is to bifurcate the students into batches based on their level of skills – beginners, intermediate and advanced.</p>
                </div>
                <div className="col-sm-12 p-2 mt-4">
                    <p data-aos="zoom-in" className="mb-5">Auditions are quarterly conducted where approximately 100 students are selected in total. All the students are taught the basics of popular dance forms like Ballet, Jazz, Contemporary, Hip Hop, etc.
        </p>
                    <p data-aos="zoom-in" className="mb-5">
                        We keep providing platforms for the kids to perform at various prestigious events as well as exclusively organized showcase concerts by Dance Out Of Poverty. The concerts are designed as a platform for the students to perform in front of an audience. Since it is the first time most students are performing on stage in front of their friends and family, it instills a sense of confidence in them and strengthens this belief that anything is possible in life.</p>
                    <p data-aos="zoom-in" className="mb-4">
                        Being a community event, the concert encourages to bring together as many people from the community- parents, friends, peers and school/NGO staff to attend, creating a safe, inclusive space for the students to perform. The Dance Out Of Poverty Team works extremely hard to deliver a professional, high quality concert experience for the students. </p>
                </div>
            </div>
        </div>
    )

}

export default Concert