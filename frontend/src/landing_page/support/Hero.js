import React from "react";

function Hero() {
  return (
    <div className="container-fluid me-5 pe-5 " style={{ backgroundColor: "#387ed1", color:"white", width:"100%", height:"400px"}}>
      <div className="row ms-5 ps-5">
        <div className="col-6 mt-4 mb-4 p-3">
          <h4 className="ms-4 mb-5">Support Portal</h4>
          <p className="ms-4 mb-3 fs-4">Search for an answer or browse help topics to create a ticket</p>
          <input id="search-text" type="text" className="form-control typeahead ms-4" autocomplete="off" placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."></input>
          <div className="ms-4 mt-4">
          <a href="/" style={{color :"white"}} className="me-2">Track account opening</a>
          <a href="/" style={{color :"white"}} className="me-2">Track segment activation</a>
          <a href="/" style={{color :"white"}}className="me-2">Intraday margins</a>
          <a href="/" style={{color :"white"}}>Kite user manual</a>
          </div>
        </div>
        <div className="col-6 mt-4 mb-4 p-3">
          <a href="/" style={{color :"white"}} className="offset-6 fs-5">Track Tikets</a>
          <h6 className="pt-5 mt-5 fs-4 ms-5 ps-3">Featured</h6>
          <ol className= "ms-5 ps-3" style={{lineHeight:"30px"}}>
            <li>
              <a href="/" style={{color :"white"}}>
                 Adjustment of F&O contracts of OFSS due to dividend
              </a>
            </li>
            <li>
              <a href="/" style={{color :"white"}}>Surveillance measure on scrips - May 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
