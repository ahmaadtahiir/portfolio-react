import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Qualification from './components/Qualification'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
    return (
        <div className="App">
            <Header />
            <Home />
            <About />
            <Qualification />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}

export default App
