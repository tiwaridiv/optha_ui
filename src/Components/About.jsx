import React from "react";
import img from "../assets/img/about.jpg";

const About = () => {
  return (
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24  gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">
          About Us
        </h1>
        <p className=" text-justify lg:text-start">
          At our ophthalmology practice, we are dedicated to providing
          exceptional eye care tailored to your unique needs. With years of
          experience and a passion for helping our patients achieve optimal
          vision, we offer comprehensive services ranging from routine eye exams
          to advanced treatments for a wide variety of eye conditions.
        </p>
        <p className="text-justify lg:text-start">
          We believe in a patient-first approach, ensuring that each individual
          receives the personalized attention they deserve. Our state-of-the-art
          technology, combined with our team’s expertise, allows us to deliver
          accurate diagnoses and effective treatments, helping you maintain
          healthy vision for life.
        </p>
        <p className="text-justify lg:text-start">
          Our commitment to your eye health goes beyond just treatment—we strive
          to educate and empower you to take control of your vision care.
          Whether you're coming in for a routine checkup or a specialized
          procedure, we are here to guide you through every step of the process
          with compassion and professionalism. Your vision, our priority.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
  );
};

export default About;
