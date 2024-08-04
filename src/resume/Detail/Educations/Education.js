import "./Education.css"


function Education({logo, name, year, title, mark}) {
    return (
        <div className="education-card-container">
            <div className="education-card-inner-padding ">
                <div className="education-header">
                    <img src={logo} alt="logo" className="education-logo"/>
                    <p className="education-header-name">{name}</p>
                </div>
                <p className="education-header-title">{title}</p>
                <p className="education-mark">{mark} for the {year}</p>
            </div>
        </div>
    )
}

export default Education;