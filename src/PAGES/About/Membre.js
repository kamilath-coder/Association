import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import profil1 from "../../ASSETS/Image/Profil1.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
// import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import{Link} from 'react-router-dom'
import { GoX } from "react-icons/go";
import {fetchMember} from  '../../API/about/About';
import { useTranslation } from 'react-i18next';
import { RiTwitterXLine } from "react-icons/ri";

function Membre() {
  const { id } = useParams();
  const [member,setMember]=useState('');
  const { t} = useTranslation();
  
//   const { i18n } = useTranslation();
//   const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    useEffect(() => {
        const loadMember = async () => {
            if (!id) { // Vérifie si l'ID est valide
                console.error('ID du membre manquant');
                return;
            }
            try {
                const data = await fetchMember(id);
                console.log('data is data ', data);
                setMember(data);
            } catch (error) {
                console.error('Erreur lors de la récupération du membre:', error);
            }
        };
    
        loadMember();
    

    }, [id]);
  return (
    <div className='w-screen sm:h-screen flex justify-center items-center animate-fade animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both'>
        <div className='bg-[#DDF1FF] w-[812px] p-12 flex flex-col sm:flex-row sm:space-x-10 sm:space-y-0 space-y-10 justify-center rounded-md '>
            
            {/* photo du membre */}
            <div className="relative overflow-hidden w-[364px] h-[387px] rounded-md ">
                <img src={member.photo ? `data:image/png;base64,${member.photo}` : profil1} alt="pp1" className='w-full h-full object-cover' />
            </div> 
            <div>
                <p className=' text-lg font-semibold'>{member.name? member.name : 'Kouakou ange christ'}</p>
                <p className='text-[#4E4E4E] font-medium text-sm '>{member.role ? member.role : 'Presidente'}</p>
                <div className='w-[354px] text-[#4E4E4E] leading-loose pt-2'>
                 {member.description ? member.description : 'Presidente'}
                </div>
                {/* information professionelle */}
                <div className='pt-3'>
                    {/* Portable */}
                    <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>{t('Portable')} : </p>
                        <p className='text-[#4E4E4E]'>{member.phone ? member.phone : '+225 05 49 98 76 43'}</p>
                    </div>
                     {/* Email */}
                     <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>{t('Email')} : </p>
                        <p className='text-[#4E4E4E]'>{member.email ? member.email : 'vitoriatoure@gmail.com'}</p>
                    </div>
                    {/* profession */}
                    <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>{t('Profession')} : </p>
                        <p className='text-[#4E4E4E]'>{member.role ? member.role : 'Presidente'}</p>
                    </div>
                    {/* Entreprise */}
                    <div className='w-[354px] bg-[#cfcfcf] h-[1px]'></div>
                    {/* <div className='flex items-center space-x-1 py-3'>
                        <p className=' font-semibold'>Entreprise : </p>
                        <p className='text-[#4E4E4E]'>Mon Bon Séjour</p>
                    </div> */}
                </div>
                {/* reseaux sociaux */}
              <div className="flex flex-row items-center space-x-2 pt-3">
                    {member.facebook_link? <a href={member.facebook_link} target="_blank" rel="noreferrer noopener">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                        </a>:''}
                        {member.linkedin_link ? <a href={member.linkedin_link} target="_blank" rel="noreferrer noopener">
                            <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                        </a> :''}
                        {member.google_link ?<a href={member.google_link} target="_blank" rel="noreferrer noopener">
                            <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                        </a>:''}
                        {member.twitter_link ? <a href={member.twitter_link} target="_blank" rel="noreferrer noopener">
                            <RiTwitterXLine className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                    </a>: '' }
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