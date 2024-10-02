import React from "react";
import ResumeTitle from "./ResumeTitle";
// import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9">

      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2020"
          title="St. Pius School"
          subTitle="Sheopur (Madhya Pradesh)"
          des="Completed 10th grade with distinction, focusing on science and mathematics. Participated in various extracurricular activities and academic competitions."
        />
        <ResumeCard
          badge="2020 - 2023"
          title="Polytechnic Diploma in Computer Science"
          subTitle="Government Polytechnic College, Sheopur"
          des="I completed my Polytechnic Diploma in Computer Science and Engineering from Government Polytechnic College, Sheopur."
        />
        <ResumeCard
          badge="2023 - 2026"
          title="B.Tech in Computer Science"
          subTitle="Lakshmi Narain College of Technology, Bhopal"
          des="Currently pursuing my B.Tech degree from Lakshmi Narain College of Technology, Bhopal, as a lateral entry student. I joined in the second year, continuing my studies in Computer Science and Engineering."
        />
      </div>
    </div>
  );
};

export default Education;
