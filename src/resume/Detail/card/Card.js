import "./Card.css"
import Link from './images/link-card.svg';

function Card({ title, content, image, urlText, onclickUrl, moreInfo, state }) {
    return (
        <div className="card-container">
            <div className="card-inner-padding">
                <img src={image} alt="image" className="card-image" />
                <div className="card-content">
                    <p className="cart-content-title">{title}</p>
                    <p className="cart-content-content">{content}{moreInfo ? <span><span className="more-info gradient-text" onClick={() => state(true)}>more info </span><span className="red">❤️‍🔥</span></span> : ""}</p>
                </div>

                <div className="card-link-section card-content">
                    <img src={Link} alt="image" className="card-link-image" />
                    <p className="card-link" onClick={() => window.open(onclickUrl, '_blank')}>{urlText}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;