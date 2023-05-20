const Feature = ({ logo, heading4, text, id }) => {
  return (
    <div className="feature">
      <svg className="feature__icon">
        <use xlinkHref={`../img/sprite.svg#icon-${logo}`}></use>
      </svg>
      <h4 className="heading-4 heading-4--black">{heading4}</h4>
      <p className="feature__text">{text}</p>
    </div>
  );
};
export default Feature