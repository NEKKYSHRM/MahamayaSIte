"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import IdeLeftNav from "@/components/IdeLeftNav/LeftNav";
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
            Projects Submitted
          </h1>
          <div className="w-20 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead className="bg-gray-300">
              <tr>
                <th className="border border-black text-center">S. No.</th>
                <th className="border border-black text-center">
                  Funding Agencies
                </th>
                <th className="border border-black text-center">Name of PI</th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black w-2/12 align-top p-0">
                  <table className="w-full">
                    <tbody>
                      {["1", "2"].map(
                        (subject, index) => (
                          <tr key={index} className="border-b border-black">
                            <td className="p-1 w-1/5 text-center text-sm font-semibold">
                              {subject}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </td>
                <td className="border border-black align-top p-0">
                  <table className="table-auto w-full">
                    <tbody>
                      {[
                        "Establishment of Geo-informatics and Precision Agriculture Facility",
                        "Development of a decision support system for irrigation water management in Eastern Uttar Pradesh ",
                      ].map((subject, index) => (
                        <tr key={index} className="border-b border-black">
                          <td className="p-1 px-4 w-1/5 text-left text-sm font-semibold">
                            {subject}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td className="border border-black w-2/12 align-top p-0">
                  <table>
                    <tbody>
                      {["Dr. Shivam", "Dr. Shivam"].map(
                        (subject, index) => (
                          <tr key={index} className="border-b border-black">
                            <td className="p-1 w-1/5 text-center text-sm font-semibold">
                              {subject}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <IdeLeftNav />
      </div>
    </div>
  );
}
