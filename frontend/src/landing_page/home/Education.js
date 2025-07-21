import React from "react";
// import {Link} from 'react-router-dom';

function Education () {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" alt="edu-img"></img>
                </div>
                <div className="col-6">
                    <h1 className="mb-5 mt-4 pe-3">Free and open market education</h1>
                    <p className="fs-6 text-muted mb-3 pe-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='/' className="text-decoration-none">Varsity <i class="fa-solid fa-arrow-right"></i></a>
                    <p className="fs-6 text-muted mb-3 mt-5 pe-3">TradingQ&A, the most active trading and investment community in India for all your market related queries</p>
                    <a href="/"  className="text-decoration-none mb-5" >TradingQ&A <i class="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;