import React from "react";
import { AiOutlineYoutube,AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="absolute bottom-0 flex flex-col items-center justify-center w-full py-5 mt-40 bg-black border-t-2 border-neutral-800">
      <div className="flex items-center mb-3 space-x-3">
        <span className="text-lg font-semibold text-neutral-600">Social</span>
        <a href="https://www.facebook.com/FitnessUrbanRomania">
          <AiOutlineFacebook className="transition-all duration-200 rounded-full w-7 text-neutral-600 h-7 hover:text-white" />
        </a>
        <a href="https://www.youtube.com/@DORUDOROBAT">
          <AiOutlineYoutube className="transition-all duration-200 rounded-lg h-7 w-7 text-neutral-600 hover:text-white" />
        </a>
      </div>
      <p className="font-semibold text-neutral-600">©{year} Fitness Urban Blog</p>
    </div>
  );
}
