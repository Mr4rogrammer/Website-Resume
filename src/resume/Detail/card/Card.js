import "./Card.css"
import Link from './images/link-card.svg';

function Card({ title, content, image, urlText, onclickUrl }) {
    return (
        <div className="card-container">
            <div className="card-inner-padding">
            <img src={image} alt="image" className="card-image" />
            <div className="card-content">
                <p className="cart-content-title">{title}</p>
                <p className="cart-content-content">{content}</p>
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