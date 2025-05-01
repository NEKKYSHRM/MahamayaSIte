"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { axios } from "axios";

import React from "react";

export default function page() {
  const { id } = useParams();
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaculty = async () => {
      try {
        const res = await fetch("/Data/faculty.json");
        const data = await res.json();
        const foundFaculty = data.find((f) => f.id === id);
        setFaculty(foundFaculty);
      } catch (err) {
        console.error("Failed to fetch faculty data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFaculty();
  }, [id]);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  if (!faculty) {
    return (
      <div className="p-10 text-center text-red-500">
        Faculty not found.{" "}
        <Link href="/faculty" className="text-blue-600 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center py-8 px-32 bg-gray-50">
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full bg-white shadow-slate-400 shadow-lg border-black border-2">
          <table className="w-full border-2 border-black table-auto">
            <thead className="bg-yellow-300">
              <tr>
                <th colSpan={2} className="text-center">
                  Faculty Information
                </th>
              </tr>
            </thead>
            <tbody className="border-black">
              <tr>
                <td className="border border-black p-4 w-1/3 text-center">
                  <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
                    <Image
                      src={faculty.image}
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
                          : {faculty.fullName}
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Designation
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : {faculty.designation}
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Specialization
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : {faculty.specialization}
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Phone
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : +91 {faculty.phone}
                        </td>
                      </tr>
                      <tr className="h-12">
                        <td className="px-4 font-bold text-sm w-1/4 text-left align-top">
                          Email
                        </td>
                        <td className="w-3/4 font-semibold text-sm text-left align-top">
                          : {faculty.email}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full bg-white shadow-slate-400 shadow-lg border-black border-2">
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
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">
                  {faculty.bio1}
                </td>
              </tr>
              <tr className="">
                <td className="px-4 py-2 text-gray-700 text-sm text-justify w-1/4 font-medium align-top">
                  {faculty.bio2}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full bg-white shadow-slate-400 shadow-lg border-black border-2">
          <iframe
            src={faculty.cv}
            width="100%"
            height="600px"
            allow="autoplay"
          ></iframe>
        </div>
      </div>

      <Link href="/faculty" className="mt-6 text-blue-600 hover:underline">
        ← Back to Faculty List
      </Link>
    </div>
  );
}
