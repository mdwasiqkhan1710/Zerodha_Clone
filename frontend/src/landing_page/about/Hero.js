import React from "react";

function Hero() {
  return (
    <div className="container mt-5 pt-5">
      <div className="row mb-5">
        <h3 className="text-center">
          We pioneered the discount broking model in India.
        </h3>
        <h3 className="text-center">
          Now, we are breaking ground with our technology.
        </h3>
      </div>
      <div className="row mb-5">
        <hr className="text-muted"></hr>
        <div className="col-6 pt-5 mt-5 ps-5 pe-5 text-muted">
          <p>
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>
          <p>
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>
        <div className="col-6 mt-5 pt-5 pe-5 ps-5 text-muted">
          <p>
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p>
            <a className="text-decoration-none" href="https://rainmatter.com/">
              Rainmatter
            </a>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p>
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <a
              className="text-decoration-none"
              href="https://zerodha.com/z-connect/"
            >
              blog
            </a>{" "}
            or see what the media is{" "}
            <a
              className="text-decoration-none"
              href="https://zerodha.com/media/"
            >
              saying about us
            </a>{" "}
            or learn more about our business and product{" "}
            <a
              className="text-decoration-none"
              href="https://zerodha.com/about/philosophy/"
            >
              philosophies
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
