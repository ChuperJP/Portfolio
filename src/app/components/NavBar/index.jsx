// Link sert à la navigation
// useRouter,  pour faire une bouton qui permet de changer de page
// ces deux fonctions ne sont pas utilisés car ce type de routing bug sur GH pages
// les hrefs sont sous ce format "/portfolio/#about" et non juste "/#about" pour fonctionner avec GH pages, ils ne fonctionnent pas en "run dev"

"use client";
import React from "react";
import { useState } from "react";
// import Link from "next/Link";
import Image from "next/image";
// import { useRouter } from "next/navigation";
// import Bouton from "../Bouton";
import LinkContact from "../LinkContact";
import burger_menu_icon from "../../assets/burger-menu-white.png";
import close_icon from "../../assets/close-icon-white.png";

export default function NavBar() {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const handleClickButton = () => {
  //   router.push("/portfolio/#contact");
  //   toggleMenu();
  // };

  const menuIsOpen = () => {
    if (isOpen)
      return (
        <nav className="flex flex-col justify-around items-center pb-[20px] w-full h-[200px] laptop:hidden">
          <a
            href="/portfolio/#about"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2"
          >
            A propos
          </a>
          <a
            href="/portfolio/#competences"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2"
          >
            Compétences
          </a>
          <a
            href="/portfolio/#projets"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2"
          >
            Projets
          </a>
          <LinkContact onClick={toggleMenu} />
          {/* <Bouton children={"Contact"} onClick={handleClickButton} /> */}
        </nav>
      );
  };

  return (
    <div className="fixed z-10 w-full bg-first-color text-white font-montserrat font-semibold">
      <nav className="relative flex  justify-center items-center py-[30px] w-full laptop:py-[20px]">
        <div className="hidden flex-row justify-around items-center w-1/2 laptop:flex">
          <a
            href="/portfolio/#about"
            className="cursor-pointer text-textM hover:border-b-2"
          >
            A propos
          </a>
          <a
            href="/portfolio/#competences"
            className="cursor-pointer text-textM hover:border-b-2"
          >
            Compétences
          </a>
          <a
            href="/portfolio/#projets"
            className="cursor-pointer text-textM hover:border-b-2"
          >
            Projets
          </a>
          <LinkContact onClick={toggleMenu} />
          {/* <Bouton
            children={"Contact"}
            onClick={() => router.push("/portfolio/#contact")}
          /> */}
        </div>
        <div className="absolute right-10 laptop:hidden">
          <Image
            style={{ display: !isOpen ? "block" : "none" }}
            className="cursor-pointer"
            src={burger_menu_icon}
            alt={`menu icon`}
            width={40}
            height={30}
            onClick={toggleMenu}
          />
          <Image
            style={{ display: isOpen ? "block" : "none" }}
            className="cursor-pointer"
            src={close_icon}
            alt={`close icon`}
            width={30}
            height={30}
            onClick={toggleMenu}
          />
        </div>
      </nav>
      {menuIsOpen()}
    </div>
  );
}
