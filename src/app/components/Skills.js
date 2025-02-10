"use client";
import React, { useState ,useRef, useEffect } from "react";
import Skill from "./Skill";
import lottie from "lottie-web";
import { client } from "../../../portfolio/sanity";
import { groq } from "next-sanity";

async function getData() {
  return client.fetch(groq`*[_type=="skill"]`);
}

function Skills() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error fetching the posts", error);
      });
  }, []);
  const animationData = require("../../../public/assets/hello.json");
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
    <div>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Skills
      </h3>

      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md: w-1/2 grid grid-cols-3 gap-5">
          {posts?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>

        <div className="md:w-1/2 z-auto pt-2 md: mt-0">
          <div className="conatiner" ref={container}></div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
