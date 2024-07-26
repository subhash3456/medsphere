import React from "react";
import "./section3.css";

export const Section3 = () => {
  return (
    <div className="section3">
      Section3
      <h1 className="sec3Heading">Transforming Business</h1>
      <p className="sec3HeadingContent">
        Practolytics is one of the leading multi-specialty billing company
        serving more than 28+ medical specialities.
      </p>
      <div className="boxes">
        <div className="box">
          <h3>5M</h3>
          <p>Claims processed annually</p>
        </div>
        <div className="box">
          <h3>31</h3>
          <p>States covered</p>
        </div>
        <div className="box">
          <h3>100%</h3>
          <p>HIPAA compliant</p>
        </div>
      </div>
    </div>
  );
};
