import React from 'react'
import './style.scss'

function Navbar() {
    return(
        <div className="nav">
            <a href="#root" className="navClick">Home</a>
            <a href="#aboutMe" className="navClick" >Sobre mi</a>
            <a href="#projects" className="navClick">Proyectos</a>
            <a href="#skills" className="navClick">Skills</a>
            <a href="#contact" className="navClick">Contacto</a>
            
        </div>
    )
}

export default Navbar;