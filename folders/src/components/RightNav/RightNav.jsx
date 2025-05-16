"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function RightNav() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <div className="w-full h-full border-r-2 border-dotted border-slate-300 text-black p-2">
      <ul className="list-disc list-inside py-3">
        <li className="font-bold">
          <Link href="">Departments</Link>
        </li>
        <ul className="list-disc list-inside font-semibold px-6">
          <li
            onClick={() => router.push("/departments/fmpe/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
                pathname === "/departments/fmpe/aboutDpt"
                  ? "text-green-500 font-bold "
                  : ""
              }`}
          >
            Farm Machinery & Power Engineering
          </li>
          <li
            onClick={() => router.push("/departments/pfe/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
                pathname === "/departments/pfe/aboutDpt"
                  ? "text-green-500 font-bold "
                  : ""
              }`}
          >
            Processing & Food Engineering
          </li>
          <li
            onClick={() => router.push("/departments/swce/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
              pathname === "/departments/swce/aboutDpt"
                ? "text-green-500 font-bold "
                : ""
            }`}
          >
            <Link href="">Soil Water & Conservation Engineering</Link>
          </li>
          <li
            onClick={() => router.push("/departments/ide/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
              pathname === "/departments/ide/aboutDpt"
                ? "text-green-500 font-bold "
                : ""
            }`}
          >
            <Link href="">Irrigation and Drainage Engineering</Link>
          </li>
          <li
            onClick={() => router.push("/departments/ree/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
              pathname === "/departments/ree/aboutDpt"
                ? "text-green-500 font-bold "
                : ""
            }`}
          >
            <Link href="">Renewable Energy Engineering</Link>
          </li>
          <li
            onClick={() => router.push("/departments/cse/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
              pathname === "/departments/cse/aboutDpt"
                ? "text-green-500 font-bold "
                : ""
            }`}
          >
            <Link href="">Computer Science & Engineering</Link>
          </li>
          <li
            onClick={() => router.push("/departments/me/aboutDpt")}
            className={`py-2 hover:underline hover:bg-green-300 cursor-pointer ${
              pathname === "/departments/me/aboutDpt"
                ? "text-green-500 font-bold "
                : ""
            }`}
          >
            <Link href="">Basic Engineering & Applied Sciences </Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
