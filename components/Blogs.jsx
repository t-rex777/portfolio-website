import React from "react";
import Image from "next/image";
import { blogs } from "./../utils/blogs";

function Blogs() {
  return (
    <div className="pageLayoutWhiteStyle">
      <h1 className="headingStyle">BLOGS</h1>
      <div className=" my-10 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {blogs.map(({ id, name, link, img, date, timetoread, description }) => (
          <div key={id} className="my-5 sm:my-10 mx-5">
            <a href={link} target="_blank" className="cursor-pointer">
              <Image height={1080} width={1920} src={img} layout="responsive" />
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
