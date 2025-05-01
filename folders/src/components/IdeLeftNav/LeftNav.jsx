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
          onClick={() => router.push("/departments/ide/aboutDpt")}
          className="font-bold px-3 py-2 bg-orange-500 text-white rounded-md cursor-pointer"
        >
          About Department
        </li>
        <ul className="font-semibold px-3">
          <li
            onClick={() => {
              router.push("/departments/ide/hod");
            }}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/ide/hod"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Head of Department
          </li>
          <li
            onClick={() => router.push("/departments/ide/vision_mission")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/ide/vision_mission"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Vision & Mission
          </li>
          <li
          onClick={() => router.push("/departments/ide/faculty")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
                    hover:underline hover:bg-green-300
                    ${
                      pathname === "/departments/ide/faculty"
                        ? "text-orange-500 font-bold "
                        : ""
                    }`}
          >
            Faculty
          </li>
          <li
            onClick={() => router.push("/departments/ide/courseProgram")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/ide/courseProgram"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Course Program
          </li>
          <li
            onClick={() => router.push("/departments/ide/projectSubmitted")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/ide/projectSubmitted"
                  ? "text-orange-500 font-bold "
                  : ""
              }`}
          >
            Projects Submitted
          </li>
          <li
            onClick={() => router.push("/departments/ide/runningProjects")}
            className={`py-2 relative pl-6 cursor-pointer before:content-['→'] before:absolute before:left-0 before:text-black
              hover:underline hover:bg-green-300
              ${
                pathname === "/departments/ide/runningProjects"
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
