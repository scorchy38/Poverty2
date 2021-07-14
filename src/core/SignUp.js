import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Link, Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'
import Regauth from './Assests/coming.svg';


const SignUp = () => {
    return (
        <div>
            <ToastContainer />
            <center>
                <div className="container text-center mt-5 p-2 m-1">
                    <div className="row text-center m-auto">
                        <div className="col-sm-5 p-3">
                            <img src={Regauth} style={{ width: '100%' }} />
                        </div>
                        <div className="col-sm-4 offset-sm-3 p-3">

                            <h1 className='text-2xl text-center mb-2 font-extrabold'> Sign Up</h1>
                            <form className="form">

                                <div className="form-group">
                                    <input className="form-control" type="email" placeholder="Enter email" />
                                </div>
                                <div className="form-group">
                                    <input className="form-control" type="password" placeholder="Password" />
                                </div>
                                <Button style={{ width: '100%', backgroundColor:'#f1bc19', border:'none', outline:'none' }} type="submit">
                                    Sign Up
                                 </Button>
                            </form>

                        </div>

                    </div>
                </div>
            </center>
            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </div>
    );
};

export default SignUp;