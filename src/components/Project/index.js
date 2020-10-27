import React from 'react'
import './style.scss'

function Project(props) {
    const {name} = props.data
    return(
        <div className="cardProject">
            <li><img className="image" src={"./images/"+ name + ".png"} alt={name}></img><span>{name}</span></li>
        </div>
        
    );
}

export default Project;