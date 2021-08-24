import React from "react";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
import { FaArrowUp } from "react-icons/fa";
import useObserver from "./../hooks/useObserver";

function Contact() {
  const [setRef] = useObserver("fadeInDown");
  return (
    <div className="bg-gray-900 text-white w-full p-5">
      <div
        className="flex justify-center animate-bounce my-10 cursor-pointer"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        ref={setRef}
      >
        <FaArrowUp size={28} />
      </div>
      <h1 className="headingStyle" ref={setRef}>
        CONTACT
      </h1>
      <p className="text-center mt-6 text-lg" ref={setRef}>
        I love to connect and work together, If you would like to work together,
        Let's catch up over a cup of coffee!
      </p>
      <div className="flex justify-center my-10" ref={setRef}>
        <a
          href="https://www.linkedin.com/in/manish-kumar-sahu-b58a08131/"
          target="_blank"
        >
          <SiLinkedin
            size={28}
            className="mx-5 text-green-300 hover:text-green-500 cursor-pointer "
          />
        </a>
        <a href="https://github.com/t-rex777/" target="_blank">
          <SiGithub
            size={28}
            className="mx-5 text-green-300 hover:text-green-600 cursor-pointer "
          />
        </a>
        <a href="mailto:msahu300@gmail.com" target="_blank">
          <SiGmail
            size={28}
            className="mx-5 text-green-300 hover:text-green-600 cursor-pointer "
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
