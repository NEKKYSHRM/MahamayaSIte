"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import FmpeLeftNav from "@/components/FmpeLeftNav/LeftNav";
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
            To produce excellent professionals in field of farm mechanization
            through quality education, leadership skills and ethical values to
            serve the society for global food security and sustainable growth in
            agricultural production.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
          The department is committed to imparting high-quality technological knowledge in the field of Farm Machinery and Power Engineering, aiming to produce professionally competent and well-prepared agricultural engineers. A key objective is to reduce the physical strain and drudgery experienced by farmers by promoting the mechanization of agriculture, thereby enhancing efficiency and productivity. This includes the effective conservation and management of natural resources to support sustainable agricultural practices. Furthermore, the department strives to train students as capable extension professionals who can successfully disseminate advanced agricultural technologies and mechanization practices to farmers and other stakeholders, ensuring real-world impact and widespread adoption of innovations.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <FmpeLeftNav />
      </div>
    </div>
  );
}
