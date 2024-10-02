import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Offering tailored web development solutions with responsive design and high-performance functionality to drive results."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Crafting visually stunning, user-friendly designs that enhance user experience and brand identity."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="I excel in mobile application development, specializing in intuitive interfaces and seamless functionality. I implement robust features and prioritize security to enhance user experience."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="Backed Developer"
        subTitle="I specialize in backend development, creating scalable server-side applications with efficient database integration and API development, all while ensuring security and performance."
      />
    </div>
  );
};

export default MyServices;
