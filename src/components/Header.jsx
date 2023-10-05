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