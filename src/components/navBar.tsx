import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import ghIcon from "../images/github-mark.svg";

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
            <AnimatePresence>
                {showMiniMenu && (

                    <motion.div
                        key="mini-nav"
                        initial={{ y: -100 }}
                        animate={{ y: 0 }}
                        exit={{ y: -100 }}
                        transition={{ duration: 0.3 }}
                        className="fixed flex mx-auto justify-between inset-x-0 top-0 lg:top-4 z-0 lg:z-10 w-full lg:w-1/3 bg-white rounded-none lg:rounded-xl shadow">
                        <nav className="w-full grid grid-cols-2 justifzy-items-stretch">
                            {NavLinks.map(link => (
                                <a
                                    key={link.link}
                                    className="text-black text-center px-5 py-3 hover:underline"
                                    href={link.link}>
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </motion.div>

                )}
            </AnimatePresence>
            <div className="flex w-full justify-between bg-white z-20 shadow-sm mb-2">
                <a href="/" className="hidden lg:block text-gray-700 font-bold py-3 pl-5 pr-6 hover:bg-indigo-100 hover:underline">
                    WhatFor
                </a>
                <div className="block lg:hidden">{/* Spacer for mobile */}</div>
                <div className="block lg:hidden"></div>
                <nav className="w-2/3 lg:w-1/3 grid grid-cols-2 justify-items-stretch">
                    {NavLinks.map(link => (
                        <a
                            key={link.link}
                            className="text-black text-center px-5 py-3 hover:underline hover:bg-indigo-100"
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