import React from "react";
import ImageSlider from "./ImageSlider";
import { useNavigate } from "react-router-dom";
import { FaRegArrowAltCircleDown } from "react-icons/fa";

const SecondPage = () => {
  const navigate = useNavigate();
  return (
    <div className="h-100" style={{ margin: "10px 0" }}>
      <ImageSlider />
      <div className="first-part">
        {" "}
        <div className="left-side thirdpage ms-auto mt-5">
          <p className="border-style"></p>
          <div
            className="header text-info fs-3 fw-bold"
            style={{ textAlign: "left" }}
          >
            <span className="text-white">Moonboxes.io</span> your base to
            purchase NFT's
          </div>
          <p className="border-style1"></p>
        </div>
        <div className="second-part">
          <p className="border-style"></p>
          <p className="text-info  para-text">
            <span className="text-white">MoonBoxes.io</span> offers you a
            complete overview of upcoming, active and recent NFT drops.
          </p>
          <p className="text-info  para-text">
            <span className="text-white">MoonBoxes.io</span> will be home to
            collectors and amazing NFT artists.
          </p>

          <button
            className="moonbox-button float-left"
            onClick={() => navigate("/thirdpage")}
          >
            Expolre
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
