import React from "react";
import "./section4.css";

import { Link } from "react-router-dom";
export const Section4 = () => {
  return (
    <div className="section4">
      section4
      <h1 className="sec4Heading">Our Services</h1>
      <div className="sec4Boxes">
        <div className="sec4Box">
          <img src="" alt="sec4img" />
          <span>Increase Revenue</span>
          <p>
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          <img src="" alt="sec4img" />
          <span>Decrease Costs</span>
          <p>
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          <img src="" alt="sec4img" />
          <span>Simplify Workflows</span>
          <p>
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
        <div className="sec4Box">
          <img src="" alt="sec4img" />
          <span>Increase Revenue</span>
          <p>
            Our meticulous approach to delivering healthcare revenue cycle
            services allows clients to focus entirely on patient care.
          </p>
          <button className="readMore">READ MORE</button>
        </div>
      </div>
    </div>
  );
};
