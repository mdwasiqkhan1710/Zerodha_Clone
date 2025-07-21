import React from "react";

function Pricing () {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 p-4 mb-5">
                    <h3 className="mb-3 ps-4">Unbeatable pricing</h3>
                    <p className="text-muted ps-4">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/" className="text-decoration-none ps-4">See Pricing <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2 me-3" style={{height: "20%", width:"10%"}}>
                    <img src="media/images/pricing-eq.svg" alt="pricingimg" />
                    <p className="fs-6 text-muted">Free account opening</p>
                </div>
                <div className="col-2 me-3" style={{height: "20%", width:"10%"}}>
                    <img src="media/images/pricing-eq-2.svg" alt="pricingimg" />
                    <p className="fs-6 text-muted">Free equity delivery and direct mutual funds</p>
                </div>
                <div className="col-2 me-3" style={{height: "20%", width:"10%"}}>
                    <img src="media/images/pricing-eq-3.svg" alt="pricingimg" />
                    <p className="fs-6 text-muted">Intraday and F&O</p>
                </div>
            </div>
        </div>
    );
}

export default Pricing;