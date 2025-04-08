"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import FmpeLeftNav from "@/components/FmpeLeftNav/LeftNav";
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
                  name: "Amir Ansari",
                  enroll: "E-12351/21",
                  title:
                    "Development and Performance Evaluation of Solar Panel Cleaning System",
                  credit: "Dr. P.K. Mishra",
                },
                {
                  sno: 2,
                  name: "Amar Tiwari",
                  enroll: "E-13182/22",
                  title:
                    "Development and Performance Evaluation of Tractor Operated Tree Shaker",
                  credit: "Er. R.J. Singh",
                },
                {
                  sno: 3,
                  name: "Ashu Singh",
                  enroll: "E-12957/22",
                  title: "Design and development of Power Operated Seed drill",
                  credit: "Dr. P.K. Mishra",
                },
                {
                  sno: 4,
                  name: "Dev Raj Rastogi",
                  enroll: "E-12955/22",
                  title:
                    "Design and Development of Sensor based walk behind power operated inter and intra row weeder",
                  credit: "Dr. Manish Kumar",
                },
                {
                  sno: 5,
                  name: "Marutesh Yadav",
                  enroll: "E-11064/19/23",
                  title: "To be finalized…",
                  credit: "Dr. P.K. Mishra",
                },
                {
                  sno: 6,
                  name: "Shubham Yadav",
                  enroll: "E-11069/19/23",
                  title: "To be finalized…",
                  credit: "Dr. Manish Kumar",
                },
                {
                  sno: 7,
                  name: "Satyam Singh",
                  enroll: "E-10450/18/23",
                  title: "To be finalized…",
                  credit: "Dr. Manish Kumar",
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
                  name: "Mukul Dev Surya",
                  enroll: "E-14861/23",
                  title:
                    "To be finalized…",
                  credit: "Dr. P.K. Mishra",
                },
                {
                  sno: 2,
                  name: "Rahul Saxena",
                  enroll: "E-14880/23",
                  title:
                    "To be finalized…",
                  credit: "Dr. P.K. Mishra",
                },
                {
                  sno: 3,
                  name: "Ritesh Kumar Singh",
                  enroll: "E-14862/23",
                  title:
                    "To be finalized…",
                  credit: "Dr. P.K. Mishra",
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
        <FmpeLeftNav />
      </div>
    </div>
  );
}
