import React from 'react'
// Icons
import HeadsetIcon from '../assets/icons/headset-mic.svg'
import DoneIcon from '../assets/icons/done-ring.svg'
import SuitcaseIcons from '../assets/icons/suitcase.svg'
// Images
import profilepic from '../assets/images/profilepic.jpg'
// PDF File
import resume from '../assets/pdf/Ahmad.pdf'

const About = () => {
    const aboutInfo = [
        { id: 1, icon: SuitcaseIcons, title: 'Experience', detail: '1.5 Years' },
        { id: 2, icon: DoneIcon, title: 'Completed', detail: '10+ Projects' },
        { id: 3, icon: HeadsetIcon, title: 'Support', detail: '24/7 Online' },
    ]
    {/* FUNCTIONALITY TO DOWNLOAD RESUME */ }
    const downloadResume = () => {
        const link = document.createElement('a')
        link.download = 'Download'
        link.href = resume
        link.click()
    }
    return (
        // <div className="bg-gray-200 px-40 py-10" id="about">
        //     <Grid container spacing={2}>
        //         <Grid item md={6} sm={12}>
        //             <div className="pr-20 mt-32 flex justify-center items-center h-5/6">
        //                 <img className="h-96 w-96 rounded-lg" src={profilepic} alt="" />
        //             </div>
        //         </Grid>
        //         <Grid item md={6} sx={12}>
        //             <div className="pl-20 mt-20 justify-center items-center h-5/6">
        //                 <span className="flex justify-center text-gray-700 text-5xl font-semibold font-Advent">About Me</span>
        //                 <span className="flex text-gray-500 font-Economica text-xl pt-4">
        //                     Motivated and skilled software developer with 1+ year of experience in ReactJS and NodeJS.
        //                     Passionate about creating intuitive and userfriendly applications that solve complex problems. A
        //                     quick learner who is comfortable working in a team or independently. Seeking a challenging position
        //                     where I can continue to grow my skills and contribute to innovative software development projects.
        //                 </span>
        //                 <div className="grid grid-cols-3 gap-3 items-center justify-center mt-8">
        //                     {
        //                         aboutInfo.map((about) => (
        //                             <div className="flex flex-col items-center rounded-lg border border-1 border-gray-500 shadow-md py-2">
        //                                 <img className="w-8 h-8" src={about.icon} alt="" />
        //                                 <span className="text-gray-700 text-lg font-semibold font-Advent">{about.title}</span>
        //                                 <span className="text-gray-700 text-lg font-Economica">{about.detail}</span>
        //                             </div>
        //                         ))
        //                     }
        //                 </div>
        //                 <a href={PDFFile} download={PDFFile} target="_blank">
        //                 <button type="button" className="flex px-10 py-3 mt-8 text-xl font-Economica text-center text-white font-family:cursive bg-gray-700 rounded-lg hover:bg-gray-900">Dounload CV  &nbsp;
        //                     <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        //                         <path opacity="0" d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z" fill="none" />
        //                         <path d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
        //                         <path d="M9 6L11 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                         <path d="M10 9L12 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                         <path d="M9 12L11 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                         <path d="M10 15L12 15" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        //                     </svg>
        //                 </button>
        //                 </a>
        //             </div>
        //         </Grid>
        //     </Grid>
        // </div>
        <div name="about" className="w-full h-screen bg-gray-200">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4 pt-20 md:flex-row sm:pt-0">
                {/* MY PROFILE PHOTO */}
                <div className="sm:mx-auto sm:w-1/2">
                    <img src={profilepic} alt="my profile" className="w-full mx-auto rounded-2xl" />
                </div>
                {/* ABOUT SECTION AND DETAIL */}
                <div className="h-full w-full flex flex-col justify-center sm:ml-5 sm:w-1/2">
                    <span className="flex justify-center text-gray-700 text-4xl font-semibold font-Advent sm:text-5xl">About Me</span>
                    <span className="flex text-gray-500 font-Economica text-lg pt-2 sm:text-xl sm:pt-6">
                        Motivated and skilled software developer with 1+ year of experience in ReactJS and NodeJS.
                        Passionate about creating intuitive and userfriendly applications that solve complex problems. A
                        quick learner who is comfortable working in a team or independently. Seeking a challenging position
                        where I can continue to grow my skills and contribute to innovative software development projects.
                    </span>
                    {/* ABOUT CARDS */}
                    <div className="grid grid-cols-3 gap-3 items-center justify-center mt-2 sm:pt-6">
                        {
                            aboutInfo.map((about) => (
                                <div key={about.id} className="flex flex-col items-center rounded-lg border border-1 border-gray-500 shadow-md py-2">
                                    <img className="w-6 h-6 sm:w-8 sm:h-8" src={about.icon} alt="" />
                                    <span className="text-gray-700 text-md font-semibold font-Advent sm:text-lg">{about.title}</span>
                                    <span className="text-gray-700 text-md font-Economica sm:text-lg">{about.detail}</span>
                                </div>
                            ))
                        }
                    </div>
                    {/* DOWNLOAD RESUME */}
                    <button type="button" onClick={downloadResume} className="w-fit flex px-5 py-2 mt-2 text-md font-Economica text-center text-white bg-gray-700 rounded-lg hover:bg-gray-900 sm:px-10 sm:mt- sm:text-xl">Dounload CV  &nbsp;
                        <svg className="h-5 w-5 sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0" d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z" fill="none" />
                            <path d="M17.8284 6.82843C18.4065 7.40649 18.6955 7.69552 18.8478 8.06306C19 8.4306 19 8.83935 19 9.65685L19 17C19 18.8856 19 19.8284 18.4142 20.4142C17.8284 21 16.8856 21 15 21H9C7.11438 21 6.17157 21 5.58579 20.4142C5 19.8284 5 18.8856 5 17L5 7C5 5.11438 5 4.17157 5.58579 3.58579C6.17157 3 7.11438 3 9 3H12.3431C13.1606 3 13.5694 3 13.9369 3.15224C14.3045 3.30448 14.5935 3.59351 15.1716 4.17157L17.8284 6.82843Z" stroke="#E5E7EB" strokeWidth="2" strokeLinejoin="round" />
                            <path d="M9 6L11 6" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 9L12 9" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9 12L11 12" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M10 15L12 15" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default About