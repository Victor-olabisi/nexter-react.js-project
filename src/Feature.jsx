

const Feature = ({feature}) => {
    return (
      <div className="feature">
        <svg className="feature__icon">
          <use xlinkHref={`../img/sprite.svg#icon-${feature.logo}`}></use>
        </svg>
        <h4 className="heading-4 heading-4--black">{feature.heading4}</h4>
        <p className="feature__text">{feature.text}</p>
      </div>
    );
}

export default Feature