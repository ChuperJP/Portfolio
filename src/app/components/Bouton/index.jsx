"use client";
import React from "react";

export default function Bouton({ children, onClick, type }) {
  return (
    <button
      onClick={onClick}
      type={type}
      className="bg-fourth-color font-montserrat text-textM font-semibold text-white px-[24px] py-[8px] rounded-[20px] cursor-pointer hover:scale-110"
    >
      {children}
    </button>
  );
}
