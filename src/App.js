import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import "./App.css";
import Firstpage from "./components/firstpage";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="main w-100">
      <Header />
      <div className="w-100">
        <div class="triangle-top-left"></div>
        <div class="triangle-top-right"></div>
      </div>

      <div className="w-100">
        <div class="triangle top-left"></div>
        <div class="triangle top-right"></div>
      </div>
      <Router>
        <div className="main-page d-flex">
          <div className="back-ground"></div>
          <div>
            <div className="wavy-line"></div>
            <div className="wavy-line"></div>
          </div>

          <Routes>
            <Route
              path="/"
              element={
                <div className="pages-section">
                  <Firstpage />
                </div>
              }
            />
            <Route
              path="/secondpage"
              element={
                <div className="pages-section">
                  <SecondPage />
                </div>
              }
            />
            <Route
              path="/thirdpage"
              element={
                <div className="pages-section">
                  <ThirdPage />
                </div>
              }
            />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
