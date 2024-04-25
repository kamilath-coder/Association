import React from 'react'
import profil1 from "../../ASSETS/Image/Profil1.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import{Link} from 'react-router-dom'
import { GoX } from "react-icons/go";

function Membre() {
  return (
    <div className='w-screen sm:h-screen flex justify-center items-center '>
        <div className='bg-[#DDF1FF] w-[812px] p-12 flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 space-y-10 justify-center rounded-md '>
            
            {/* photo du membre */}
            <div className="relative overflow-hidden w-[304px] h-[367px] rounded-md ">
                <img src={profil1} alt="pp1" className='w-full h-full object-cover' />
            </div> 
            <div>
                
                <p className='text-[#4E4E4E] pt-2 font-medium text-sm '>Assistante maketing</p>
                <div className='w-[354px] text-[#4E4E4E] leading-loose pt-4'>
                    I am adept at leading cross-functional teams and managing budgets 
                    effectively. I am a creative problem solver, always seeking innovative 
                    solutions to marketing challenges...
                </div>
                {/* information professionelle */}
                <div className='pt-4'>
                    {/* Portable */}
                    <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>Portable : </p>
                        <p className='text-[#4E4E4E]'>+225 05 49 98 76 43</p>
                    </div>
                     {/* Email */}
                     <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>Email : </p>
                        <p className='text-[#4E4E4E]'>vitoriatoure@gmail.com</p>
                    </div>
                    {/* profession */}
                    <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>Profession : </p>
                        <p className='text-[#4E4E4E]'>Comunity manager</p>
                    </div>
                </div>
                {/* reseaux sociaux */}
              <div className="flex flex-row items-center space-x-2 pt-3">
                <Link to="">
                  <GrFacebookOption className="text-xl text-[#4e4e4e] bg-white hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                </Link>
                <Link to="">
                  <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-white hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                </Link>
                <Link to="">
                  <IoIosMail className="text-xl text-[#4e4e4e] bg-white hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                </Link>
                <Link to="">
                  <FaInstagram className="text-xl text-[#4e4e4e] bg-white hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                </Link>
              </div>
            </div>
            <Link to='/A-propos'  className='  text-xl bg-white w-10 h-8 flex justify-center items-center rounded-full'>
                <GoX />
            </Link>
        </div>
    </div>
  )
}

export default Membre