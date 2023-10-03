import React from 'react'
import burger from "../assets/menu-burger.png"
import '../stylesheets/header.css'

function Dropdown(){
  return (
		<>
	  <button className='btn burger-btn'  type="button">
      <img src={burger} className='burger'/>
    </button>
		
		</>
  )
}

export default Dropdown