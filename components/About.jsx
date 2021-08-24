import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Me from "../public/static/images/me.webp";
import Wave from "../public/static/images/wave.svg";
import useObserver from "./../hooks/useObserver";
function About() {
  const [setRef] = useObserver("fadeInDown");

  return (
    <div className="pageLayoutWhiteStyle min-h-screen">
      <h1 className="headingStyle" ref={setRef}>
        ABOUT ME
      </h1>
      <div className="flex flex-col justify-center items-center mt-8 sm:flex-row">
        <div className="mx-5 w-1/4" ref={setRef}>
          <Image
            className="object-contain "
            src={Me}
            height={400}
            width={320}
            alt="me"
          />
        </div>
        <div className="sm:w-1/2 " ref={setRef}>
          <p className="aboutStyle ">
            I am a Front End Developer from India, experienced in building
            responsive, accessible websites and web applications. I know{" "}
            <span className="font-bold">
              HTML, CSS, Javascript, React, Typescript, Bootstrap, Tailwind CSS,
              Redux toolkit.{" "}
            </span>
            I also love to collaborate with other folks on amazing projects.
            Currently, I am learning more about NextJS and Vue. Besides being a
            developer, I am a gamer and a fitness enthusiastic too.
          </p>

          <p className="aboutStyle" ref={setRef}>
            I believe in showing a proof of my work, rather than listing my
            skills on a shiny piece of paper. Some of my works are shown below.
          </p>
          <div className="flex justify-center sm:justify-start">
            <a
              href="https://drive.google.com/file/d/1dDgUILwjBZHGOPA67RjG4qzNrm2v7MEH/view?usp=sharing"
              target="_blank"
            >
              <button className="btnStyle" ref={setRef}>
                Resume
              </button>
            </a>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
