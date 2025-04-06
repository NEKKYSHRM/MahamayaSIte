"use client";

import React from "react";
import RightNav from "@/components/RightNav/RightNav";
import FmpeLeftNav from "@/components/FmpeLeftNav/LeftNav";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full items-start grid grid-cols-[25%_50%_25%] place-items-center bg-white box-border">
      <div className="">
        <RightNav />
      </div>
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full">
          <table className="w-full border-2 border-black table-auto">
            <thead>
              <tr>
                <th colSpan={2} className="text-center">
                  Faculty List
                </th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/facultyPic/rjs.jpg"
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
                          : Er. Ramjeet Singh
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : Associate Professor cum Associate Dean
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
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/facultyPic/bky.jpg"
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
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/facultyPic/pkm.jpg"
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
                          : Dr. Pramod Kumar Mishra
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
                          : Farm Machinery & Power Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/facultyPic/manish.jpg"
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
                          : Dr. Manish Kumar
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
                          : Farm Machinery & Power Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src="/facultyPic/prabhakar.jpeg"
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
                          : Dr. Prabhakar Shukla
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
                          : Farm Machinery & Power Engineering
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 1234567890
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : hod@gmail.com
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full">
        <FmpeLeftNav />
      </div>
    </div>
  );
}
