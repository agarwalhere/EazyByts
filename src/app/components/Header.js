"use client";
import React from "react";

function Header() {
  return (
    <header className="py-4">
      <div className="mx-10 sm:mx-auto max-w-6xl px-4 flex items-center justify-between border border-zinc-600 p-3 rounded-full">
        {/*Left Part*/}
        <div
          onClick={() => window.location.reload()}
          className="cursor-pointer"
        >
          <span className="text-xl text-white cursor-pointer font-bold ml-2">
            Shourey <span className="text-slate-400 font-bold">Agarwal</span>
          </span>
        </div>

        {/*Mid Part*/}
        <div className="hidden sm:flex flex-row space-x-4">
          {/* <p className="text-white cursor-pointer">About</p> */}

          <p
            className="text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Experience
          </p>

          <p
            className="text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("skills")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Skills
          </p>

          <p
            className="text-white cursor-pointer"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Contact
          </p>
        </div>
        {/*Right Part*/}
        <div className="flex space-x-3 items-center">
          <a
            href="https://www.linkedin.com/in/shourey"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-white bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/agarwalhere"
            target="_blank"
            rel="noopener noreferrer"
            className="border cursor-pointer border-gray-500 text-white px-4 py-2 rounded-full"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
