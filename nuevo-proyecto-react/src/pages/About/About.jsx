import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Main from '../../components/Main/Main'

const About = () => {
  return (
    <div>
        <Header tittle="About" color="red"/>
        <Navbar/>
        <Main text="Pagina About"/>
    </div>
  )
}

export default About