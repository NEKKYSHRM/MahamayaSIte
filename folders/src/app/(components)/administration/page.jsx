"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import vcPic from "../../../../public/FacultyPic/VC_PIC.jpg";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-36">
      <div className="w-full text-center bg-gray-100 shadow-md shadow-zinc-600 py-3">
        <div className="font-bold text-3xl text-green-700">Administration</div>
        <div className="w-full bg-green-500 py-0.5 my-4"></div>
      </div>

      <div className="w-full grid grid-rows-8 bg-gray-100 shadow-md shadow-zinc-600">
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/dean.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Dean
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Prof. N. C. Shahi</p>
              <p>Phone : +91 94157 19422,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/vks.jpg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Associate Dean of Student Welfare (ADSW)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Vijay Kumar Singh</p>
              <p>Phone : +91 99926 61719,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/pkm.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Technical Coordinator
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. P. K. Mishra</p>
              <p>Phone : +91 78372 43594,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/pkm.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Chief Hostel Warden
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. P.K. Mishra</p>
              <p>Phone : +91 78372 43594,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/vikas.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Asstt. Hostel Warden (Girls Hostel)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Vikas Kumar Singh</p>
              <p>Phone : +91 96355 08287,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/vikas.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Asstt. Hostel Warden (Kaveri Hostel)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Vikas Kumar Singh</p>
              <p>Phone : +91 96355 08287,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/manish.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Asstt. Hostel Warden (Godavari Hostel)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Manish Kumar</p>
              <p>Phone : +91 97593 22799,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/paul.jpg"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Training and Placement In-charge
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Paul Arjun Sanjay</p>
              <p>Phone : +91 89529 85774,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="w-52 h-60 flex justify-center items-center mx-auto relative rounded-sm overflow-hidden border-2">
            <Image
              src="/facultyPic/vipul.JPG"
              alt={`student's profile`}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex flex-col m-3">
            <div className="w-full">
              <div className="w-full py-0.5 bg-slate-800"></div>
              <div className="my-2">
                <span className="text-green-900 font-extrabold text-2xl">
                  Security In-charge
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Dr. Vipul Chaudhary</p>
              <p>Phone : +91 95680 66641,</p>
              <p>Email : deanmcaet@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
