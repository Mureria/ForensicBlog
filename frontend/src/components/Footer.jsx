import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center py-10 px-4 space-y-4">
          <h1 className="text-lg font-medium">
            Sign up for weekly facts and updates of Forensic Science
          </h1>
          <input
            type="text"
            placeholder="Email"
            className="px-4 py-3 border-2 bg-inherit   focus:outline-dotted"
          />
          <button className="border  py-3 w-full md:max-w-28 mx-auto px-4 rounded-md bg-blue-400 text-white font-semibold">
            Subscribe
          </button>
        </div>
        <div className="w-full bg-slate-100 text-center px-4">
          <div className="text-sm py-7 ">
            <p>
              <span className="font-bold">ForensicsBlog</span> | Copyright ©
              2024 All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
