import ghIcon from "../images/github-mark-white.svg";
import pp from "../images/pp.jpg";

const About = () => {
    return (
        <div className="px-6 py-5 space-y-4">
            <div className="flex justify-between">
                <img
                    className="rounded-full w-16 h-16 shadow-md border border-violet-600"
                    src={pp.src}
                    alt="A Photo of Chris Walker." />
                <div className="w-full mt-2">
                    <h1 className="text-gray-600 text-lg mx-4 border-b border-gray-300 mb-1.5">
                        Chris Walker
                    </h1>
                </div>
                
            </div>
            <div className="space-y-2.5 text-sm text-gray-600">
                <p>Chris Walker is a senior full-stack developer who loves to dive into the latest web technologies.</p>
                <p>Having worked with .NET Core through the entire life of the framework, he has gained a wealth of experience in B2B applications and APIs.</p>
                <p>Combined with his ever-growing knowledge of front-end frameworks, Chris continues to look for ways to provide top-tier experiences from top to bottom of the development stack.</p>
            </div>
            <a href="https://github.com/WhatFor" className="group flex shadow items-center rounded px-2 py-3 bg-violet-600 hover:bg-violet-700">
                <img alt="GitHub Logo" src={ghIcon.src} className="inline-flex w-6 h-6 mr-2" />
                <span className="text-white group-hover:text-violet-100">
                    GitHub
                </span>
            </a>
        </div>
    )
};

export default About;