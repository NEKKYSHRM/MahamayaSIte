"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/ReeLeftNav/LeftNav";
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
           Renewable Energy Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/ree/ree.png"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
        The Department of Renewable Energy Engineering was established in the year 2016 at the college with a holistic vision of integrating **Teaching, Research, and Extension** in the field of renewable energy, recognizing its vital role in shaping the future of **energy, ecology, and the environment**. Since its inception, the department has been actively engaged in imparting quality education to both undergraduate and postgraduate students of Agricultural Engineering, with a focus on Renewable Energy. The department emphasizes hands-on learning and applied research in areas such as **solar energy, biogas production, biomass gasification, slurry management, and biomass cultivation**, ensuring students gain real-world insights into sustainable technologies. In 2023, the department launched its **M.Tech program**, further strengthening its academic framework and research capabilities. Through various village-level extension activities, the department has played a key role in spreading awareness and demonstrating the practical applications of renewable energy technologies. It aims to promote rural development by encouraging the **recycling of locally available organic waste** for energy production and organic manure. The department is committed to conducting research projects with practical outcomes that directly benefit farmers—such as **solar drying techniques, and converting crop residues into useful fuel forms**. Additionally, the department strives to **generate rural employment opportunities** by offering training programs that empower individuals towards **self-employment** in the renewable energy sector. Overall, the department envisions becoming a center of excellence by nurturing innovation, sustainability, and energy security through education and research.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
