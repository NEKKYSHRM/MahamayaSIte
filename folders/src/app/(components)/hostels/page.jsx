"use client";

import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <div className="w-full flex flex-col bg-gray-100 p-8">
      <div className="w-full text-center">
        <h1 className="text-blue-600 text-4xl font-bold py-5">Hostels</h1>
        <div className="w-full flex flex-row justify-around items-center box-border gap-3 ">
          <div className="flex flex-col items-center bg-white shadow-md rounded-md py-3 w-1/3 h-1/3 border border-gray-200 ">
            {/* Profile Image */}
            <div className="w-96 h-80 relative overflow-hidden border-2 border-blue-500">
              <Image
                src="/hostels/godavari.jpg"
                alt={`student's profile`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Name */}
            <div className="mt-4 text-xl font-semibold text-gray-800">
            <p className="text-lg text-gray-700 mt-1 font-bold">Godavari Hostel</p>
            <p className="text-sm text-gray-700 mt-1"><b>Chief Warden: </b> Dr. P.K. Mishra</p>
            <p className="text-sm text-gray-700 mt-1"><b>Warden: </b> Dr. Manish Kumar</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-md py-3 w-1/3 h-1/3 border border-gray-200 ">
            {/* Profile Image */}
            <div className="w-96 h-80 relative overflow-hidden border-2 border-blue-500">
              <Image
                src="/hostels/kaveri.jpg"
                alt={`student's profile`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Name */}
            <div className="mt-4 text-xl font-semibold text-gray-800">
            <p className="text-lg text-gray-700 mt-1 font-bold">Kaveri Hostel</p>
            <p className="text-sm text-gray-700 mt-1"><b>Chief Warden: </b> Dr. P.K. Mishra</p>
            <p className="text-sm text-gray-700 mt-1"><b>Asstt. Warden: </b> Dr. Vikas Kumar Singh</p>
            </div>
          </div>
          <div className="flex flex-col items-center bg-white shadow-md rounded-md py-3 w-1/3 h-1/3 border border-gray-200 ">
            {/* Profile Image */}
            <div className="w-96 h-80 relative overflow-hidden border-2 border-blue-500">
              <Image
                src="/hostels/godavari.jpg"
                alt={`student's profile`}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Name */}
            <div className="mt-4 text-xl font-semibold text-gray-800">
            <p className="text-lg text-gray-700 mt-1 font-bold">Girls Hostel</p>
            <p className="text-sm text-gray-700 mt-1"><b>Chief Warden: </b> Dr. P.K. Mishra</p>
            <p className="text-sm text-gray-700 mt-1"><b>Warden: </b> Dr. Vikas Kumar Singh</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
