import { useEffect, useRef, useState } from "react";
import ghIcon from "../images/github-mark-white.svg";

const NavLinks = [
  { name: "Home", link: "/" },
  { name: "Tags", link: "/tags" },
  //{ name: "About", link: "/about" },
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
        { duration: 3000, fill: "forwards" }
      );
    };
  }, []);

  return (
    <>
      <div id="navbar-wrapper" className="mb-2">
        <div ref={navbarMouseTrailer} id="navbar-mouse-trailer"></div>
        <div id="navbar-horiz-bars">
          <div id="navbar-verti-bars">
            <div id="navbar" className="flex w-full border-b border-gray-600">
              <div className="flex w-full justify-between">
                <div className="flex lg:space-x-12">
                  <a
                    href="/"
                    className="text-fill-transparent bg-size-150 bg-pos-anim
            bg-gradient-to-r from-blue-600 to-fuchsia-400 py-8 pl-6 text-center
            font-bold uppercase transition-all duration-500"
                  >
                    WhatFor
                  </a>
                  <nav className="flex space-x-3">
                    {NavLinks.map((link) => (
                      <a
                        key={link.link}
                        className="text-fill-transparent bg-size-150 bg-pos-anim
                  bg-gradient-to-r from-blue-400 to-green-400 px-5 py-8 text-center
                  font-bold uppercase transition-all duration-500"
                        href={link.link}
                      >
                        {link.name}
                      </a>
                    ))}
                  </nav>
                </div>
                <div className="py-8 pl-8 pr-6">
                  <a href="https://github.com/WhatFor">
                    <img
                      alt="GitHub Logo"
                      src={ghIcon.src}
                      className="mr-1 mb-0.5 inline-flex h-6 w-6"
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
