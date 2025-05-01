"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/SwceLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className=" h-full">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Soil Water & Conservation Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/swce/swce.png"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
          The Department of Soil and Water Conservation Engineering was
          established in the academic year 2003–04, alongside the founding of
          Mahamaya College of Agricultural Engineering & Technology. Since its
          inception, the department has played a crucial role in promoting
          sustainable agricultural practices through efficient soil and water
          management strategies. Over the years, it has steadily expanded its
          academic and research horizons. The department began offering M.Tech
          in Soil and Water Conservation Engineering in the year 2011–12, and
          more recently, it initiated a Ph.D. program in the same discipline
          during the 2023–24 academic session, thereby strengthening its
          commitment to advanced research and higher education. The department
          is actively engaged in Teaching, Research, and Extension activities to
          address the challenges related to soil degradation, water resource
          management, and sustainable land use planning. It provides students
          with a comprehensive understanding of the principles of hydrology,
          watershed management, erosion control, irrigation systems, and
          drainage engineering. With well-equipped laboratories, field-based
          learning opportunities, and modern computational tools, students gain
          both theoretical knowledge and hands-on experience in solving
          real-world problems. Faculty members of the department are involved in
          interdisciplinary research, government-funded projects, and community
          outreach programs that aim to improve water use efficiency, enhance
          soil health, and develop climate-resilient farming practices. Through
          workshops, seminars, and field demonstrations, the department
          regularly disseminates scientific knowledge and technological
          solutions to farmers, professionals, and other stakeholders. The
          department aims to develop skilled engineers and researchers capable
          of contributing meaningfully to environmental conservation,
          agricultural productivity, and sustainable rural development.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
