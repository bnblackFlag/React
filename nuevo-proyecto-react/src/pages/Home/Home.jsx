import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Aside from '../../components/Aside/Aside'
import Main from '../../components/Main/Main'
import Footer from '../../components/Footer/Footer'

import './Home.css'

const Home = () => {
  return (
    <div className='home'>
    <Header tittle="Home" color="blue"/>
    <Navbar/>
    <Aside/>
    <Main text="Pagina Main"/>
    <Footer/>
    </div>
  )
}

export default Home