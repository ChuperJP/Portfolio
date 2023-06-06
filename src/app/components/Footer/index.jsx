import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center h-[150px] bg-first-color text-white">
      <a
        href="mailto:chuper.dev@gmx.fr"
        className="mb-[20px] font-montserrat font-medium text-textM tablet:text-textL"
      >
        chuper.dev@gmx.fr
      </a>
      <p className="font-mulish font-medium text-textS tablet:text-textM">
        Ce site a été réalisé avec Next.js et Tailwind.
      </p>
    </footer>
  );
}
