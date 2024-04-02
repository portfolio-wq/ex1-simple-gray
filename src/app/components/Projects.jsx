import Image from "next/image";
import React from "react";
import pic1 from "../../../public/pic1.jpg";
import pic2 from "../../../public/pic2.jpg";
import pic3 from "../../../public/pic3.jpg";
function Projects() {
  const projects = [
    {
      title: "hello",
      photo: pic1,
      tools: ["react", "nextjs", "postman"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi, vitae. Nulla odit esse fuga.",
    },
    {
      title: "hello",
      photo: pic1,
      tools: ["react", "nextjs", "postman"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi, vitae. Nulla odit esse fuga.",
    },
    {
      title: "hello",
      photo: pic1,
      tools: ["react", "nextjs", "postman"],
      description:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem numquam cum odit eveniet unde, mollitia nemo. Iusto dolor, eaque dolores unde quibusdam ipsam blanditiis? Quasi, vitae. Nulla odit esse fuga.",
    },
  ];
  return (
    <div className="pb-[100px]" id="projects">
      <div className=" bg-gradient-to-r from-slate-300 to-slate-500  pb-[100px]">
        <div className="spacer layer1">
          <div className=" p-10  ">
            <h1 className="text-4xl mb-10 ">Projects</h1>
            {/* card */}
            <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="bg-gray-300 flex flex-col justify-between items-center gap-5"
                >
                  <div className=" ">
                    <Image
                      src={project.photo}
                      alt={project.title}
                      width={300}
                      height={300}
                    />
                  </div>
                  <strong className="text-center w-full">
                    {project.title}
                  </strong>
                  <div className="p-2 text-center">
                    <p>{project.description}</p>
                  </div>
                  <div className="w-20 h-[5px] bg-gradient-to-r from-violet-600 to-indigo-600 rounded-md"></div>
                  <div className="flex gap-5 mb-5">
                    {project.tools.map((tool, i) => (
                      <div
                        key={i}
                        className="border-black px-2 bg-gray-200 rounded-md"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
