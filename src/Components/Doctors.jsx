import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";
import doc3 from "../assets/img/doc3.jpg";
import doc4 from "../assets/img/doc4.jpg";
import doc5 from "../assets/img/doc5.jpg";
import doc6 from "../assets/img/doc6.jpg";

const Doctors = () => {
  const data = [
    {
      img: doc1,
      name: "Dr. Serena Mitchell",
      specialties: "Orthopedic Surgeon",
    },
    {
      img: doc2,
      name: "Dr. Julian Bennett",
      specialties: "Cardiologist",
    },
    {
      img: doc3,
      name: "Dr. Camila Rodriguez",
      specialties: "Pediatrician",
    },
    {
      img: doc4,
      name: "Dr. Victor Nguyen",
      specialties: "Neurologist",
    },
    {
      img: doc5,
      name: "Dr. Ethan Carter",
      specialties: "Dermatologist",
    },
    {
      img: doc6,
      name: "Dr. Olivia Martinez",
      specialties: "Ophthalmologist",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 ">
      <div className="flex flex-col items-center justify-between mb-10 lg:mb-0">
        <div>
          <h1 className="text-4xl font-semibold text-center lg:text-center text-blue-900">
            Our Doctors
          </h1>
          <p className="mt-2 text-center lg:text-center text-gray-600">
            Meet our dedicated specialists committed to your care.
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-4">
          <button
            className="bg-teal-100 text-backgroundColor px-4 py-2 rounded-lg active:bg-teal-200 transition-all"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className="bg-teal-100 text-backgroundColor px-4 py-2 rounded-lg active:bg-teal-200 transition-all"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              
              className="h-[400px] text-black rounded-xl shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 mb-4 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt={e.name}
                  className="h-56 rounded-t-xl w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>

              <div className="flex flex-col justify-center items-center p-4 bg-white rounded-b-xl shadow-inner">
                <h1 className="font-semibold text-xl pt-4 text-teal-800">{e.name}</h1>
                <h3 className="pt-2 text-gray-600">{e.specialties}</h3>
                <button className="mt-3 bg-teal-500 text-white px-3 py-1 rounded-md transition-colors duration-300 hover:bg-teal-600">
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Doctors;
