"use client";
import React from "react";
import LinkContact from "../LinkContact";

export default function Header() {
  const infos = [
    { id: "1", type: "Nom", text: "Jean-Patrick Collet" },
    { id: "2", type: "Localisation", text: "Île-de-France, France" },
    { id: "3", type: "E-mail", text: "chuper.dev@gmail.com" },
  ];

  return (
    <section
      className="flex text-white  bg-cover bg-center"
      style={{
        background: `linear-gradient(0deg, #08257070, #08257070), url('Images/bgHeader3.webp')`,
      }}
    >
      <div className="w-full pb-[30px] ">
        <div className="flex flex-col mx-[10%] mt-[80px]">
          <div className="flex justify-center w-full laptop:justify-start">
            <h1 className="font-montserrat font-semibold text-titleS max-w-[450px] w-full laptop:text-H1 tablet:text-title">
              Developpeur web Front End
            </h1>
          </div>
          <div className="flex justify-center mt-[20px] w-full laptop:justify-end ">
            <div className="flex flex-col items-center w-full max-w-[600px]">
              <div className="box-border px-[20px] py-[30px] mb-[30px] border-2 border-fourth-color w-full ">
                <ul>
                  {infos.map((info) => {
                    return (
                      <li
                        key={info.id}
                        className="font-montserrat font-semibold text-textM"
                      >
                        {info.type}:
                        <span className="font-mulish font-medium text-textM pl-[10px]">
                          {info.text}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <LinkContact />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
