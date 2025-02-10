"use client";
import React, { useState, useEffect } from "react";
import { client } from "../../../portfolio/sanity";
import { groq } from "next-sanity";

async function getData() {
  return client.fetch(groq`*[_type=="experience"]`);
}

function Experience() {
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
  return (
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>

      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 mt-8 mb-20">
        {posts?.map((item, index) => (
          <div
            className="bg-slate-400 rounded-lg p-6 shadow-md mx-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <img
                className="rounded-full w-32 h-32 mx:auto md:mx-0 object-contain"
                src={item?.image}
              />
            </div>
            <h4 className="text-xl text-white  font-bold mt-4 mb-2">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
