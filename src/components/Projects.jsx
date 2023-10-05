import React from 'react'
// React Multi Carousel
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
// Projects Banners
import nexuspro from '../assets/images/nexuspro.PNG'
import project1 from '../assets/images/project1.jpeg'
import project2 from '../assets/images/project2.png'

const Projects = () => {
    const projectInfo = [
        { id: 1, image: nexuspro, title: 'NexusPro', descripition: 'decription of project 1', demoLink: 'https://www.nexuspro.pk/', gitLink: 'Github' },
        { id: 2, image: project2, title: 'Project 2', descripition: 'decription of project 2', demoLink: 'Demo', gitLink: 'Github' },
        { id: 3, image: project1, title: 'Project 3', descripition: 'decription of project 3', demoLink: 'Demo', gitLink: 'Github' },
        { id: 4, image: project2, title: 'Project 4', descripition: 'decription of project 4', demoLink: 'Demo', gitLink: 'Github' },
        { id: 5, image: project1, title: 'Project 5', descripition: 'decription of project 5', demoLink: 'Demo', gitLink: 'Github' },
        { id: 6, image: project2, title: 'Project 6', descripition: 'decription of project 6', demoLink: 'Demo', gitLink: 'Github' },
        { id: 7, image: project1, title: 'Project 7', descripition: 'decription of project 7', demoLink: 'Demo', gitLink: 'Github' },
        { id: 8, image: project2, title: 'Project 8', descripition: 'decription of project 8', demoLink: 'Demo', gitLink: 'Github' },
    ]
    {/* SLIDES FOR DIFFERENT SCREEN DIMENSIONS */ }
    const responsiveCarousel = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    }
    return (
        <div name="projects" className="w-full h-screen justify-center items-center bg-gray-200">
            <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-4">
                <span className="flex justify-center text-gray-700 text-4xl font-semibold font-Advent sm:text-5xl">Projects</span>
                <span className="flex justify-center text-gray-500 font-Economica text-lg pt-2 sm:text-xl sm:pt-4">Most Recent Work</span>
                {/* PROJECTS CAROUSEL */}
                <div className='w-full mt-4 sm:mt-8'>
                    <Carousel
                        swipeable={true}
                        draggable={true}
                        showDots={false}
                        responsive={responsiveCarousel}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        transitionDuration={1000}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={['tablet', 'mobile', 'desktop']}
                        itemClass="carousel-item-padding-10-px"
                    >
                        {
                            projectInfo.map((project) => (
                                <div key={project.id} className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center md:flex-row">
                                    <div className="max-w-screen-lg h-full mx-auto flex flex-col justify-center items-center px-0 md:flex-row sm:px-4">
                                        <div className="w-full h-full flex flex-col justify-center items-center shadow-xl">
                                            <img className="w-96 h-40" src={project.image} alt="Sunset in the mountains" />
                                            <div className="flex flex-col justify-center items-center">
                                                <div className="text-gray-700 text-md font-semibold font-Advent sm:text-lg">{project.title}</div>
                                                <p className="text-gray-700 text-md font-Economica sm:text-lg">
                                                    {project.descripition}
                                                </p>
                                            </div>
                                            <div className="px-6 pb-2">
                                                <a href={project.demoLink} target='_blank' rel="noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-md font-semibold font-Economica text-gray-700 mr-2 mb-2">Demo</a>
                                                <a href={project.gitLink} target='_blank' rel="noreferrer" className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold font-Economica text-gray-700 mr-2 mb-2">Github</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Carousel>
                </div>
            </div>
        </div>
    )
}

export default Projects