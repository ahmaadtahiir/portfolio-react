import React from 'react'
// Personal Picture
import ahmad1 from '../assets/images/ahmad1.png'

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-gray-200">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 md:flex-row">
                {/* INTRO SECTION */}
                <div className="h-full w-full flex flex-col justify-center sm:w-1/2">
                    <span className="flex text-gray-700 text-4xl font-Advent font-bold sm:text-5xl">Ahmad Tahir</span>
                    <span className="flex text-gray-700 font-Economica text-2xl pt-2 sm:text-3xl sm:pt-4"> Software Engineer</span>
                    <span className="flex text-left text-gray-500 font-Economica text-lg pt-2 sm:text-xl sm:pt-4">I brings a holistic perspective to every project, seamlessly integrating frontend and backend elements into a cohesive whole.</span>
                    <button type="button" onClick={() => window.location = 'mailto:ahmaadtahiir@gmail.com'} className="w-fit flex px-5 py-2 mt-6 text-md font-Economica text-center text-white font-family:cursive bg-gray-700 rounded-lg hover:bg-gray-900 sm:px-10 sm:mt-12 sm:text-xl">Say Hello  &nbsp;
                        <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth="1.5" stroke="#E5E7EB" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill="none" />
                            <path d="M20 4L3 11L10 14M20 4L13 21L10 14M20 4L10 14" stroke="#E5E7EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div className="flex items-center pt-10 sm:pt-20">
                        <svg fill="#374151" className="w-5 h-5 sm:w-7 sm:h-7" strokeWidth=".5" stroke="#374151" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.049 0c-4.941 0-9.047 4.007-9.047 8.948v14.104c0 4.942 4.105 8.948 9.047 8.948s8.948-4.007 8.948-8.948v-14.104c0-4.941-4.007-8.948-8.948-8.948v-0zM22.998 23.052c0 3.831-3.117 6.948-6.948 6.948s-7.047-3.117-7.047-6.948v-14.104c0-3.831 3.216-6.948 7.047-6.948s6.948 3.117 6.948 6.948v14.104zM16.011 6c-0.552 0-1 0.448-1 1v5c0 0.552 0.448 1 1 1s1-0.448 1-1v-5c0-0.552-0.448-1-1-1z"></path>
                        </svg>
                        <span className="flex text-gray-700 font-Economica text-md sm:text-xl">Scroll down&nbsp;</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#374151" className="w-3 h-3 sm:w-4 sm:h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3" />
                        </svg>
                    </div>
                </div>
                {/* MY PROFILE PHOTO */}
                <div className="w-full hidden sm:w-1/2 sm:block">
                    <img src={ahmad1} alt="my profile" className="mx-auto w-full" />
                </div>
            </div>
        </div>

    )
}
export default Home