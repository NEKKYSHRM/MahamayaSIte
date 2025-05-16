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
            Basic Engineering & Applied Sciences
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
        The Department of Basic Engineering & Applied Sciences at Mahamaya College of Agricultural Engineering & Technology serves as a foundational pillar for all undergraduate programs. Established to support core technical and scientific education, the department integrates subjects like physics, chemistry, mathematics, engineering mechanics, and communication skills into the curriculum. Since the academic year 2008–09, it has played a crucial role in equipping students with essential scientific principles and engineering fundamentals necessary for advanced technical disciplines. The department is committed to delivering quality education through a balanced mix of theoretical instruction and practical application. With well-equipped laboratories and facilities, it ensures hands-on learning experiences in subjects such as material science, thermodynamics, and engineering drawing. The department fosters critical thinking, problem-solving, and technical proficiency that are vital across all engineering branches. To enrich student learning, the department actively organizes workshops, seminars, technical fests, and interdisciplinary activities. These initiatives help students stay updated with evolving technologies in areas like computational tools, applied physics, environmental studies, and soft skills, building a solid foundation for academic and professional success in various engineering fields.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
