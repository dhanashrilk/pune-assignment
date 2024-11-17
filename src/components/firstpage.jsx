import React from "react";
import ImageChanger from "./ImageChanger";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Firstpage = () => {
  const navigate = useNavigate();
  return (
    <div className="ms-auto first-part text-center">
      <div className="left-side ms-auto">
        <p className="border-style"></p>
        <div className="header text-info fs-3 fw-bold">
          <span className="text-white">Buy Moonboxes</span> and expand your
          NFT's Collection
        </div>
        <p className="border-style1"></p>
        <p className="text-info  para-text">
          Buying MoonBoxes is a unique way to acquire NFTs and build your
          collection. It is build on the binance smart chain, MoonRiver, Plygon,
          Ethereum and Dogechain. Only available on{" "}
          <span className="text-white">MoonBoxes.io</span>
        </p>

        <button className="moonbox-button float-left">Buy a MoonBox</button>
        <span
          className="float-right down-button"
          onClick={() => navigate("/secondpage")}
        >
          <FaRegArrowAltCircleDown />
        </span>
      </div>

      <div className="col-sm-6">
        <div className="rigth-side">
          <ImageChanger />
        </div>
      </div>
    </div>
  );
};

export default Firstpage;
