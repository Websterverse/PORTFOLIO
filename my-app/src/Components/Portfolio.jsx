import React from 'react'
import Rayban from "../assert/Rayban.png"
import Landing_Page from "../assert/Landing_Page.png"
import SIDCLUB from "../assert/SIDCLUB.png"
import Weather from "../assert/Weather.png"
import Retrorr from "../assert/retrorr.png"
import Cynthia from "../assert/Cynthia.png"
import Ochi from '../assert/owl.png'
import IMDB from "../assert/imdb.png"
import '../Home.css'



const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            scr: Ochi,
            demo: "https://cloneofochi.netlify.app/",
            code : "https://github.com/Websterverse/OCHI_CLONE" ,

        },
        {
            id: 2,
            scr: SIDCLUB,

            demo: "https://65cdc287fa3b1862ca6ba25b--keen-cendol-a931bc.netlify.app/",
            code : "https://github.com/Websterverse/sidcub_golf" ,
        },
        {
            id: 3,
            scr: Weather,
            demo: "https://65cdc37b1d0ba6651304c1db--astonishing-arithmetic-7e0a02.netlify.app/",
            code : "https://github.com/Websterverse/RAYBAN" ,

        },
        {
            id: 4,
            scr: Retrorr,
            demo: "https://65cdc2e7fbdf027f9c583c1a--superlative-medovik-b12f8d.netlify.app/",
            code: "https://github.com/Websterverse/MIRANDA" ,

        },
        {
            id: 5,
            scr: IMDB,
            demo: "https://k1ngk4rr-imdb.netlify.app/",
            code: "https://github.com/Websterverse/IMDB" ,

        },
        {
            id: 6,
            scr: Rayban,
            demo: "https://65cdc59a22d9657c29976a2f--tangerine-crepe-1938ba.netlify.app/",
            code: "https://github.com/Websterverse/RAYBAN" ,
        },


        
    ]













    return (
        <div name="portfolio" className=' portfolio w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black  '   >
            {/* md:h-screen  */}
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center 
            w-full h-full    pcon  ' >

                <div className=' pb-8' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500' > PORTFOLIO</p>
                    <p className='py-6' > Check some of my work right here</p>
                </div>



                <div className='  container   grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12  ' >
                {/* grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 */}

                    {portfolios.map(({ id, scr, demo , code }) => (



                        <div key={id} className='  shadow-md shadow-gray-500 rounded-lg   content    ' >

<div  className='con' >

                            <img src={scr} alt="" className='rounded-md duration-200 hover:scale-105 ' />
                            <div className='flex items-center justify-center   ' >
                                <a href={demo} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >DEMO</a>
                                <a href={code} target='blank' className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >CODE</a>
                            </div>
                            </div>
                        </div>


                    ))}

                </div>




            </div>
        </div>
    )
}

export default Portfolio
