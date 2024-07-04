import React, { useState, useEffect } from "react";
import Header from "../../COMPONENTS/Header/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import { Link } from "react-router-dom";
import img_description from "../../ASSETS/Image/description_association.png";
import activite1 from "../../ASSETS/Image/Activity1.png";
import backimagemenbre from "../../ASSETS/Image/backimgmenbre.png";
import profil1 from "../../ASSETS/Image/Profil1.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import back_newletter from "../../ASSETS/Image/back_img_newletter.png";
import Footer from "../../COMPONENTS/Footer/Footer";
import Loader from "../../COMPONENTS/Loader/Loading";
import { SlideHome } from "../../COMPONENTS/SlideHome/SlideHome";
import { fetchNouvelleInfo } from  '../../API/nouvelle/Nouvelle';
import { fetchHomeBanner, fetchNouvelles, fetchHomeEquipment, fetchMembers, fetchPartenaire, subscribe } from '../../API/home/Home';
import { removeTags } from '../../UTILS/Util';
import { useTranslation } from 'react-i18next';

function Home() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [Banner, setBanner] = useState([]);
  const [Members, setMembers] = useState([]);
  const [Partenaires, setPartenaire] = useState([]);
  const [NameSite, setNameSite] = useState('');
  const [PresentationTitle, setPresentationTitle] = useState('');
  const [PresentationPhoto, setPresentationPhoto] = useState('');
  const [Presentation, setPresentation] = useState('');
  const [email, setEmail] = useState('');
  const [HomeEquipment, setHomeEquipment] = useState([]);
  const [Articles, setArticles] = useState([]);
  const [Article, setArticle] = useState('');
  const { i18n, t } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') || navigator.language.substr(0, 2);
    i18n.changeLanguage(savedLanguage);
    setCurrentLanguage(savedLanguage);

    i18n.on('languageChanged', setCurrentLanguage);
    return () => i18n.off('languageChanged');
  }, [i18n]);

  useEffect(() => {
    fetchNouvelleInfo()
      .then(response => {
        const data = response.data.info;
        setNameSite(data.name);
        setPresentation(data);
        setPresentationTitle(data);
        setPresentationPhoto(data.presentation_photo);
        setInfo(data);
      })
      .catch(console.error);

    fetchHomeBanner()
      .then(response => setBanner(response.data.info))
      .catch(console.error);

    fetchMembers()
      .then(response => setMembers(response.data.info))
      .catch(console.error);

    fetchPartenaire()
      .then(response => setPartenaire(response.data.info))
      .catch(console.error);

    fetchNouvelles()
      .then(response => {
        setArticles(response.data.info);
        setArticle(response.data.categoryDescription);
      })
      .catch(console.error);

    fetchHomeEquipment()
      .then(response => setHomeEquipment(response.data.info))
      .catch(console.error);
  }, []);

  const handleInputChange = (event) => setEmail(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await subscribe(email);
      toast.success(t('subscription_success'));
    } catch (error) {
      console.error(error);
      const errorCode = error.response?.data.message;
      const errorMessages = {
        email_dotcom: t('emailMustContainDotCom'),
        email_unique: t('emailAlreadySubscribed'),
        email_invalid: t('pleaseEnterValidEmail')
      };
      toast.error(errorMessages[errorCode] || t('unknownError'));
    }
  };

  return (
    <>
      {loading ? <Loader /> : (
        <div className="bg-[#F9F9F9]">
          <Header info={info} />
          <NavbarDefault info={info} />
          <SlideHome banner={Banner} />
           {/* Card option */}
           <div className="animation-card grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 place-content-center place-items-center gap-5 sm:gap-7 md:gap-5 lg:gap-8 xl:gap-10 relative bottom-12">
              {HomeEquipment.map((homepage, index) => (
                <div className="bg-white sm:w-[90%] md:w-[300px] shadow h-[329px] flex flex-col space-y-4 p-6 border-t-8 border-[#DCA61D]" key={index}>
                  {/* SVG et contenu ici */}
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_5_104)">
                      <path
                        d="M45.7499 24H31.4999V29.25C31.4999 32.9719 28.4718 36 24.7499 36C21.0281 36 17.9999 32.9719 17.9999 29.25V17.85L11.9156 21.5062C10.1062 22.5844 8.99994 24.5437 8.99994 26.6437V31.0781L1.49994 35.4094C0.065566 36.2344 -0.431309 38.0719 0.403066 39.5062L7.90307 52.5C8.72807 53.9344 10.5656 54.4219 11.9999 53.5969L21.6937 48H34.4999C37.8093 48 40.4999 45.3094 40.4999 42H41.9999C43.6593 42 44.9999 40.6594 44.9999 39V33H45.7499C46.9968 33 47.9999 31.9969 47.9999 30.75V26.25C47.9999 25.0031 46.9968 24 45.7499 24ZM59.5968 20.4937L52.0968 7.49999C51.2718 6.06561 49.4343 5.57811 47.9999 6.40311L38.3062 12H28.7249C27.5999 12 26.5031 12.3187 25.5468 12.9094L22.4062 14.8687C21.5249 15.4125 20.9999 16.3781 20.9999 17.4094V29.25C20.9999 31.3219 22.6781 33 24.7499 33C26.8218 33 28.4999 31.3219 28.4999 29.25V21H45.7499C48.6468 21 50.9999 23.3531 50.9999 26.25V28.9219L58.4999 24.5906C59.9343 23.7562 60.4218 21.9281 59.5968 20.4937Z"
                        fill="#066AB2"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_5_104">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="text-xl font-semibold text-[#4E4E4E]">
                    {currentLanguage === "fr" ? (homepage.fr_title ? removeTags(homepage.fr_title) : 'Pourquoi nous rejoindre') : (homepage.title ? removeTags(homepage.title) : 'Duis aute irure dolor in reprehenderit')}
                  </div>
                  <div>
                    {currentLanguage === "fr" ? (homepage.fr_text ? removeTags(homepage.fr_text) : 'Pourquoi nous rejoindre') : (homepage.text ? removeTags(homepage.text) : 'Duis aute irure dolor in reprehenderit')}
                  </div>
                  <Link to="" className="text-[#DCA61D] underline text-lg">
                    Lire plus
                  </Link>
                </div>
              ))}
            </div>

          <div className="grid sm:grid-cols-1 lg:grid-cols-2 place-content-center place-items-center my-10">
            <div className="flex flex-col space-y-3 p-10 sm:w-3/4">
              <span className="uppercase text-[#606060] text-sm">{t('welcome')}</span>
              <span className="text-4xl text-[#4E4E4E]">{removeTags(PresentationTitle.fr_title || PresentationTitle.title)}</span>
              <div className="border-b w-24 pt-4" />
              <span className="leading-relaxed text-justify">
                {currentLanguage === "fr" ? removeTags(Presentation.fr_description) || 'Pourquoi nous rejoindre' : removeTags(Presentation.description) || 'Duis aute irure dolor in reprehenderit'}
              </span>
              <Link className="rounded-full bg-[#DCA61D] p-2 px-6 text-sm text-center w-48 text-white" to={"/a-propos"}>
                {t('readMore')}
              </Link>
            </div>
            <div>
              <img src={img_description} alt="welcome_img" className="sm:w-[400px]" />
            </div>
          </div>

          <div className="my-5 mx-10">
            <div className="text-3xl text-[#4E4E4E] my-5">
              {t('latestArticles')}
            </div>
            <div className="animation-card grid sm:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 place-content-center place-items-center gap-10 relative bottom-12">
              {Articles.map((article, index) => (
                <div className="bg-white w-[400px] shadow h-auto flex flex-col space-y-4 p-6" key={index}>
                  <img src={article.photo} alt="img_article" className="w-full h-[230px]" />
                  <span className="text-lg text-[#4E4E4E] font-bold text-left">{currentLanguage === "fr" ? removeTags(article.fr_title) || 'Pourquoi nous rejoindre' : removeTags(article.title) || 'Duis aute irure dolor in reprehenderit'}</span>
                  <span className="text-xs text-left leading-4">{new Date(article.updated_at).toLocaleDateString(currentLanguage === "fr" ? 'fr-FR' : 'en-US', options)}</span>
                  <span className="leading-relaxed text-justify">
                    {currentLanguage === "fr" ? removeTags(article.fr_description) || 'Pourquoi nous rejoindre' : removeTags(article.description) || 'Duis aute irure dolor in reprehenderit'}
                  </span>
                  <Link className="text-[#DCA61D] w-24 text-left" to={`/article/${article.id}`}>
                    {t('readMore')}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-20 mb-10">
            <div className="my-10">
              <div className="text-2xl text-center">{t('ourPartners')}</div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-4 place-content-center place-items-center gap-10 relative top-16">
                {Partenaires.map((partenaire, index) => (
                  <div className="bg-white shadow p-4" key={index}>
                    <img src={partenaire.logo} alt="img_partner" className="w-32 h-24" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mb-10" style={{ backgroundImage: `url(${back_newletter})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
            <div className="bg-black/50 h-auto sm:h-[300px] md:h-[500px] w-full flex flex-col justify-center items-center p-10 text-white text-center">
              <span className="text-3xl py-3">{t('subscribe')}</span>
              <form onSubmit={handleSubmit} className="w-full max-w-lg">
                <div className="flex flex-col space-y-3 items-center">
                  <input
                    type="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder={t('enterYourEmail')}
                    className="w-full p-2 rounded-md text-black"
                    required
                  />
                  <button
                    type="submit"
                    className="w-48 bg-[#DCA61D] p-2 rounded-full text-sm"
                  >
                    {t('subscribe')}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <Footer info={info} />
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Home;

