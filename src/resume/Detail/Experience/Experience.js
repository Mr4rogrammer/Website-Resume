import "./Experience.css"

function Experience({image, role, company, location, duration}) {
    return (
        <div className="experience-container">
            <div className="experience-card">
            <div className="experience-left">
                <img className="experience-image" src={image} alt="experience"/>
                <div className="experiecen-company-content">
                <p className="experience-company-role">{role}</p>
                <p className="experience-company-name">{company}</p>
                </div>
            </div>

            <div className="experience-right">
            <p className="experience-company-role experience-card-duration">{duration}</p>
            <p className="experience-company-role">{location}</p>
                </div>
            </div>
        </div>
    )
}

export default Experience;