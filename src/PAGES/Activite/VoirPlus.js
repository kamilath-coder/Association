import React from "react";
import Header from "../../COMPONENTS/Header/Header";
import { NavbarDefault } from "../../COMPONENTS/Navbar/Navbar";
import backActivite from "../../ASSETS/Image/backActivity.png";
import activite3 from '../../ASSETS/Image/Activity3.png'
import activite4 from '../../ASSETS/Image/Activite4.png'
import activite5 from '../../ASSETS/Image/activity5.png'
import activite6 from '../../ASSETS/Image/activite6.png'
import activite7 from '../../ASSETS/Image/activite8.png'
import {Donation} from './Donation'
import Footer from "../../COMPONENTS/Footer/Footer";
import {Link} from 'react-router-dom'
import activite1 from "../../ASSETS/Image/Activity1.png";

function VoirPlus() {
  return (
    <div>
      <Header />
      <NavbarDefault />

      {/* en tete */}
      <div
        className="bg-cover bg-center bg-no-repeat h-[400px]"
        style={{ backgroundImage: `url(${backActivite})` }}
      >
        <div className="bg-[#066AB225] flex justify-center items-center h-[400px]  ">
          <div className="sm:text-4xl md:px-10 px-4  text-2xl font-bold text-white uppercase leading-relaxed">
            Nos activités
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col md:space-y-0 space-y-14 my-20  px-10">
        <div className=" md:w-3/4">
            {/* premiere image de l'activite */}
            <div className=" relative overflow-hidden sm:w-[731px] sm:h-[465px] ">
                <img src={activite3} alt="photoactivite " className="w-full h-full object-cover"/>
            </div>
            <div className="sm:w-[731px]">
                <p className="text-2xl font-semibold pt-4 text-[#066AB2]">Duis aute irure dolor in reprehenderit</p>
                {/* date et lieu */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 pt-4">
                    {/* date */}
                    <div className="flex items-center space-x-2">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_35_595)">
                            <path d="M22 2.25001H18.75V0.750012C18.7501 0.551099 18.6712 0.360281 18.5307 0.219535C18.3901 0.0787893 18.1994 -0.000355495 18.0005 -0.000488103C17.8016 -0.000620711 17.6108 0.0782697 17.47 0.218828C17.3293 0.359387 17.2501 0.550099 17.25 0.749012V2.25001H12.75V0.750012C12.7501 0.65152 12.7307 0.553981 12.6931 0.462961C12.6555 0.371942 12.6003 0.289226 12.5307 0.219535C12.4611 0.149845 12.3784 0.0945453 12.2875 0.0567936C12.1965 0.0190419 12.099 -0.000422453 12.0005 -0.000488114C11.8016 -0.000620723 11.6108 0.0782697 11.47 0.218828C11.3293 0.359387 11.2501 0.550099 11.25 0.749012V2.25001H6.75V0.750012C6.75007 0.65152 6.73073 0.553981 6.6931 0.462961C6.65547 0.371942 6.60028 0.289226 6.53068 0.219535C6.46109 0.149845 6.37844 0.0945453 6.28747 0.0567936C6.19651 0.0190419 6.09899 -0.000422453 6.0005 -0.000488114C5.80159 -0.000620723 5.61077 0.0782697 5.47002 0.218828C5.32928 0.359387 5.25013 0.550099 5.25 0.749012V2.25001H2C1.46974 2.25001 0.961184 2.46059 0.58614 2.83544C0.211096 3.2103 0.00026513 3.71875 0 4.24901V21.999C0 22.5294 0.210714 23.0382 0.585786 23.4132C0.960859 23.7883 1.46957 23.999 2 23.999H22C22.5304 23.999 23.0391 23.7883 23.4142 23.4132C23.7893 23.0382 24 22.5294 24 21.999V4.24901C23.9997 3.71875 23.7889 3.2103 23.4139 2.83544C23.0388 2.46059 22.5303 2.25001 22 2.25001ZM22.5 22C22.5 22.1324 22.4475 22.2595 22.3539 22.3532C22.2604 22.447 22.1334 22.4997 22.001 22.5H2C1.86739 22.5 1.74021 22.4473 1.64645 22.3536C1.55268 22.2598 1.5 22.1326 1.5 22V4.25001C1.50026 4.11758 1.55306 3.99066 1.6468 3.8971C1.74054 3.80355 1.86756 3.75101 2 3.75101H5.25V5.25101C5.24987 5.44992 5.32876 5.64074 5.46932 5.78149C5.60988 5.92223 5.80059 6.00138 5.9995 6.00151C6.19841 6.00164 6.38923 5.92275 6.52998 5.7822C6.67072 5.64164 6.74987 5.45092 6.75 5.25201V3.75101H11.25V5.25101C11.2499 5.44992 11.3288 5.64074 11.4693 5.78149C11.6099 5.92223 11.8006 6.00138 11.9995 6.00151C12.1984 6.00164 12.3892 5.92275 12.53 5.7822C12.6707 5.64164 12.7499 5.45092 12.75 5.25201V3.75101H17.25V5.25101C17.2499 5.44992 17.3288 5.64074 17.4693 5.78149C17.6099 5.92223 17.8006 6.00138 17.9995 6.00151C18.1984 6.00164 18.3892 5.92275 18.53 5.7822C18.6707 5.64164 18.7499 5.45092 18.75 5.25201V3.75101H22C22.1323 3.75128 22.259 3.80393 22.3526 3.89746C22.4461 3.99098 22.4987 4.11775 22.499 4.25001L22.5 22Z" fill="#4E4E4E"/>
                            <path d="M5.25 9H8.25V11.25H5.25V9ZM5.25 12.75H8.25V15H5.25V12.75ZM5.25 16.5H8.25V18.75H5.25V16.5ZM10.5 16.5H13.5V18.75H10.5V16.5ZM10.5 12.75H13.5V15H10.5V12.75ZM10.5 9H13.5V11.25H10.5V9ZM15.75 16.5H18.75V18.75H15.75V16.5ZM15.75 12.75H18.75V15H15.75V12.75ZM15.75 9H18.75V11.25H15.75V9Z" fill="#4E4E4E"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_35_595">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <p className=" font-thin italic">Jeudi 23 Mars 2024</p>
                    </div>
                    {/* heure de l'activite */}
                    <div className="flex items-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.9999 23.9167C19.4767 23.9167 23.9166 19.4769 23.9166 14C23.9166 8.52322 19.4767 4.08337 13.9999 4.08337C8.52309 4.08337 4.08325 8.52322 4.08325 14C4.08325 19.4769 8.52309 23.9167 13.9999 23.9167Z" stroke="#4E4E4E"/>
                            <path d="M19.25 14.0001H14.2917C14.2143 14.0001 14.1401 13.9694 14.0854 13.9147C14.0307 13.86 14 13.7858 14 13.7084V9.91675" stroke="#4E4E4E" stroke-linecap="round"/>
                        </svg>
                        <p className=" font-thin italic">09h30</p>
                    </div>
                    {/* Lieu */}
                    <div className="flex items-center space-x-2">
                        <svg width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 3.01355C10.857 3.01355 7.5 6.35705 7.5 10.4985C7.5 17.6595 15 26.9986 15 26.9986C15 26.9986 22.5 17.658 22.5 10.4985C22.5 6.35855 19.143 3.01355 15 3.01355ZM15 14.6401C13.9259 14.6401 12.8957 14.2134 12.1362 13.4538C11.3767 12.6943 10.95 11.6642 10.95 10.59C10.95 9.51592 11.3767 8.48579 12.1362 7.72627C12.8957 6.96674 13.9259 6.54005 15 6.54005C16.0741 6.54005 17.1043 6.96674 17.8638 7.72627C18.6233 8.48579 19.05 9.51592 19.05 10.59C19.05 11.6642 18.6233 12.6943 17.8638 13.4538C17.1043 14.2134 16.0741 14.6401 15 14.6401Z" fill="#4E4E4E"/>
                        </svg>
                        <p className=" font-thin italic">Cocody,Abidjan, Côte d’ivoire</p>
                    </div>
                </div>
                {/* description */}
                <div className=" pt-4 leading-loose">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>
                <p className="text-lg font-semibold pt-10 text-[#4E4E4E]">Les photos de l'activité</p>
                {/* AUTRES PHOTOS DE L'ACTIVITE */}
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 pt-6">
                    <div className=" relative overflow-hidden w-[156px] h-[115px] ">
                        <img src={activite4} alt="photoactivite" className="w-full h-full object-cover"/>
                    </div>
                    <div className=" relative overflow-hidden w-[156px] h-[115px] ">
                        <img src={activite5} alt="photoactivite" className="w-full h-full object-cover"/>
                    </div>
                    <div className=" relative overflow-hidden w-[156px] h-[115px] ">
                        <img src={activite6} alt="photoactivite" className="w-full h-full object-cover"/>
                    </div>
                    <div className=" relative overflow-hidden w-[156px] h-[115px] ">
                        <img src={activite7} alt="photoactivite" className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </div>
        <div className=" md:w-1/4">
            {/* Barre de recherche */}
           <div className="flex flex-col items-center space-y-4 border border-[#D9D9D9] p-8">
            <p className="text-lg">Recherche de poste</p>
            <input type="search" placeholder="un mot clé" className=" bg-transparent border-[#D9D9D9] mb-4 border-2 outline-none h-12 px-3 w-[250px] "/>
            <button className=" bg-[#DCA61D] text-white h-12 px-3 w-[250px]">Recherche</button>
           </div>

           <div className=" mt-20">
            <p className="text-xl  font-medium pb-10">Postes recents</p>
           <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1">
                 {/* Activité 1 */}
                <div className="activite-img-taille">
                    <div
                    className="bg-cover bg-center bg-no-repeat h-[200px] w-[250px]"
                    style={{ backgroundImage: `url(${activite1})` }}
                    >
                    <div className=" bg-[#066AB225] h-[200px] w-[250px] text-white pl-4 flex flex-col justify-end">
                        <div className="text-lg font-semibold w-72">
                        Duis aute irure dolor in reprehenderit
                        </div>
                        <div className=" italic font-light text-sm">Jeudi 23 mars 2024</div>

                        {/* button lire plus */}
                        <div className=" grid place-items-end">
                        <Link
                            to='/Nos-activites/Voir-plus'
                            className="flex flex-row items-center justify-center space-x-2 bg-[#DCA61D] rounded-s-full  py-1 w-[100px] "
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
                {/* Activité 2 */}
                <div className="activite-img-taille">
                    <div
                    className="bg-cover bg-center bg-no-repeat h-[200px] w-[250px]"
                    style={{ backgroundImage: `url(${activite1})` }}
                    >
                    <div className=" bg-[#066AB225] h-[200px] w-[250px] text-white pl-4 flex flex-col justify-end">
                        <div className="text-lg font-semibold w-72">
                        Duis aute irure dolor in reprehenderit
                        </div>
                        <div className=" italic font-light text-sm">Jeudi 23 mars 2024</div>

                        {/* button lire plus */}
                        <div className=" grid place-items-end">
                        <Link
                            to='/Nos-activites/Voir-plus'
                            className="flex flex-row items-center justify-center space-x-2 bg-[#DCA61D] rounded-s-full  py-1 w-[100px] "
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
           </div>
           </div>
        </div>
      </div>

      {/* Donation */}
      <div className="flex flex-col items-center space-y-4 ">
        <div className="uppercase text-lg md:text-2xl w-[400px] text-center font-semibold text-[#4E4E4E]">
         faire une donation ici
        </div>
        <div className="sm:w-[800px] text-center pb-8">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate
        </div>
        <Donation/>
      </div>
      <div className="pt-20">
        <Footer/>
      </div>
    </div>
  );
}

export default VoirPlus;
