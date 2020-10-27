import React, { useContext } from 'react'
import ThemeContext from '../../contexts/ThemeContext';
import './style.scss'

function Bio() {
    const {info} = useContext(ThemeContext);
    return(
        <div>
            <p className="info">Soy una {info.bio} de Córdoba, Argentina</p>
        </div>
    
    )
}

export default Bio;