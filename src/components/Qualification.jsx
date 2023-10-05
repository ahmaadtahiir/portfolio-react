import React from 'react'
// Icons
import Briefcase from '../assets/icons/briefcase.svg'
import School from '../assets/icons/school.svg'

const Qualification = () => {
    const educationInfo = [
        { id: 1, course: 'Intermediate - Computer Science', institute: 'Punjab Group of Colleges', years: '2015 - 2017' },
        { id: 2, course: 'Graduation - Computer Science', institute: 'Arid University, Rawalpindi', years: '2017 - 2021' },
    ]
    const experienceInfo = [
        { id: 1, title: 'Intern Software Engineer', office: 'Bitlogix Pvt. Ltd.', years: 'March - April 2022' },
        { id: 2, title: 'Associate Software Engineer', office: 'Bitlogix Pvt. Ltd.', years: 'May 2022 - Present' },
    ]
    return (
    // <div className="bg-gray-200 px-40 py-10" id='qualification'>
    //     < div className="items-center justify-center" >
    //         <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent pt-10">Qualification</span>
    //         <span className="flex justify-center text-gray-500 font-Economica text-xl pt-2">My Personal Journey</span>
    //     </div>
    //     <Grid container spacing={2} className='pt-10 '>
    //         <Grid md={6} sx={12} className='px-0'>
    //             <span className="flex justify-end text-gray-700 text-3xl font-Advent font-semibold px-10">
    //                 <img className='w-8 h-8' src={School} />Education
    //             </span>
    //             <div className='flex flex-col items-end pt-6'>
    //                 {
    //                     educationInfo.map((education) => (
    //                         <div className="w-64 flex flex-col pt-4">
    //                             <span className='text-gray-700 text-lg font-Economica font-semibold'>{education.course}</span>
    //                             <span className='text-gray-700 text-lg font-Economica'>{education.institute}</span>
    //                             <span className='text-gray-700 text-lg font-Economica'>{education.years}</span>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </Grid>
    //         <Grid md={6} sx={12} className='px-14'>
    //             <span className="flex justify-start text-gray-700 text-3xl font-Advent font-semibold">
    //                 <img className='w-8 h-8' src={Briefcase} />Experience
    //             </span>
    //             <div className="absolute left-1/2 ml-0.9 mt-10 w-0.5 h-1/4 bg-gray-700"></div>
    //             <div className='flex flex-col items-start pt-6'>
    //                 {
    //                     experienceInfo.map((experience) => (
    //                         <div className="w-64 flex flex-col pt-4">
    //                             <span className='text-gray-700 text-lg font-Economica font-semibold'>{experience.title}</span>
    //                             <span className='text-gray-700 text-lg font-Economica'>{experience.office}</span>
    //                             <span className='text-gray-700 text-lg font-Economica'>{experience.years}</span>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </Grid>
    //     </Grid>

        // </div>
        <div name="qualifications" className='w-full h-screen bg-gray-200'>
            <div className='max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4'>
                <span className="flex justify-center text-gray-700 text-4xl font-semibold font-Advent sm:text-5xl">Qualifications</span>
                <span className="flex justify-center text-gray-500 font-Economica text-lg pt-2 sm:text-xl sm:pt-4">My Personal Journey</span>
                <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center px-4 mt-4 md:flex-row sm:mt-8">
                    {/* EDUCATION SECTION */}
                    <div className='h-full w-full flex flex-col justify-center pt-8 sm:pr-14 sm:w-1/2 sm:pl-20 sm:pt-0'>
                        <span className="flex justify-center items-center text-gray-700 text-2xl font-Advent font-semibold sm:justify-start sm:text-3xl">
                            <img className='w-7 h-7 sm:w-8 sm:h-8' src={School} />Education
                        </span>
                        {
                            educationInfo.map((education) => (
                                <div key={education.id} className="flex flex-col justify-start items-center pt-2 sm:items-start">
                                    <span className='text-gray-700 text-lg font-Economica font-semibold'>{education.course}</span>
                                    <span className='text-gray-700 text-lg font-Economica'>{education.institute}</span>
                                    <span className='text-gray-700 text-lg font-Economica'>{education.years}</span>
                                </div>
                            ))
                        }
                    </div>
                    {/* EXPERIENCE SECTION */}
                    <div className='h-full w-full flex flex-col justify-center pt-12 sm:pl-20 sm:w-1/2 sm:pt-0'>
                        <span className="flex justify-center items-center text-gray-700 text-2xl font-Advent font-semibold sm:justify-start sm:text-3xl">
                            <img className='w-7 h-7 sm:w-8 sm:h-8' src={Briefcase} />Experience
                        </span>
                        {/* HORIZAONTAL DIVIDER */}
                        <div className="absolute left-1/2 ml-0.9 mt-0 w-0.5 h-1/3 bg-gray-700 hidden md:h-1/4 sm:block"></div>
                        {
                            experienceInfo.map((experience) => (
                                <div key={experience.id} className="w-64 flex flex-col justify-center items-center pt-2 sm:items-start">
                                    <span className='text-gray-700 text-lg font-Economica font-semibold'>{experience.title}</span>
                                    <span className='text-gray-700 text-lg font-Economica'>{experience.office}</span>
                                    <span className='text-gray-700 text-lg font-Economica'>{experience.years}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Qualification