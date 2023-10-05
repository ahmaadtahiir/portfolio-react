import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import reportWebVitals from './reportWebVitals'
// import Header from './components/header'
// import Home from './components/home'
// import About from './components/About'
// import Qualification from './components/qualification'
// import Skills from './components/skills'
// import Contact from './components/contact'
// import Footer from './components/footer'
// import Projects from './components/projects'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)

reportWebVitals()
