import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import azicon from "../../ASSETS/Image/AZICON.jpeg";
import aDicon from "../../ASSETS/Image/ad_logo.png";
import { TiSocialLinkedin } from "react-icons/ti";
import { useTranslation } from 'react-i18next';
import { FaHome, FaInfoCircle,  FaAnchor, FaNewspaper, FaPhone } from 'react-icons/fa'
// setAddress(response.data.info.address);
//         setPhone(response.data.info.phone);
//         setEmail(response.data.info.email);
//         setFace(response.data.info.facebook_link);
//         setLink(response.data.info.linkedin_link);
//         setGmail(response.data.info.google_link);
//         setTweet(response.data.info.twitter_link);
//         setInsta(response.data.info.instagram_link);
function Footer(props) {
  //console.log(props.info)
  const { t} = useTranslation();
  return (
    <div className="bg-black flex flex-col space-y-3 items-center pt-10">
      <div className="text-3xl  text-[#DCA61D] font-bold">{props.info.name? props.info.name :'Association'}.</div>
      {/* reseaux sociaux */}
      <div className="flex flex-row items-center space-x-4 pt-3">
        {props.info.facebook_link?<a href={props.info.facebook_link} target="_blank" rel="noreferrer noopener">
          <GrFacebookOption className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </a>:''}
        {props.info.linkedin_link?<a href={props.info.linkedin_link} target="_blank" rel="noreferrer noopener">
          <TiSocialLinkedin className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </a>:''}
        {props.info.google_link?<a href={props.info.google_link} target="_blank" rel="noreferrer noopener">
          <IoIosMail className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </a>:''}
        {props.info.instagram_link?<a href={props.info.instagram_link} target="_blank" rel="noreferrer noopener">
          <FaInstagram className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </a>:''}
        <a href={`https://az-companies.com/fr/${props.info.Customers_Numbers}/public-profile`} target="_blank" rel="noreferrer noopener">
          <img src={azicon} alt="Logo AZ" className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1 w-4 h-4 " />
        </a>
      </div>

      {/* Lien */}
      {/* <div className=" grid sm:grid-cols-4 grid-cols-2  gap-5 font-light text-white py-4">
        <Link to="/" className="flex items-center"><FaHome className="mr-2" /> {t('Accueil')}</Link>
        <Link to="/A-propos" className="flex items-center"><FaInfoCircle className="mr-2" /> {t('A propos')}</Link>
        <Link to="/Nos-activites" className="flex items-center"><FaAnchor className="mr-2" /> {t('Nos activités')}</Link>
        <Link to="/Les-nouvelles" className="flex items-center"><FaNewspaper className="mr-2" /> {t('Nouvelles')}</Link>
        <Link to="/Contact" className="flex items-center"><FaPhone className="mr-2" /> {t('Contact')}</Link>
      </div> */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 font-light text-white py-4">
        <Link to="/" className="flex items-center mb-2 sm:mb-0"><FaHome className="mr-2" /> {t('Accueil')}</Link>
        <Link to="/A-propos" className="flex items-center mb-2 sm:mb-0"><FaInfoCircle className="mr-2" /> {t('A propos')}</Link>
        <Link to="/Nos-activites" className="flex items-center mb-2 sm:mb-0"><FaAnchor className="mr-2" /> {t('Nos activités')}</Link>
        <Link to="/Les-nouvelles" className="flex items-center mb-2 sm:mb-0"><FaNewspaper className="mr-2" /> {t('Nouvelles')}</Link>
        <Link to="/Contact" className="flex items-center mb-2 sm:mb-0"><FaPhone className="mr-2" /> {t('Contact')}</Link>
      </div>
      {/* <div className=" text-xs font-thin bg-[#066AB2] text-white w-full py-2 text-center">Design by @Africa Digitalizer <img src={aDicon} alt="Logo AZ" className="text-xl text-[#000000] rounded-full w-6 h-6 " /> 2024</div> */}
      <div className="flex justify-center items-center space-x-2 text-xs font-thin bg-[#066AB2] text-white w-full py-2">
        Design by @Africa Digitalizer <img src={aDicon} alt="Logo AZ" className="rounded-full w-9 h-9" /> 2024
      </div>
    </div>
  );
}

export default Footer;
