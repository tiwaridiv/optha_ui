import React from "react";
import Button from "../Layouts/Button";


const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/img/home.png')] bg-no-repeat bg-cover opacity-90">
      <div className=" w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-5xl font-bold leading-tight">
        Empowering Vision for the Brighter Future  😎       </h1>
        <p>
        We believe that clear vision is key to a vibrant life. We are committed to providing personalized care that helps you see the world more clearly.
        Your vision is our priority, and we're here to help you protect it for life. Let's work together to keep your eyes healthy and your world in focus!
        </p>
      </div>
    </div>
  );
};

export default Home;