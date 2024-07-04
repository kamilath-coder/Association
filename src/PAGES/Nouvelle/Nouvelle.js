import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import backActivite from "../../ASSETS/Image/Backnouvelle.png";
import { useState, useEffect } from "react";
import Loader from "../../COMPONENTS/Loader/Loading";
import Nouvelle1 from "../../ASSETS/Image/Nouvelle1.png";
import Nouvelle2 from "../../ASSETS/Image/Nouvelle2.png";
import Nouvelle3 from "../../ASSETS/Image/Nouvelle3.png";
import { Link } from "react-router-dom";
import {Donation} from '../Activite/Donation'
import Footer from "../../COMPONENTS/Footer/Footer";
import { fetchNouvelleInfo } from  '../../API/nouvelle/Nouvelle';
import { fetchNouvelleBanner } from  '../../API/nouvelle/Nouvelle';
import { fetchNouvelles } from  '../../API/nouvelle/Nouvelle';
//import { fetchMembers } from  '../../API/about/About';
import { removeTags } from '../../UTILS/Util';
import { useTranslation } from 'react-i18next';


function Nouvelle() {
  const [loading, setLoading] = useState(true);
  const [Banner, setBanner] = useState('');
  const [BannerPicture, setBannerPicture] = useState('');
  const [NameSite, setNameSite] = useState('');
  const [PresentationTitle, setPresentationTitle] = useState('');
  const [PresentationPhoto, setPresentationPhoto] = useState('');
  const [Presentation, setPresentation] = useState('');
  const [Articles, setArticles] = useState([]);
  const [info, setInfo] = useState({});
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

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
    const timer = setTimeout(() => {
      
      // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
      setLoading(false);
    }, 1000); // 5000 millisecondes = 5 secondes

    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    fetchNouvelleInfo()
      .then(response => {
        console.log('Réponse du serveur :', response.data);
        setNameSite(response.data.info.name);
        setPresentation(response.data.info.presentation_text);
        setPresentationTitle(response.data.info.fr_presentation_title);
        setPresentationPhoto(response.data.info.presentation_photo);
        setInfo(response.data.info);
        
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
    fetchNouvelleBanner()
      .then(response => {
        console.log('Réponse du serveur pour le banner  :', response.data.info.banner);
        setBanner(response.data.info.banner);
        setBannerPicture(response.data.info.banner.picture);
        })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });

      fetchNouvelles()
      .then(response => {
        console.log('Réponse du serveur :', response.data.info);
        setArticles(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
     
  }, []);
  const { t} = useTranslation();
  return (
    <>
      {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
          <div className="overflow-hidden">
            <Header info={info} />
            <NavbarDefault info={info} />

            {/* en tete */}
            <div
              className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal"
              style={{ backgroundImage: `url(data:image/png;base64,${BannerPicture ? BannerPicture : backActivite})` }}
            >
              <div className="bg-[#066AB225] flex justify-center items-center h-[400px]">
                <div className="sm:text-4xl md:px-10 px-4 text-2xl font-bold text-white uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
                  {currentLanguage === "fr" ? (Banner.fr_text1 ? Banner.fr_text1 : 'À propos de nous') : (Banner.text1 ? Banner.text1 : 'À propos de nous')}
                </div>
              </div>
            </div>

            {/* Les nouvelles */}
            <div className="Animation-option flex flex-col items-center my-20 space-y-4">
              <div className="uppercase text-lg md:text-2xl w-[400px] text-center font-semibold text-[#4E4E4E]">
                {t('les nouvelles')}
              </div>
              <div className="sm:w-[600px] text-center">
                {t('The latest news are shared with members and visitors constantly in order to keep them connected every time by being aware of what is going on with us')}
              </div>

              <div className=" grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {/*Nouvelle 1 */}
                {Articles.map((article ,index) => (
                  <div className="w-[340px] flex flex-col space-y-3 mt-10" key={index}>
                    {/* image */}
                    <div className=" relative overflow-hidden w-[334px] h-[225px]">
                      <img
                        src={article.picture ? `data:image/png;base64,${article.picture}` :Nouvelle1}
                        className="w-full h-full object-cover rounded-lg"
                        alt="Nouvelle1"
                      />
                    </div>
                    <p className="text-xl font-semibold text-[#4e4e4e]">
                      {currentLanguage==="fr" ? (article.article_tittle? article.article_tittle : 'Pourquoi nous rejoindre') : (article.en_article_tittle? article.en_article_tittle:'Consultingproject')}
                    </p>
                    <div>
                      
                      {currentLanguage==="fr" ? (article.article ? removeTags(article.article) : 'Aliquam erat volutpat. Etiam ut nisi tempus, sagittis leo ut, placerat metus. Cras non convallis tellus....') 
                        : 
                          (article.en_article
                          ? removeTags(article.en_article) 
                          : 'Aliquam erat volutpat..')
                      }

                      
                      {/* Aliquam erat volutpat. Etiam ut nisi tempus, sagittis leo
                      ut, placerat metus. Cras non convallis tellus.... */}
                    </div>
                    {/* date */}
                    <div className="flex items-center space-x-2">
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_35_595)">
                          <path
                            d="M22 2.25001H18.75V0.750012C18.7501 0.551099 18.6712 0.360281 18.5307 0.219535C18.3901 0.0787893 18.1994 -0.000355495 18.0005 -0.000488103C17.8016 -0.000620711 17.6108 0.0782697 17.47 0.218828C17.3293 0.359387 17.2501 0.550099 17.25 0.749012V2.25001H12.75V0.750012C12.7501 0.65152 12.7307 0.553981 12.6931 0.462961C12.6555 0.371942 12.6003 0.289226 12.5307 0.219535C12.4611 0.149845 12.3784 0.0945453 12.2875 0.0567936C12.1965 0.0190419 12.099 -0.000422453 12.0005 -0.000488114C11.8016 -0.000620723 11.6108 0.0782697 11.47 0.218828C11.3293 0.359387 11.2501 0.550099 11.25 0.749012V2.25001H6.75V0.750012C6.75007 0.65152 6.73073 0.553981 6.6931 0.462961C6.65547 0.371942 6.60028 0.289226 6.53068 0.219535C6.46109 0.149845 6.37844 0.0945453 6.28747 0.0567936C6.19651 0.0190419 6.09899 -0.000422453 6.0005 -0.000488114C5.80159 -0.000620723 5.61077 0.0782697 5.47002 0.218828C5.32928 0.359387 5.25013 0.550099 5.25 0.749012V2.25001H2C1.46974 2.25001 0.961184 2.46059 0.58614 2.83544C0.211096 3.2103 0.00026513 3.71875 0 4.24901V21.999C0 22.5294 0.210714 23.0382 0.585786 23.4132C0.960859 23.7883 1.46957 23.999 2 23.999H22C22.5304 23.999 23.0391 23.7883 23.4142 23.4132C23.7893 23.0382 24 22.5294 24 21.999V4.24901C23.9997 3.71875 23.7889 3.2103 23.4139 2.83544C23.0388 2.46059 22.5303 2.25001 22 2.25001ZM22.5 22C22.5 22.1324 22.4475 22.2595 22.3539 22.3532C22.2604 22.447 22.1334 22.4997 22.001 22.5H2C1.86739 22.5 1.74021 22.4473 1.64645 22.3536C1.55268 22.2598 1.5 22.1326 1.5 22V4.25001C1.50026 4.11758 1.55306 3.99066 1.6468 3.8971C1.74054 3.80355 1.86756 3.75101 2 3.75101H5.25V5.25101C5.24987 5.44992 5.32876 5.64074 5.46932 5.78149C5.60988 5.92223 5.80059 6.00138 5.9995 6.00151C6.19841 6.00164 6.38923 5.92275 6.52998 5.7822C6.67072 5.64164 6.74987 5.45092 6.75 5.25201V3.75101H11.25V5.25101C11.2499 5.44992 11.3288 5.64074 11.4693 5.78149C11.6099 5.92223 11.8006 6.00138 11.9995 6.00151C12.1984 6.00164 12.3892 5.92275 12.53 5.7822C12.6707 5.64164 12.7499 5.45092 12.75 5.25201V3.75101H17.25V5.25101C17.2499 5.44992 17.3288 5.64074 17.4693 5.78149C17.6099 5.92223 17.8006 6.00138 17.9995 6.00151C18.1984 6.00164 18.3892 5.92275 18.53 5.7822C18.6707 5.64164 18.7499 5.45092 18.75 5.25201V3.75101H22C22.1323 3.75128 22.259 3.80393 22.3526 3.89746C22.4461 3.99098 22.4987 4.11775 22.499 4.25001L22.5 22Z"
                            fill="#4E4E4E"
                          />
                          <path
                            d="M5.25 9H8.25V11.25H5.25V9ZM5.25 12.75H8.25V15H5.25V12.75ZM5.25 16.5H8.25V18.75H5.25V16.5ZM10.5 16.5H13.5V18.75H10.5V16.5ZM10.5 12.75H13.5V15H10.5V12.75ZM10.5 9H13.5V11.25H10.5V9ZM15.75 16.5H18.75V18.75H15.75V16.5ZM15.75 12.75H18.75V15H15.75V12.75ZM15.75 9H18.75V11.25H15.75V9Z"
                            fill="#4E4E4E"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_35_595">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                     
                      <p className=" font-thin italic">
                      
                      {currentLanguage==="fr" ? (article.creation_date ? new Date(article.creation_date).toLocaleDateString('fr-FR', options): 'Jeudi 23 Mars 2024') : (
                        article.creation_date ? new Date(article.creation_date).toLocaleDateString('en-EN', options): 'Thursday, 23 March 2024')
                      }
                      </p>
                    </div>
                    {/* button lire plus */}
                    <div className=" text-white">
                      <Link
                        to={`/Les-nouvelles/voir-plus/${article.id_article}`}
                        
                        className="flex flex-row items-center justify-center space-x-3 bg-[#DCA61D]  py-2  "
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.9094 7.11979C13.4971 4.36432 10.7013 2.5 7.49999 2.5C4.29868 2.5 1.50207 4.36563 0.0906108 7.12005C0.0310383 7.23789 0 7.36809 0 7.50013C0 7.63217 0.0310383 7.76237 0.0906108 7.88021C1.50285 10.6357 4.29868 12.5 7.49999 12.5C10.7013 12.5 13.4979 10.6344 14.9094 7.87995C14.9689 7.76211 15 7.63191 15 7.49987C15 7.36783 14.9689 7.23763 14.9094 7.11979ZM7.49999 11.25C6.75831 11.25 6.03328 11.0301 5.4166 10.618C4.79991 10.206 4.31927 9.62029 4.03544 8.93506C3.75161 8.24984 3.67735 7.49584 3.82204 6.76841C3.96674 6.04098 4.32389 5.3728 4.84834 4.84835C5.37278 4.3239 6.04097 3.96675 6.7684 3.82206C7.49583 3.67736 8.24983 3.75162 8.93505 4.03545C9.62027 4.31928 10.2059 4.79993 10.618 5.41661C11.0301 6.0333 11.25 6.75832 11.25 7.5C11.2502 7.99252 11.1534 8.48027 10.965 8.93535C10.7767 9.39043 10.5004 9.80392 10.1522 10.1522C9.8039 10.5005 9.39041 10.7767 8.93533 10.965C8.48025 11.1534 7.99251 11.2502 7.49999 11.25ZM7.49999 5C7.27684 5.00312 7.05514 5.03632 6.84087 5.0987C7.01749 5.33872 7.10225 5.63408 7.07977 5.93124C7.05729 6.22839 6.92906 6.50764 6.71834 6.71836C6.50763 6.92908 6.22837 7.0573 5.93122 7.07978C5.63407 7.10226 5.3387 7.01751 5.09868 6.84089C4.96201 7.34442 4.98668 7.87814 5.16923 8.36693C5.35177 8.85571 5.683 9.27494 6.11629 9.56561C6.54958 9.85629 7.06311 10.0038 7.58461 9.98729C8.10611 9.97082 8.60931 9.79122 9.02339 9.47378C9.43747 9.15634 9.74158 8.71703 9.89291 8.2177C10.0442 7.71838 10.0352 7.18416 9.86699 6.69025C9.69881 6.19635 9.37997 5.76761 8.95536 5.4644C8.53075 5.16119 8.02174 4.99877 7.49999 5Z"
                            fill="white"
                          />
                        </svg>
                        <p>{t('Lire plus')}</p>
                      </Link>
                    </div>
                  </div>
                ))}
               
              </div>
            </div>

            {/* Donation */}
            <div className="Animation-option flex flex-col items-center space-y-4 ">
              <div className="uppercase text-lg md:text-2xl w-[400px] text-center font-semibold text-[#4E4E4E]">
                {t('faire une donation ici')}
              </div>
              <div className="sm:w-[800px] text-center pb-8">
              {t('Chaque don, petit ou grand, contribue à transformer des vies et à créer un avenir meilleur pour des milliers de personnes. En choisissant de soutenir l\'Association, vous devenez un acteur clé de notre mission.')}
              </div>
              <Donation />
            </div>

            <div className="pt-20">
              <Footer info={info} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Nouvelle;
