import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-3">
          <img src={imageURL} alt="main" />
        </div>
        <div className="col-6 p-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div className="ms-1 me-3 p-2">
            <a className="text-decoration-none" href={tryDemo}>
              Try Demo <i class="fa-solid fa-arrow-right"></i>
            </a>
            <a className="text-decoration-none ms-5" href={learnMore}>
              Learn More <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
          <div className="ms-1 me-3 p-2">
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play store"
              ></img>
            </a>
            <a href={appStore}>
              <img
                className="ms-5"
                src="media/images/appStoreBadge.svg"
                alt="Apple Store"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
