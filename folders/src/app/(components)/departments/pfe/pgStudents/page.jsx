"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import PfeLeftNav from "@/components/PfeLeftNav/LeftNav";
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
            M.Tech Students
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">Enrollment ID</th>
                <th className="border border-black p-2 text-sm">
                  Project Title
                </th>
                <th className="border border-black p-2 text-sm">Advisor</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Shashank Verma",
                  enroll: "E-12351/21",
                  title:
                    "Development and Performance Evaluation of Sugarcane Peeling Machine",
                  credit: "Dr. V. K. Singh",
                },
                {
                  sno: 2,
                  name: "Kuldeep Kumar",
                  enroll: "E-6065/11/21",
                  title:
                    "Development and Performance Evaluation Aloe Vera Gel Extraction Machine",
                  credit: "Er. R. J. Singh",
                },
                {
                  sno: 3,
                  name: "Narayan Tiwari",
                  enroll: "E-14774/23",
                  title: "To be Finalized",
                  credit: "Dr. Vipul Chaudhary",
                },
                {
                  sno: 4,
                  name: "Satyam Kumar",
                  enroll: "E-15030/23",
                  title:
                    "To be Finalized",
                  credit: "Dr. Vipul Chaudhary",
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
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.title}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Ph.D. Students
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">Enrollment ID</th>
                <th className="border border-black p-2 text-sm">
                  Project Title
                </th>
                <th className="border border-black p-2 text-sm">Advisor</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Shashank Verma",
                  enroll: "E-12351/21",
                  title:
                    "To be Finalized",
                  credit: "Dr. V. K. Singh",
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
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.title}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <PfeLeftNav />
      </div>
    </div>
  );
}
