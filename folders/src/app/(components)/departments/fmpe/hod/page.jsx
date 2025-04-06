"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import FmpeLeftNav from "@/components/FmpeLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className="">
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
                      src="/facultyPic/rjs.jpg"
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
                        <td className="w-3/4 font-bold text-sm text-left align-top">
                          : Er. Ramjeet Singh
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Associate Professor cum Associate Dean
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Address
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Principal Extension Scientist(FMPE)-cum-Head Deptt.
                          of Farm Machinery & Power Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
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
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Education: B.Tech. (Agricultural Engg.)., PAU, Ludhiana (1994); M.Tech (Farm Power and Machinery)., PAU, Ludhiana (1997); Ph.D (FPM)., PAU, Ludhiana (2010).</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Positions held: Assistant Professor (Agricultural Engg.), KVK, Kheri, Sangrur (2001-2005), Assistant Professor (Agricultural Engg.), KVK, Patiala (2005-2006), KVK, Fatehgarh Sahib(2006-2009,) Associate Professor (2010-2016), Principal Extension Scientist FMPE , PAU Ludhiana (2016-continued), Principal Extension Scientist FMPE cum-Head (2021-continues), PAU Ludhiana</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">He has completed seven research projects as PI/Co-PI under SRTT, DST, NFSM and Ministry of Agriculture and Farmer Welfare, DOAC&FW on spraying, resource conservation technologies, mechanical paddy transplanting, mechanical harvesting of chick pea, design and development of indigenous tractor operated spading machine, diffusion and assessment of paddy straw management technologies: a farmer participatory approach etc. He has been working in different projects under AICRP on FIM.</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">He evaluated/ popularized various technologies namely straw balers, planting of maize on beds, backpack type electrostatic sprayer, mat type nursery cutter, super seeder and high clearance multipurpose sprayer. These technologies have been adopted by farmers and are commercially available. He had published 17 research papers in peer reviewed journals, 4 books, 6 book chapters, 6 full length papers/ abstracts in the national level conferences/symposia and 96 extension articles, 8 extension bulletins/ manuals. One patent on an autonomous system for 2-wheel paddy transplanter has been filed.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <FmpeLeftNav />
      </div>
    </div>
  );
}
