"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import SwceLeftNav from "@/components/SwceLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className="">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Projects Submitted
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
        <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Student</th>
                <th className="border border-black p-2 text-sm">ID</th>
                <th className="border border-black p-2 text-sm">
                Title
                </th>
                <th className="border border-black p-2 text-sm">
                  Advisor
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  student: "Vipin Kumar Roshan",
                  id: "E-11718/20",
                  title: "Prediction of Runoff Using SCS-CN Method for Maharuwa Micro Watershed of Ambedkar Nagar District (U.P.)",
                  advisor: "Dr. H.C. Singh",
                },
                {
                  sno: 2,
                  student: "Satendra Kumar",
                  id: "E-12350/20",
                  title: "Study of Pre and Post monsoon Groundwater behaviour of Ambedkar Nagar",
                  advisor: "Dr. S. K. Pandey",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.student}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.id}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.title}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.advisor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <SwceLeftNav />
      </div>
    </div>
  );
}
