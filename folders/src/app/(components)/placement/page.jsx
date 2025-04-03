"use client";

import React from 'react';
import Link from 'next/link';

function page() {
  return (
    <div className='w-full flex flex-col gap-10 p-5 items-center justify-center text-center px-10'>
        <div className="flex flex-col gap-2">
        <Link href="https://drive.google.com/file/d/125XVM9-NdkGp0zOdDXzkUBheClgjshIF/view" target="_blank">
          <button className="w-96 flex text-center bg-primary justify-center font-bold text-white rounded-sm p-2">
            Placement Record of Last Five Year
          </button>
        </Link>
      </div>
    </div>
  )
}

export default page