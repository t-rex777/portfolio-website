import React from "react";

function Intro() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-start px-10 ">
      <h1 className="intoStyle slide-in-elliptic-top-fwd">Hey,</h1>
      <h1 className="intoStyle slide-in-elliptic-top-fwd">
        My name is <span className=" text-purple-600">Manish Kumar Sahu</span>{" "}
      </h1>
      <h1 className="intoStyle slide-in-elliptic-top-fwd">I am a Frontend Developer</h1>
      <button
        className="btnStyle slide-in-elliptic-top-fwd"
        onClick={() => {
          window.scroll({ top: 6000 , behavior: 'smooth' });

        }}
      >
        Contact me!
      </button>
    </div>
  );
}

export default Intro;
