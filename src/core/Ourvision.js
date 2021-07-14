import React from 'react';
import Vis from './Assests/vision.svg';
import AOS from 'aos';

const Ourvision = () => {
    AOS.init({
        offset: 300,
        duration: 500,
        delay: 0
    });
    return (
        <div>
            <div data-aos="zoom-in" className="container p-2 mt-5" style={{marginBottom:'70px'}}>
                <div className="row m-auto">
                    <div className="col-sm-6">
                        <img src={Vis} style={{ width: '85%' }} />
                    </div>
                    <div className="col-sm-6 p-5">
                        <h2 className="mb-3 font2">Vision & Mission</h2>
                        <p className="font3">To ensure that art is accepted as a form of education and a legitimate profession in our society, and set an example that will act as an inspiration for many more people start such initiatives.
                       Our mission is to touch the lives of millions of underprivileged children in India and benefit them with our programs. We want to create a future of self sufficiency among these students by investing in the wealth of art.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ourvision;

// <div data-aos="zoom-in" className="container p-2 mt-2">
// <div className="row m-auto">
//     <div className="col-sm-6 p-5">
//         <h2 className="mb-3 font2">Our Journey</h2>
//         <p className="font3">Started in 2016, Dance Out of Poverty is the flagship initiative of Sinhayana Foundation, an independent, non-profit organization. The initiative aims at empowering underprivileged children by providing free of cost dance education and instilling life skills. At Dance Out Of Poverty, their energy is channelized by keeping them away from bad influences like drugs, stealing, etc. The focus is on nurturing the students and making them proficient to dance their way out of poverty!</p>
//     </div>
//     <div className="col-sm-6">
//         <img src={Jor} style={{ width: '85%' }} />
//     </div>
// </div>
// </div>