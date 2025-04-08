"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// import facultyData from "../../../helpers/faculty.json";

function page() {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    fetch("/data/faculty.json")
      .then((res) => res.json())
      .then((data) => setFacultyData(data));
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-36">
      <div className="font-bold text-3xl text-blue-700">
        Faculty Information
      </div>
      <div className="w-full bg-blue-300 py-0.5 my-4"></div>

      <div className="w-full grid grid-rows-7">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="grid grid-cols-[1fr_3fr] p-3 place-content-center"
          >
            <div className="flex flex-col justify-center items-center">
              <Image
                src={faculty.image}
                width={500}
                height={300}
                className="w-56 h-64 flex flex-col justify-center items-center"
                alt=""
              ></Image>
            </div>
            <div className="flex flex-col m-3">
              <div className="w-full">
                <div className="w-full py-0.5 bg-slate-800"></div>
                <div className="my-2">
                  <span className="text-green-900 font-extrabold text-2xl">
                    {faculty.fullName}
                  </span>
                  <span className="text-blue-900 font-extrabold mx-4">
                    {faculty.highestQualification}
                  </span>
                </div>
                <div className="w-full py-0.5 bg-slate-800"></div>
              </div>
              <div className="flex flex-col gap-2 my-5 font-bold">
                <p>{faculty.designation}</p>
                <p>Department of Process and Food Engineering</p>
                <Link
                  href={`/faculty/${faculty.id}`}
                  className="underline text-blue-600"
                >
                  Visit Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6 w-full">
        {facultyData.map((faculty) => (
          <div key={faculty.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold">{faculty.name}</h2>
            <p className="text-sm text-gray-600">{faculty.department}</p>
            <Link
              href={`/faculty/${faculty.id}`}
              className="text-blue-600 hover:underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default page;
