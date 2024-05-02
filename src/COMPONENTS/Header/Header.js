import React from "react";
import { Langage } from "../Langage/Langage";

function Header() {
  return (
    <div>
      <div className="w-screen bg-[rgb(220,166,29)] h-1"></div>
      <div className="bg-white space-y-4 sm:space-y-0 py-3 flex sm:flex-row flex-col sm:justify-between md:px-10 px-5 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
        <div className="text-3xl  text-[#DCA61D] font-bold">Association.</div>
        <div className=" flex items-center space-x-3">
          <div className="bg-[#e0dfdf] w-[300px] sm:w-[400px] flex flex-row items-center space-x-4 py-2 px-4 rounded-full">
            <input
              type="search"
              placeholder="un mot clé"
              className=" bg-transparent outline-none px-3 w-[280px] sm:w-[380px]"
            />
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_52_430)">
                <path
                  d="M24.6582 21.6162L19.79 16.748C19.5703 16.5283 19.2725 16.4062 18.96 16.4062H18.1641C19.5117 14.6826 20.3125 12.5146 20.3125 10.1562C20.3125 4.5459 15.7666 0 10.1562 0C4.5459 0 0 4.5459 0 10.1562C0 15.7666 4.5459 20.3125 10.1562 20.3125C12.5146 20.3125 14.6826 19.5117 16.4062 18.1641V18.96C16.4062 19.2725 16.5283 19.5703 16.748 19.79L21.6162 24.6582C22.0752 25.1172 22.8174 25.1172 23.2715 24.6582L24.6533 23.2764C25.1123 22.8174 25.1123 22.0752 24.6582 21.6162ZM10.1562 16.4062C6.7041 16.4062 3.90625 13.6133 3.90625 10.1562C3.90625 6.7041 6.69922 3.90625 10.1562 3.90625C13.6084 3.90625 16.4062 6.69922 16.4062 10.1562C16.4062 13.6084 13.6133 16.4062 10.1562 16.4062Z"
                  fill="#B2B2B2"
                />
              </g>
              <defs>
                <clipPath id="clip0_52_430">
                  <rect width="25" height="25" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <Langage />
        </div>
      </div>
    </div>
  );
}

export default Header;
