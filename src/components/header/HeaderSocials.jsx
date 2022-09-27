import React from 'react'
import Github from '../../icons/github.ico' 
import Linkedin from '../../icons/linkedin.ico' 
import Instagram from '../../icons/instagram.ico' 
const HeaderSocials =() => {
  return (
    <div>
        <a href="https://linkedin.com" className="header__social" ><Linkedin/></a>
        <a href="https://github.com" className="header__social" ><Github/></a>
        <a href="https://instagram.com" className="header__social" ><Instagram/></a>
    </div>
  )
}

export default HeaderSocials