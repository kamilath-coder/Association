import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import backcontact from "../../ASSETS/Image/Backcontact.png";
import { useState, useEffect } from "react";
import Loader from "../../COMPONENTS/Loader/Loading";
//import { Link } from "react-router-dom";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Footer from "../../COMPONENTS/Footer/Footer";
import { RiTwitterXLine } from "react-icons/ri";
import { sendFormData } from '../../API/contact/Contact';
import { fetchContactInfo } from  '../../API/contact/Contact';
import { fetchContactBanner } from  '../../API/contact/Contact';
import { useTranslation } from 'react-i18next';

function Contact() {
  const [loading, setLoading] = useState(true);
  const [addressInfo, setAddress] = useState('');
  const [phoneInfo, setPhone] = useState('');
  const [emailInfo, setEmail] = useState('');
  const [FaceInfo, setFace] = useState('');
  const [LinkInfo, setLink] = useState('');
  const [GmailInfo, setGmail] = useState('');
  const [TweetInfo, setTweet] = useState('');
  const [InstaInfo, setInsta] = useState('');
  const [Banner, setBanner] = useState('');
  const [BannerPicture, setBannerPicture] = useState('');
  // const [InstaInfo, setInsta] = useState('');
  const [formState, setFormState] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  });
  const [info, setInfo] = useState({});
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t} = useTranslation();
  useEffect(() => {
    const timer = setTimeout(() => {
      // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
      setLoading(false);
    }, 1000); // 5000 millisecondes = 5 secondes
    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    fetchContactInfo()
      .then(response => {
        console.log('Réponse du serveur :', response.data);
        setAddress(response.data.info.address);
        setPhone(response.data.info.phone);
        setEmail(response.data.info.email);
        setFace(response.data.info.facebook_link);
        setLink(response.data.info.linkedin_link);
        setGmail(response.data.info.google_link);
        setTweet(response.data.info.twitter_link);
        setInsta(response.data.info.instagram_link);
        setInfo(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      fetchContactBanner()
      .then(response => {
        console.log('Réponse du serveur :', response.data.info.banner);
        setBanner(response.data.info.banner);
        setBannerPicture(response.data.info.banner.picture);
        // setBanner(response.data.info.banners[0].fr_text1);
        // setBannerPicture(response.data.info.banners[0].picture);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
  }, []);

  
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    const browserLang = savedLanguage || navigator.language || navigator.userLanguage;
    const lang = browserLang.substr(0, 2);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
    console.log('Langue actuelle :', lang);

     // Ajoutez cet écouteur d'événements pour mettre à jour currentLanguage chaque fois que la langue change
    i18n.on('languageChanged', lng => {
      setCurrentLanguage(lng);
    });

    // N'oubliez pas de nettoyer l'écouteur d'événements lorsque le composant est démonté
    return () => {
      i18n.off('languageChanged');
    };
  }, [i18n]);

  
  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };
 
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    let isError = false;

    if (formState.nom === "") {
      toast.error(t('form.errors.nomRequired'));
      isError = true;
    } 

    if (formState.email === "") {
      
      toast.error(t('form.errors.emailRequired'));
      isError = true;
    }

    if (formState.sujet === "") {
      
      toast.error(t('form.errors.sujetRequired'));
      isError = true;
    } 
    if (formState.message === "") {
      
      toast.error(t('form.errors.messageRequired'));
      isError = true;
    }

    if (isError) {
      console.log('Erreurs de formulaire détectées');
      toast.error(t('form.errors.formError'));
      return;
    }

    console.log('Formulaire soumis :', formState);

    try {
      const response = await sendFormData(formState);
      console.log('Réponse du serveur :', response);
      toast.success(t('form.success'));
      // Réinitialisez l'état
  
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire :', error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
          <div>
            <Header info={info} />
            <NavbarDefault />
            <ToastContainer />
            {/* en tete */}
            <div
              className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal"

              style={{ backgroundImage: BannerPicture ?  `url(data:image/png;base64,${BannerPicture })`: `url(${backcontact})` }}
            >
              <div className="bg-[#066AB225] flex justify-center items-center h-[400px]  ">
                <div className="sm:text-4xl md:px-10 px-4  text-2xl font-bold text-white uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
                 {/* {Banner ? Banner :'contactez-nous'} */}
                 {currentLanguage==="fr" ? (Banner.fr_text1 ? Banner.fr_text1 : 'Nos activités') : (Banner.text1 ? Banner.text1 : 'Nos activités')}
                </div>
              </div>
            </div>

            <div className="Animation-option  flex sm:flex-row flex-col s:space-y-10 md:space-y-0 sm:px-14 px-4 mt-20">
              <div className="w-full md:w-1/2">
                <p className=" text-2xl text-[#4E4E4E] font-semibold uppercase">
                {t('Formulaire de contact')}
                </p>
                <div className="h-1 w-20 bg-[#DCA61D] mt-3"></div>
                {/* <form className="mt-10 flex flex-col space-y-5">
                  <input
                    type="text"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder="Nom & Prenom* "
                  />
                  <input
                    type="text"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder="Adresse mail* "
                  />
                  <input
                    type="text"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder="Sujet* "
                  />
                  <textarea
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none p-2 h-40"
                    placeholder="Message* "
                  ></textarea>
                  <button className=" bg-[#DCA61D] text-white w-40 h-10 rounded-full ">
                    Envoyer
                  </button>
                </form> */}
                <form className="mt-10 flex flex-col space-y-5" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="nom"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder={`${t('Nom & Prenom')}*`}
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="email"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder={`${t('Adresse mail')}*`} 
                    onChange={handleInputChange}
                  />
                  <input
                    type="text"
                    name="sujet"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none px-2 h-12"
                    placeholder={`${t('Sujet')}*`} 
                    onChange={handleInputChange}
                  />
                  <textarea
                    name="message"
                    className="sm:w-[550px] border-[#B7B6B6] border outline-none p-2 h-40"
                    placeholder={`${t('Message')}*`} 
                    onChange={handleInputChange}
                  ></textarea>
                  <button type="submit" className=" bg-[#DCA61D] text-white w-40 h-10 rounded-full ">
                    {t('Envoyer')}
                  </button>
                </form>
              </div>
              <div className=" md:w-1/2">
                <p className=" text-2xl text-[#4E4E4E] font-semibold uppercase">
                {t('Information de contact')}
                </p>
                <div className="h-1 w-20 bg-[#DCA61D] mt-3"></div>
                <div className=" mt-6 sm:w-[550px]">
                  Aliquam erat volutpat. Etiam ut nisi tempus, sagittis leo ut,
                  placerat metus. Cras non convallis tellus.
                </div>
                <div className="mt-8 flex flex-col space-y-6">
                  {/* Localisation */}
                  <div className=" flex flex-row  space-x-4">
                    <div className=" bg-blue-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
                      <svg
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0669 3.21442C12.6477 3.21442 9.06689 6.78082 9.06689 11.1984C9.06689 18.8368 17.0669 28.7984 17.0669 28.7984C17.0669 28.7984 25.0669 18.8352 25.0669 11.1984C25.0669 6.78242 21.4861 3.21442 17.0669 3.21442ZM17.0669 15.616C15.9212 15.616 14.8224 15.1609 14.0122 14.3507C13.202 13.5406 12.7469 12.4418 12.7469 11.296C12.7469 10.1503 13.202 9.05147 14.0122 8.24132C14.8224 7.43116 15.9212 6.97602 17.0669 6.97602C18.2126 6.97602 19.3114 7.43116 20.1216 8.24132C20.9318 9.05147 21.3869 10.1503 21.3869 11.296C21.3869 12.4418 20.9318 13.5406 20.1216 14.3507C19.3114 15.1609 18.2126 15.616 17.0669 15.616Z"
                          fill="#066AB2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className=" font-semibold pb-1">{t('Localisation')}</p>
                      <p>{addressInfo ? addressInfo : '456, Lorem Street, Los Angeles, US 33454.'}</p>
                    </div>
                  </div>
                  {/* Phone */}
                  <div className=" flex flex-row  space-x-6">
                    <div className=" bg-blue-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.9358 13.9815L17.4429 14.4722C17.4429 14.4722 16.2696 15.6379 13.0684 12.4551C9.86711 9.27225 11.0404 8.10658 11.0404 8.10658L11.3502 7.79675C12.1161 7.03625 12.1887 5.81425 11.5203 4.92158L10.1553 3.09833C9.32761 1.99333 7.7297 1.84708 6.78178 2.78958L5.08095 4.47958C4.61186 4.94758 4.2977 5.55208 4.33561 6.22375C4.43311 7.943 5.21095 11.6404 9.54861 15.9542C14.1495 20.5281 18.4666 20.7101 20.2314 20.5454C20.7904 20.4934 21.2757 20.2096 21.6668 19.8196L23.2051 18.2899C24.2451 17.2575 23.9526 15.4862 22.6223 14.7637L20.5531 13.6381C19.6799 13.1647 18.6183 13.3033 17.9358 13.9815Z"
                          fill="#066AB2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className=" font-semibold pb-1">{t('Télephone')}</p>
                      <p>{phoneInfo? phoneInfo :'+1 (123) / 123 – 12331'}</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className=" flex flex-row  space-x-6">
                    <div className=" bg-blue-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
                      <svg
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.99958 20.5834C4.50125 20.5834 4.08525 20.4165 3.75158 20.0829C3.41792 19.7492 3.25072 19.3328 3.25 18.8338V7.16627C3.25 6.66794 3.41719 6.25194 3.75158 5.91827C4.08597 5.5846 4.50197 5.41741 4.99958 5.41669H21.0004C21.4988 5.41669 21.9148 5.58388 22.2484 5.91827C22.5821 6.25266 22.7493 6.66866 22.75 7.16627V18.8338C22.75 19.3321 22.5832 19.7481 22.2495 20.0818C21.9158 20.4154 21.4995 20.5826 21.0004 20.5834H4.99958ZM13 13.1246L21.6667 7.45877L21.333 6.50002L13 11.9167L4.667 6.50002L4.33333 7.45877L13 13.1246Z"
                          fill="#066AB2"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className=" font-semibold pb-1">{t('Email')}</p>
                      <p>{emailInfo ? emailInfo:'info@loremips.com /admin@loremps.com'}</p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className=" flex flex-row  space-x-6">
                    <div className=" bg-blue-gray-100 w-12 h-12 flex justify-center items-center rounded-full">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M13.803 5.33301C13.803 3.49301 15.303 2.00001 17.151 2.00001C17.5897 1.99896 18.0244 2.08433 18.4302 2.25126C18.8359 2.41819 19.2048 2.66341 19.5158 2.97291C19.8268 3.2824 20.0738 3.65012 20.2426 4.05507C20.4115 4.46002 20.499 4.89426 20.5 5.33301C20.5 7.17401 19 8.66701 17.151 8.66701C16.7076 8.66756 16.2685 8.57996 15.8592 8.40932C15.45 8.23868 15.0787 7.98839 14.767 7.67301L10.132 10.829C10.2611 11.472 10.1978 12.1388 9.95 12.746L15.032 16.086C15.6306 15.5978 16.3796 15.3318 17.152 15.333C17.5907 15.3321 18.0254 15.4176 18.4311 15.5846C18.8368 15.7517 19.2056 15.997 19.5165 16.3066C19.8274 16.6162 20.0743 16.984 20.243 17.389C20.4118 17.794 20.4991 18.2283 20.5 18.667C20.5 20.507 19 22 17.151 22C16.2651 22.0019 15.4147 21.6518 14.7869 21.0268C14.159 20.4017 13.8051 19.5529 13.803 18.667C13.8022 18.1996 13.9007 17.7374 14.092 17.311L9.05 14C8.43941 14.5309 7.65712 14.8226 6.848 14.821C6.40922 14.8221 5.97453 14.7366 5.56877 14.5696C5.16301 14.4026 4.79413 14.1573 4.48321 13.8477C4.17229 13.5381 3.92543 13.1702 3.75673 12.7652C3.58802 12.3601 3.50079 11.9258 3.5 11.487C3.50092 11.0483 3.58825 10.6141 3.75701 10.2091C3.92578 9.80421 4.17266 9.43648 4.48356 9.12697C4.79447 8.81746 5.1633 8.57223 5.569 8.40528C5.97469 8.23834 6.4093 8.15296 6.848 8.15401C7.912 8.15401 8.858 8.64701 9.471 9.41501L13.964 6.35601C13.8571 6.02554 13.8028 5.68034 13.803 5.33301Z"
                          fill="#066AB2"
                        />
                      </svg>
                    </div>

                    <div>
                      <p className=" font-semibold pb-1">{t('Nous suivre')}</p>
                      {/* reseaux sociaux */}
                      <div className="flex flex-row items-center space-x-3">

                        {FaceInfo?<a href={FaceInfo} target="_blank" rel="noreferrer noopener">
                          <GrFacebookOption className="text-xl text-[#4e4e4e] " />
                        </a>:''}
                        {LinkInfo? <a href={LinkInfo} target="_blank" rel="noreferrer noopener">
                          <TiSocialLinkedin className="text-2xl text-[#4e4e4e]  " />
                        </a>:''}
                        {GmailInfo?<a href={GmailInfo} target="_blank" rel="noreferrer noopener">
                          <IoIosMail className="text-xl text-[#4e4e4e] " />
                        </a>:''}
                        {InstaInfo?<a href={InstaInfo} target="_blank" rel="noreferrer noopener">
                          <FaInstagram className="text-xl text-[#4e4e4e] " />
                        </a>:''}
                        {TweetInfo?<a href={TweetInfo} target="_blank" rel="noreferrer noopener">
                          <RiTwitterXLine className="text-lg text-[#4e4e4e] " />
                        </a>:''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20">
              <Footer  info={info}/>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Contact;
