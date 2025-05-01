"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import SwceLeftNav from "@/components/SwceLeftNav/LeftNav";
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
                  name: "Akanksha Mathur",
                  enroll: "E-12953/22",
                  title:
                    "-",
                  credit: "Dr. Vikas Kumar Singh",
                },
                {
                  sno: 2,
                  name: "Mo Akram",
                  enroll: "E-12954/22",
                  title:
                    "-",
                  credit: "Dr. Vikas Kumar Singh",
                },
                {
                  sno: 3,
                  name: "Khwahiz Ali",
                  enroll: "E-13182/22",
                  title: "To be Finalized",
                  credit: "Dr. Vikas Kumar Singh",
                },
                {
                  sno: 4,
                  name: "Sakshi Dixit",
                  enroll: "E-14773/23",
                  title:
                    "To be Finalized",
                  credit: "Dr. Vikas Kumar Singh",
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
                  name: "Vipin Kumar Roshan",
                  enroll: "E-11718/20/23",
                  title:
                    "To be Finalized",
                  credit: "Dr. Vikas Kumar Singh",
                },
                {
                  sno: 2,
                  name: "Sarvda Nand Tiwari",
                  enroll: "E-14879/23",
                  title:
                    "To be Finalized",
                  credit: "Dr. Vikas Kumar Singh",
                },
                {
                  sno: 3,
                  name: "Ankit",
                  enroll: "E-15051/23",
                  title:
                    "To be Finalized",
                  credit: "Dr. Vikas Kumar Singh",
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
        <SwceLeftNav />
      </div>
    </div>
  );
}
