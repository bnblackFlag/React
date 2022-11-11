import React from 'react'
import Button from '../Button/Button'
import './Main.css'

const Main = ({text} ) => {
  return (
    <div className='main'>
      <h1>{text}</h1>
      <Button variante="cancelar" text="Cancelar" />
      <Button variante="confirmar" text="Confirmar"/>
    </div>
  )
}

export default Main