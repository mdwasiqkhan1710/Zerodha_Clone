import React from "react";

function Hero () {
    return ( 
        <div className="container p-5">
            <div className="row text-center">
                <img src="media/images/homeHero.png" alt="Hero" className="mb-5"/>
            </div>
            <div className="text-center mb-5">
            <h1 className="mt-5">Invest in everything</h1>
            <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
            <button className="btn btn-primary btn-lg p-3 m-3 fw-bold mb-4" style={{width: "20%"}}>Sign up for free</button>
            </div>
        </div>
    );
}

export default Hero;