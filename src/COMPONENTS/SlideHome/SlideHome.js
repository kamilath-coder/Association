import { Carousel } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import backActivite from "../../ASSETS/Image/Backnouvelle.png";
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from "react";

export function SlideHome({banner}) {
  
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
  const { t} = useTranslation();
  console.log(banner);
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
  if (!banner ||!Array.isArray(banner)) {
    return <div>La bannière n'est pas un tableau</div>;
  }
  return (
    <Carousel autoplay={true} loop={true} autoplayDelay={3000}>
      {banner.map((item, index) => (<div key={index} 
        className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal"
        style={{ backgroundImage: `url(data:image/png;base64,${item.picture ? item.picture : backActivite})` }} 
        >
        <div className="bg-[#066AB225] flex justify-center items-center h-[400px]">
          <div className="md:px-10 px-4 flex flex-col space-y-6 relative bottom-6">
            <div className="sm:text-4xl md:px-10 px-4 text-2xl font-bold text-white uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
              
              {currentLanguage==="fr" ? (item.fr_text1 ? item.fr_text1 : 'lol') : (item.text1 ? item.text1: 'lolo')}

            </div>
            <Link
              to="/Nos-activites"
              className="bg-white text-[#DCA61D] text-center hover:text-white hover:bg-[#000000] w-40 py-3 font-medium text-lg transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1ms] animate-ease-linear animate-normal"
            >
              {t('Nos activités')}
            </Link>
          </div>
        </div>
      </div> ))}
      {/* <div className="bg-image2 h-full  object-cover w-screen bg-cover bg-center bg-no-repeat animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal">
        <div className="bg-color flex items-center  ">
          <div className="md:px-10 px-4 flex flex-col space-y-6 relative bottom-6">
            <div className="sm:text-4xl text-2xl font-bold text-white w-[320px] sm:w-[520px] uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000  animate-delay-[1ms] animate-normal animate-fill-forwards">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip
            </div>
            <div className="text-lg   w-[320px] sm:w-[520px] text-white animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal ">
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate ullamco laboris nisi ut aliquip velit esse cillum dolore
              eu fugiat nulla pariatur. 
            </div>
            <Link
              to="/Nos-activites"
              className="bg-white text-[#DCA61D] text-center hover:text-white hover:bg-[#000000] w-40 py-3 font-medium text-lg transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1ms] animate-ease-linear animate-normal"
            >
              Nos activités
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-image3 h-full  object-cover w-screen bg-cover bg-center bg-no-repeat animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal">
        <div className="bg-color flex items-center  ">
          <div className="md:px-10 px-4 flex flex-col space-y-6 relative bottom-6">
            <div className="sm:text-4xl text-2xl font-bold text-white w-[320px] sm:w-[520px] uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000  animate-delay-[1ms] animate-normal animate-fill-forwards">
              Quis nostrud exercitation ullamco laboris nisi ut aliquip
            </div>
            <div className="text-lg   w-[320px] sm:w-[520px] text-white animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal ">
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate ullamco laboris nisi ut aliquip velit esse cillum dolore
              eu fugiat nulla pariatur. 
            </div>
            <Link
              to="/Nos-activites"
              className="bg-white text-[#DCA61D] text-center hover:text-white hover:bg-[#000000] w-40 py-3 font-medium text-lg transition delay-150 duration-700 ease-in-out hover:-translate-y-1 hover:scale-110 animate-fade-up animate-once animate-duration-[1200ms] animate-delay-[1ms] animate-ease-linear animate-normal"
            >
              Nos activités
            </Link>
          </div>
        </div>
      </div> */}
    </Carousel>
  );
}
