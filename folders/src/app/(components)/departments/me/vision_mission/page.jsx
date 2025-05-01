"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import MeLeftNav from "@/components/meLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className=" h-full">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Vision</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
            To become a center of excellence in Mechanical Engineering
            education, research, and innovation by nurturing technically
            competent, socially responsible, and ethically grounded engineers
            capable of contributing to industry, society, and sustainable
            development.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
            The Department of Mechanical Engineering is committed to imparting
            strong fundamental knowledge and hands-on technical skills through
            quality teaching, practical training, and industry exposure. We aim
            to foster creativity, critical thinking, and problem-solving
            abilities in students to prepare them for successful careers in
            engineering, research, and entrepreneurship. The department actively
            promotes professional ethics, lifelong learning, and sustainable
            practices to empower students to meet the evolving global challenges
            in mechanical and allied engineering domains.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <MeLeftNav />
      </div>
    </div>
  );
}
