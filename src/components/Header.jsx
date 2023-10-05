import React, { useState } from 'react'
// React-scroll
import { Link } from 'react-scroll'
// React-icons
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = () => {
    const [nav, setNav] = useState(false)
    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'qualifications' },
        { id: 4, link: 'skills' },
        { id: 5, link: 'projects' },
        { id: 6, link: 'contact' },
    ]
    return (
    // <nav className="bg-gray-200 sticky top-0 border-gray-700 shadow-md z-50">
    //     <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    //         <a href="#home" className="flex items-center">
    //             <span className="self-center text-3xl font-Advent whitespace-nowrap text-gray-700 font-semibold">Ahmad</span>
    //         </a>
    //         <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
    //             <span className="sr-only">Open main menu</span>
    //             <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    //         </button>
    //         <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    //             <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
    //                 <li>
    //                     <a href="#home" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200" aria-current="page">Home</a>
    //                 </li>
    //                 <li>
    //                     <a href="#about" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200">About</a>
    //                 </li>
    //                 <li>
    //                     <a href="#qualification" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200">Qualification</a>
    //                 </li>
    //                 <li>
    //                     <a href="#skills" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200">Skills</a>
    //                 </li>
    //                 <li>
    //                     <a href="#projects" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200">Projects</a>
    //                 </li>
    //                 <li>
    //                     <a href="#contact" className="block py-2 pl-3 pr-4 text-gray-700 text-xl font-Economica md:border-0 md:p-0 hover:scale-110 duration-200">Contact</a>
    //                 </li>
    //             </ul>
    //         </div>
    //     </div>
    // </nav>

        <div className="flex justify-between items-center w-full h-16 bg-gray-200 border-gray-700 shadow-md sticky px-4 top-0 z-50">
            {/* AHMAD LOGO */}
            <div>
                <Link to="home" smooth duration={800} className="text-3xl font-Advent whitespace-nowrap self-center text-gray-700 font-semibold px-4">Ahmad</Link>
            </div>
            {/* NAVBAR LINKS FOR DESKTOP */}
            <ul className="hidden md:flex">
                {
                    links.map(({ id, link }) => (
                        <li key={id} className=" text-gray-700 text-xl font-Economica capitalize px-4 hover:scale-110 duration-200">
                            <Link to={link} smooth duration={800}>{link}</Link>
                        </li>
                    ))
                }
            </ul>
            {/* SIDE MENU ICONS FOR MOBILE VERSION */}
            <div className="text-gray-700 z-10 px-4 md:hidden" onClick={() => { setNav(!nav) }}>
                {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
            </div>

            {/* SIDE MENU LINKS FOR MOBILE VERSION */}
            {nav &&
                <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-full h-screen text-gray-700 bg-gray-200">
                    {
                        links.map(({ id, link }) => (
                            <li key={id} className="text-gray-700 text-xl font-Economica capitalize py-4 hover:scale-110 duration-200">
                                <Link to={link} onClick={() => { setNav(!nav) }} smooth duration={800}>{link}</Link>
                            </li>
                        ))
                    }
                </ul>
            }
        </div>

    )
}

export default Header