"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import ReeLeftNav from "@/components/ReeLeftNav/LeftNav";
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
            Ongoing Projects
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
                  student: "Sakshi Dixit",
                  id: "E-14773/23",
                  title: "To be Finalized",
                  advisor: "Dr. Vikas K. Singh",
                },
                {
                  sno: 2,
                  student: "Akanksha Mathur",
                  id: "E-12953/22",
                  title: "Assessment of Water Quality Parameters Using Machine Learning Technique for Upper Ganga Basin ",
                  advisor: "Dr. Vikas K. Singh",
                },
                {
                  sno: 3,
                  student: "Mo. Akram",
                  id: "E-12954/22",
                  title: "Study of Meteorological Drought for Different Agro-Climatic Zones of Uttar Pradesh Using Artificial Intelligence Technique.",
                  advisor: "Dr. Vikas K. Singh",
                },
                {
                  sno: 4,
                  student: "Khwahiz Ali",
                  id: "E-13181/22",
                  title: "Assessment and prediction of ground water quality index with machine learning techniques.",
                  advisor: "Dr. Shivam",
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
        <ReeLeftNav />
      </div>
    </div>
  );
}
