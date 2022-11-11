import React from 'react'
import './Header.css'

const Header = ({tittle, color}) => {
  return (
    <div className={color}>
        <h1>{tittle}</h1>
    </div>
  )
}

export default Header