"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import IdeLeftNav from "@/components/IdeLeftNav/LeftNav";
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
                  student: "Sonveer Singh",
                  id: "E-4065/07/12",
                  title: "Estimation of Ground Water Recharge by using Water Balance Approach for Ambedkar Nagar District of Uttar Pradesh",
                  advisor: "Dr. R.K. Mehta",
                },
                {
                  sno: 2,
                  student: "Khwahiz Ali",
                  id: "E-13181/22",
                  title: "Assessment and Prediction of Ground Water Quality Index using Machine Learning Techniques",
                  advisor: "Dr. Shivam",
                },
                {
                  sno: 3,
                  student: "Ankit",
                  id: "E-15051/23",
                  title: "To be finalized",
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
        <IdeLeftNav />
      </div>
    </div>
  );
}
