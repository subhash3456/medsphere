import React from "react";
import { useState, useEffect } from "react";
import "./section5.css";
import image1 from "../Images/fuckYou.jpg";
import image2 from "../Images/happy.jpg";
import image3 from "../Images/DvsW.jpg";

export const Section5 = () => {
  const images = [
    require("../Images/fuckYou.jpg"),
    require("../Images/fuckYou.jpg"),
    require("../Images/fuckYou.jpg"),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="section5">
      <div className="sec5Content">
        section5
        <div className="section5Heading">
          <h1>Are You Ready To Grow Your Business?</h1>
        </div>
        <p>
          Learn all about our one-stop solution for revenue optimization. With
          proven technology solutions, we can improve efficiency and
          productivity of each area of your practice.
        </p>
        <button className="sec5Button">TALK TO US</button>
      </div>
      {/* <div className="sec5Images"> */}
      {/* <img src={image1} alt="img1" className="secImg" />
        <img src={image2} alt="img2" className="secImg" />
        <img src={image3} alt="img3" className="secImg" /> */}
      {/* <div className="carousel2-container">
          {images.map((image, index) => (
            <div
              className={`carousel2-item ${
                currentIndex === index ? "active" : ""
              }`}
              key={index}
              onClick={() => handleImageClick(index)}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div>
  );
};
