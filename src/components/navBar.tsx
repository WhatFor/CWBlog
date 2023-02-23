import { useEffect, useState } from "react";
import ghIcon from "../images/github-mark-white.svg";

const NavLinks = [
    { name: "Home", link: "/" },
    { name: "Tags", link: "/tags" },
    //{ name: "About", link: "/about" },
]

const NavBar = () => {

    const [showMiniMenu, setShowMiniMenu] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () =>
            setShowMiniMenu(window.pageYOffset > 100));
    }, []);

    return (
        <>
            <div className="flex w-full justify-between bg-gray-800 border-b border-gray-700 z-20 mb-2">
                <a href="/" className="hidden lg:block text-gray-200 py-3 pl-5 pr-6 hover:underline">
                    WhatFor
                </a>
                <div className="block lg:hidden">{/* Spacer for mobile */}</div>
                <div className="block lg:hidden"></div>
                <nav className="w-2/3 lg:w-1/3 grid grid-cols-2 justify-items-stretch">
                    {NavLinks.map(link => (
                        <a
                            key={link.link}
                            className="text-gray-200 text-center px-5 py-3 hover:underline"
                            href={link.link}>
                            {link.name}
                        </a>
                    ))}
                </nav>
                <div className="pl-8 pr-3 py-3">
                    <a href="https://github.com/WhatFor">
                        <img alt="GitHub Logo" src={ghIcon.src} className="inline-flex w-6 h-6 mr-1 mb-0.5" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default NavBar;