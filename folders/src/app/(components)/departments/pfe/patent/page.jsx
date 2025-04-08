"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import PfeLeftNav from "@/components/PfeLeftNav/LeftNav";
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
            Patents Published
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Title</th>
                <th className="border border-black p-2 text-sm">Patent No.</th>
                <th className="border border-black p-2 text-sm">
                  Publication Date
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  title:
                    "Sugarcane Peeling Machine",
                  no: "202311060517 A",
                  date: "13/10/2023",
                },
                {
                  sno: 2,
                  title:
                    "Aloe Vera Gel Extraction Machine",
                  no: "402558-001",
                  date: "02/02/2024",
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
                    {item.title}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.no}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <PfeLeftNav />
      </div>
    </div>
  );
}
