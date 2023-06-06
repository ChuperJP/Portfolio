"use client";
import React from "react";

export default function Badges({ text, classname }) {
  return (
    <div
      className={`${classname} font-montserrat text-textXS font-semibold text-white px-[8px] py-[2px] rounded-[10px]`}
    >
      {text}
    </div>
  );
}
