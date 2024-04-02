import React from "react";

function Navbare() {
  return (
    <div className="bg-gradient-to-r from-slate-300 to-slate-500 sticky top-0 z-50 text-white">
      <div className="st flex justify-center md:justify-between p-5 lg:w-[80%] m-auto items-center">
        <h2 className=" hidden md:block ">
          <a href="#header">Nisrin Sabri</a>
        </h2>
        <ul className="flex gap-10">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>{" "}
          </li>
          <li>
            <a href="#projects">Projects</a>{" "}
          </li>
          <li>
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbare;
