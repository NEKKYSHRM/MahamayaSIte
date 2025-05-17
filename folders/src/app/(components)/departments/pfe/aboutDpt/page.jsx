"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/PfeLeftNav/LeftNav";
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
            Processing & Food Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/pfe/pfe.jpeg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
          The Department of Processing and Food Engineering, formerly known as the Department of Agro Processing and Rural Industries (APRI), was established in the year 2003 with the aim of advancing education, research, and extension activities in the field of food and agro-processing. Since its inception, the department has been actively engaged in providing quality teaching at both undergraduate and postgraduate levels. It not only offers specialized courses related to food and agricultural processing but also incorporates emerging domains such as food quality assurance, food safety engineering, and advanced food processing technologies. The department plays a vital role in developing innovative solutions in the field of food processing, which are crucial for converting agricultural raw materials into finished, value-added products. These innovations help to enhance productivity, reduce production costs, and meet the growing demands of both consumers and industries. The scope of food processing in the department covers all essential unit operations—from initial raw material handling to processing, packaging, and safe storage—ensuring a complete understanding of the supply chain. In the year 2016, the department was officially renamed as the Department of Processing and Food Engineering (PFE) to better reflect its evolving focus and broader objectives. As part of its academic expansion, the department launched its M.Tech. program in Processing and Food Engineering in 2018 with an initial intake of 2 students, which was later increased to 5 seats in 2022 to accommodate growing interest and demand. Further strengthening its academic offerings, the department initiated its Ph.D. program in the same specialization in 2023 with an intake of 2 seats. Currently, it provides comprehensive education to B.Tech. (Agricultural Engineering) students as well as to M.Tech. and Ph.D. scholars specializing in Processing and Food Engineering. The department is also dedicated to promoting advanced research and development, carrying out extension activities for the benefit of farmers, and conducting testing and standardization (polarization) of agro-processing equipment to ensure their effective implementation and adoption across the state of Uttar Pradesh.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
