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
            The Department of Basic Engineering and Applied Sciences (BEAS) envisions becoming a center of excellence in foundational engineering education and interdisciplinary research. It aims to equip students with a strong base in physics, chemistry, mathematics, and fundamental engineering principles, fostering critical thinking, innovation, and a scientific temperament that supports lifelong learning and advanced technical education.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
            Our mission is to provide high-quality education in basic sciences and engineering fundamentals that support all branches of engineering. The department is committed to creating a learner-centric environment that integrates theoretical concepts with practical applications. Through continuous curriculum enhancement, research initiatives, and value-based learning, BEAS strives to build competent professionals capable of contributing to technological advancements and addressing real-world challenges ethically and sustainably.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <MeLeftNav />
      </div>
    </div>
  );
}
