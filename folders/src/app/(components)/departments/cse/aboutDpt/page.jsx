"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/cseLeftNav/LeftNav";
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
            Computer Science & Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/cse/cse.jpeg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
        The Department of Computer Science and Engineering (CSE) at Mahamaya College of Agricultural Engineering & Technology was established under the umbrella of the Department of Basic Engineering & Applied Sciences. Since the academic year 2008–09, the CSE program has been a core part of the undergraduate curriculum, offering a strong foundation in computational theory, programming, systems design, and data handling. The department is committed to providing high-quality education through a blend of theoretical concepts and hands-on experience. It is equipped with modern computer laboratories and infrastructure that support practical training, software development, research, and project-based learning. The CSE section focuses on developing problem-solving skills, technical expertise, and innovation among students, preparing them for successful careers in the IT industry, academia, and research. It regularly organizes workshops, seminars, and coding sessions to promote a culture of continuous learning and growth in emerging areas like AI, Machine Learning, Web Development, and Data Science.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
