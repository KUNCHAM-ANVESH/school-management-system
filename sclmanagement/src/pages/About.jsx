import React from "react";
import AboutImage from "../assets/AboutImage.jpg";
const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold flex justify-center">About Us</h1>
      <div className="flex justify-center items-center px-4 py-7">
        <p className="text-lg md:text-xl max-w-3xl text-center text-[#333]">
          Welcome to <span className="font-bold">School Hub</span>, a modern
          platform designed to make school management easy and smart. Our goal
          is to help teachers, students, and administrators stay connected,
          organized, and focused on learning.
        </p>
      </div>
      <div className=" mt-5 p-3 grid lg:grid-cols-2 sm:grid-cols-1 gap-5  items-center justify-center">
        <div className="pl-5  pb-[-40px]">
          <h1 className="font-bold text-2xl pb-3">Welcome To SchoolHub</h1>
          <p className="text-[#333] text-md text-[16px]">
            School Hub is a place where learning meets growth. We aim to provide
            quality education that helps every student build knowledge,
            confidence, and real-world skills. Our teachers guide students with
            care and creativity to bring out their best. At School Hub, we
            believe education should inspire curiosity and lifelong learning. We
            focus on both academics and personal development, helping students
            achieve success in every step of their journey.
          </p>
        </div>
        <div>
          <img src={AboutImage} className=" rounded-lg" alt="" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1 mt-5">
        <div>
          <img src="" alt="" />
        </div>
        <div>
          <p className="text-[#333] text-md text-[16px]">At School Hub, we create a safe and supportive environment where every student feels valued. Our classrooms are designed for active learning, teamwork, and creativity. We also encourage participation in sports, arts, and technology programs to help students discover their interests and talents beyond academics.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
