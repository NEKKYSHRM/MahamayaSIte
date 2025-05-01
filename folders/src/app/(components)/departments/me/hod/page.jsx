"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import MeLeftNav from "@/components/meLeftNav/LeftNav";
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
                      src="/FacultyPic/bky.JPG"
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
                          : Dr. Brijesh Kumar Yaduvanshi
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Associate Professor
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Specialization
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Farm Machinery & Power Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 9558819753
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : birjesh123@gmail.com
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
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Dr. Birjesh Kumar Yaduvanshi is a seasoned academic and researcher, currently serving as an Associate Professor in the field of Farm Machinery and Power Engineering. With a Ph.D. and an impressive teaching and research career spanning over 17 years, Dr. Yaduvanshi has significantly contributed to agricultural engineering education and innovation. He has authored 27 research papers, including 20 in reputed international journals and 4 national journal publications, along with 2 book chapters, showcasing his deep expertise in the domain. His technical repertoire includes 5 instructional manuals and 1 technical bulletin, demonstrating his dedication to practical and impactful engineering solutions. He also holds 4 patents, highlighting his innovative approach in the field.</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Dr. Yaduvanshi has actively participated in 5 training programs and 11 seminars, staying updated with advancements in the agricultural and mechanical engineering fields. He has mentored 4 students across B.Tech, M.Tech, and Ph.D. levels and is currently guiding 2 students, nurturing the next generation of agricultural engineers. His project portfolio includes 8 successfully accomplished projects, with ongoing interest in future research endeavors. Dr. Yaduvanshi continues to inspire through his commitment to academic excellence, innovation, and the development of mechanized solutions for sustainable agriculture.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <MeLeftNav />
      </div>
    </div>
  );
}
