import { useState } from "react";


const Header = () => {
  
    return (
      <div className="bg-gradient-to-r from-cyan-800/60 to-purple-800/60   font-quicksand  font-medium text-black">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
          <div className="relative flex items-center justify-between">
            <a
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-teal-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="black"
                fill="black"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>
              <span className="ml-2 text-xl font-bold tracking-wide text-black uppercase">
                Router
              </span>
            </a>
            <ul className="flex items-center space-x-8 lg:flex">
              <li>
                <a
                  href="/"
                  aria-label="Home"
                  title="Homepage"
                  className="font-semibold  tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  aria-label="Github"
                  title="Github"
                  className="font-semibold  tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                >
                  Github
                </a>
              </li>
              
              <li>
                <a
                  href="/"
                  aria-label="About us"
                  title="About us"
                  className="font-semibold tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400"
                >
                  About us
                </a>
              </li>
            </ul>
            
            
          </div>
        </div>
      </div>
    );
  };

  export default Header;