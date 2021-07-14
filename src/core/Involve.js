import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'aos/dist/aos.css'
import Parent from './Assests/parent.svg'
import { toast, ToastContainer } from 'react-toastify';
import * as firebase from 'firebase';
import AOS from 'aos';

const Involve = () => {

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        number: '',
        nationality: '',
        street: '',
        city: '',
        state: '',
        pin: '',
        country: '',
        gender: '',
        age: ''
    })

    const { name, phone, email, message, number, nationality, street,
        city, state, pin, country, gender, age } = values

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value })
        console.log(values);
    }

    const submitHandler = () => {
        if (!email || !name) {
            toast.error('email and name are required');
        } else {
            if (!number) {
                toast.error('Please verify form !!!')
            }
            else {
                const firebaseuri = firebase.database().ref('volunteer');
                firebaseuri.push().set({
                    name: name,
                    email: email,
                    message: message,
                    phone: phone,
                    nationality: nationality,
                    street: street,
                    city: city,
                    gender: gender,
                    age: age,
                    pin: pin,
                    country: country,
                    state: state
                });
                toast.success('Thank You!!!');
            }
        }
    }

    AOS.init({
        offset: 300,
        duration: 500,
        delay: 0
    });


    return (
        <>
            <ToastContainer />
            <div className="container mt-5 mb-2 p-1 text-center">
                <form className="form mt-2" method='POST'>
                    <div className="row m-auto">
                        <div data-aos="slide-up" className="col-sm-5 mt-5 p-2">
                            <img src={Parent} style={{ width: '100%' }} />
                        </div>
                        <div className="offset-sm-1 col-sm-6 p-2">
                            <div data-aos="slide-down" className="row m-auto p-1">
                                <div className="col-sm-12 vol text-left pb-4 mb-2">
                                    <h1 data-aos="" className="font">Volunteer</h1>
                                </div>
                                <div data-aos="fade-in" className="col-sm-12 text-left mt-1">
                                    <h6 className="mt-2 font3"><b>Personal Details</b></h6>

                                    <div className="form-group">
                                        <label className="m-0 mt-2" for="name">Name</label>
                                        <input type="text" className="form-control" id="name" name="name" />
                                    </div>
                                    <div class="row m-auto">
                                        <div class="col-sm-6 p-1">
                                            <label className="m-0 mt-2" for="phone">Phone</label>
                                            <input type="string" maxLength="15" name="phone" id="phone" className="form-control" />
                                        </div>
                                        <div class="col-sm-6 p-1">
                                            <label className="m-0 mt-2" for="email">Email</label>
                                            <input type="email" name="email" id="email" className="form-control" />
                                        </div>
                                        <div class="col-sm-6 p-1">
                                            <label className="m-0 mt-2" for="nation">Emergency Contact</label>
                                            <input type="number" maxLength="25" name="emergency" id="nation" className="form-control" />
                                        </div>
                                        <div class="col-sm-6 p-1">
                                            <label className="m-0 mt-2" for="nation">DOB</label>
                                            <input type="date" maxLength="25" name="dob" id="nation" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="m-0 mt-2" for="name">Permanent Address</label>
                                        <input type="text" className="form-control" id="name" name="peradd" />
                                    </div>
                                    <div class="row m-auto">

                                        <div className="col-sm-6 p-1">
                                            <label className="m-0 mt-2" for="gender">Current Address</label>
                                            <select className="form-control btn btn-warning" name="curadd" id="gender">
                                                <option value="current" selected>Current Location</option>
                                                <option value="preferred">Preferred Location to Work</option>
                                                <option value="home">Work from Home</option>
                                            </select>
                                        </div>
                                        <div className="col-sm-6 hours p-1 mb-4">
                                            <label className="m-0 mt-2" for="age">Working Hours</label>
                                            <input type="number" className="form-control btn btn-warning" name="hours" id="age" />

                                        </div>
                                        <div className="col-sm-12 p-1">
                                            <label className="m-0 mt-2" for="gender">Language Proficiency:</label>
                                            <select className="form-control btn" name="language" id="gender">
                                                <option value="hindi" selected>Hindi</option>
                                                <option value="english">English</option>
                                                <option value="marathi">Marathi</option>
                                            </select>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-5 p-2">
                            <div className="row m-auto m-3 text-left">
                                <div className="col-sm-12 vol">
                                    <h6 data-aos="fade-up" className="font3"><b>Qualification</b></h6>
                                </div>
                                <div data-aos="fade-right" className="col-sm-12 mt-3">
                                    <div className="form-group">
                                        <label className="m-0 mt-2 mb-1" for="address"><h6 className="font3">Educational Qualification</h6> (Mention upto the latest degree)</label>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Degree:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="degree" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Subject:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="subject" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">University:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="university" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Location:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="location" />
                                        </div>

                                    </div>
                                </div>

                                <div data-aos="fade-right" className="col-sm-12 mt-3">
                                    <div className="form-group">
                                        <label className="m-0 mt-2 mb-1" for="address"><h6 className="font3">Professional Qualification </h6> (Mention upto the latest degree)</label>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Organisation:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="organisation" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Position:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="position" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Duration:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="duration" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Roles and Responsibilities:</h5></label>
                                            <input type="text" className="m-0 mt-0 col-sm-6 btn" id="building" name="roles" />
                                        </div>
                                        <div className="col-sm-12 hours m-1">
                                            <label className="m-0 mt-2" for="gender">Past Experience in any NGO: </label>
                                            <select className="form-control btn" name="ngo" id="gender">
                                                <option value="yes" selected>Yes</option>
                                                <option value="no">No</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Name of Organisation:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="ngorgan" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Position or Department:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="position" />
                                        </div>
                                        <div className="form-group">
                                            <label className="m-0 mt-2 col-sm-6" for="building"><h5 className="font3">Roles & Responsibilities:</h5></label>
                                            <input type="text" className="m-0 mt-2 col-sm-6 btn" id="building" name="roles" />
                                        </div>

                                    </div>
                                </div>



                            </div>
                        </div>
                        <div className="offset-sm-1 mt-2 col-sm-6">
                            <div className="row m-auto text-left m-4">
                                <div className="col-sm-12 vol">
                                    <h6 data-aos="fade-up" className="font3"><b>Interest & Views</b></h6>
                                </div>
                                <div data-aos="fade-left" className="col-sm-12 mt-5">
                                    <div className="form-group">
                                        <label className="m-0 mb-1 mt-2" for="about">Any specific Interest in any art form.<i className="text-danger">*</i> Others,specify</label>
                                        <select className="form-control btn btn-secondary" name="interest">
                                            <option value="dance" selected>Dance</option>
                                            <option value="music">Music(Vocal/Instrumental)</option>
                                            <option value="acting">Acting</option>
                                            <option value="photography">Photography</option>
                                            <option value="sketch">Painting & Sketching</option>
                                        </select>
                                        <input type="text" placeholder="other?..specify it!" name="other" className="form-control" />
                                    </div>

                                    <div className="form-group">
                                        <label className="m-0 mb-1 font3 mt-2" for="about"><p className="m-2">In this section, kindly express your personal views for or against the following statements in not less than 150 words. You can pick any 2 statements.</p>
                                            <h6 className="m-2"><b>1.</b> Delhi Government’s initiative for creating learning opportunities for EWS children is the only way to bring best education practices to disadvantaged children.
            </h6>

                                            <h6 className="m-2"><b>2.</b> The only growth most important for a child is their educational growth. Extra-curricular activities are fun but wanting to build a career on it is a foolish approach to success.
            </h6>

                                            <h6 className="m-2"><b>3.</b> When concerning oneself with empowering underprivileged children, one must always acknowledge the gender implications of your actions. For eg., to ensure upliftment of a society in a true sense, initiatives should focus on inclusion and equal opportunities for male and female children.</h6>
                                        </label>
                                        <textarea type="text" className="form-control" id="about" rows="10" name="about" />
                                    </div>
                                </div>
                                <div data-aos="fade-up" className="col-sm-12 text-center mt-2 vol">
                                    <h5 className="font3">Verification</h5>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <div className="form-group">
                                        <label className="m-0 mt-2" for="verify">Enter any 2 digits<i className="text-danger"><b>*</b></i></label>
                                        <input data-aos="" type="text" className="form-control" id="verify" name="verify" />
                                    </div>
                                </div>
                                <div className="col-sm-12 m-1">
                                    <button type="submit" className="btn-warning btn" style={{ width: '100%' }}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </>
    )
}

