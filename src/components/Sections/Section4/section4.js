import React from "react";
import "./section4.css";
import imgSec4 from "../Images/DvsW.jpg";

import { Link } from "react-router-dom";
export const Section4 = () => {
  return (
    <div className="section4">
      <h1 className="sec4Heading">Our Services</h1>
      <div className="sec4Boxes">
        <div className="sec4Box">
          {/* <img src={imgSec4} alt="sec4img" /> */}
          <span className="imgSec4Content">Increase Revenue</span>
          <p className="sec4Content">
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          {/* <img src={imgSec4} alt="sec4img" /> */}
          <span className="imgSec4Content">Decrease Costs</span>
          <p className="sec4Content">
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          {/* <img src={imgSec4} alt="sec4img" /> */}
          <span className="imgSec4Content">Simplify Workflows</span>
          <p className="sec4Content">
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          {/* <img src={imgSec4} alt="sec4img" /> */}
          <span className="imgSec4Content">Increase Revenue</span>
          <p className="sec4Content">
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
      </div>
    </div>
  );
};
