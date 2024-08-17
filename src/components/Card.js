

const Card = ({ name, url, description, imageURL}) => {
    return (
        <div className="card">
            <img src={imageURL} alt = {name} className="card-img" />
            <h2 className="name">{name}</h2>
            <h5>{url}</h5>
            <p className="description">{description}</p>
        </div>
    );
}

export default Card;