export default Involve;







// <div data-aos="fade-out" className="container mt-5 mb-2 p-1 text-center">
//                 <form className="form mt-2" method='POST'>
//                     <div className="row m-auto">
//                         <div className="col-sm-5 p-2">
//                             <img src={Parent} style={{ width: '100%' }} />
//                         </div>
//                         <div className="offset-md-1 col-sm-6 p-2">
//                             <div className="row m-auto p-1">
//                                 <div className="col-sm-12 vol text-left pb-4 mb-2">
//                                     <h1 style={{ fontWeight: 'bolder' }}>Volunteer</h1>
//                                 </div>
//                                 <div className="col-sm-12 text-left mt-1">
//                                     <h6 className="mt-2"><b>Personal Information</b></h6>

//                                     <div className="form-group">
//                                         <label className="m-0 mt-2" for="name">Name</label>
//                                         <input type="text" className="form-control" id="name" name="name" onChange={handleChange('name')} value={name} />
//                                     </div>
//                                     <div class="row m-auto">
//                                         <div class="col-sm-6 p-1">
//                                             <label className="m-0 mt-2" for="phone">Phone</label>
//                                             <input type="string" maxLength="15" name="phone" id="phone" className="form-control" onChange={handleChange('phone')} value={phone} />
//                                         </div>
//                                         <div class="col-sm-6 p-1">
//                                             <label className="m-0 mt-2" for="email">Email</label>
//                                             <input type="email" name="email" id="email" className="form-control" onChange={handleChange('email')} value={email} />
//                                         </div>
//                                         <div class="col-sm-6 p-1">
//                                             <label className="m-0 mt-2" for="nation">Nationality</label>
//                                             <input type="string" maxLength="25" name="nation" id="nation" className="form-control" onChange={handleChange('nationality')} value={nationality} />
//                                         </div>
//                                     </div>
//                                     <div class="row m-auto">

