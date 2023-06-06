import React from "react";
import Bouton from "../Bouton";

export default function ContactForm() {
  return (
    <form className="bg-first-color rounded-[20px] pt-[30px] pb-[40px] px-[80px] mt-[80px] w-full max-w-[400px]">
      <div className="flex flex-col items-center">
        <div className="input-wrapper">
          <label htmlFor="name" className="text-white text-textM">
            Nom
          </label>
          <input
            type="text"
            id="name"
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
        <Bouton children={"Envoyer"} />
      </div>
    </form>
  );
}
