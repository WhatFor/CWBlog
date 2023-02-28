import { useEffect, useState } from "react";
import ghIcon from "../images/github-mark-white.svg";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Tags", link: "/tags" },
  //{ name: "About", link: "/about" },
];

const NavBar = () => {
  const [showMiniMenu, setShowMiniMenu] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShowMiniMenu(window.pageYOffset > 100)
    );
  }, []);

  return (
    <>
      <div className="z-20 mb-2 flex w-full justify-between border-b border-gray-700 bg-gray-800">
        <a
          href="/"
          className="hidden py-3 pl-5 pr-6 text-gray-200 hover:underline lg:block"
        >
          WhatFor
        </a>
        <div className="block lg:hidden">{/* Spacer for mobile */}</div>
        <div className="block lg:hidden"></div>
        <nav className="grid w-2/3 grid-cols-2 justify-items-stretch lg:w-1/3">
          {NavLinks.map((link) => (
            <a
              key={link.link}
              className="px-5 py-3 text-center text-gray-200 hover:underline"
              href={link.link}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="py-3 pl-8 pr-3">
          <a href="https://github.com/WhatFor">
            <img
              alt="GitHub Logo"
              src={ghIcon.src}
              className="mr-1 mb-0.5 inline-flex h-6 w-6"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
