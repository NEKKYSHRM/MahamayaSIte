"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import CseLeftNav from "@/components/cseLeftNav/LeftNav";
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
          To become a center of excellence in Computer Science and Engineering by nurturing innovative minds, fostering research, and creating technology leaders capable of contributing to the digital transformation of society.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
          The mission of the Computer Science and Engineering Department is to provide quality education that equips students with strong theoretical foundations and practical skills in computing. The department aims to foster innovation, research, and problem-solving through interdisciplinary approaches while nurturing ethical values, leadership qualities, and a spirit of social responsibility. By promoting continuous learning and industry readiness, the department strives to develop competent professionals who can adapt to the evolving landscape of technology and contribute meaningfully to society.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <CseLeftNav />
      </div>
    </div>
  );
}
