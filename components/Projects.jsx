import React from "react";
import Image from "next/image";

import { projects } from "./../utils/projects";
function Projects() {
  return (
    <div className="pageLayoutDarkStyle">
      <h1 className="headingStyle">PROJECTS</h1>
      {projects.map(({ id, title, img, stack, github, live, description }) => (
        <div
          key={id}
          className="flex flex-col sm:flex-row justify-center w-full items-center sm:my-5  py-10"
        >
          <div className="w-full sm:w-1/2 md:w-1/4 p-2 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105">
            <a href={live} target="_blank">
              {" "}
              <Image
                src={img}
                alt="project"
                width={1920}
                height={1080}
                // objectFit="contain"
                layout="responsive"
              />
            </a>
          </div>
          <div className="w-full sm:w-1/2 text-white mx-10">
            <h1 className="text-3xl font-bold mb-5 ml-2 text-green-500">
              | {title} |
            </h1>
            <p className="text-lg sm:text-sm lg:text-lg">{description}</p>
            <p className="font-bold text-purple-400 mt-3">
              Tech Stack : {stack}
            </p>
            <div className="flex justify-start">
              <button className="linkStyle">
                <a href={live} target="_blank">
                  LIVE LINK
                </a>
              </button>
              <button className="linkStyle">
                <a href={live} target="_blank">
                  GITHUB LINK
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
