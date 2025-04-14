"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import CseLeftNav from "@/components/cseLeftNav/LeftNav";
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
          <p className="text-gray-700 font-bold mt-3 text-center font-serif text-sm">
            B. Tech. (Computer Science & Engineering)
          </p>
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
                      {[
                        "BPM-111",
                        "BPC-111",
                        "TCE-111",
                        "BPP-111",
                        "TME-111",
                        "TCP-111",
                        "TWP-111",
                        "BPC-121",
                        "BPP-121",
                        "BPM-121",
                        "TCE-121",
                        "TPE-121",
                        "BHS-121",
                        "TCP-121",
                        "TCP-211",
                        "TCP-212",
                        "TCP-213",
                        "TCP-214",
                        "TEC-211",
                        "TEC-212",
                        "NSS-211",
                        "BPM-221",
                        "TCP-221",
                        "TCP-222",
                        "TCP-223",
                        "TCP-224",
                        "TCP-225",
                        "TEC-221",
                        "TCP-311",
                        "TCP-312",
                        "TCP-313",
                        "TCP-314",
                        "TCP-315",
                        "TEC-311",
                        "TCP-321",
                        "TCP-322",
                        "TCP-323",
                        "TCP-324",
                        "TCP-325",
                        "TCP-326",
                        "TCP-327",
                        "TCP-328",
                        "TCP-411",
                        "TCP-412",
                        "TCP-413",
                        "TCP-414",
                        "TCP-415A",
                        "TCP-416",
                        "TPE-411",
                        "Elective-I",
                        "Elective-II",
                        "Elective-III",
                        "TCP-415(B)",
                        "TCP-421",
                        "TCP-422",
                        "TCP-423",
                        "TCP-424",
                        "TCP-425",
                        "TCP-426",
                        "TCP-427",
                      ].map((subject, index) => (
                        <tr key={index} className="border-b border-black">
                          <td className="p-1 w-1/5 text-center text-sm font-semibold">
                            {subject}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td className="border border-black align-top p-0">
                  <table className="table-auto w-full">
                    <tbody>
                      {[
                        "Engg. Mathematics-I",
                        "Engg. Chemistry-II",
                        "Solid Mechanics",
                        "Physics-I",
                        "Thermodynamics & H.E.",
                        "Introduction to Computer & Programming",
                        "Work Programme",
                        "Engg. Chemistry-II",
                        "Physics-II",
                        "Engineering Math-II",
                        "Engineering drawing",
                        "Workshop practice",
                        "Technical writing",
                        "Digital Logic & Circuit",
                        "Data structure",
                        "Discrete structure",
                        "Formal language and automata theory",
                        "Computer Graphics & Animation",
                        "Circuit theory",
                        "Instruments and measurements",
                        "N.S.S.",
                        "Probability Statistics Queuing Model",
                        "Microprocessor",
                        "Data processing & file system",
                        "Computational & Numerical Analysis",
                        "Theory of Computing",
                        "Computer organisation",
                        "Electronic devices & circuits",
                        "System Programming",
                        "Programming Languages",
                        "Computer Communication system",
                        "Data Base Management System",
                        "Operations Research",
                        "Control Systems",
                        "Computer & Society",
                        "Microprocessor Based System",
                        "Numerically Controlled Machines & Robotics",
                        "Language Processors",
                        "Operating Systems",
                        "Computer Networks",
                        "Design & Analysis of Algorithms",
                        "Practical Training",
                        "State of the Art Computer",
                        "Software Engineering",
                        "Management Information System",
                        "Multimedia Technology",
                        "Project-A",
                        "Seminar",
                        "Principal of Management",
                        "Open Elective-I",
                        "Open Elective-II",
                        "Open Elective-III",
                        "Project-B",
                        "Simulation & Modelling",
                        "Digital Control",
                        "Satellite Communication",
                        "Mobile Computing",
                        "VLSI Technology",
                        "Image Processing",
                        "Data Mining & Warehousing",
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
                      {[
                        "3(3+0)",
                        "2(1+1)",
                        "4(3+1)",
                        "3(2+1)",
                        "4(3+1)",
                        "3(1+2)",
                        "1(0+1)",
                        "3(2+1)",
                        "3(2+1)",
                        "4(4+0)",
                        "2(0+2)",
                        "2(0+2)",
                        "3(2+1)",
                        "4(3+1)",
                        "3(2+1)",
                        "4(3+1)",
                        "3(2+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "(0+2)NC",
                        "2(2+0)",
                        "4(3+1)",
                        "4(3+1)",
                        "2(2+0)",
                        "3(3+0)",
                        "3(2+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "3(2+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "2(2+0)",
                        "4(3+1)",
                        "3(3+0)",
                        "3(2+1)",
                        "3(2+1)",
                        "3(3+0)",
                        "3(2+1)",
                        "3(3+0)",
                        "3(3+0)",
                        "30 days",
                        "3(2+1)",
                        "3(3+0)",
                        "3(2+1)",
                        "4(3+1)",
                        "2(0+2)",
                        "1(0+1)",
                        "2(2+0)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(0+4)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                        "4(3+1)",
                      ].map((subject, index) => (
                        <tr key={index} className="border-b border-black">
                          <td className="p-1 w-1/5 text-center text-sm font-semibold">
                            {subject}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <CseLeftNav />
      </div>
    </div>
  );
}
