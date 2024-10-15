import React from "react";

const ServicesCard = ({ icon, title }) => {
  return (
    <div className="group flex flex-col items-center text-center gap-4 w-full lg:w-1/3 p-6 shadow-lg rounded-3xl cursor-pointer transform transition duration-500 ease-in-out lg:hover:-translate-y-8 bg-gradient-to-r from-teal-100 via-blue-50 to-blue-100 hover:shadow-2xl">
      <div className="bg-gradient-to-r from-teal-400 to-blue-500 p-4 rounded-full transition-colors duration-500 ease-in-out group-hover:from-teal-300 group-hover:to-blue-400">
        {icon}
      </div>
      <h1 className="font-bold text-xl text-blue-900 group-hover:text-blue-700 transition duration-300">
        {title}
      </h1>
      <p className="text-gray-600 text-sm">
        Your vision is our focus. Explore our specialized services to keep your
        eyes healthy and your vision crystal clear.
      </p>
      <h3 className="text-blue-600 font-semibold cursor-pointer hover:text-blue-800 transition duration-300 ease-in-out">
        Learn more
      </h3>
    </div>
  );
};

export default ServicesCard;
