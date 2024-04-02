import React from "react";

function About() {
  return (
    <div className="p-10 " id="about">
      <h1 className="text-4xl mb-10">About</h1>

      <div className="container2">
        <div className="about-content">
          <div className="mb-5">
            <h3 className="text-xl mb-4">
              I&apos;m
              <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                Nisrin Sabri
              </span>
              <span> and Web Devloper</span>
            </h3>
            <p>
              I am a highly skilled and experienced web developer with a strong
              background in building and maintaining websites using a variety of
              programming languages and technologies.
              <br /> I am adept at working on both front-end and back-end
              development, and have a keen eye for design and user experience.
              <br /> I am comfortable working in a fast-paced environment and am
              always seeking to learn and improve my skills.
            </p>
          </div>

          <div className="info-row">
            <div className=" mb-5">
              <ul>
                <li>
                  Birthday : <span>10 aout 1995</span>
                </li>
                {/* <li>
                  Github :
                  <span>
                    <button>
                      <a
                        rel="stylesheet"
                        href="https://github.com/khalid-wq"
                        target="_blank"
                      >
                        My Github
                      </a>
                    </button>
                  </span>
                </li> */}
                <li>
                  Linkdin :
                  <span>
                    <button className="underline">
                      <a rel="stylesheet" href="#" target="_blank">
                        My Linkdin
                      </a>
                    </button>
                  </span>
                </li>
                <li>
                  Country : <span>Morroco</span>
                </li>
              </ul>
              <ul>
                <li>
                  Age : <span> 24</span>
                </li>
                <li>
                  Email : <span>test@gmail.com</span>
                </li>
                <li>
                  Phone : <span>+212 45454545</span>
                </li>
              </ul>
            </div>
          </div>
          <div className=" flex gap-2 items-center">
            <a
              href="#"
              target="_blank"
              className=" bg-gradient-to-r from-slate-500 to-slate-300  text-white p-2 rounded-md hover:-translate-y-2 duration-75"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-slate-500 to-slate-300  text-white p-2 rounded-md hover:-translate-y-2 duration-75"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
