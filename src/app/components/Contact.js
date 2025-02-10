"use client";
import React from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (formData) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      const result = await response.json();
  
      if (result.success) {
        alert("Email sent successfully!");
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Something went wrong.");
    }
  };
  
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 items-start justify-center">
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">
              a.shourey07@gmail.com
            </p>
          </div>

          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="h-8 w-8 animate-pulse" />
            <p className="text-xl text-white text-center">Delhi NCR 201314</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-60 sm:w-full mx-auto"
        >
          <div className="space-y-2 flex flex-col md:flex \">
            <input
              {...register("name")}
              placeholder="Name"
              type="text"
              className="outline-none bg-slate-400/10 rounded-sm w-80 px-6 py-4 text-gray-500 placeholder-gray-500"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="outline-none bg-slate-400/10 rounded-sm w-80 px-6 py-4 text-gray-500 placeholder-gray-500"
            />
          </div>

          <input
            {...register("subject")}
            placeholder="Subject"
            className="outline-none bg-slate-400/10 rounded-sm w-80 px-6 py-4 text-gray-500 placeholder-gray-500"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm w-80 px-6 py-4 text-gray-500 placeholder-gray-500"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 px-4 py-3 rounded-sm w-80 font-bold text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
