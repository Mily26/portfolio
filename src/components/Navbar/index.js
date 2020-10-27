import React from 'react'
import './style.scss'

function Navbar() {
    return(
        <div className="nav">
            <a href="#" className="navClick">Home</a>
            <a href="#" className="navClick">Proyectos</a>
            <a href="#" className="navClick">Contacto</a>
        </div>
    )
}

export default Navbar;