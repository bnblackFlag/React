import React from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import Navbar from '../../components/Navbar/Navbar'

const Contact = () => {
  return (
    <div>
        <Header tittle="contacto" color="green"/>
        <Navbar/>
        <Main text="Pagina Contact"/>
    </div>
  )
}

export default Contact