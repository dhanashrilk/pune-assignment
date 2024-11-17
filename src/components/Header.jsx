import React from "react";
import Imagelogo from "../images/moonbix-logo.png";
// import * as React from "react";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineRecentActors, MdOutlineHistory } from "react-icons/md";
import { FaRegFolderClosed } from "react-icons/fa6";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { DiClojure } from "react-icons/di";

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src={Imagelogo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Tooltip title="Back" arrow className="nav-link fs-4">
                  <Button>
                    {" "}
                    <IoArrowBackCircleOutline />
                  </Button>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip
                  title="Recent, Live and upcoming NFY drops"
                  arrow
                  className="nav-link fs-4"
                >
                  <Button>
                    {" "}
                    <MdOutlineRecentActors />
                  </Button>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip
                  title="This is your wallet inventory. An overview of all NFT's you received out of the moonboxes."
                  arrow
                  className="nav-link fs-4"
                >
                  <Button>
                    {" "}
                    <FaRegFolderClosed />
                  </Button>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip
                  title="This is your history."
                  arrow
                  className="nav-link fs-4"
                >
                  <Button>
                    {" "}
                    <MdOutlineHistory />
                  </Button>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip
                  title="This is your information"
                  arrow
                  className="nav-link fs-4"
                >
                  <Button>
                    {" "}
                    <IoMdInformationCircleOutline />
                  </Button>
                </Tooltip>
              </li>
              <li className="nav-item">
                <Tooltip title="" arrow className="nav-link fs-4">
                  <Button>
                    {" "}
                    <DiClojure />
                  </Button>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
