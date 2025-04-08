"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/FmpeLeftNav/LeftNav";
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
            Farm Machinery & Power Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/fmpe/fmpe.jpg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
          The Department of Farm Machinery and Power Engineering was established
          in the academic year 2003–04 to support the B.Tech program in
          Agricultural Engineering. In 2021–22, the department introduced an
          M.Tech program in Agricultural Engineering with a specialization in
          Farm Machinery and Power Engineering. Further strengthening its
          academic offerings, a Ph.D. program in the same specialization was
          launched in 2023–24. The department is actively engaged in teaching,
          research, and extension activities aimed at advancing the field of
          Farm Machinery and Power Engineering. The department is committed to
          providing excellent education in Farm Machinery and Power Engineering
          at the undergraduate, postgraduate, and doctoral levels. It aims to
          design, develop, refine, and adapt agricultural machinery and farm
          power equipment tailored to the needs of this region. A key focus is
          on minimizing the drudgery involved in various farming operations
          through effective mechanization. The department strives to identify
          existing mechanization gaps and embrace futuristic technologies to
          automate agricultural processes. Research activities are conducted
          with a strong emphasis on delivering impactful outcomes that benefit
          both farmers and agricultural machinery manufacturers. Additionally,
          the department undertakes various extension activities aimed at
          capacity building for farmers, rural youth, and other stakeholders,
          thereby promoting enhanced farm mechanization.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
