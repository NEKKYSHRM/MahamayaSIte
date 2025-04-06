"use client";

import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="w-full flex flex-col gap-10 p-5 items-center justify-center text-center px-20">
      <div className="w-full px-6 py-10 flex flex-col gap-7 justify-center">
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-2xl">
            List of Student Placement of Last Five Years
          </h1>
          <div className="w-60 h-0.5 mt-1 mb-8 bg-black"></div>
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Placement of Student during (2017-18)
          </h1>
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Sanjeev Pal Sen",
                  enroll: "E-12351/21",
                  type: "Off campus",
                  sector: "Noida developer (Private)",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Placement of Student during (2018-19)
          </h1>
          {/* <div className="w-20 h-0.5 mt-1 bg-black"></div> */}
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Sumit Kumar",
                  enroll: "E-8765/15",
                  type: "Off campus",
                  sector: "A.O. Indian Bank",
                },
                {
                  sno: 2,
                  name: "Arpit Kumar",
                  enroll: "E-8813/15",
                  type: "Off campus",
                  sector: "S/W developer at Ebixcash",
                },
                {
                  sno: 3,
                  name: "Esha Puwar",
                  enroll: "E-8817/15",
                  type: "Off campus",
                  sector: "S/W developer Gurugram",
                },
                {
                  sno: 4,
                  name: "Sankalp Sachank",
                  enroll: "E-8824/15",
                  type: "Off campus",
                  sector: "HCL Noida Developer",
                },
                {
                  sno: 5,
                  name: "Sana Mansoori",
                  enroll: "E-8823/15",
                  type: "Off campus",
                  sector: "Bangalore S/W developer",
                },
                {
                  sno: 6,
                  name: "Amit Patel",
                  enroll: "E-8717/15",
                  type: "Off campus",
                  sector: "J. FARM (TMTL SERVICES)",
                },
                {
                  sno: 7,
                  name: "Shivam Mishra",
                  enroll: "E-8768/15",
                  type: "Off campus",
                  sector: "P.O. Eicher",
                },
                {
                  sno: 8,
                  name: "Ajeet Singh",
                  enroll: "E-8718/15",
                  type: "Off campus",
                  sector: "J. Farm (Tmtl Services)",
                },
                {
                  sno: 9,
                  name: "Anil Kumar",
                  enroll: "E-8724/15",
                  type: "Off campus",
                  sector: "Senior Field Officer ITL Sonalika",
                },
                {
                  sno: 10,
                  name: "Jitendra",
                  enroll: "E-8737/15",
                  type: "Off campus",
                  sector: "Senior Field Officer ITL Sonalika",
                },
                {
                  sno: 11,
                  name: "Kunsket Kushwaha",
                  enroll: "E-8739/15",
                  type: "Off campus",
                  sector: "S.O HERO MOTOR",
                },
                {
                  sno: 12,
                  name: "Vikash Verma",
                  enroll: "E-8771/15",
                  type: "Off campus",
                  sector: "F.O. TAFE",
                },
                {
                  sno: 13,
                  name: "Sandeep Verma",
                  enroll: "E-8766/15",
                  type: "Off campus",
                  sector: "P.O. NEW HOLLAND",
                },
                {
                  sno: 14,
                  name: "Brijesh",
                  enroll: "E-8732/15",
                  type: "Off campus",
                  sector: "P.O. Eicher",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Placement of Student during (2019-20)
          </h1>
          {/* <div className="w-20 h-0.5 mt-1 bg-black"></div> */}
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Aditya Dixit",
                  enroll: "E-9465/16",
                  type: "Off campus",
                  sector: "Life Box (Private)",
                },
                {
                  sno: 2,
                  name: "Akanksha Sachan",
                  enroll: "E-9458/16",
                  type: "Off campus",
                  sector: "CDAC - Pune (Private)",
                },
                {
                  sno: 3,
                  name: "Manish Saxena",
                  enroll: "E-9474/16",
                  type: "Off campus",
                  sector: "Bone Group (Private)",
                },
                {
                  sno: 4,
                  name: "Rahul Agrahari",
                  enroll: "E-9479/16",
                  type: "Off campus",
                  sector: "HCL Noida (Private)",
                },
                {
                  sno: 5,
                  name: "Sandeep Kumar Verma",
                  enroll: "E-8766/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 6,
                  name: "Rajan Maurya",
                  enroll: "E-8752/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 7,
                  name: "Vikas Verma",
                  enroll: "E-8771/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 8,
                  name: "Anil Kumar",
                  enroll: "E-8724/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 9,
                  name: "Dipak Patel",
                  enroll: "E-8733/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 10,
                  name: "Jitendra Kumar",
                  enroll: "E-8737/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 11,
                  name: "Kunsket",
                  enroll: "E-8739/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
                {
                  sno: 12,
                  name: "Suryakant",
                  enroll: "E-8758/15",
                  type: "On campus",
                  sector: "Trainee Sales Ace Ltd",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Placement of Student during (2020-21)
          </h1>
          {/* <div className="w-20 h-0.5 mt-1 bg-black"></div> */}
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Shivam Shukla",
                  enroll: "E-9454/16",
                  type: "Off campus",
                  sector:
                    "Production Engineer, LEMEI Plastic Manufacturing Pvt. Ltd",
                },
                {
                  sno: 2,
                  name: "Amit Yadav",
                  enroll: "E-9434/16",
                  type: "Off campus",
                  sector:
                    "Quality Engineer, LEMEI Plastic Manufacturing Pvt. Ltd",
                },
                {
                  sno: 3,
                  name: "Himanshu Chaturvedi",
                  enroll: "E-9439/16",
                  type: "Off campus",
                  sector: "Quality Engineer, Neumann Components, Greater Noida",
                },
                {
                  sno: 4,
                  name: "Manish Saxena",
                  enroll: "E-9474/16",
                  type: "Off campus",
                  sector: "Software Engineer, Bone Group (Tech Mahindra Group)",
                },
                {
                  sno: 5,
                  name: "Akansha Sachan",
                  enroll: "E-9459/16",
                  type: "Off campus",
                  sector: "Project Engineer, CDAC Pune",
                },
                {
                  sno: 6,
                  name: "Aditya Dixit",
                  enroll: "E-9465/16",
                  type: "Off campus",
                  sector: "Automation Implement Analyst, Life Works",
                },
                {
                  sno: 7,
                  name: "Satyam Singh",
                  enroll: "E-8801/15",
                  type: "Off campus",
                  sector: "Deputy Manager, Premier",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            Placement of Student during (2021-22)
          </h1>
          {/* <div className="w-20 h-0.5 mt-1 bg-black"></div> */}
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Padam Kant Dubey",
                  enroll: "E-10442/18",
                  type: "Off campus",
                  sector: "Government",
                },
                {
                  sno: 2,
                  name: "Anand Mishra",
                  enroll: "E-8727/15",
                  type: "Off campus",
                  sector: "Government",
                },
                {
                  sno: 3,
                  name: "Sudhakar Bharti",
                  enroll: "E-9974/16",
                  type: "Off campus",
                  sector: "Review Officer, UP Sachivalaya",
                },
                {
                  sno: 4,
                  name: "Rahul Baghel",
                  enroll: "E-8756/15",
                  type: "Off campus",
                  sector: "Government",
                },
                {
                  sno: 5,
                  name: "Aryan Yadav",
                  enroll: "E-10469/18",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 6,
                  name: "Shivansh Srivastava",
                  enroll: "E-10464/18",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 7,
                  name: "Supriya Pandey",
                  enroll: "E-10476/18",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 8,
                  name: "Vivek Singh",
                  enroll: "E-9969/17",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 9,
                  name: "Shivam Verma",
                  enroll: "E-10475/18",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 10,
                  name: "Munish Kumar",
                  enroll: "E-8744/15",
                  type: "Off campus",
                  sector: "Government",
                },
                {
                  sno: 11,
                  name: "Lalit Kumar",
                  enroll: "E-8752/15",
                  type: "Off campus",
                  sector: "Private",
                },
                {
                  sno: 12,
                  name: "Dharmendra Pratap Gautam",
                  enroll: "E-8735/15",
                  type: "Off campus",
                  sector: "E-Krishi Mahindra Ltd",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          <h1 className="text-black font-bold text-center font-serif text-xl">
            List of Students Selected for Higher Studies
          </h1>
          {/* <div className="w-20 h-0.5 mt-1 bg-black"></div> */}
        </div>
        <div className="w-full">
          <table className="table-fixed w-full border border-black">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-black p-2 text-sm">S.No</th>
                <th className="border border-black p-2 text-sm">Name</th>
                <th className="border border-black p-2 text-sm">
                  Enrollment ID
                </th>
                <th className="border border-black p-2 text-sm">
                  Nature of Placement
                </th>
                <th className="border border-black p-2 text-sm">
                  Govt./Private sector
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  sno: 1,
                  name: "Amar Chandra",
                  enroll: "E-9459/16",
                  type: "Off campus",
                  sector: "M.Tech, MMMUT Gorakhpur",
                },
                {
                  sno: 2,
                  name: "Udhav Pathak",
                  enroll: "E-8833/15",
                  type: "Off campus",
                  sector: "M.Tech, Ayodhya College",
                },
                {
                  sno: 3,
                  name: "Utkarsh Gaurav",
                  enroll: "E-10465/18",
                  type: "Off campus",
                  sector: "M.Tech",
                },
                {
                  sno: 4,
                  name: "Abhishek Mishra",
                  enroll: "E-9967/17",
                  type: "Off campus",
                  sector: "M.Tech",
                },
                {
                  sno: 5,
                  name: "Urvashi Singh",
                  enroll: "E-9969/17",
                  type: "Off campus",
                  sector: "M.Tech",
                },
                {
                  sno: 6,
                  name: "Vimlendra Mani Pandey",
                  enroll: "E-10454/18",
                  type: "Off campus",
                  sector: "M.Tech",
                },
                {
                  sno: 7,
                  name: "Mohd. Hasnain",
                  enroll: "E-10438/18",
                  type: "Off campus",
                  sector: "M.Tech",
                },
                {
                  sno: 8,
                  name: "Shailesh Verma",
                  enroll: "E-9420/16",
                  type: "Off campus",
                  sector: "M.Tech, RMLAU Ayodhya",
                },
                {
                  sno: 9,
                  name: "Sudhakar Bharti",
                  enroll: "E-9974/16",
                  type: "Off campus",
                  sector: "M.Tech, SVPUAT Meerut",
                },
                {
                  sno: 10,
                  name: "Siddhesh Dubey",
                  enroll: "E-9424/16",
                  type: "Off campus",
                  sector: "CAEPHT, Ranipool, Gangtok, Sikkim",
                },
              ].map((item, index) => (
                <tr
                  key={index}
                  className="w-full border border-black align-top"
                >
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sno}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.name}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.enroll}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold break-words whitespace-pre-wrap">
                    {item.type}
                  </td>
                  <td className="border border-black p-2 text-center text-sm font-semibold">
                    {item.sector}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Link
          href="https://drive.google.com/file/d/125XVM9-NdkGp0zOdDXzkUBheClgjshIF/view"
          target="_blank"
        >
          <button className="w-96 flex text-center bg-primary justify-center font-bold text-white rounded-sm p-2 hover:bg-green-700">
            Download The List
          </button>
        </Link>
      </div>
    </div>
  );
}

export default page;
