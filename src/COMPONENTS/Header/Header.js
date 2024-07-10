import React from "react";
import { Langage } from "../Langage/Langage";

import { Link } from "react-router-dom";
function Header(props) {
  return (
    <div>
      <div className="w-screen bg-[#000000] h-1"></div>
      {/* <div className="bg-white space-y-4 sm:space-y-0 py-3 flex sm:flex-row flex-col sm:justify-between md:px-10 px-3 animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
        <div className="text-3xl text-[#DCA61D] font-bold">{props.info.name ? props.info.name : 'Association'}.</div>

        <Langage />
      </div> */}
      <div className="bg-white py-3 px-3 md:px-10 flex justify-between items-center animate-fade animate-once animate-duration-[2000ms] animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
        <Link to="/" className="text-3xl text-[#000000] font-bold">
          {props.info.name ? props.info.name : 'Association'}.
        </Link>
        {/* <div className="flex items-center">
          <Langage />
          <a href="#" target="_blank" className="ml-4 bg-[#000000] text-white py-2 px-4 rounded">Connexion</a>
        </div> */}
        <div className="flex items-center">
          <Langage />
          {/* <a href="https://az-companies.com/fr/login" target="_blank" rel="noreferrer" className="ml-4 bg-[#000000] text-white py-2 px-4 rounded flex items-center">
           
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"></circle>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12l-4-4m0 0l0 8m0-4l-4 0"></path>
            </svg>
            
            <span className="hidden sm:inline">Connexion</span>
          </a> */}
          <a href="https://az-companies.com/fr/login" target="_blank" rel="noreferrer" className="float-left bg-[#000000] text-white py-2 px-4 rounded flex items-center">
            {/* Icône de connexion - Assurez-vous d'avoir une icône appropriée */}
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 8V7a5 5 0 0 1 10 0v1h.5a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h.5zm1 0h9V7a4 4 0 0 0-9 0v1z"/>
            </svg>
            {/* Texte du bouton - Masqué sur les petits écrans */}
            <span className="hidden sm:inline">Connexion</span>
          </a>
        </div>
        {/* <Langage /> */}
      </div>
    </div>
  );
}

export default Header;
 