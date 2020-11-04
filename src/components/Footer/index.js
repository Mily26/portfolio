import React from 'react'
import './style.scss'

function Footer() {
    return (
        <div id="contact" className="contact">
            
            <h2>Contacto</h2>
            <div className="myMail">
                <div><img className="gmail" src="https://i.postimg.cc/y8JWWqQz/gmail.png" alt="Logo Gmail" /></div><p className="mail">milyalvarez.26@gmail.com</p>
                
            </div>
            <div className="myLinkedin">
                <div><img className="linkedin" src="https://i.postimg.cc/8zRSM0GN/linkedin.png" alt="Logo Linkedin" /></div><a href="https://www.linkedin.com/in/milagros-%C3%A1lvarez-cisterna-9891501b0/">Linkedin</a>
            </div>

            
        </div>
    )
}

export default Footer;