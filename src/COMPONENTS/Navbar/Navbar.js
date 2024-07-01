
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import {Adhesion} from '../../PAGES/Formulaire/Adhesion';
import { useTranslation } from 'react-i18next';
import { FaHome, FaInfoCircle,  FaAnchor, FaNewspaper, FaPhone,FaEnvelope, FaWhatsapp  } from 'react-icons/fa';
import React from "react";// Importez les icônes nécessaires
import {
  MobileNav,
  IconButton,
} from "@material-tailwind/react";

export function NavbarDefault(props) {
  console.log(props);
  const [openNav, setOpenNav] = React.useState(false);
  const { t} = useTranslation();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);
 
  const contactIcons = (
    <div className="flex gap-2 lg:hidden"> 
      <a href={`mailto:${props.info.email}`} className="flex items-center hover:text-[#DCA61D]"><FaEnvelope className="mr-2" /> Email</a> 
      <a href={`tel:${props.info.phone}`} className="flex items-center hover:text-[#DCA61D]"><FaPhone className="mr-2" /> Téléphone</a> 
      <a href={`https://wa.me/${props.info.phone}`} className="flex items-center hover:text-[#DCA61D]"><FaWhatsapp className="mr-2" /> WhatsApp</a>
    </div>
  );
  const navList = ( 
    // <ul className="mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 animate-fade-right animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both"> 
    //   <NavLink to="/" activeClassName="text-[#DCA61D]" className="flex items-center hover:text-[#DCA61D]"><FaHome className="mr-2" /> {t('Accueil')}</NavLink> 
    //   <NavLink to="/A-propos" activeClassName="text-[#DCA61D]" className="flex items-center hover:text-[#DCA61D]"><FaInfoCircle className="mr-2" /> {t('A propos')}</NavLink> 
    //   <NavLink to="/Nos-activites" activeClassName="text-[#DCA61D]" className="flex items-center hover:text-[#DCA61D]"><FaAnchor className="mr-2" /> {t('Nos activités')}</NavLink> 
    //   <NavLink to="/Les-nouvelles" activeClassName="text-[#DCA61D]" className="flex items-center hover:text-[#DCA61D]"><FaNewspaper className="mr-2" /> {t('Nouvelles')}</NavLink> 
    //   <NavLink to="/Contact" activeClassName="text-[#DCA61D]" className="flex items-center hover:text-[#DCA61D]"><FaPhone className="mr-2" /> {t('Contact')}</NavLink> 
    // </ul> 
    <ul className="mt-2 mb-4 flex flex-col gap-2 text-lg lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 animate-fade-right animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both"> 
      <NavLink to="/" className={({ isActive }) => isActive ? "text-[#DCA61D] flex items-center hover:text-[#DCA61D]" : "flex items-center hover:text-[#DCA61D]"}><FaHome className="mr-2" /> {t('Accueil')}</NavLink> 
      <NavLink to="/A-propos" className={({ isActive }) => isActive ? "text-[#DCA61D] flex items-center hover:text-[#DCA61D]" : "flex items-center hover:text-[#DCA61D]"}><FaInfoCircle className="mr-2" /> {t('A propos')}</NavLink> 
      <NavLink to="/Nos-activites" className={({ isActive }) => isActive ? "text-[#DCA61D] flex items-center hover:text-[#DCA61D]" : "flex items-center hover:text-[#DCA61D]"}><FaAnchor className="mr-2" /> {t('Nos activités')}</NavLink> 
      <NavLink to="/Les-nouvelles" className={({ isActive }) => isActive ? "text-[#DCA61D] flex items-center hover:text-[#DCA61D]" : "flex items-center hover:text-[#DCA61D]"}><FaNewspaper className="mr-2" /> {t('Nouvelles')}</NavLink> 
      <NavLink to="/Contact" className={({ isActive }) => isActive ? "text-[#DCA61D] flex items-center hover:text-[#DCA61D]" : "flex items-center hover:text-[#DCA61D]"}><FaPhone className="mr-2" /> {t('Contact')}</NavLink> 
    </ul>
  );
  return (
    <div className=" px-4 py-2 lg:px-8 lg:py-4  bg-[#066AB2] rounded-none text-white  ">
      <div className="container flex items-center justify-between">
        <div className="hidden lg:block">{navList}</div>
        <div className="hidden lg:inline-block animate-fade-left animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
          <Adhesion/>
        </div>
        {contactIcons} 
        <IconButton
          variant="text"
          className="ml-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden" style={{ transform: 'translateX(30px)' }}
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
//  className="ml-4 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
