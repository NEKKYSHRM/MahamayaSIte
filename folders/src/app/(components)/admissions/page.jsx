"use client";

import React from "react";
import Link from "next/link";

function page() {
  return (
    <div className="flex flex-col gap-10 w-full p-5 items-center justify-center text-center px-10">
      <div className="flex flex-col gap-2">
        <Link href="https://upcatet.org/site/pdf/upcatet_online_counselling_schedule.pdf" target="_blank">
          <button className="w-96 flex text-center bg-primary justify-center font-bold text-white rounded-sm p-2">
            UPCATET 2024 Counselling Dates
          </button>
        </Link>
        <Link href="https://drive.google.com/file/d/1JBr5sJSfA9A5mGsR3INPIo4d89ZO1_sC/view" target="_blank">
          <button className="w-96 flex text-center bg-primary justify-center font-bold text-white rounded-sm p-2">
            Fee Structure (B.Tech, M.Tech & PhD)
          </button>
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <div>
            <h3 className="font-bold text-2xl">
              Contact Details for Admission related queries
            </h3>
            <h3 className="font-bold text-2xl">
              (एडमिशन से सम्बंधित जानकारी के लिए संपर्क करें)
            </h3>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-lg">
              Dr. Pramod Kumar Mishra- 78372 43594
            </p>
            <p className="font-bold text-lg">Dr. Manish Kumar - 97593 22799</p>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <iframe className="w-full h-screen" src="https://upcatet.org/site/"></iframe>
      </div>
      
    </div>
  );
}

export default page;
