import {homes} from '../data.js'

const Home = () => {
  return (
    <section className="homes">
      {homes.map((home) => {
        const { Image, name, country, rooms, area, price } = home;
        return (
          <div className="home" key={home.id}>
            <img src={Image} alt="house" className="home__image" />
            <svg className="home__like">
              <use xlinkHref="./img/sprite.svg#icon-heart-full"></use>
            </svg>
            <h5 className="home__name">{name}</h5>

            <div className="home__country">
              <svg>
                <use xlinkHref="./img/sprite.svg#icon-map-pin"></use>
              </svg>
              <p>{country}</p>
            </div>
            <div className="home__room">
              <svg>
                <use xlinkHref="./img/sprite.svg#icon-profile-male"></use>
              </svg>
              <p>{rooms}</p>
            </div>
            <div className="home__area">
              <svg>
                <use xlinkHref="./img/sprite.svg#icon-expand"></use>
              </svg>
              <p>{area}</p>
            </div>
            <div className="home__price">
              <svg>
                <use xlinkHref="./img/sprite.svg#icon-key"></use>
              </svg>
              <p>{price}</p>
            </div>
            <button className="btn home__btn">contact realtors</button>
          </div>
        );
      })}
    </section>
  );
 
 
}

export default Home