import "./InformationDetail.css"

function InformationDetail({ content , title}) {
    return (
        <div className="content-list-container">
            <p className="content-list-title">{title}</p>
            {content.map((contentLine, index) => (
                <div key={index} className="content-list-wrapper" >
                    <p className="content-list">{index+1}) {contentLine}</p>               
                 </div>
            ))}

        </div>
    )
}

export default InformationDetail