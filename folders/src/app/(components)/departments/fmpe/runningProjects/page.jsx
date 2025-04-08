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
            Ongoing Projects
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Title</th>
                <th className="border border-black p-2 text-sm">Name of PI</th>
                <th className="border border-black p-2 text-sm">
                  Cost of Project (in Lac.)
                </th>
                <th className="border border-black p-2 text-sm">
                  Funding Agency
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  title: "Cleaning system for small scale solar PV system",
                  name: "Dr. Pramod Kumar Mishra",
                  cost: "21.05",
                  funding: "UPCAR",
                },
                {
                  sno: 1,
                  title:
                    "Establishment of Solar Park and Solar Tree for promoting Farmers/ Small Entrepreneurs",
                  name: "Dr. Pramod Kumar Mishra",
                  cost: "400.00",
                  funding: "RKVY",
                },
                {
                  sno: 1,
                  title: "Development of Different Crop Residue Management Practices",
                  name: "Dr. Pramod Kumar Mishra",
                  cost: "320.00",
                  funding: "RKVY",
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
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.cost}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.funding}
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
