import React from "react";
import { SiLinkedin, SiGmail, SiGithub } from "react-icons/si";
function SideBar() {
  const navitemStyles = `text-purple-400 self-start text-md px-2 py-3 font-bold hover:text-purple-600 sm:text-2xl sm:px-5`;

  return (
    <nav className="fixed left-0 top-0 bg-black-500 h-full flex flex-col justify-evenly">
      <div className="flex flex-col">
        <div className={navitemStyles}>About</div>
        <div className={navitemStyles}>Projects</div>
        <div className={navitemStyles}>Blogs</div>
        <div className={navitemStyles}>Contact</div>
      </div>

      <div>
        <span
          className={`${navitemStyles} flex justify-center mb-5 hover:animate-bounce`}
        >
          <a
            href="https://www.linkedin.com/in/manish-kumar-sahu-b58a08131/"
            target="_blank"
          >
            <SiLinkedin />
          </a>
        </span>
        <span
          className={`${navitemStyles} flex justify-center mb-5 hover:animate-bounce`}
        >
            <a href="https://github.com/t-rex777/june/blob/development/packages/app/tailwind.config.js" target="_blank">
        <SiGithub />
            </a>
        </span>
        <span
          className={`${navitemStyles} flex justify-center mb-5 hover:animate-bounce`}
        >
            <a href="mailto:msahu300@gmail.com" target="_blank">
          <SiGmail />
            </a>
        </span>
      </div>
    </nav>
  );
}

export default SideBar;
