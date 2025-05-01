"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import LeftNav from "@/components/IdeLeftNav/LeftNav";
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
            Irrigation & Drainage Engineering
          </h1>
          <div className="w-36 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="px-24 w-full">
          <div className="w-full h-64 flex justify-center relative rounded-sm overflow-hidden border-2 border-green-500">
            <Image
              src="/DepartmentsPic/ide/ide.png"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <p className="text-gray-800 text-justify font-semibold ">
          The Department of Irrigation and Drainage Engineering at Mahamaya
          College of Agricultural Engineering & Technology was established in
          the academic year 2003–04, coinciding with the inception of the
          undergraduate programme. Since its establishment, the department has
          grown steadily in terms of academic offerings, infrastructure, and
          research initiatives. The M.Tech. programme in Irrigation and Drainage
          Engineering was introduced in 2011–12 to strengthen postgraduate
          education and research in this critical domain. Further advancement
          led to the commencement of the Ph.D. programme in 2022–23, enabling
          the department to contribute more effectively to academic excellence
          and technological development in agricultural water management. The
          department plays a crucial role in teaching, research, and extension
          activities, aiming to address the pressing challenges of efficient
          irrigation and drainage systems in agriculture. Its core objective is
          to provide students with a thorough understanding of soil-water-plant
          relationships and to apply engineering principles to design and manage
          irrigation systems suitable for diverse agricultural scenarios.
          Emphasis is laid on both traditional and modern irrigation techniques
          such as surface irrigation, sprinkler systems, and drip irrigation, as
          well as drainage methods to ensure optimal field conditions. The
          curriculum is designed to offer a balance of theoretical knowledge and
          practical skills, enabling students to gain hands-on experience with
          real-world applications. Advanced courses expose students to
          state-of-the-art technologies and innovative water-saving techniques,
          including the integration of sensors, automation, and
          climate-responsive irrigation. To stay aligned with industry trends,
          the department incorporates the use of computer applications in
          agricultural water management, such as simulation models, irrigation
          scheduling software, and hydrological modeling tools. It also
          encourages students to explore the use of Geographic Information
          Systems (GIS), remote sensing, and programming languages like Python
          and MATLAB for water resources planning and management. In addition to
          academics, the department engages in community-based extension
          activities and applied research projects, often in collaboration with
          government agencies and research institutions. These initiatives aim
          to disseminate knowledge and practical solutions to farmers and
          stakeholders, ensuring sustainable water use and improved agricultural
          productivity. Overall, the Department of Irrigation and Drainage
          Engineering is dedicated to nurturing competent engineers and
          researchers who can contribute to the development of efficient,
          sustainable, and smart irrigation systems for the future of
          agriculture.
        </p>
      </div>
      <div className="w-full h-full">
        <LeftNav />
      </div>
    </div>
  );
}
