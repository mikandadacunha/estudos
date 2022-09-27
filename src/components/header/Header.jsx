import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header(){
  return (
    <header>
      <div className="container container__header">
        <h5>Hello I'm</h5>
        <h1>Mikanda da Cunha</h1>
        <h5 className="text-light">FrontEnd and Mobile Developer</h5>
        <CTA/>
        {/* <HeaderSocials/> */}
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contacts" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header