"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Bouton from "../Bouton";

export default function ContactForm() {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     process.env.EMAIL_JS_SERVICE,
    //     process.env.EMAIL_JS_TEMPLATE,
    //     form.current,
    //     process.env.EMAIL_JS_USER
    //   )
    //   .then(
    //     (result) => {
    //       console.log(result.text);
    //       console.log(result);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="bg-first-color rounded-[20px] pt-[30px] pb-[40px] px-[80px] mt-[80px] w-full max-w-[400px]"
    >
      <div className="flex flex-col items-center">
        <div className="input-wrapper">
          <label htmlFor="name" className="text-white text-textM">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            required
            className="rounded-[10px] text-first-color"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="text-white text-textM">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="user_email"
            required
            className="rounded-[10px] text-first-color"
          />
        </div>
        <div className="input-wrapper mb-[40px] ">
          <label htmlFor="message" className="text-white text-textM">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="7"
            required
            className="rounded-[10px] text-first-color"
          ></textarea>
        </div>
        <Bouton children={"Envoyer"} type={"submit"} />
      </div>
    </form>
  );
}
