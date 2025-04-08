"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import PfeLeftNav from "@/components/PfeLeftNav/LeftNav";
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
            To become a Centre of excellence in Processing and Food Engineering
            Education and Research, through the development of highly competent
            optimized Food processes and design and development of
            Agro-processing equipment’s/ technologies, for serving the society.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
          The mission of the Department of Processing and Food Engineering is to evolve as a premier academic and research institution recognized for its excellence in teaching, innovation, and development in the frontier areas of processing and food engineering. The department is committed to fostering a dynamic environment that encourages cutting-edge research and development activities to meet the emerging challenges in the food processing sector. It aims to nurture and produce highly skilled professionals and visionary business leaders capable of driving innovation and sustainability in the domain of food process engineering, entrepreneurship, and agribusiness management. In addition to academic excellence, the department emphasizes the development of competitive technologies, modern practices, and efficient systems that can significantly improve the efficiency, safety, and quality of food processing operations. Moreover, it strives to bridge the gap between academia and industry by offering specialized training programs, skill development workshops, and hands-on research exposure tailored to the needs of students, professionals, and stakeholders. Through constant consultation with farmers, food processors, entrepreneurs, and other key stakeholders, the department seeks to align its research priorities and academic offerings with real-world demands and challenges. This approach ensures that graduates are not only well-versed in theory but are also equipped with the practical skills and industry insights needed to make meaningful contributions to the field of processing and food engineering.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <PfeLeftNav />
      </div>
    </div>
  );
}
