"use client";
import React from "react";

export default function Badges({ text, style }) {
  return (
    <div
      className={
        "font-montserrat text-textXS font-semibold text-white text-center px-[8px] py-[2px] mr-[10px] rounded-[10px]"
      }
      style={{ backgroundColor: style }}
    >
      {text}
    </div>
  );
}
