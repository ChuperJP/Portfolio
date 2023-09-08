"use client";
import ReCAPTCHA from "react-google-recaptcha";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Bouton from "../Bouton";

export default function ContactForm() {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const successMessage = () => {
    if (success) {
      return (
        <p className="font-montserrat text-textM text-teal-400 text-center">
          Votre message a bien été envoyé !
        </p>
      );
    }
  };
  const echecMessage = () => {
    if (error) {
      return (
        <p className="font-montserrat text-textM text-red-600">
          Une erreur s'est produite lors de l'envoie de votre message
        </p>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    emailjs
      .sendForm(
        process.env.EMAIL_JS_SERVICE,
        process.env.EMAIL_JS_TEMPLATE,
        form.current,
        process.env.EMAIL_JS_USER
      )
      .then(
        (result) => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="relative bg-first-color rounded-[20px] pt-[30px] pb-[40px] px-[50px] mt-[80px] w-full max-w-[400px] font-montserrat font-semibold"
    >
      <div className="flex flex-col items-center w-full max-w-[300px]">
        <div className="input-wrapper">
          <label htmlFor="name" className="text-white text-textM">
            Nom
          </label>
          <input
            type="text"
            id="name"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="rounded-[10px] text-first-color"
          />
        </div>
        <div className="input-wrapper mb-[40px] w-full">
          <label htmlFor="message" className="text-white text-textM">
            Message
          </label>
          {successMessage()}
          {echecMessage()}
          <textarea
            name="message"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="7"
            required
            className="rounded-[10px] text-first-color w-full"
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey={process.env.RECAPTCHA_SITE_KEY}
          theme="dark"
          className="mb-[30px]"
        />
        <Bouton children={"Envoyer"} type={"submit"} />
      </div>
    </form>
  );
}
