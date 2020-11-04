import React, {useContext} from 'react'
import ThemeContext from '../../contexts/ThemeContext'
import './style.scss'

function Title() { 
    const {info} = useContext(ThemeContext);
    return (
        <section id="aboutMe" className="hero">
                        
            <h1 className="title">¡Hola! Me llamo {info.name}</h1>
        </section>
    )
}

export default Title;