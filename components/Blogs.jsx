import React from "react";
import Image from "next/image";
import { blogs } from "./../utils/blogs";
import useObserver from "./../hooks/useObserver";

function Blogs() {
  const [setRef] = useObserver("fadeIn");

  return (
    <div className="pageLayoutWhiteStyle">
      <h1 className="headingStyle" ref={setRef}>
        BLOGS
      </h1>
      <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {blogs.map(({ id, name, link, img, date, timetoread, description }) => (
          <div key={id} className="my-5 sm:my-10 mx-5" ref={setRef}>
            <a href={link} target="_blank" className="cursor-pointer">
              <Image height={920} width={1920} src={img} layout="responsive" />
            </a>
            <h1 className="text-2xl font-bold mt-1">{name}</h1>
            <div className="flex my-2">
              <p className="text-gray-600 mr-5">{date}</p>
              <p className="text-gray-600">{timetoread} mins read</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
