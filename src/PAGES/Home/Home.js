import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import { Link } from "react-router-dom";
import img_description from "../../ASSETS/Image/description_association.png";
import activite1 from "../../ASSETS/Image/Activity1.png";
// import activite2 from "../../ASSETS/Image/Activity2.png";
// import activite3 from "../../ASSETS/Image/Activity3.png";
import backimagemenbre from "../../ASSETS/Image/backimgmenbre.png";
import profil1 from "../../ASSETS/Image/Profil1.png";
// import profil2 from "../../ASSETS/Image/Profil2.png";
// import profil3 from "../../ASSETS/Image/Profil3.png";
// import profil4 from "../../ASSETS/Image/Profil4.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiTwitterXLine } from "react-icons/ri";
import back_newletter from "../../ASSETS/Image/back_img_newletter.png";
import Footer from "../../COMPONENTS/Footer/Footer";
import { useState, useEffect } from "react";
import Loader from "../../COMPONENTS/Loader/Loading";
import {SlideHome} from "../../COMPONENTS/SlideHome/SlideHome"
import { fetchNouvelleInfo } from  '../../API/nouvelle/Nouvelle';
import { fetchHomeBanner } from  '../../API/home/Home';
import { fetchNouvelles } from  '../../API/home/Home';
import { fetchHomeEquipment } from  '../../API/home/Home';
//import { fetchMembers } from  '../../API/about/About';
import { removeTags } from '../../UTILS/Util';
import { fetchMembers } from  '../../API/home/Home';
import { fetchPartenaire } from  '../../API/home/Home';
import { subscribe } from  '../../API/home/Home';
import { useTranslation } from 'react-i18next';
function Home() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [Banner, setBanner] = useState([]);
  //const [BannerPicture, setBannerPicture] = useState([]);
  const [Members, setMembers] = useState([]);
  const [Partenaires, setPartenaire] = useState([]);
  const [NameSite, setNameSite] = useState('');
  const [PresentationTitle, setPresentationTitle] = useState('');
  const [PresentationPhoto, setPresentationPhoto] = useState('');
  const [Presentation, setPresentation] = useState('');
  const [email, setEmail] = useState('');
  const [HomeEquipment, setHomeEquipment] = useState([]);
  const [Articles, setArticles] = useState([]);
  const [Article, setArticle] = useState();
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t} = useTranslation();
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
      setLoading(false);
    }, 1000); // 5000 millisecondes = 5 secondes

    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
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

  useEffect(() => {
    fetchNouvelleInfo()
      .then(response => {
       // console.log('Réponse du serveur :', response.data);
        setNameSite(response.data.info.name);
        setPresentation(response.data.info);
        setPresentationTitle(response.data.info);
        setPresentationPhoto(response.data.info.presentation_photo);
        setInfo(response.data.info);
        
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
    fetchHomeBanner()
      .then(response => {
        //console.log('Réponse du serveur :', response.data.info.banner);
        const banners = response.data.info
        //console.log('Réponse du serveur :',banners );
        setBanner(banners);
        //setBannerPicture(response.data.info.banner.picture);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      fetchMembers()
      .then(response => {
       // console.log('Réponse du serveur :', response.data.info);
        setMembers(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });

      fetchPartenaire()
      .then(response => {
        //.log('Réponse du serveur :', response.data.info);
        setPartenaire(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
    
    fetchNouvelles()
      .then(response => {
        //.log('Réponse du serveur :', response.data.info);
        setArticles(response.data.info);
        setArticle(response.data.categoryDescription);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });


    fetchHomeEquipment()
      .then(response => {
        //console.log('Réponse du serveur :', response.data.info);
        setHomeEquipment(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
    
     
  }, []);
  const handleInputChange = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = async (event) => {
   
    event.preventDefault();
    console.log('Formulaire soumis :', email);

    try {
      await subscribe(email);
     // console.log(response.message);
      toast.success(t('subscription_success'));
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 422) {
        const errorCode = error.response.data.message;
        let errorMessage;
        switch (errorCode) {
          case 'email_dotcom':
            errorMessage = t('emailMustContainDotCom');
            break;
          case 'email_unique':
            errorMessage = t('emailAlreadySubscribed');
            break;
          case 'email_invalid':
            errorMessage = t('pleaseEnterValidEmail');
            break;
          default:
            errorMessage = t('unknownError');
        }
        toast.error(errorMessage);
      }
    }
  };


  return (
    <>
      {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
          <div className="bg-[#F9F9F9]">
            <Header  info={info}/>
            <NavbarDefault info={info}/>

            {/* en tete */}
           <SlideHome  banner={Banner}/>
          

            {/* description entreprise */}
            <div className="Animation-option flex flex-col md:flex-row md:space-x-28 space-y-20 md:space-y-0 pt-20 justify-center items-center md:items-start animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-ease-linear animate-normal animate-fill-both">
              <div className="flex flex-col space-y-5 pl-4 sm:pl-0">
                <div className="uppercase text-lg sm:text-2xl md:w-auto lg:w-[400px] font-semibold text-[#4E4E4E]">
                  {currentLanguage==="fr" ? (PresentationTitle.fr_presentation_title ? removeTags(PresentationTitle.fr_presentation_title) : 'Pourquoi nous rejoindre') : (PresentationTitle.presentation_title ? removeTags(PresentationTitle.presentation_title) : 'Pourquoi nous rejoindre')}?
                </div>
                <div className="h-1 w-20 bg-[#121212]"></div>
                <div className="sm:w-auto md:w-[500px] w-full leading-loose">
                  {currentLanguage==="fr" ? (Presentation.site_goal_fr ? removeTags(Presentation.site_goal_fr) : '') : (Presentation.site_goal ? removeTags(Presentation.site_goal) : '')}
                </div>
                <Link
                  to="/A-propos"
                  className="hover:bg-white text-center hover:text-[#066AB2] text-white bg-[#f10f0f] w-40 py-3 font-medium text-lg transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
                >
                {t('Learn more')}
                </Link>
              </div>
              <div className="flex flex-col">
                <div className="img_taille rounded-lg">
                  <img className="rounded-lg"
                    src={PresentationPhoto ? `data:image/png;base64,${PresentationPhoto}` : img_description}
                    alt="imagede description de l'association"
                  />
                </div>
                {/* hyjfufkuyf */}
                <div className="bg-white rounded-md relative bottom-20 md:left-44 border-b-4 border-[#f90707] text-xl flex items-center justify-center h-10 w-80">
                  {NameSite? NameSite :'Nom de l’association'}
                </div>
              </div>
            </div>

            {/* progression */}
            <div className="pt-20 Animation-option">
              <div className="bg-image-progression">
                <div className="bg-color-progression flex flex-col md:space-y-16 space-y-8 py-7 sm:py-10 md:py-14 items-center justify-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                   {t('Nos progressions')}
                  </div>
                  <div className="text-white grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-8 sm:gap-10 md:gap-20 lg:gap-40">
                    {/* decompte1 */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                      <div className="font-bold text-4xl sm:text-5xl md:text-6xl">10k+</div>
                      <div className="text-lg sm:text-xl md:text-2xl">{t('visite')}</div>
                    </div>
                    {/* decompte2 */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                      <div className="font-bold text-4xl sm:text-5xl md:text-6xl">10k+</div>
                      <div className="text-lg sm:text-xl md:text-2xl">{t('Nombre de follower')}</div>
                    </div>
                    {/* decompte3 */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                      <div className="font-bold text-4xl sm:text-5xl md:text-6xl">10k+</div>
                      <div className="text-lg sm:text-xl md:text-2xl">{t('mention')}</div>
                    </div>
                    {/* decompte4 */}
                    <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                      <div className="font-bold text-4xl sm:text-5xl md:text-6xl">10k+</div>
                      <div className="text-lg sm:text-xl md:text-2xl">{t('vue total')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Activité */}
            <div className="Animation-option pt-20 flex flex-col items-center space-y-4">
              <div className="uppercase text-lg md:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center font-semibold text-[#4E4E4E]">
                {t('nos différents activités')}
              </div>
              <div className="w-full sm:w-[600px] max-w-md mx-auto text-center">
                {/* {Article ? removeTags(Article) : 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'} */}
                {currentLanguage==="fr" ? (Article?.fr_description ? removeTags(Article.fr_description) : 'Pourquoi nous rejoindre') : (Article?.Descriptions ? removeTags(Article.Descriptions):'Duis aute irure dolor in reprehenderit')}
              </div>
              {/* Activite bloc */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 pt-14 pb-7">
                {/* Activité 1 */}
                {Articles.map((article, index) => (
                  <div className="activite-img-taille" key={index}>
                    <div
                      className="rounded-lg img-activite"
                      style={{ backgroundImage: article.Pictures ? `url(data:image/png;base64,${article.Pictures})` : `url(${activite1})` }}
                    >
                      <div className="bg-color-activite text-white pl-4 flex flex-col justify-end">
                        <div className="text-xl font-semibold w-72">
                          {currentLanguage === "fr" ? (article.fr_description ? article.fr_description : 'Pourquoi nous rejoindre') : (article.Descriptions ? removeTags(article.Descriptions) : 'Duis aute irure dolor in reprehenderit')}
                        </div>
                        <div className="italic font-light">
                          {currentLanguage === "fr" ? (article.item_date ? new Date(article.item_date).toLocaleDateString('fr-FR', options) : 'Jeudi 23 Mars 2024') : (
                            article.item_date ? new Date(article.item_date).toLocaleDateString('en-EN', options) : 'Thursday, 23 March 2024')
                          }
                        </div>

                        {/* button lire plus */}
                        <div className="grid place-items-end">
                          <Link
                            to={`/Nos-activites/Voir-plus/${article.Items_Numbers}`}
                            className="flex flex-row items-center justify-center space-x-3 bg-[#121212] rounded-s-full py-2 w-[120px]"
                          >
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              {/* SVG content */}
                              <path
                                d="M14.9094 7.11979C13.4971 4.36432 10.7013 2.5 7.49999 2.5C4.29868 2.5 1.50207 4.36563 0.0906108 7.12005C0.0310383 7.23789 0 7.36809 0 7.50013C0 7.63217 0.0310383 7.76237 0.0906108 7.88021C1.50285 10.6357 4.29868 12.5 7.49999 12.5C10.7013 12.5 13.4979 10.6344 14.9094 7.87995C14.9689 7.76211 15 7.63191 15 7.49987C15 7.36783 14.9689 7.23763 14.9094 7.11979ZM7.49999 11.25C6.75831 11.25 6.03328 11.0301 5.4166 10.618C4.79991 10.206 4.31927 9.62029 4.03544 8.93506C3.75161 8.24984 3.67735 7.49584 3.82204 6.76841C3.96674 6.04098 4.32389 5.3728 4.84834 4.84835C5.37278 4.3239 6.04097 3.96675 6.7684 3.82206C7.49583 3.67736 8.24983 3.75162 8.93505 4.03545C9.62027 4.31928 10.2059 4.79993 10.618 5.41661C11.0301 6.0333 11.25 6.75832 11.25 7.5C11.2502 7.99252 11.1534 8.48027 10.965 8.93535C10.7767 9.39043 10.5004 9.80392 10.1522 10.1522C9.8039 10.5005 9.39041 10.7767 8.93533 10.965C8.48025 11.1534 7.99251 11.2502 7.49999 11.25ZM7.49999 5C7.27684 5.00312 7.05514 5.03632 6.84087 5.0987C7.01749 5.33872 7.10225 5.63408 7.07977 5.93124C7.05729 6.22839 6.92906 6.50764 6.71834 6.71836C6.50763 6.92908 6.22837 7.0573 5.93122 7.07978C5.63407 7.10226 5.3387 7.01751 5.09868 6.84089C4.96201 7.34442 4.98668 7.87814 5.16923 8.36693C5.35177 8.85571 5.683 9.27494 6.11629 9.56561C6.54958 9.85629 7.06311 10.0038 7.58461 9.98729C8.10611 9.97082 8.60931 9.79122 9.02339 9.47378C9.43747 9.15634 9.74158 8.71703 9.89291 8.2177C10.0442 7.71838 10.0352 7.18416 9.86699 6.69025C9.69881 6.19635 9.37997 5.76761 8.95536 5.4644C8.53075 5.16119 8.02174 4.99877 7.49999 5Z"
                                fill="white"
                              />
                            </svg>
                            <p>{t('Lire plus')}</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/Nos-activites"
                className="hover:bg-white text-center hover:text-[#066AB2] text-white bg-[#f10f0f] w-48 py-3 font-medium text-lg transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110"
              >
                {t('Toutes les activités')}
              </Link>
            </div>

            {/* Menbre de l'equipe */}
            <div className="Animation-option pt-20 mb-[1400px] sm:mb-0">
              <div
                className="bg-cover bg-center bg-no-repeat h-[340px]"
                style={{ backgroundImage: `url(${backimagemenbre})` }}
              >
                <div className="bg-color-white h-[340px] md:px-10 px-5 pt-6">
                  {/* titre et bouton */}
                  <div className="flex sm:flex-row flex-col justify-between items-center">
                    <div className="text-2xl uppercase text-[#121212] font-bold">
                     {t('Les membres de notre équipe')}
                    </div>
                    <Link to="/A-propos" className="flex items-center space-x-3 bg-[#f10f0f] py-2 px-3 text-white">
                      <svg
                        width="25"
                        height="25"
                        viewBox="0 0 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.75 11.25C5.12891 11.25 6.25 10.1289 6.25 8.75C6.25 7.37109 5.12891 6.25 3.75 6.25C2.37109 6.25 1.25 7.37109 1.25 8.75C1.25 10.1289 2.37109 11.25 3.75 11.25ZM21.25 11.25C22.6289 11.25 23.75 10.1289 23.75 8.75C23.75 7.37109 22.6289 6.25 21.25 6.25C19.8711 6.25 18.75 7.37109 18.75 8.75C18.75 10.1289 19.8711 11.25 21.25 11.25ZM22.5 12.5H20C19.3125 12.5 18.6914 12.7773 18.2383 13.2266C19.8125 14.0898 20.9297 15.6484 21.1719 17.5H23.75C24.4414 17.5 25 16.9414 25 16.25V15C25 13.6211 23.8789 12.5 22.5 12.5ZM12.5 12.5C14.918 12.5 16.875 10.543 16.875 8.125C16.875 5.70703 14.918 3.75 12.5 3.75C10.082 3.75 8.125 5.70703 8.125 8.125C8.125 10.543 10.082 12.5 12.5 12.5ZM15.5 13.75H15.1758C14.3633 14.1406 13.4609 14.375 12.5 14.375C11.5391 14.375 10.6406 14.1406 9.82422 13.75H9.5C7.01562 13.75 5 15.7656 5 18.25V19.375C5 20.4102 5.83984 21.25 6.875 21.25H18.125C19.1602 21.25 20 20.4102 20 19.375V18.25C20 15.7656 17.9844 13.75 15.5 13.75ZM6.76172 13.2266C6.30859 12.7773 5.6875 12.5 5 12.5H2.5C1.12109 12.5 0 13.6211 0 15V16.25C0 16.9414 0.558594 17.5 1.25 17.5H3.82422C4.07031 15.6484 5.1875 14.0898 6.76172 13.2266Z"
                          fill="white"
                        />
                      </svg>
                      <p>{t('Show all members')}</p>
                    </Link>
                  </div>

                  {/* quelques membres */}
                  <div className="grid sm:grid-cols-4 sm:gap-y-0 gap-y-8  mt-12 place-content-center place-items-center">
                    {/* membre1 */}
                    {Members.map((member, index) => ( <div>
                      <Link to={`/A-propos/membre/${member.member_id }`}>
                        <div className="photo-membre rounded-lg">
                          <img src={member.photo ? `data:image/png;base64,${member.photo}` : profil1} alt="pp1" className="rounded-lg" />
                        </div>
                      </Link>
                      <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                        <p className=" font-medium text-[#DCA61D] text-center">
                        {member.role ? member.role : 'Presidente'}
                        </p>
                        <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                          {member.name? member.name : 'Kouakou ange christ'}
                        </p>
                        {/* reseaux sociaux */}
                        
                        <div className="flex flex-row items-center space-x-2 pt-3">
                          {member.facebook_link? <a href={member.facebook_link} target="_blank" rel="noreferrer noopener">
                              <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#f10f0f] hover:text-white w-6 h-6 rounded-full p-1" />
                            </a>:''}
                          {member.linkedin_link ? <a href={member.linkedin_link} target="_blank" rel="noreferrer noopener">
                            <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#f10f0f] hover:text-white w-6 h-6 rounded-full p-1" />
                          </a> :''}
                          {member.google_link ?<a href={member.google_link} target="_blank" rel="noreferrer noopener">
                            <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#f10f0f] hover:text-white w-6 h-6 rounded-full p-1" />
                          </a>:''}
                          {member.twitter_link ? <a href={member.twitter_link} target="_blank" rel="noreferrer noopener">
                            <RiTwitterXLine className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#f10f0f] hover:text-white w-6 h-6 rounded-full p-1" />
                          </a>: '' }
                        </div>
                      </div>
                     </div>))}
                  </div>
                </div>
              </div>
            </div>

            {/* newsletter */}
            <div className="mt-60 Animation-option">
              <ToastContainer />
              <div
                className="bg-cover bg-center bg-no-repeat h-full sm:h-[280px]"
                style={{ backgroundImage: `url(${back_newletter})` }}
              >
                <div className="bg-[#DCA61D76] h-[280px] flex flex-col items-center justify-center space-y-3">
                  <p className="text-center  sm:w-[600px] text-white font-bold text-2xl">
                    {t('Restez informer en vous abonnant a nos newsletter')}
                  </p>
                  <p className="text-lg text-white text-center">
                    {t('Veuillez entrer votre adresse mail')}
                  </p>
                  {/* barre de recherche */}
                  <form onSubmit={handleSubmit} className="flex items-center pt-4">
                    <input
                      type="search"
                      placeholder="andreakonan87@gmail.com"
                      className=" outline-none px-4 sm:w-[500px] h-12"
                      name="email"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <button className="bg-[#f10f0f] text-white sm:w-[100px] h-12 s:px-2 sm:px-0 ">
                     {t('S\'abonner')}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Les partenaires */}
            <div className="mt-20 flex flex-col items-center Animation-option">
              <p className=" uppercase text-2xl font-semibold text-[#4e4e4e]">
                {t('nos partenaires')}
              </p>
              <div className="pt-10 grid md:grid-cols-5 sm:grid-cols-3   gap-10">
              {Partenaires.map((partenaire, index) => (
               <div className="bg-[#C8D1D8] w-48 h-20 rounded-lg" 
               key={index}
                style={{ 
                  backgroundImage: `url(data:image/png;base64,${partenaire.logo ? partenaire.logo : ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
                >
                </div>
                
                
                ))}
              </div>
            </div>

            <div className="pt-20 Animation-option">
              <Footer info={info} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Home;
