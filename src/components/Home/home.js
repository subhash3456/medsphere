import React from "react";
import { Section } from "../Sections/Section1/section";
import { Section2 } from "../Sections/Section2/section2";
import { Section3 } from "../Sections/Section3/section3";
import { Section4 } from "../Sections/Section4/section4";
import { Section5 } from "../Sections/Section5/section5";
import { Footer } from "../Footer/footer";

export const Home = () => {
  return (
    <div>
      <Section />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
    </div>
  );
};
