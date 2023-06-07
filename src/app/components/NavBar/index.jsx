"use client";
import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Bouton from "../Bouton";
import burger_menu_icon from "../../assets/burger-menu-white.png";
import close_icon from "../../assets/close-icon-white.png";

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickButton = () => {
    router.push("/#contact");
    toggleMenu();
  };

  const menuIsOpen = () => {
    if (isOpen)
      return (
        <nav className=" flex flex-col justify-around items-center pb-[20px] w-full h-[200px] laptop:hidden">
          <Link
            href="/#about"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2 "
          >
            A propos
          </Link>
          <Link
            href="/#competences"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2 "
          >
            Compétences
          </Link>
          <Link
            href="/#projets"
            onClick={toggleMenu}
            className="cursor-pointer text-textM hover:border-b-2 "
          >
            Projets
          </Link>
          <Bouton children={"Contact"} onClick={handleClickButton} />
        </nav>
      );
  };

  return (
    <div className="fixed z-10 w-full  bg-first-color text-white">
      <nav className="relative flex  justify-center items-center py-[30px] w-full laptop:py-[20px]">
        <div className=" hidden flex-row justify-around items-center w-1/2  laptop:flex">
          <Link
            href="#about"
            className="cursor-pointer text-textM hover:border-b-2 "
          >
            A propos
          </Link>
          <Link
            href="#competences"
            className="cursor-pointer text-textM hover:border-b-2"
          >
            Compétences
          </Link>
          <Link
            href="#projets"
            className="cursor-pointer text-textM hover:border-b-2 "
          >
            Projets
          </Link>
          <Bouton
            children={"Contact"}
            onClick={() => router.push("/#contact")}
          />
        </div>
        <div className="absolute right-10  laptop:hidden">
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
