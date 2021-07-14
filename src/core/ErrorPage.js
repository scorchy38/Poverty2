import React from 'react';
import Errorr from '../images_icons/PagenotFound.svg'

const ErrorPage = () => {
    return (
        <div>
            <div className="errorr">
                <img src={Errorr} alt="Page not found" />
                <h1>Page Not Found</h1>
            </div>
            <div className="aboo">
                <h6>© 2020, Dance Out Of Poverty. All Rights Reserved.</h6>
            </div>
        </div>
    );
};

export default ErrorPage;