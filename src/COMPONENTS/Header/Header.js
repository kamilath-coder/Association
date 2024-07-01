import React from "react";
import { Langage } from "../Langage/Langage";

function Header(props) {
  return (
    <div>
      <div className="w-screen bg-[rgb(220,166,29)] h-1"></div>
      {/* <div className="bg-white space-y-4 sm:space-y-0 py-3 flex sm:flex-row flex-col sm:justify-between md:px-10 px-3 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
        <div className="text-3xl text-[#DCA61D] font-bold">{props.info.name ? props.info.name : 'Association'}.</div>

        <Langage />
      </div> */}
      <div className="bg-white py-3 px-3 md:px-10 flex justify-between items-center animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
        <div className="text-3xl text-[#DCA61D] font-bold">
          {props.info.name ? props.info.name : 'Association'}.
        </div>

        <Langage />
      </div>
    </div>
  );
}

export default Header;
 