"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";

function FacultyPage() {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    const callApi = async () => {
      try {
        const res = await fetch("/Data/faculty.json");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        setFacultyData(data);
      } catch (error) {
        console.error("Failed to load faculty data:", error);
      }
    };

    callApi();
  }, []);

  return (
    <div className="w-full bg-gray-50 flex flex-col justify-center items-center py-12 px-6 sm:px-10 lg:px-36">
      <div className="font-bold text-3xl text-blue-700 text-center">
        Faculty Information
      </div>
      <div className="w-full bg-blue-300 py-0.5 my-4"></div>

      <div className="w-full grid grid-rows-7 gap-y-6">
        {facultyData.map((faculty) => (
          <div
            key={faculty.id}
            className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-6 p-3 bg-white shadow-md rounded-lg"
          >
            <div className="flex justify-center">
              <Image
                src={faculty.image}
                width={224}
                height={256}
                className="w-56 h-64 object-cover rounded-lg"
                alt={`${faculty.fullName}'s photo`}
              />
            </div>

            <div className="flex flex-col justify-center">
              <div className="py-2">
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

              <div className="flex flex-col gap-2 my-5 font-bold text-gray-800">
                <p>{faculty.designation}</p>
                <p>{faculty.specialization}</p>
                <Link
                  href={`/faculty/${faculty.id}`}
                  className="underline text-blue-600 hover:text-blue-800"
                >
                  Visit Profile
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FacultyPage;
