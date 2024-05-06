import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import backAbout from "../../ASSETS/Image/backAbout.png";
import { Mission } from "./Mission";
import img_rejoindre from "../../ASSETS/Image/Activity1.png";
import backimagemenbre from "../../ASSETS/Image/backimgmenbre.png";
import { Link } from "react-router-dom";
import profil1 from "../../ASSETS/Image/Profil1.png";
import profil2 from "../../ASSETS/Image/Profil2.png";
import profil3 from "../../ASSETS/Image/Profil3.png";
import profil4 from "../../ASSETS/Image/Profil4.png";
import profil5 from "../../ASSETS/Image/Profil5.png";
import profil6 from "../../ASSETS/Image/Profil6.png";
import profil7 from "../../ASSETS/Image/Profil7.png";
import profil8 from "../../ASSETS/Image/Profil8.png";
import { GrFacebookOption } from "react-icons/gr";
import { IoIosMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { TiSocialLinkedin } from "react-icons/ti";
import Footer from "../../COMPONENTS/Footer/Footer";
import { useState, useEffect } from "react";
import Loader from "../../COMPONENTS/Loader/Loading";

function About() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // Après 5 secondes, masquer le spinner et rediriger l'utilisateur
      setLoading(false);
    }, 1000); // 5000 millisecondes = 5 secondes

    // Nettoyer le timer si le composant est démonté avant la fin du délai
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      {loading ? (
        // Afficher le spinner tant que loading est true
        <Loader />
      ) : (
        <>
          <div>
            <Header />
            <NavbarDefault />

            {/* en tete */}
            <div
              className="bg-cover bg-center bg-no-repeat h-[400px] animate-fade animate-once animate-duration-[1000ms] animate-delay-[1ms] animate-ease-linear animate-normal"
              style={{ backgroundImage: `url(${backAbout})` }}
            >
              <div className="bg-[#066AB225] flex justify-center items-center h-[400px]  ">
                <div className="sm:text-4xl md:px-10 px-4  text-2xl font-bold text-white  uppercase leading-relaxed animate-fade-up animate-once animate-duration-1000 animate-delay-[1ms] animate-normal">
                  À propos de nous
                </div>
              </div>
            </div>

            {/* Qui somme nous ? */}
            <div className="Animation-option mt-20 flex flex-col md:flex-row md:space-x-28 md:space-y-0 space-y-12 justify-center s:px-4 md:px-0">
              <div className="flex flex-col space-y-3 ">
                <div className="text-white text-sm bg-[#DCA61D] w-36 text-center py-1 rounded-full">
                  Qui sommes-nous
                </div>
                <p className="text-3xl font-semibold text-[#066AB2]">
                  Nom de l’association
                </p>
                <div className="sm:w-[500px] leading-loose">
                  We aim to simplify complex processes, enhance operational
                  efficiency, and drive growth through our innovative software
                  and services. By providing reliable solutions, we enable our
                  clients to navigate the ever-changing tech landscape. eliable
                  solutions, we enable our clients to navigate the ever-changing
                  tech landscape.
                </div>
              </div>
              <div className="sm:w-[500px]">
                <Mission />
              </div>
            </div>

            {/* Nous rejoindre */}
            <div className="Animation-option mt-20 bg-[#FEF8E7] p-10 flex md:flex-row flex-col justify-center md:space-x-20 md:space-y-0 space-y-14">
              {/* image description */}
              <div className="relative overflow-hidden sm:w-[451px] sm:h-[435px]  ">
                <img
                  src={img_rejoindre}
                  className="w-full h-full  object-cover"
                  alt="rejoindre"
                />
              </div>

              {/* Description texte */}
              <div>
                <p className="text-3xl font-semibold text-[#066AB2] uppercase">
                  Pourquoi nous rejoindre ?
                </p>
                <div className="h-1 w-20 bg-[#DCA61D] mt-4"></div>
                <div className="sm:w-[500px] w-[320px] leading-loose mt-4">
                  Integer vitae justo eget magna fermentum iaculis. Mattis
                  rhoncus urna neque viverra. Nisi porta lorem mollis aliquam ut
                  porttitor leo a diam. Dictum fusce ut placerat orci nulla
                  pellentesque.
                  <br />
                  <br />
                  Aenean euismod elementum nisi quis eleifend quam.Malesuada
                  fames ac turpis egestas maecenas pharetra convallis posuere
                  morbi. Morbi tristique senectus et netus et malesuada fames ac
                  turpis. <br />
                  <br />
                  Sed blandit libero volutpat sed cras ornare. Cras adipiscing
                  enim eu turpis egestas pretium aenean pharetra magna ....
                </div>
                <button className="flex items-center space-x-3 bg-[#DCA61D] text-white mt-4 py-2 px-3 ">
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
                  <p>Devenir membre</p>
                </button>
              </div>
            </div>

            {/* Nos membres */}
            <div className="mt-20 Animation-option">
              <div
                className="bg-cover bg-center bg-no-repeat h-[140px]"
                style={{ backgroundImage: `url(${backimagemenbre})` }}
              >
                <div className="bg-color-white h-[340px] md:px-10 px-5 pt-6">
                  <div className="text-2xl uppercase text-[#DCA61D] font-bold">
                    Les membres de notre équipe
                  </div>
                </div>
              </div>
              {/* quelques membres */}
              <div className="grid sm:grid-cols-4  gap-y-8  mt-12 place-content-center place-items-center">
                {/* membre1 */}
                <div>
                  <Link to="/A-propos/membre">
                    <div className="photo-membre">
                      <img src={profil1} alt="pp1" />
                    </div>
                  </Link>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Presidente
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Touré Victoria
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre2 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil2} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Directeur
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Kouakou ange christ
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre3 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil3} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Assistante
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      koudou hermine
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre4 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil4} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Interprete
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Yao christianah
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre5 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil5} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Interprete
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Yao christianah
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre6 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil6} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Interprete
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Yao christianah
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre7 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil7} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Interprete
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Yao christianah
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
                {/* membre8 */}
                <div>
                  <div className="photo-membre">
                    <img src={profil8} alt="pp1" />
                  </div>
                  <div className="flex flex-col items-center space-y-2 w-[206px] p-3 pb-6 bg-white shadow">
                    <p className=" font-medium text-[#DCA61D] text-center">
                      Interprete
                    </p>
                    <p className="text-lg font-semibold text-[#4e4e4e] text-center">
                      Yao christianah
                    </p>
                    {/* reseaux sociaux */}
                    <div className="flex flex-row items-center space-x-2 pt-3">
                      <Link to="">
                        <GrFacebookOption className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <TiSocialLinkedin className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <IoIosMail className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                      <Link to="">
                        <FaInstagram className="text-xl text-[#4e4e4e] bg-[#d9d9d9] hover:bg-[#066AB2] hover:text-white w-6 h-6 rounded-full p-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-20">
              <Footer />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default About;
