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
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead>
              <tr>
                <th colSpan={2} className="text-center">
                  Head of Department
                </th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/FacultyPic/vikas.JPG"
                      alt={`student's profile`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </td>
                <td className="border border-black w-2/3">
                  <table className="w-full">
                    <tbody className="">
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Name
                        </td>
                        <td className="w-3/4 font-bold text-sm text-left align-top">
                          : Dr. Vikas Kumar Singh
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Assistant Professor
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Specialization
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Soil Water & Conservation Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : -
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : -
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead className="border-2 border-black">
              <tr>
                <th colSpan={2} className="text-center">
                  Brief Introduction
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Dr. Shivam is an Assistant Professor in the Department of Agricultural Engineering, specializing in Irrigation and Drainage Engineering. With over 8 years of academic and research experience, Dr. Shivam holds a Ph.D. and has made significant contributions to the field through both teaching and applied research. His scholarly work includes 20 research papers published in reputed national and international journals, along with 10 book chapters and a book with an ISBN. He has actively participated in various training programs and seminars, contributing to his all-rounded academic profile. As a co-principal investigator, he has played a pivotal role in executing a funded research project and is currently guiding one Ph.D. scholar while having successfully mentored 10 B.Tech/M.Tech students. Dr. Shivam has also authored multiple technical bulletins and manuals, furthering practical understanding in his domain. Notably, he has 5 patents to his name, underlining his innovation in the field, and has been recognized with two academic awards. His contributions extend beyond the classroom and into the realm of impactful research and innovation, aligning with the evolving needs of agricultural and water management systems.</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">With a specialization in Irrigation and Drainage Engineering, Dr. Shivam serves as an Assistant Professor, bringing over 8 years of academic, research, and field expertise. He has authored 20 research publications, with contributions equally balanced between national and international journals. His academic footprint includes 10 book chapters, a published book (ISBN), and 3 instructional manuals, reflecting his focus on both research depth and educational outreach. A co-investigator in a major research initiative, Dr. Shivam currently oversees an ongoing project and guides both undergraduate/postgraduate (10 students) and doctoral (1 scholar) research work. His innovative approach is evident from the 5 patents he holds in the domain, and he remains actively involved in academic development through regular participation in seminars and faculty training programs. Dr. Shivam’s contributions are a blend of innovation, academic rigor, and mentorship, making him a valuable member of the department and an inspiration to aspiring researchers in the field of sustainable agricultural engineering and water resource management.</td>
              </tr>
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
