"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import IdeLeftNav from "@/components/IdeLeftNav/LeftNav";
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
            The vision of the Department of Irrigation and Drainage Engineering
            is to foster a dynamic blend of technical knowledge, innovation, and
            excellence in the field of irrigation engineering. The department
            aims to develop strong problem-solving capabilities in students to
            address challenges related to drainage systems. Ultimately, the
            department envisions producing graduates who are well-equipped to
            manage water and land resources efficiently, thereby enhancing the
            productivity of the agricultural sector and improving rural
            livelihoods.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
            The mission of the department is to impart both theoretical and
            hands-on practical knowledge of various traditional and modern
            irrigation technologies. It strives to equip students with the
            necessary skills for effective planning and management of water
            resources, particularly in agricultural command areas. Additionally,
            the department is committed to conducting advanced research aimed at
            addressing water scarcity and improving water use efficiency.
            Emphasis is placed on sustainable water management practices,
            especially in the context of changing climate scenarios.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <IdeLeftNav />
      </div>
    </div>
  );
}
