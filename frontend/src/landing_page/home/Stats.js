import React from "react";

function Stats () {
    return ( 
        <div className="container mt-12">
            <div className="row">
                <div className="col-6">
                <h3 className="mb-5 ps-4 pe-4">Trust with confidence</h3>
                    <div className="mt-3 ps-4 pe-4">
                    <h4>Customer-first always</h4>
                    <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
                    </div>

                    <div className="mt-5 ps-4 pe-4">
                    <h4>No spam or gimmicks</h4>
                    <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>

                    <div className="mt-5 ps-4 pe-4">
                    <h4>The Zerodha universe</h4>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>

                    <div className="mt-5 ps-4 pe-4">
                    <h4>Do better with money</h4>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-6 p-4"><img src="media/images/ecosystem.png" alt="ecosystem" style={{width: "90%"}}/>
                <div className="text-center">
                    <a href="/" className="text-decoration-none mx-4">Explore our products <i class="fa-solid fa-arrow-right"></i></a>
                    <a href="/" className="text-decoration-none">Try Kite demo <i class="fa-solid fa-arrow-right"></i></a>
                </div>
                </div>
                <div className="text-center mt-4 mb-4"><img src="media/images/pressLogos.png" alt="broker-award"/></div>
            </div>
        </div>
    );
}

export default Stats;