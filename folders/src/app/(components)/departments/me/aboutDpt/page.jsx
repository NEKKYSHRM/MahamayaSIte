"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/meLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className="h-full">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Mechanical Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/me/me.jpg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
        The Department of Mechanical Engineering at Mahamaya College of Agricultural Engineering & Technology was established under the umbrella of the Department of Basic Engineering & Applied Sciences. Since the academic year 2008–09, the Mechanical Engineering program has been an integral part of the undergraduate curriculum, laying a strong foundation in design, manufacturing, thermal systems, and mechanical dynamics. The department is dedicated to delivering quality education through a combination of theoretical learning and practical exposure. It features well-equipped laboratories and workshops that support hands-on training, fabrication, research, and project-based learning. The Mechanical Engineering section emphasizes technical proficiency, innovation, and analytical thinking, preparing students for careers in industries such as manufacturing, automotive, energy, robotics, and research. The department also organizes seminars, industrial visits, technical fests, and skill-building workshops to encourage continuous learning and innovation in emerging technologies like CAD/CAM, automation, renewable energy, and advanced manufacturing systems.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
