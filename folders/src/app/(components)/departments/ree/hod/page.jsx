"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import ReeLeftNav from "@/components/ReeLeftNav/LeftNav";
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
                      src="/FacultyPic/paul.jpg"
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
                          : Dr. Paul Arjun Sanjay
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
                          : Renewable Energy Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 8952985774
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : arjunspaul44@gmail.com
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
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">Dr. Paul Arjun Sanjay is a distinguished academician and researcher currently serving as an Assistant Professor in the field of Renewable Energy Engineering. With a doctorate (Ph.D.) in his domain, Dr. Sanjay brings over seven years of rich teaching and research experience to the academic community. Throughout his career, he has actively contributed to the advancement of sustainable energy technologies, authoring over 10 research papers and 2 national journal publications. His work also includes technical contributions through 3 technical bulletins, 2 instructional manuals, and 1 published book with ISBN credentials. Dr. Sanjay has been an innovator in the field, holding 6 patents that reflect his commitment to research-driven solutions.</td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">He has been honored with 3 prestigious awards in recognition of his academic and research excellence. His active involvement in knowledge dissemination is evident through his participation in 8 training programs and 10 seminars. As a member of the Indian Society of Agricultural Engineers (ISAE), he stays connected with the larger professional community. Dr. Sanjay has guided a number of students, having mentored 2 B.Tech and 4 M.Tech scholars, and is currently supervising 1 B.Tech and 2 M.Tech students. In addition to his teaching and research roles, he has handled one significant project as a principal investigator, with more projects anticipated in the future. His passion for education, innovation, and mentorship continues to drive his contributions toward sustainable and renewable energy development in the country.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full h-full">
        <ReeLeftNav />
      </div>
    </div>
  );
}
