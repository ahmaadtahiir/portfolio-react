import React from 'react'
//Skills Images
import css from '../assets/images/css.png'
import express from '../assets/images/express.png'
import html from '../assets/images/html.png'
import javascript from '../assets/images/javascript2.png'
import materialui from '../assets/images/materialui.png'
import mongodb from '../assets/images/mongodb.png'
import mysql from '../assets/images/mysql.png'
import nodejs from '../assets/images/nodejs.png'
import prisma from '../assets/images/prisma.png'
import tailwindcss from '../assets/images/tailwindcss.png'
import reactjs from '../assets/images/reactjs.png'

const Skills = () => {
    const skillsInfo = [
        { id: 1, icon: html, title: 'HTML' },
        { id: 2, icon: css, title: 'CSS' },
        { id: 3, icon: javascript, title: 'Javascript' },
        { id: 4, icon: reactjs, title: 'React JS' },
        { id: 5, icon: nodejs, title: 'Node JS' },
        { id: 6, icon: express, title: 'Express JS' },
        { id: 7, icon: materialui, title: 'Material UI' },
        { id: 8, icon: tailwindcss, title: 'Tailwind CSS' },
        { id: 9, icon: mongodb, title: 'MongoDB' },
        { id: 10, icon: mysql, title: 'My SQL' },
        { id: 11, icon: prisma, title: 'Prisma' },
    ]
    return (
        // <div className="bg-gray-200 px-40 py-10" id="skills">
        //     < div className="items-center justify-center" >
        //         <span className="flex justify-center text-gray-700 text-3xl font-semibold font-Advent pt-10">Skills</span>
        //         <span className="flex justify-center text-gray-500 font-Economica text-xl pt-2">My Technical Level</span>
        //     </div>
        //     <div className="grid grid-cols-6 gap-5 items-center justify-center rounded-lg border border-1 border-gray-500 shadow-md p-10 mt-10">
        //         {
        //             skillsInfo.map((skills) => (
        //                 <div className="flex flex-col items-center">
        //                     <img className="w-auto h-20" src={skills.icon} alt="" />
        //                     <span className="text-gray-700 text-lg font-Economica">{skills.title}</span>
        //                 </div>
        //             ))
        //         }
        //     </div>
        // </div>
        <div name="skills" className="w-full h-screen bg-gray-200">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4">
                <span className="flex justify-center text-gray-700 text-4xl font-semibold font-Advent sm:text-5xl">Skills</span>
                <span className="flex justify-center text-gray-500 font-Economica text-lg pt-2 sm:text-xl sm:pt-4">My Technical Level</span>
                {/* TECHNOLOGIES GRID */}
                <div className="grid grid-cols-3 gap-5 items-center justify-center rounded-lg border border-1 border-gray-500 shadow-md p-5 mt-4 sm:grid-cols-6 sm:p-10 sm:mt-8">
                    {
                        skillsInfo.map((skills) => (
                            <div key={skills.id} className="flex flex-col items-center">
                                <img className="w-auto h-14 sm:h-20" src={skills.icon} alt="" />
                                <span className="text-gray-700 text-md font-Economica sm:text-lg">{skills.title}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
export default Skills