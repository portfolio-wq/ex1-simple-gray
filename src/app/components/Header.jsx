"use client";
import React from "react";
import back from "../../../public/backGaijin.jpg";
import hero from "../../../public/girl.png";
import Image from "next/image";
import linkdin from "../../../public/linkedin.png";
import facebook from "../../../public/facebook.png";
import github from "../../../public/github.png";
import { ReactTyped } from "react-typed";
function Header() {
  return (
    <div className=" pb-[100px]" id="header">
      <div className="relative bg-gradient-to-r from-slate-300 to-slate-500">
        <div
          className=" w-full flex flex-wrap justify-around  items-center lg:h-[80vh]
        "
        >
          <div className="p-2 h-[200px] z-30 mt-10 md:mt-0  ">
            <h1 className="md:text-4xl text-2xl">
              Hello I&apos;m{" "}
              <strong className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nisrin Sabri
              </strong>
            </h1>
            <ReactTyped
              strings={[
                "I'm a front-end enginner",
                "i have 3 years ui/ux Experience",
                "i have done   more than 20 project",
              ]}
              typeSpeed={60}
              backSpeed={30}
              loop
            />
            <div className="mt-10 w-[350px]">
              <p className="text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                corporis autem reprehenderit, aspernatur illum perspiciatis et
                facilis error hic velit, voluptatum delectus. Dignissimos
                laborum earum explicabo. Pariatur accusantium aliquid
                temporibus!
              </p>
            </div>
            <div className="flex mt-10 gap-2">
              <Image src={linkdin} alt="jhone" width={20} height={20} />
              <Image src={facebook} alt="jhone" width={20} height={20} />
              <Image src={github} alt="jhone" width={20} height={20} />
            </div>

            <div className=" w-fit mt-10">
              <a className="relative" href="#contact">
                <span className="absolute top-0 left-0 mt-1 ml-1 h-full w-full rounded bg-black"></span>

                <span className="fold-bold relative inline-block h-full w-full rounded border-2 border-black bg-white px-3 py-1 text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                  Hire me
                </span>
              </a>
            </div>
          </div>
          <div>
            <div className=" w-[400px] h-[500px] relative rounded-md overflow-hidden ">
              <Image src={hero} alt="jhone" fill />
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
