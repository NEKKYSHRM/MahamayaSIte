"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import ReeLeftNav from "@/components/ReeLeftNav/LeftNav";
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
            To be a center of excellence which integrates all facets of
            Renewable Energy, entrepreneurship and environmental management and
            to produce skilful and high quality post graduate engineers
            supported by up-to-date curriculum and scientific and industrial
            research to suit the industry.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center text-center">
          <h2 className="text-black font-bold text-2xl mb-4">Mission</h2>
          <p className="text-gray-700 font-semibold text-sm text-justify">
            The mission of the department is to impart in-depth conceptual and
            practical knowledge of soil and water conservation to students,
            preparing them to meet real-world challenges. It strives to foster
            scientific and innovative thinking through hands-on learning and
            research-based education. The department is committed to conducting
            meaningful research in the areas of soil erosion control, water
            management, and watershed development. It also focuses on
            community-oriented extension activities, aiming to bridge the gap
            between academic knowledge and field-level implementation for the
            benefit of society and the environment.
          </p>
        </div>
      </div>
      <div className="w-full h-full">
        <ReeLeftNav />
      </div>
    </div>
  );
}
