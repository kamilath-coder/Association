
import { Link } from "react-router-dom";
import {Adhesion} from '../../PAGES/Formulaire/Adhesion'


import React from "react";
import {
  MobileNav,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 animate-fade-right animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
      <Link to="/">Accueil</Link>
      <Link to="/A-propos">A propos</Link>
      <Link to="/Nos-activites">Nos activités</Link>
      <Link to="/Les-nouvelles">Nouvelles</Link>
      <Link to="/Contact">Contact</Link>
    </ul>
  );

  return (
    <div className=" px-4 py-2 lg:px-8 lg:py-4  bg-[#066AB2] rounded-none text-white  ">
      <div className="container flex items-center justify-between">
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:inline-block animate-fade-left animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
          <Adhesion/>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center gap-x-1">
          <Adhesion/>
          </div>
        </div>
      </MobileNav>
    </div>
  );
}
