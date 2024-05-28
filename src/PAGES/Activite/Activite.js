import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import backActivite from "../../ASSETS/Image/backActivity.png";
import activite1 from "../../ASSETS/Image/Activity1.png";
import activite2 from "../../ASSETS/Image/Activity2.png";
import activite3 from "../../ASSETS/Image/Activity3.png";
import { Link } from "react-router-dom";
import { Donation } from "./Donation";
import Footer from "../../COMPONENTS/Footer/Footer";
import { useState, useEffect } from "react";
import Loader from "../../COMPONENTS/Loader/Loading";
import {fetchActivityInfo } from  '../../API/activity/Activity';
import {fetchActivityBanner } from  '../../API/activity/Activity';
import {fetchNouvelles } from  '../../API/activity/Activity';
import { removeTags } from '../../UTILS/Util';

function Activite() {
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState({});
  const [Banner, setBanner] = useState('');
  const [BannerPicture, setBannerPicture] = useState('');
  const [Articles, setArticles] = useState([]);
  const [Article, setArticle] = useState();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
      setLoading(false);
    }, 1000); // 5000 millisecondes = 5 secondes

    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    fetchActivityInfo()
      .then(response => {
        console.log('Réponse du serveur :', response.data);
        // setAddress(response.data.info.address);
        // setPhone(response.data.info.phone);
        // setEmail(response.data.info.email);
        // setFace(response.data.info.facebook_link);
        // setLink(response.data.info.linkedin_link);
        // setGmail(response.data.info.google_link);
        // setTweet(response.data.info.twitter_link);
        // setInsta(response.data.info.instagram_link);
        setInfo(response.data.info);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      fetchActivityBanner()
      .then(response => {
        console.log('Réponse du serveur :', response.data.info.banner);
        setBanner(response.data.info.banner.fr_text1);
        setBannerPicture(response.data.info.banner.picture);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
      fetchNouvelles()
      .then(response => {
        console.log('Réponse du serveur :', response.data.info);
        setArticles(response.data.info);
        setArticle(response.data.categoryDescription);
      })
      .catch(error => {
        console.error('Il y avait une erreur!', error);
      });
  }, []);
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

            {/* en tete */}
            <div
              className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal "
               style={{ backgroundImage: BannerPicture ?  `url(data:image/png;base64,${BannerPicture })`: `url(${backActivite})` }}
            >
              <div className="bg-[#066AB225] flex justify-center items-center h-[400px]  ">
                <div className="sm:text-4xl md:px-10 px-4  text-2xl font-bold text-white uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
                  {Banner ? Banner :'Nos activités'}
                </div>
              </div>
            </div>

            {/* Activité */}
            <div className="py-20 flex flex-col items-center space-y-4">
              <div className="Animation-option uppercase text-lg md:text-2xl w-[400px] text-center font-semibold text-[#4E4E4E]">
                nos différents activités
              </div>
              <div className="Animation-option sm:w-[600px] text-center">
                {Article ? removeTags(Article):'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate'}
              </div>
              {/* Activite bloc */}
              <div className=" Animation-option grid sm:grid-cols-2 md:grid-cols-3 gap-12 pt-14">
                {/* Activité 1 */}
               {Articles.map((article ,index) => ( 
                <div className="activite-img-taille">
                  <div
                    className="img-activite"
                    style={{ backgroundImage:  article.Pictures ?   `url(data:image/png;base64,${article.Pictures})`: `url(${activite1})` }}
                  >
                    <div className="bg-color-activite text-white pl-4 flex flex-col justify-end">
                      <div className="text-xl font-semibold w-72">
                        {article.Descriptions? removeTags(article.Descriptions):'Duis aute irure dolor in reprehenderit'} 
                      </div>
                      <div className=" italic font-light">
                        Jeudi 23 mars 2024
                      </div>

                      {/* button lire plus */}
                      <div className=" grid place-items-end">
                        <Link
                          to={`/Nos-activites/Voir-plus/${article.Items_Numbers}`}
                          className="flex flex-row items-center justify-center space-x-3 bg-[#DCA61D] rounded-s-full  py-2 w-[120px] "
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
                          <p>Lire plus</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>

            {/* Donation */}
            <div className=" Animation-option flex flex-col items-center space-y-4 ">
              <div className="uppercase text-lg md:text-2xl w-[400px] text-center font-semibold text-[#4E4E4E]">
                faire une donation ici
              </div>
              <div className="sm:w-[800px] text-center pb-8">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate
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

export default Activite;
