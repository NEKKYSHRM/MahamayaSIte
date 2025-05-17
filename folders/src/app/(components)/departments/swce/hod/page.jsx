"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import SwceLeftNav from "@/components/SwceLeftNav/LeftNav";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className=" h-full">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead>
              <tr>
                <th colSpan={2} className="text-center">
                  Head of Department
                </th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/FacultyPic/dean.jpeg"
                      alt={`student's profile`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </td>
                <td className="border border-black w-2/3">
                  <table className="w-full">
                    <tbody className="">
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Name
                        </td>
                        <td className="w-3/4 flex hover:text-blue-700 items-center gap-1 font-bold text-sm text-left align-top">
                          :<Link href="/faculty/nc-shahi">Prof. N.C. Shahi</Link>
                          <FaExternalLinkAlt />
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Professor & Dean MCAET
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Specialization
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Process & Food Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 9675782120
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : ncshahi2025@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead className="border-2 border-black">
              <tr>
                <th colSpan={2} className="text-center">
                  Brief Introduction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">
                  Dr. N.C. Shahi, born on 11th September 1973, is a distinguished academician, researcher, and administrator with over 27 years of experience spanning teaching, research, and industry. Currently serving as the Head of the Department of Post-Harvest Process and Food Engineering (PHP&FE), College of Technology, GBPUAT, Pantnagar, he has previously held key positions including Professor and Associate Professor at the same department, and Assistant Professor at SKUAST-K, Srinagar. With a Ph.D. in Process and Food Engineering (2014) and an M.Tech in Agricultural Engineering (1997), his research focuses on agriculture mechanization, post-harvest engineering, food processing, and solar drying technologies. He has guided 19 PhD and 42 M.Tech scholars and has taught across B.Tech, M.Tech, and PhD levels in subjects like Food Processing Equipment Design, Mass Transfer Operations, and Process Control. He has earned multiple national and international recognitions such as the Uttarakhand Governor’s Award for Best Research (2019), Excellence in Research Awards, and numerous best paper/poster awards. His contributions have led to patents both in India and abroad including innovations like a solar-powered dryer, AI-based crop protection device, and edible coating machines. His lifetime citation record places him in the top 6% of scientists globally, with 1387 citations, an h-index of 23, and an i10-index of 47 (as per ResearchGate 2024). Dr. N.C.Shahi continues to contribute extensively to academia and innovation, with a strong dedication to sustainable agricultural technology and rural development.
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">
                  He has led and contributed to 13 externally funded research projects as Principal or Co-Investigator, including notable work on solar drying, zero energy cool chambers, packaging for shelf-life extension, greenhouse vegetable production, and post-harvest technology. His research excellence is reflected in over 80 NAAS-rated publications (44 with NAAS ≥ 8 and 38 between NAAS 4–8), 40 abstracts in proceedings, 12 lead lectures, 7 book chapters/popular articles, and 3 books/lab manuals. His innovative contributions have resulted in several patents both nationally and internationally, such as devices for solar drying, AI-based crop protection, and extruded snacks. He is recognized among the top 6% of researchers globally (ResearchGate, 2024), with 1387 citations, an h-index of 23, and an i10-index of 47. He has also been actively involved in international academic engagements, having visited five countries as a presenter, session chair, and visiting professor. These include a Visiting Professorship at the University of Manitoba, Canada (2023), and academic presentations in Australia (2015), Bosnia and Herzegovina (2016), Malaysia (2018), and Thailand (2019). His research and leadership excellence has earned him several honors such as the Uttarakhand Governor’s Award for Best Research (2019), the Research Leadership Award (2020, USA), Best Paper and Poster Awards, and multiple recognitions from professional engineering bodies. He has attended more than 52 professional development events, continues to mentor research scholars, and remains deeply committed to innovation and sustainable development in agriculture and food processing technologies.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <SwceLeftNav />
      </div>
    </div>
  );
}
