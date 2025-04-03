"use client";

import React from "react";
import Image from "next/image";
import fmpPic from "../../../../public/DepartmentsPic/FMP.jpg";
import fmp1 from "../../../../public/DepartmentsPic/FMP1.jpeg";
import pfe from "../../../../public/DepartmentsPic/PFE.jpg";
import pfe1 from "../../../../public/DepartmentsPic/PFE1.jpeg";
import swce from "../../../../public/DepartmentsPic/SWCE.jpg";
import swce1 from "../../../../public/DepartmentsPic/SWCE1.png";
import ide from "../../../../public/DepartmentsPic/IDE.jpg";
import ide1 from "../../../../public/DepartmentsPic/IDE1.jpeg";
import ree from "../../../../public/DepartmentsPic/REE.jpg";
import ree1 from "../../../../public/DepartmentsPic/REE1.png";
import cse from "../../../../public/DepartmentsPic/CSE.jpg";
import me from "../../../../public/DepartmentsPic/ME.jpg";
import me1 from "../../../../public/DepartmentsPic/ME1.jpeg";
import beas from "../../../../public/DepartmentsPic/BEAS.jpg";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12">
      <div className="font-bold text-3xl text-blue-700">Departments</div>
      <div className="w-full m-1">
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Farm Machinery & Power Engineering
          </span>
          <Image src={fmpPic} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-3/5 p-10 flex flex-col justify-center items-center">
            <Image src={fmp1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Processing & Food Engineering
          </span>
          <Image src={pfe} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={pfe1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Soil Water & Conservation Engineering
          </span>
          <Image src={swce} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={swce1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Irrigation & Drainage Engineering
          </span>
          <Image src={ide} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={ide1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Renewable Energy Engineering
          </span>
          <Image src={ree} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={ree1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Computer Science & Engineering
          </span>
          <Image src={cse} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={me1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Mechanical Engineering
          </span>
          <Image src={me} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={me1} alt=""></Image>
          </div>
        </div>
        <div className="w-full flex flex-col items-center text-center">
          <span className="text-white font-bold text-2xl relative top-16">
            Basic Engineering & Applied Science
          </span>
          <Image src={beas} className="w-full h-24" alt=""></Image>
          <div className="w-4/5 h-1/3 p-10 flex flex-col justify-center items-center">
            <Image src={me1} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
