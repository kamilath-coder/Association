import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import { Adhesion } from '../../PAGES/Formulaire/Adhesion';
import Footer from "../../COMPONENTS/Footer/Footer";
import Loader from "../../COMPONENTS/Loader/Loading";
import { fetchAboutInfo, fetchAboutBanner, fetchMembers } from '../../API/about/About';
import { removeTags } from '../../UTILS/Util';
import backAbout from "../../ASSETS/Image/backAbout.png";
import img_rejoindre from "../../ASSETS/Image/Activity1.png";
import backimagemenbre from "../../ASSETS/Image/backimgmenbre.png";
import profil1 from "../../ASSETS/Image/Profil1.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";

function About() {
  const [loading, setLoading] = useState(true);
  const [NameSite, setNameSite] = useState('');
  const [PresentationTitle, setPresentationTitle] = useState('');
  const [PresentationPhoto, setPresentationPhoto] = useState('');
  const [Presentation, setPresentation] = useState('');
  const [Banner, setBanner] = useState('');
  const [BannerPicture, setBannerPicture] = useState('');
  const [Members, setMembers] = useState([]);
  const [info, setInfo] = useState({});
  
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = savedLanguage || navigator.language || navigator.userLanguage;
    const lang = browserLang.substr(0, 2);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);

    i18n.on('languageChanged', lng => {
      setCurrentLanguage(lng);
    });

    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);

  useEffect(() => {
    fetchAboutInfo()
      .then(response => {
        setNameSite(response.data.info.name);
        setPresentation(response.data.info);
        setPresentationTitle(response.data.info);
        setPresentationPhoto(response.data.info.presentation_photo);
        setInfo(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      
    fetchAboutBanner()
      .then(response => {
        setBanner(response.data.info.banner);
        setBannerPicture(response.data.info.banner.picture);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      
    fetchMembers()
      .then(response => {
        setMembers(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header info={info} />
          <NavbarDefault info={info} />

          {/* en tete */}
          <div
            className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal"
            style={{ backgroundImage: `url(data:image/png;base64,${BannerPicture ? BannerPicture : backAbout})` }}
          >
            <div className="bg-[#066AB225] flex justify-center items-center h-[400px]">
              <div className="sm:text-4xl md:px-10 px-4 text-2xl font-bold text-white uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
                {currentLanguage === "fr" ? (Banner.fr_text1 ? Banner.fr_text1 : 'À propos de nous') : (Banner.text1 ? Banner.text1 : 'À propos de nous')}
              </div>
            </div>
          </div>

          {/* Qui somme nous ? */}
          <div className="mt-20 flex flex-col md:flex-row md:space-x-28 md:space-y-0 space-y-12 justify-center px-4 md:px-0">
            <div className="flex flex-col space-y-3">
              <div className="text-white text-sm bg-[#DCA61D] w-36 text-center py-1 rounded-full">
                {t('Qui sommes-nous')}
              </div>
              <p className="text-3xl font-semibold text-[#066AB2]">
                {NameSite ? NameSite : 'Nom de l’association'}
              </p>
              <div className="sm:w-[500px] leading-loose">
                {currentLanguage === "fr" ? (Presentation.fr_presentation_text ? removeTags(Presentation.fr_presentation_text) : '') : (Presentation.presentation_text ? removeTags(Presentation.presentation_text) : '')}
              </div>
            </div>
            <div className="sm:w-[500px]">
              <Mission info={info} />
            </div>
          </div>

          {/* Nous rejoindre */}
          <div className="mt-20 bg-[#FEF8E7] p-10 flex flex-col md:flex-row justify-center md:space-x-20 space-y-14">
            <div className="relative overflow-hidden sm:w-[451px] sm:h-[435px]">
              <img
                src={PresentationPhoto ? `data:image/png;base64,${PresentationPhoto}` : img_rejoindre}
                className="w-full h-full object-cover rounded-lg"
                alt="rejoindre"
              />
            </div>

            <div>
              <p className="text-3xl font-semibold text-[#066AB2] uppercase">
                {currentLanguage === "fr" ? (PresentationTitle.fr_presentation_title ? removeTags(PresentationTitle.fr_presentation_title) : 'Pourquoi nous rejoindre') : (PresentationTitle.presentation_title ? removeTags(PresentationTitle.presentation_title) : 'Pourquoi nous rejoindre')}?
              </p>
              <div className="h-1 w-20 bg-[#DCA61D] mt-4"></div>
              <div className="sm:w-[500px] w-[320px] leading-loose mt-4">
                {currentLanguage === "fr" ? (Presentation.fr_presentation_text ? removeTags(Presentation.fr_presentation_text) : '') : (Presentation.presentation_text ? removeTags(Presentation.presentation_text) : '')}
              </div>
              <div className="flex items-center space-x-2 text-white mt-4 py-2 px-3">
                <Adhesion />
              </div>
            </div>
          </div>

          {/* Nos membres */}
          <div className="mt-20">
            <div
              className="bg-cover bg-center bg-no-repeat h-[140px]"
              style={{ backgroundImage: `url(${backimagemenbre})` }}
            >
              <div className="bg-color-white h-[340px] md:px-10 px-5 pt-6">
                <div className="text-2xl uppercase text-[#DCA61D] font-bold">
                  {t('OUR MEMBERS')}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-4 gap-y-8 mt-12 place-content-center place-items-center">
              {Members.map((member, index) => (
                <div key={index}>
                  <Link to={`/A-propos/membre/${member.member_id}`}>
                    <div className="photo-membre rounded-lg">
                      <img src={member.photo ? `data:image/png;base64,${member.photo}` : profil1} alt="pp1" className="rounded-lg" />
                    </div>
                  </Link>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className="font-medium text-[#DCA61D] text-center">
                      {member.role ? member.role : 'Presidente'}
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      {member.name ? member.name : 'Kouakou ange christ'}
                    </p>
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      {member.facebook_link && (
                        <a href={member.facebook_link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#066AB2] text-white flex justify-center items-center rounded-full">
                          <GrFacebookOption />
                        </a>
                      )}
                      {member.email && (
                        <a href={`mailto:${member.email}`} className="w-6 h-6 bg-[#066AB2] text-white flex justify-center items-center rounded-full">
                          <IoIosMail />
                        </a>
                      )}
                      {member.linkedin_link && (
                        <a href={member.linkedin_link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#066AB2] text-white flex justify-center items-center rounded-full">
                          <TiSocialLinkedin />
                        </a>
                      )}
                      {member.twitter_link && (
                        <a href={member.twitter_link} target="_blank" rel="noopener noreferrer" className="w-6 h-6 bg-[#066AB2] text-white flex justify-center items-center rounded-full">
                          <RiTwitterXLine />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Footer info={info} />
        </>
      )}
    </>
  );
}

export default About;
