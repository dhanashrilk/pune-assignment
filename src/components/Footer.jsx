import React from "react";

const Footer = () => {
  return (
    // <div className="footer-button row">
    //   <div className="col-sm-12">
    //     <button className="text-center">Tier 1</button>
    //   </div>
    //   <div className="triangle">
    //     <div className="triangle-top-left"></div>
    //   </div>
    //   <div className="triangle">
    //     <div className="triangle-top-right"></div>
    //   </div>
    // </div>
    <div
      className="m-auto mt-2 footer d-flex justify-content-center"
      style={{ width: "75%" }}
    >
      <a href="#" className="sheer-button">
        TIER
      </a>
      <a href="#" className="trapezoid-button">
        MOONSHOT BALANCE
      </a>
      <a href="#" className="mirror-sheer-button">
        TOTAL NFTs
      </a>
    </div>
  );
};

export default Footer;
