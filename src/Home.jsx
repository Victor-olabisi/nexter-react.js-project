const Home = ({home}) => {
    return (
      <div className="home">
            <img src={ home.Image} alt="house" className="home__image" />
        <svg className="home__like">
          <use xlinkHref="./img/sprite.svg#icon-heart-full"></use>
        </svg>
            <h5 className="home__name">{ home.name}</h5>

        <div className="home__country">
          <svg>
            <use xlinkHref="./img/sprite.svg#icon-map-pin"></use>
          </svg>
                <p>{ home.country}</p>
        </div>
        <div className="home__room">
          <svg>
            <use xlinkHref="./img/sprite.svg#icon-profile-male"></use>
          </svg>
                <p>{ home.rooms}</p>
        </div>
        <div className="home__area">
          <svg>
            <use xlinkHref="./img/sprite.svg#icon-expand"></use>
          </svg>
                <p>{ home.area}</p>
        </div>
        <div className="home__price">
          <svg>
            <use xlinkHref="./img/sprite.svg#icon-key"></use>
          </svg>
                <p>{ home.price}</p>
        </div>
        <button className="btn home__btn">contact realtors</button>
      </div>
    );
}

export default Home