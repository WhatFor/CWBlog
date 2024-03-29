import { useEffect, useRef, useState } from "react";
import ghIcon from "../images/github-mark-white.svg";
import NavLink from "./navLink";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Tags", link: "/tags" },
  { name: "About", link: "/about" },
];

const NavBar = () => {
  const [showMiniMenu, setShowMiniMenu] = useState(false);
  const navbarMouseTrailer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("scroll", () =>
      setShowMiniMenu(window.pageYOffset > 100)
    );
  }, []);

  useEffect(() => {
    if (navbarMouseTrailer.current === null) return;

    document.body.onpointermove = (e) => {
      navbarMouseTrailer.current!.animate(
        {
          left: e.clientX + "px",
          top: e.clientY + "px",
        },
        { duration: 4000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <>
      <div id="navbar-wrapper" className="lg:mb-2">
        <div ref={navbarMouseTrailer} id="navbar-mouse-trailer"></div>
        <div id="navbar-horiz-bars">
          <div id="navbar-verti-bars">
            <div id="navbar" className="flex w-full lg:px-6">
              <div className="flex w-full justify-between">
                <div className="flex w-full items-center space-x-0 lg:space-x-12">
                  <NavLink
                    className="bg-gradient-to-r from-blue-600 to-fuchsia-400 text-lg uppercase"
                    text="WhatFor"
                    href="/"
                  />
                  <nav className="flex w-full items-center space-x-0 lg:space-x-4">
                    {NavLinks.map((link) => (
                      <NavLink
                        className="upp bg-gradient-to-r from-blue-400 to-green-400"
                        classNameWrapper="lg:border lg:rounded-full border-gray-700 hover:border-gray-600"
                        key={link.link}
                        text={link.name}
                        href={link.link}
                      />
                    ))}
                  </nav>
                </div>
                <div className="hidden items-center lg:flex lg:pl-8">
                  <a
                    className="flex items-center justify-center rounded-full border border-gray-700
                     bg-off-black p-2.5 transition duration-500 hover:border-gray-600"
                    href="https://github.com/WhatFor"
                  >
                    <img
                      alt="GitHub Logo"
                      src={ghIcon.src}
                      className="inline-flex h-6 w-6"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
