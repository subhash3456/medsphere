import React from "react";
import "./section.css";
import { useState, useEffect } from "react";
import Img1 from "../Images/fuckYou.jpg";
import Img2 from "../Images/DvsW.jpg";

// import img1 from "../Images/fuckYou";

export const Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const moveSlide = (direction) => {
    console.log(`moveSlide called with direction: ${direction}`);
    let newIndex = currentIndex + direction;
    console.log(`newIndex: ${newIndex}`);
    if (newIndex >= items.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = items.length - 1;
    }

    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      moveSlide(1); // Move to the next slide
    }, 7000); // Slide change interval in milliseconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const items = [
    {
      image: Img2,
      heading: "Implement Predictive",
      passage:
        "Minimize medical billing operational flaws and improve your healthcare business profitability",
      button: "Explore More",
      backgroundImg: Img1,
    },
    {
      image: Img1,
      heading: "Skilled Medical",
      passage:
        "Minimize medical billing operational flaws and improve your healthcare business profitability",
      button: "Explore More",
      backgroundImg: Img1,
    },
    {
      image: Img1,
      heading: "Redefine Your Revenue",
      passage:
        "Minimize medical billing operational flaws and improve your healthcare business profitability",
      button: "Explore More",
      backgroundImg: Img1,
    },
  ];

  return (
    <div className="section1">
      <div className="carousel-container">
        <button className="prev" onClick={() => moveSlide(-1)}>
          &#10094;
        </button>
        <div
          className="carousel-content"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {items.map((item, index) => (
            <div
              className="carousel-item"
              // style={{
              //   // backgroundImage: "url('../Images/DvsW.jpg')",
              //   backgroundImage: "url('../Images/DvsW.jpg')",
              //   // backgroundColor: "yellow",
              // }}
              key={index}
            >
              <div
                className="carousel-itemContent"
                style={{
                  // backgroundImage: "url('../Images/DvsW.jpg')",
                  backgroundImage: "url('../Images/DvsW.jpg')",
                  // backgroundColor: "yellow",
                }}
              >
                <div className="carouselItemContentHeading">{item.heading}</div>
                <p className="carouselItemContentPara">{item.passage}</p>
                <button className="sec1Button">{item.button}</button> <br></br>
                {/* <img
                  className="sec1Img"
                  src={item.backgroundImg}
                  alt="background Img"
                /> */}
              </div>
            </div>
          ))}
        </div>
        <button className="next" onClick={() => moveSlide(1)}>
          &#10095;
        </button>
      </div>
    </div>
  );
};
