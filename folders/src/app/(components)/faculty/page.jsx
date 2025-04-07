"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import vcPic from "../../../../public/FacultyPic/VC_PIC.jpg";

function page() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12 px-36">
      <div className="font-bold text-3xl text-blue-700">
        Faculty Information
      </div>
      <div className="w-full bg-blue-300 py-0.5 my-4"></div>

      <div className="w-full grid grid-rows-12">
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/dean.JPG"
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
                  Prof. N.C. Shahi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (PhD GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Professor</p>
              <p>Department of Process and Food Engineering</p>
              <Link href="" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/rjs.JPG"
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
                  Er. R.J. Singh
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (M.Tech. GBPUAT Pantnagar)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Associate Professor</p>
              <p>Department of Farm Machinery and Power Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1PsHyIRnbI-lByBbPtE64GppWPCBXx9yH/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/vks.jpg"
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
                  Dr. Vijay Kumar Singh
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. JNKVV, Jabalpur)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Associate Professor</p>
              <p>Department of Processing and Food Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1LvxatvYasyqGJ1HoltiYRfFFoS8DKjwD/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/bky.JPG"
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
                  Dr. Brijesh Kumar Yaduvanshi
                </span>
                <span className="text-blue-900 font-extrabold mx-4">(PhD)</span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Associate Professor</p>
              <p>Department of Farm Machinery and Power Engineering</p>
              <Link href="" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/pkm.JPG"
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
                  Dr. Pramod Kumar Mishra
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. PAU, Ludhiana, Punjab)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Farm Machinery and Power Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1Ku6Phf-sagreDFGbKzqCYNZvrjn2h4vh/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/vipul.JPG"
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
                  Dr. Vipul Chaudhary
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. SVPUAT Meerut)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Processing and Food Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1wocxKg5vtQU7QJL3DiJ2qp4vscfSeVT6/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/paul.jpg"
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
                  Dr. Paul Arjun Sanjay
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. MPUAT Udaipur, Rajasthan)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Renewable Energy Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1MJTxYK7Tb3tPZ2bUypl5-dhVG4TY4zDd/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/vikas.JPG"
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
                  Dr. Vikas Kumar Singh
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. IIT Kharagpur)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Soil and Water Conservation Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1Cc-9ORRIj8F2pS98tmZe_0sf-mzEwK2u/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/manish.JPG"
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
                  Dr. Manish Kumar
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. SHUATS Prayagraj)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Farm Machinery and Power Engineering</p>
              <Link
                href="https://drive.google.com/file/d/1IZYIjmrfwyAXw-A7Eq2GRzJ8UnMBZbwv/view"
                target="_blank"
                className="underline text-blue-600"
              >
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/shivam.jpg"
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
                  Dr. Shivam
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. IIT Guwahati)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Irrigation and Drainage Engineering</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/prabhakar.jpeg"
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
                  Dr. Prabhakar Shukla
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. IARI New Delhi)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Farm Machinery and Power Engineering</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/neeraj.jpeg"
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
                  Dr. Neeraj Kumar Singh
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. PAU Ludhiana)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Renewable Energy Engineering</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/ankit.jpeg"
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
                  Dr. Ankit Parwaliya
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. IIIT Gwalior)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/lalit.jpeg"
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
                  Dr. Lalit Kumar
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Ph.D. MNIT Allahabad)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Assistant Professor (Computer Sciences and Engineering)</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/pnv.jpeg"
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
                  Er. P. N.Verma
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Electrical Engineering )
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/seema.JPG"
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
                  Er. Seema
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Civil Engineering)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/rjs.JPEG"
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
                  Dr. Shweta
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Physics)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/ashish.png"
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
                  Er. Ashish Gupta
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Computer Science and Engineering)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/sushil.jpeg"
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
                  Dr. Sushil Kumar Choudhary
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Mechanical Engineering)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] p-3 place-content-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/FacultyPic/sanjay.jpeg"
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
                  Dr. Sanjay Kumar Singh
                </span>
                <span className="text-blue-900 font-extrabold mx-4">
                  (Chemistry)
                </span>
              </div>
              <div className="w-full py-0.5 bg-slate-800"></div>
            </div>
            <div className="flex flex-col gap-2 my-5 font-bold">
              <p>Lecturer</p>
              <p>Department of Basic Engineering and Applied Sciences</p>
              <Link href="" target="_blank" className="underline text-blue-600">
                Visit Profile
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
