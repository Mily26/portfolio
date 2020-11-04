import React from 'react'
import './style.scss'

function Skills() {
    return (
        <div id="skills" className="contentSkills">
            
            <h2 className="skillsTitle">Skills</h2>
            <div className="skills">
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/rFwDXR5s/git.png" alt="GIT" /></div>
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/VsDNRs28/html-5.png" alt="HTML 5" /></div>
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/VLfCfVPY/css.png" alt="CSS 3" /></div>
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/HnhdCnC8/sass.png" alt="SASS" /></div>
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/sDxg0dRZ/javascript.png" alt="JAVASCRIPT" /></div>
                <div className="circleSkill"><img className="iconSkills" src="https://i.postimg.cc/ZRJT8Xcn/react.png" alt="REACT" /></div>
            </div>
        </div>
        
    )
}

export default Skills;