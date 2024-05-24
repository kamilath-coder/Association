import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
// setAddress(response.data.info.address);
//         setPhone(response.data.info.phone);
//         setEmail(response.data.info.email);
//         setFace(response.data.info.facebook_link);
//         setLink(response.data.info.linkedin_link);
//         setGmail(response.data.info.google_link);
//         setTweet(response.data.info.twitter_link);
//         setInsta(response.data.info.instagram_link);
function Footer(props) {
  console.log(props.info)
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
      </div>

      {/* Lien */}
      <div className=" grid sm:grid-cols-4 grid-cols-2  gap-5 font-light text-white py-4">
        <Link to="">A propos</Link>
        <Link to="">Nos activités</Link>
        <Link to="">Nouvelle</Link>
        <Link to="">Contact</Link>
      </div>
      <div className=" text-xs font-thin bg-[#066AB2] text-white w-full py-2 text-center">Design by @Africa Digitalizer 2024</div>
    </div>
  );
}

export default Footer;
