import React from "react";
import Image from "../images/astro_painter.png";
import { FaRegPenToSquare } from "react-icons/fa6";

const ThirdPage = () => {
  return (
    <>
      {" "}
      <div className="ms-auto first-part text-center">
        <div className="left-side ms-auto">
          <p className="border-style"></p>
          <div className="header text-info fs-3 fw-bold">
            <span className="text-white">Call for Artists</span> Application are
            open for all artist's and creators
          </div>
          <p className="border-style1"></p>
          {/* <p className="text-info  para-text">
            Buying MoonBoxes is a unique way to acquire NFTs and build your
            collection. It is build on the binance smart chain, MoonRiver,
            Plygon, Ethereum and Dogechain. Only available on{" "}
            <span className="text-white">MoonBoxes.io</span>
          </p> */}

          <button className="moonbox-button float-left w-100">
            Contact Us
          </button>
          <button className="moonbox-button1 float-left  w-100 mt-2">
            <span>
              <FaRegPenToSquare />
            </span>{" "}
            Application form
          </button>
        </div>

        <div className="col-sm-6">
          <div className="rigth-side">
            <img src={Image} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdPage;
