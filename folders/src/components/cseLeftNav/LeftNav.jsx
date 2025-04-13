"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LeftNav() {
    const router = useRouter()
    const pathname = usePathname();
  return (
    <div className="w-full h-full border-l-2 border-dotted border-slate-300 text-black p-2">
      <ul className="py-3">
        <li
          onClick={() => router.push("/departments/cse/aboutDpt")}
          className="font-bold px-3 py-2 bg-orange-500 text-white rounded-md cursor-pointer"
        >
          About Department
        </li>
        <ul className="font-semibold px-3">
          <li
            onClick={() => {
              router.push("/departments/cse/hod");
            }}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/pfe/hod"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Head of Department
          </li>
          <li
            onClick={() => router.push("/departments/cse/vision_mission")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/pfe/vision_mission"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Vision & Mission
          </li>
          <li
          onClick={() => router.push("/departments/cse/faculty")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
                    hover:underline hover:bg-green-300
                    ${
                      pathname === "/departments/fmpe/faculty"
                        ? "text-orange-500 font-bold "
                        : ""
                    }`}
          >
            Faculty
          </li>
          <li
            onClick={() => router.push("/departments/cse/courseProgram")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/fmpe/courseProgram"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Course Program
          </li>
          <li
            onClick={() => router.push("/departments/cse/pgStudents")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/fmpe/pgStudents"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            M.Tech/Ph.D. Students
          </li>
          <li
            onClick={() => router.push("/departments/cse/patent")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/fmpe/patent"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Patents
          </li>
          <li
            onClick={() => router.push("/departments/cse/projectSubmitted")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/pfe/projectSubmitted"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Projects Submitted
          </li>
          <li
            onClick={() => router.push("/departments/cse/runningProjects")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/pfe/runningProjects"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Running Projects
          </li>
        </ul>
      </ul>
    </div>
  )
}
