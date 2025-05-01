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
                  student: "Aman Kumar",
                  id: "E-11054/19",
                  title: "Design and development of batch type biochar production system",
                  advisor: "Er. E. R. Singh",
                },
                {
                  sno: 2,
                  student: "Alok Kumar",
                  id: "E-11056/19",
                  title: "Design and development of batch type biochar production system",
                  advisor: "Er. E. R. Singh",
                },
                {
                  sno: 3,
                  student: "Parmanand Rathor",
                  id: "E-11061/19",
                  title: "Design and development of solar dryer for drying tomamto",
                  advisor: "Dr. Paul Arjun Sanjay",
                },
                {
                  sno: 4,
                  student: "Poonam Kashyap",
                  id: "E-11062/19",
                  title: "Design and development of solar dryer for drying tomamto",
                  advisor: "Dr. Paul Arjun Sanjay",
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
