import React, { useState } from 'react';
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import Contactt from '../images_icons/contact.svg'
import { toast, ToastContainer } from 'react-toastify';
import * as firebase from 'firebase';
import AOS from 'aos';

const Contact = () => {

    const [values, setValues] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
        number: ''
    })

    const { name, phone, email, message, number } = values

    const handleChange = name => e => {
        setValues({ ...values, [name]: e.target.value })
    }

    const submitHandler = () => {
        if (!email || !name) {
            toast.error('email and name are required');
        } else {
            if (!number) {
                toast.error('Please verify form !!!')
            }
            else {
                const firebaseuri = firebase.database().ref('contact');
                firebaseuri.push().set({
                    name: name,
                    email: email,
                    message: message,
                    phone: phone
                });
                console.log(5555555)
                toast.success('Thank You!!!');//Thank You
            }
        }
    }

    AOS.init({
        offset: 200,
        duration: 500,
        delay: 0
    });

    return (
        <div>
            <div className="con">
                <ToastContainer />
                <Container fluid>
                    <Row>
                        <Col lg={6} sm={6} xs={12}>
                            <div className="con1" data-aos="zoom-in">
                                <h5 style={{fontWeight:'bolder', fontSize:'2rem'}}>Find Us</h5>
                                <div className="con11">
                                    <h6>Address</h6>
                                    <p>A-178, Gulab bagh<br /> Uttam Nagar <br />PIN CODE: 110059</p>
                                </div>
                                <div className="con12">
                                    <h6>Email</h6>
                                    <p>info@danceoutofpoverty.org</p>
                                </div>
                                <div className="con13">
                                    <h6>Phone</h6>
                                    <p>+91 9990766799</p>
                                </div>
                                <div className="con14">
                                    <img src={Contactt} alt="not found" />
                                </div>
                            </div>
                        </Col>
                        <Col data-aos="zoom-in" lg={6} sm={6} xs={12}>
                            <div className="con2">
                                <h5 style={{fontWeight:'bolder', fontSize:'2rem'}}>Contact Us</h5>
                                <div className="con21">
                                    <Form.Group>
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control className="con28" style={{ backgroundColor: '#E6E6E6', width: '100%' }} type="text" placeholder="Name" value={name} onChange={handleChange('name')} />
                                    </Form.Group>
                                    <div className="con23">
                                        <div className="con24">
                                            <Form.Group>
                                                <Form.Label>Phone</Form.Label>
                                                <Form.Control className="con28" style={{ backgroundColor: '#E6E6E6', width: '100%' }} type="number" placeholder="Phone" value={phone} onChange={handleChange('phone')} />
                                            </Form.Group>
                                        </div>
                                        <div className="con25">
                                            <Form.Group>
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control className="con28" style={{ backgroundColor: '#E6E6E6', width: '100%' }} type="email" placeholder="Email" value={email} onChange={handleChange('email')} />
                                            </Form.Group>
                                        </div>
                                    </div>
                                </div>
                                <div className="con22">
                                    <Form.Group controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control as="textarea" className="con28" style={{ backgroundColor: '#E6E6E6' }} rows="6" value={message} onChange={handleChange('message')} />
                                    </Form.Group>
                                </div>
                                <div>
                                    <h6>Verification</h6>
                                    <Form.Group>
                                        <Form.Label>Please enter any two digits <sup style={{ color: 'red' }}>*</sup></Form.Label>
                                        <Form.Control className="con28" style={{ backgroundColor: '#E6E6E6' }} type="number" value={number} onChange={handleChange('number')} />
                                    </Form.Group>
                                    <Button style={{ backgroundColor: '#F2B23D', border: '#F2B23D', width: '100%', marginTop: '20px' }} onClick={submitHandler}>Submit</Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </div>
    );
};

export default Contact;