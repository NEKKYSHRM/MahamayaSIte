"use client";

import React from "react";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-6">
      <div className="flex text-center font-bold text-gray-600 text-3xl mb-10">
        Offered Courses
      </div>

      <div className="w-full flex flex-col justify-center items-center text-center gap-10">
        <div>
          <div className="flex flex-col font-bold text-2xl text-center">1. Undergraduate Programmes</div>
          <ol>
            <li>B.Tech. in Agricultural Engineering</li>
            <li>B.Tech. in Computer Science and Engineering</li>
            <li>B.Tech. in Mechanical Engineering</li>
          </ol>
        </div>
        <div>
          <div className="flex flex-col font-bold text-2xl text-center">2. Postgraduate Programmes</div>
          <ol>
            <li>M.Tech. in Farm Machinery and Power Engineering</li>
            <li>M.Tech. in Processing and Food Engineering</li>
            <li>M.Tech. in Soil and Water Conservation Engineering</li>
            <li>M.Tech. in Irrigation and Drainage Engineering</li>
            <li>M.Tech. in Renewable Energy Engineering</li>
          </ol>
        </div>
        <div>
          <div className="flex flex-col font-bold text-2xl text-center">3. Doctoral Programmes</div>
          <ol>
            <li>Ph.D. in Farm Machinery and Power Engineering</li>
            <li>Ph.D. in Processing and Food Engineering</li>
            <li>Ph.D. in Soil and Water Conservation Engineering</li>
            <li>Ph.D. in Irrigation and Drainage Engineering</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default page;
