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
            Course Program
          </h1>
          <div className="w-28 h-0.5 mt-1 bg-black"></div>
          <p className="text-gray-700 font-bold mt-3 text-center font-serif text-sm">B. Tech. (Farm Machinery and Power Engineering)</p>
          <p className="text-gray-700 font-bold mt-3 text-center font-serif text-sm">M. Tech. (Farm Machinery and Power Engineering)</p>
          <p className="text-gray-700 font-bold mt-3 text-center font-serif text-sm">Ph.D. (Farm Machinery and Power Engineering)</p>
          <h1 className="text-black font-bold mt-8 text-center font-serif text-xl">
            List of Courses
          </h1>
          <div className="w-28 h-0.5 mt-1 bg-black"></div>
        </div>
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead>
              <tr>
                <th className="border border-black text-center">Category</th>
                <th className="border border-black text-center">Course No.</th>
                <th className="border border-black text-center">Title</th>
                <th className="border border-black text-center">
                  <p>Credit Hours</p>(T + P)
                </th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black p-1 w-1/5 text-center text-sm font-semibold">
                  UG Courses
                </td>
                <td className="border border-black w-2/12 align-top p-0">
                  <table>
                    <tbody>
                      {["FMP 201", "FMP 202", "FMP 301", "FMP 302"].map(
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
                        "Farm Machinery and Equipment - I",
                        "Farm Machinery and Equipment - II",
                        "Tractor and Automotive Engines",
                        "Tractor Systems and Controls",
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
                      {["3 (2+1)", "3 (2+1)", "3 (2+1)", "3 (2+1)"].map(
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
              <tr>
                <td className="border border-black p-1 w-1/5 text-center text-sm font-semibold">
                  Elective Courses
                </td>
                <td className="border border-black w-2/12 align-top p-0">
                  <table>
                    <tbody>
                      {["FMP 201", "FMP 202", "FMP 301", "FMP 302"].map(
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
                        "Farm Machinery and Equipment - I",
                        "Farm Machinery and Equipment - II",
                        "Tractor and Automotive Engines",
                        "Tractor Systems and Controls",
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
                      {["3 (2+1)", "3 (2+1)", "3 (2+1)", "3 (2+1)"].map(
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
              <tr>
                <td className="border border-black p-1 w-1/5 text-center text-sm font-semibold">
                  M.Tech Courses
                </td>
                <td className="border border-black w-2/12 align-top p-0">
                  <table>
                    <tbody>
                      {["FMP 201", "FMP 202", "FMP 301", "FMP 302"].map(
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
                        "Farm Machinery and Equipment - I",
                        "Farm Machinery and Equipment - II",
                        "Tractor and Automotive Engines",
                        "Tractor Systems and Controls",
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
                      {["3 (2+1)", "3 (2+1)", "3 (2+1)", "3 (2+1)"].map(
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
        <FmpeLeftNav />
      </div>
    </div>
  );
}
