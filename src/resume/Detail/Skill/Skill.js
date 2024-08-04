import "./Skill.css"
import { Chip } from "@material-ui/core";

function Skill({ programmingSkills }) {

    
    return (
        <div className="skill-container">
            {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-item" >
                    <Chip label={skill}   className="skill-container-chip" variant="outlined" onClick={ () => window.open("https://www.google.com/search?q="+skill,"_blank")}/>
                </div>
            ))}
        </div>
    )
}

export default Skill;