import React from 'react'
import Navbar from './profle/Navbar/Navbar'
import Home from './profle/Home/Home'
import About from './profle/About/About'
import Skill from './profle/Skills/Skill'
import Project from './profle/Projects/Project'
import Contact from './profle/Contact/Contact'
import Footer from './profle/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Skill/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
