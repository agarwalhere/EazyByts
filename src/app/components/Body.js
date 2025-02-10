"use client";
import lottie from "lottie-web";
import React, { useRef, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Body() {
  const animationData = require("../../../public/assets/projects.json");
  const [text, count] = useTypewriter({
    words: ["Hi my name is Shourey", "Practise with me", "I love coding"],
    loop: true,
    delaySpeed: 2000,
  });
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationData,
    });
  }, [animationData]);
  return (
    <section className="py-8">
      <div className="container px-4 mx-auto">
        {/* First part */}
        <div className="flex flex-row-reverse justify-between md:flex-row md:space-x-8">
          <div className="w-full flex flex-col items-start md:w-2/4 mt-0 md:mt-20">
            <h1 className="text-3xl lg:text-5xl font-semibold">
              <span className="mr-3 text-slate-400">{text}</span>
              <Cursor />
            </h1>
            <p className="text-xl text-white md:text-2xl mb-3 mt-2">
              Web developer skilled in React, Node.js, HTML, CSS, and JavaScript, building responsive and dynamic web applications.
            </p>
            <div>
              <button className="bg-blue-400 text-white px-4 py-1 rounded mr-4 hover:bg-blue-600">
                Learn More
              </button>

              <button
                className="bg-gray-300 text-gray-700 px-4 py-1 rounded hover:bg-gray-400"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>
            </div>
            <p className="text-blue-500 text-small font-normal mt-2">
              Coding | Learnings | Lifestyle
            </p>
            <h1 className="text-slate-400 text-xl">
              3rd Year CSE Student | Shiv Nadar University
            </h1>
          </div>

          <div className="md:w-1/2 z-auto pt-2 md: mt-0">
            <div className="conatiner" ref={container}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