//                                         <div className="col-sm-6 p-1">
//                                             <label className="m-0 mt-2" for="gender">Gender</label>
//                                             <select className="form-control btn btn-warning" name="gender" id="gender" onChange={handleChange('gender')}>
//                                                 <option value="male" selected>Male</option>
//                                                 <option value="female">Female</option>
//                                             </select>
//                                         </div>
//                                         <div className="col-sm-6 p-1 mb-4">
//                                             <label className="m-0 mt-2" for="age">Age</label>
//                                             <select className="form-control btn btn-warning" name="age" id="age" onChange={handleChange('age')}>
//                                                 <option value="20" selected>&#60;20</option>
//                                                 <option value="20-30">20-30</option>
//                                                 <option value="30-50">31-50</option>
//                                                 <option value="50">&#62;50</option>
//                                             </select>

//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-sm-5 p-2">
//                             <div className="row m-auto m-3 text-left">
//                                 <div className="col-sm-12 vol">
//                                     <h6>Address</h6>
//                                 </div>
//                                 <div className="col-sm-12 mt-3">
//                                     <div className="form-group">
//                                         <label className="m-0 mt-2" for="address">Street Address</label>
//                                         <input type="text" className="form-control" id="address" name="address" onChange={handleChange('street')} value={street} />
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-12">
//                                     <div className="form-group">
//                                         <label className="m-0 mt-2" for="building">Apartment, Suite, Building (optional)</label>
//                                         <input type="text" className="form-control" id="building" name="building" />
//                                     </div>
//                                 </div>

//                                 <div class="col-sm-6">
//                                     <label className="m-0 mt-2" for="city">City</label>
//                                     <input type="string" maxLength="15" name="city" id="city" className="form-control" onChange={handleChange('city')} value={city} />
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <label className="m-0 mt-2" for="state">State</label>
//                                     <input type="text" name="state" id="state" className="form-control" onChange={handleChange('state')} value={state} />
//                                 </div>
//                                 <div class="col-sm-6">
//                                     <label className="m-0 mt-2" for="pin">Postal Code</label>
//                                     <input type="string" maxLength="25" name="pin" id="pin" className="form-control" onChange={handleChange('pin')} value={pin} />
//                                 </div>
//                                 <div className="col-sm-6">
//                                     <label className="m-0 mt-2" for="country">Country</label>
//                                     <input type="string" maxLength="25" name="country" id="country" className="form-control" onChange={handleChange('country')} value={country} />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="offset-md-1 mt-2 col-sm-6">
//                             <div className="row m-auto text-left m-4">
//                                 <div className="col-sm-12 vol">
//                                     <h6>About You</h6>
//                                 </div>
//                                 <div className="col-sm-12 mt-5">
//                                     <div className="form-group">
//                                         <label className="m-0 mb-1 mt-2" for="about">Experience, Learning and skills, that you could use to support Dance out of Poverty</label>
//                                         <textarea type="text" className="form-control" id="about" rows="9" name="about" style={{ backgroundColor: 'rgb(201, 198, 198)' }} onChange={handleChange('message')} value={message} />
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-12 text-center mt-2 vol">
//                                     <h6>Verification</h6>
//                                 </div>
//                                 <div className="col-sm-12 mt-3">
//                                     <div className="form-group">
//                                         <label className="m-0 mt-2" for="verify">Enter any 2 digits<i className="text-danger"><b>*</b></i></label>
//                                         <input type="text" className="form-control" id="verify" name="verify" onChange={handleChange('number')} value={number} />
//                                     </div>
//                                 </div>
//                                 <div className="col-sm-12 m-0">
//                                     <div className="btn-warning btn" style={{ width: '100%' }} type="submit" onClick={submitHandler}>Submit</div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </form>
//             </div>

