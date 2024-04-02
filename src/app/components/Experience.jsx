import React from "react";

function Experience() {
  return (
    <div className="p-10 pb-[100px]" id="experience">
      {" "}
      <div>
        <h1 className="text-4xl mb-10">Experience</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ut
          voluptatem magnam enim! Cumque saepe, neque repellat reprehenderit
          velit repudiandae consectetur. Totam ad illo rem labore. Reiciendis
          ratione unde sequi.
        </p>
      </div>
      {/* content */}
      <div className="flex md:items-center w-full mt-20  justify-between gap-10 flex-col md:flex-row ">
        <div className=" job box md:w-[50%] flex flex-col gap-5 relative">
          <h2 className="text-xl mb-5">Jobs</h2>
          {/* job cards */}
          <div className=" bg-gray-200 p-3 rounded-md after:content-[''] after:-left-[18px] after:text-red-500 after:absolute after:top-0 relative  after:w-3 after:h-3 after:bg-black after:rounded-full duration-75">
            <h3 className="font-semibold">Computer Science amd Engenireing</h3>
            <p className="text-gray-500 text-sm">2018-2023</p>
            <p className="text-gray-500 text-sm">toulous,michigen</p>
            <div className="w-[80%]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto
                dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi,
                vitae. Nulla odit esse fuga.
              </p>
            </div>
          </div>
          <div className=" bg-gray-200 p-3 rounded-md after:content-[''] after:-left-[18px] after:text-red-500 after:absolute after:top-0 relative  after:w-3 after:h-3 after:bg-black after:rounded-full duration-75">
            <h3 className="font-semibold">Computer Science amd Engenireing</h3>
            <p className="text-gray-500 text-sm">2018-2023</p>
            <p className="text-gray-500 text-sm">toulous,michigen</p>
            <div className="w-[80%]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto
                dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi,
                vitae. Nulla odit esse fuga.
              </p>
            </div>
          </div>
        </div>
        <div className=" Education box md:w-[50%] flex flex-col gap-5 relative">
          <h2 className="text-xl mb-5">Education</h2>
          {/* education cards */}
          <div className=" bg-gray-200 p-3 rounded-md after:content-[''] after:-left-[18px] after:text-red-500 after:absolute after:top-0 relative  after:w-3 after:h-3 after:bg-black after:rounded-full duration-75">
            <h3 className="font-semibold">Computer Science amd Engenireing</h3>
            <p className="text-gray-500 text-sm">2018-2023</p>
            <p className="text-gray-500 text-sm">toulous,michigen</p>
            <div className="w-[80%]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto
                dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi,
                vitae. Nulla odit esse fuga.
              </p>
            </div>
          </div>
          <div className=" bg-gray-200 p-3 rounded-md after:content-[''] after:-left-[18px] after:text-red-500 after:absolute after:top-0 relative  after:w-3 after:h-3 after:bg-black after:rounded-full duration-75">
            <h3 className="font-semibold">Computer Science amd Engenireing</h3>
            <p className="text-gray-500 text-sm">2018-2023</p>
            <p className="text-gray-500 text-sm">toulous,michigen</p>
            <div className="w-[80%]">
              <p className="">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto
                dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi,
                vitae. Nulla odit esse fuga.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
