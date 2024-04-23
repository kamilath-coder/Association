import React from 'react'
import Header from '../../COMPONENTS/Header/Header'
import Navbar from '../../COMPONENTS/Navbar/Navbar'
import {Link} from 'react-router-dom'
import img_description from '../../ASSETS/Image/description_association.png'

function Home() {
  return (
    <div className='bg-[#F9F9F9]'>
      <Header/>
      <Navbar/>

        <div className='bg-image w-screen bg-cover bg-center bg-no-repeat'>
          <div className='bg-color flex items-center '>
            <div className='md:px-10 flex flex-col space-y-6 relative bottom-6'>
              <div className='text-4xl font-bold text-white w-[520px] uppercase leading-relaxed'>Quis nostrud exercitation ullamco laboris nisi ut aliquip</div>
              <div className='text-lg  w-[520px] text-white '>ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ullamco 
                laboris nisi ut aliquip velit esse cillum dolore eu fugiat nulla pariatur. </div>
                <button className='bg-white text-[#DCA61D] hover:text-white hover:bg-[#DCA61D] w-40 py-3 font-medium text-lg'>Nos activités</button>
            </div>
          </div>
        </div>

        {/* Card option */}
        <div className='flex space-x-20 flex-row justify-center relative bottom-12'>
          {/* card1 */}
          <div className='bg-white w-[300px] shadow h-[329px] flex flex-col space-y-4 p-6 border-t-8 border-[#DCA61D]'>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_104)">
              <path d="M45.7499 24H31.4999V29.25C31.4999 32.9719 28.4718 36 24.7499 36C21.0281 36 17.9999 32.9719 17.9999 29.25V17.85L11.9156 21.5062C10.1062 22.5844 8.99994 24.5437 8.99994 26.6437V31.0781L1.49994 35.4094C0.065566 36.2344 -0.431309 38.0719 0.403066 39.5062L7.90307 52.5C8.72807 53.9344 10.5656 54.4219 11.9999 53.5969L21.6937 48H34.4999C37.8093 48 40.4999 45.3094 40.4999 42H41.9999C43.6593 42 44.9999 40.6594 44.9999 39V33H45.7499C46.9968 33 47.9999 31.9969 47.9999 30.75V26.25C47.9999 25.0031 46.9968 24 45.7499 24ZM59.5968 20.4937L52.0968 7.49999C51.2718 6.06561 49.4343 5.57811 47.9999 6.40311L38.3062 12H28.7249C27.5999 12 26.5031 12.3187 25.5468 12.9094L22.4062 14.8687C21.5249 15.4125 20.9999 16.3781 20.9999 17.4094V29.25C20.9999 31.3219 22.6781 33 24.7499 33C26.8218 33 28.4999 31.3219 28.4999 29.25V21H45.7499C48.6468 21 50.9999 23.3531 50.9999 26.25V28.9219L58.4999 24.5906C59.9343 23.7562 60.4218 21.9281 59.5968 20.4937Z" fill="#066AB2"/>
              </g>
              <defs>
              <clipPath id="clip0_5_104">
              <rect width="60" height="60" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <div className='text-xl font-semibold text-[#4E4E4E]'> laboris nisi ut aliquip</div>
            <div> consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam... 
            </div>
              <Link to='' className='text-[#DCA61D] underline text-lg'>Lire plus</Link>
          </div>
          {/* card2 */}
          <div className='bg-white shadow  w-[300px] h-[329px] flex flex-col space-y-4 p-6 border-t-8 border-[#DCA61D]'>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_104)">
              <path d="M45.7499 24H31.4999V29.25C31.4999 32.9719 28.4718 36 24.7499 36C21.0281 36 17.9999 32.9719 17.9999 29.25V17.85L11.9156 21.5062C10.1062 22.5844 8.99994 24.5437 8.99994 26.6437V31.0781L1.49994 35.4094C0.065566 36.2344 -0.431309 38.0719 0.403066 39.5062L7.90307 52.5C8.72807 53.9344 10.5656 54.4219 11.9999 53.5969L21.6937 48H34.4999C37.8093 48 40.4999 45.3094 40.4999 42H41.9999C43.6593 42 44.9999 40.6594 44.9999 39V33H45.7499C46.9968 33 47.9999 31.9969 47.9999 30.75V26.25C47.9999 25.0031 46.9968 24 45.7499 24ZM59.5968 20.4937L52.0968 7.49999C51.2718 6.06561 49.4343 5.57811 47.9999 6.40311L38.3062 12H28.7249C27.5999 12 26.5031 12.3187 25.5468 12.9094L22.4062 14.8687C21.5249 15.4125 20.9999 16.3781 20.9999 17.4094V29.25C20.9999 31.3219 22.6781 33 24.7499 33C26.8218 33 28.4999 31.3219 28.4999 29.25V21H45.7499C48.6468 21 50.9999 23.3531 50.9999 26.25V28.9219L58.4999 24.5906C59.9343 23.7562 60.4218 21.9281 59.5968 20.4937Z" fill="#066AB2"/>
              </g>
              <defs>
              <clipPath id="clip0_5_104">
              <rect width="60" height="60" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <div className='text-xl font-semibold text-[#4E4E4E]'> laboris nisi ut aliquip</div>
            <div> consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam... 
            </div>
              <Link to='' className='text-[#DCA61D] underline text-lg'>Lire plus</Link>
          </div>

          {/* card3*/}
          <div className='bg-white shadow  w-[300px] h-[329px] flex flex-col space-y-4 p-6 border-t-8 border-[#DCA61D]'>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_5_104)">
              <path d="M45.7499 24H31.4999V29.25C31.4999 32.9719 28.4718 36 24.7499 36C21.0281 36 17.9999 32.9719 17.9999 29.25V17.85L11.9156 21.5062C10.1062 22.5844 8.99994 24.5437 8.99994 26.6437V31.0781L1.49994 35.4094C0.065566 36.2344 -0.431309 38.0719 0.403066 39.5062L7.90307 52.5C8.72807 53.9344 10.5656 54.4219 11.9999 53.5969L21.6937 48H34.4999C37.8093 48 40.4999 45.3094 40.4999 42H41.9999C43.6593 42 44.9999 40.6594 44.9999 39V33H45.7499C46.9968 33 47.9999 31.9969 47.9999 30.75V26.25C47.9999 25.0031 46.9968 24 45.7499 24ZM59.5968 20.4937L52.0968 7.49999C51.2718 6.06561 49.4343 5.57811 47.9999 6.40311L38.3062 12H28.7249C27.5999 12 26.5031 12.3187 25.5468 12.9094L22.4062 14.8687C21.5249 15.4125 20.9999 16.3781 20.9999 17.4094V29.25C20.9999 31.3219 22.6781 33 24.7499 33C26.8218 33 28.4999 31.3219 28.4999 29.25V21H45.7499C48.6468 21 50.9999 23.3531 50.9999 26.25V28.9219L58.4999 24.5906C59.9343 23.7562 60.4218 21.9281 59.5968 20.4937Z" fill="#066AB2"/>
              </g>
              <defs>
              <clipPath id="clip0_5_104">
              <rect width="60" height="60" fill="white"/>
              </clipPath>
              </defs>
            </svg>
            <div className='text-xl font-semibold text-[#4E4E4E]'> laboris nisi ut aliquip</div>
            <div> consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. Ut enim ad minim veniam... 
            </div>
              <Link to='' className='text-[#DCA61D] underline text-lg'>Lire plus</Link>
          </div>
          
        </div>

        <div className='flex flex-row space-x-28 pt-20 justify-center'>
          <div className='flex flex-col space-y-5'>
            <div className='uppercase text-2xl w-[400px] font-semibold text-[#4E4E4E]'>Welcome to Egovenz City Municipal</div>
            <div className='h-1 w-20 bg-[#DCA61D]'></div>
            <div className='w-[500px] leading-loose'>
                Integer vitae justo eget magna fermentum iaculis. 
                Mattis rhoncus urna neque viverra. Nisi porta lorem 
                mollis aliquam ut porttitor leo a diam. Dictum fusce ut 
                placerat orci nulla pellentesque.<br/><br/>

                Aenean euismod elementum nisi quis eleifend quam.Malesuada 
                fames ac turpis egestas maecenas pharetra convallis posuere 
                morbi. Morbi tristique senectus et netus et malesuada fames ac turpis. <br/><br/>

                Sed blandit libero volutpat sed cras ornare. Cras adipiscing enim eu 
                turpis egestas pretium aenean pharetra magna ....
            </div>
            <button className='hover:bg-white hover:text-[#066AB2] text-white bg-[#066AB2] w-40 py-3 font-medium text-lg'>Notre mission</button>
          </div>
          <div className=' flex flex-col '>
            <div className='img_taille'>
              <img  src={img_description} alt="imagede description de l'association" />
            </div>
            <div className=' bg-white rounded-md relative bottom-20 left-44 border-b-4 border-[#066AB2] text-xl  flex items-center justify-center h-10 w-80 '>Nom de l'association</div>
          </div>
        </div>

        <div className='pt-20'>
          <div className=' bg-image-progression'>
            <div className='bg-color-progression flex flex-col space-y-4 items-center justify-center'>
              <div className='text-3xl font-semibold text-white'>Nos progressions</div>
            </div>
          </div>
        </div>

        <div className='pt-20'>

        </div>
    </div>
  )
}

export default Home