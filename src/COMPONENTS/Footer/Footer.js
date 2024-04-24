import React from "react";
import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";

function Footer() {
  return (
    <div className="bg-black flex flex-col space-y-3 items-center pt-10">
      <div className="text-3xl  text-[#DCA61D] font-bold">Association.</div>
      {/* reseaux sociaux */}
      <div className="flex flex-row items-center space-x-4 pt-3">
        <Link to="">
          <GrFacebookOption className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </Link>
        <Link to="">
          <TiSocialLinkedin className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </Link>
        <Link to="">
          <IoIosMail className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </Link>
        <Link to="">
          <FaInstagram className="text-xl text-[#000000] bg-[#DCA61D] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
        </Link>
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
