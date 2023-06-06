"use client";
import React from "react";
import Card from "../Card";
import projets_data from "../../data.json/projets_data.json";

export default function Projets() {
  return (
    <section
      id="projets"
      className="flex flex-col items-center bg-second-color pt-[70px] pb-[100px]"
    >
      <h2 className="font-montserrat font-semibold text-titleS text-white mb-[40px] laptop:text-title">
        Projets
      </h2>
      <div className="flex flex-wrap justify-center gap-[5%] items-center w-full px-[10%]">
        {projets_data.map((projet) => {
          return (
            <a
              key={projet.id}
              href={projet.github_pages}
              className="cursor-pointer mt-[40px] hover:shadow-xl hover:shadow-first-color rounded-[20px]"
            >
              <article>
                <Card
                  image={projet.image}
                  title={projet.title}
                  description={projet.description}
                  languages={projet.languages}
                />
              </article>
            </a>
          );
        })}
      </div>
    </section>
  );
}
