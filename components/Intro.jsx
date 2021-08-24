import React from "react";
import useObserver from "./../hooks/useObserver";

function Intro() {
  const [setRef] = useObserver("fadeIn");
  return (
    <div className="h-screen w-full bg-gray-900 flex flex-col justify-center items-start px-10 xsm:px-20 sm:px-30 lg:px-60 py-10">
      <h1 className="introStyle " ref={setRef}>
        Hey,
      </h1>
      <h1 className="introStyle " ref={setRef}>
        My name is <span className=" text-purple-600">Manish Kumar Sahu</span>
      </h1>
      <h1 className="introStyle " ref={setRef}>
        I am a Frontend Developer
      </h1>
      <button
        className="btnStyle mt-10 "
        ref={setRef}
        onClick={() => {
          window.scroll({ top: 6000, behavior: "smooth" });
        }}
      >
        Contact me!
      </button>
    </div>
  );
}

export default Intro;
