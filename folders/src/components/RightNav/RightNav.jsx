"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RightNav() {
  const router = useRouter();
  return (
    <div className="w-full h-full border-r-2 border-dotted border-slate-300 text-black p-2">
      <ul className="list-disc list-inside py-3">
        <li className="font-bold">
          <Link href="">Departments</Link>
        </li>
        <ul className="list-disc list-inside font-semibold px-6">
          <li
            onClick={() => router.push("/departments/fmpe/aboutDpt")}
            className="py-2 hover:underline hover:bg-green-300 cursor-pointer"
          >
            Farm Machinery & Power Engineering
          </li>
          <li
            onClick={() => router.push("/departments/pfe/aboutDpt")}
            className="py-2 hover:underline hover:bg-green-300 cursor-pointer"
          >
            Processing & Food Engineering
          </li>
          <li className="py-2 hover:underline hover:bg-green-300">
            <Link href="">Soil Water & Conservation Engineering</Link>
          </li>
          <li className="py-2 hover:underline hover:bg-green-300">
            <Link href="">Irrigation and Drainage Engineering</Link>
          </li>
          <li className="py-2 hover:underline hover:bg-green-300">
            <Link href="">Renewable Energy Engineering</Link>
          </li>
          <li className="py-2 hover:underline hover:bg-green-300">
            <Link href="">Computer Science & Engineering</Link>
          </li>
          <li className="py-2 hover:underline hover:bg-green-300">
            <Link href="">Mechanical Engineering</Link>
          </li>
        </ul>
      </ul>
    </div>
  );
}
