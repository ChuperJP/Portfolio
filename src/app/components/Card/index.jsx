"use client";
import React from "react";
import Image from "next/image";
import projets_data from "../../data.json/projets_data.json";
import Badges from "../Badges";

export default function Card({ title, description, image, languages }) {
  const language = { languages };
  return (
    <div className="relative flex w-full max-w-[550px]  h-[280px] text-white rounded-[20px] bg-white  tablet:h-[400px]">
      <Image
        className="rounded-[20px]"
        src={image}
        alt={`${title} image`}
        width={550}
        height={400}
      />
      <div className="absolute bottom-0 flex flex-col items-start  justify-center w-full  bg-black/60 h-1/3 px-[30px] py-[20px] rounded-b-[20px] ">
        <div className="flex flex-row justify-end w-full">
          {languages.map((language) => {
            return (
              <Badges
                key={language.type}
                text={language.type}
                style={language.color}
              />
            );
          })}
        </div>
        <h3 className="font-montserrat font-semibold text-textM tablet:text-textL">
          {title}
        </h3>
        <p className="font-mulish font-medium  overflow-hiddentext-ellipsis text-textS tablet:text-textM">
          {description}
        </p>
      </div>
    </div>
  );
}
