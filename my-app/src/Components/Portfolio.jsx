import React from 'react'
// import Rayban from "../assert/Rayban.png"
// import Landing_Page from "../assert/Landing_Page.png"
import SIDCLUB from "../assert/SIDCLUB.png"
// import Weather from "../assert/Weather.png"
import Retrorr from "../assert/retrorr.png"
import Cynthia from "../assert/Cynthia.png"
import tracker from "../assert/tr.png"
import IMDB from "../assert/imdb.png"
// import CHAT from "../assertcrwom.png"

import '../Home.css'
import chat from "../assert/crwom.png"


const Portfolio = () => {

    const portfolios = [
        {
            id: 1,
            scr: tracker,
            demo: "https://trackker-1.onrender.com/",
            code : "https://github.com/Websterverse/TRACKKER"
            
        },
        {
            id: 2,
            scr: SIDCLUB,

            demo: "https://sidcupgolf--websterverse.repl.co/",
            code : "https://github.com/Websterverse/TRACKKER"
        },
        {
            id: 3,
            scr: chat,
            demo: "https://crown-talk.onrender.com/",
            code : "https://github.com/Websterverse/CROWN-TALK"
            
        },
        {
            id: 4,
            scr: Retrorr,
            demo: "https://miranda--websterverse.repl.co/",
            code : "https://github.com/Websterverse/TRACKKER"
            
        },
        {
            id: 5,
            scr: Cynthia,
            demo: "https://neglectedtemporalopposites.websterverse.repl.co/",
            code : "https://github.com/Websterverse/Cynthia_Clone"
            
        },
        {
            id: 6,
            scr: IMDB,
            demo: "https://k1ngk4rr-imdb.netlify.app/",
            code : "https://github.com/Websterverse/IMDB"
        },
        // {
        //     id: 7,
        //     scr: Rayban,
        //     demo: "https://god--websterverse.repl.co/",
        //     code : "https://github.com/Websterverse/TRACKKER"
        // },
        
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
