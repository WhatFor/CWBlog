import ghIcon from "../images/github-mark-white.svg";
import pp from "../images/pp.jpg";

const About = () => {
  return (
    <div className="space-y-4 px-6 py-5">
      <div className="flex justify-between">
        <img
          className="h-16 w-16 rounded-full border border-violet-500 shadow-md"
          src={pp.src}
          alt="A Photo of Chris Walker."
        />
        <div className="mt-2 w-full">
          <h1 className="mx-4 mb-1.5 border-b border-gray-500 text-lg text-gray-200">
            Chris Walker
          </h1>
        </div>
      </div>
      <div className="space-y-2.5 text-sm text-gray-200">
        <p>
          Chris Walker is a senior full-stack developer who loves to dive into
          the latest web technologies.
        </p>
        <p>
          Having worked with .NET Core through the entire life of the framework,
          he has gained a wealth of experience in B2B applications and APIs.
        </p>
        <p>
          Combined with his ever-growing knowledge of front-end frameworks,
          Chris continues to look for ways to provide top-tier experiences from
          top to bottom of the development stack.
        </p>
      </div>
      <a
        href="https://github.com/WhatFor"
        className="
          group flex items-center rounded bg-indigo-600 px-2 py-3
          shadow hover:bg-indigo-700"
      >
        <img
          alt="GitHub Logo"
          src={ghIcon.src}
          className="mr-2 inline-flex h-6 w-6"
        />
        <span className="text-white group-hover:text-gray-100">GitHub</span>
      </a>
    </div>
  );
};

export default About;
