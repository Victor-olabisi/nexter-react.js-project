const Realtors = () => {
    return (
      <div className="realtors">
        <h3 className="heading-3">top 3 realtors</h3>
        <div className="realtors__container">
          <div className="realtor">
            <img
              src="./img/realtor-1.jpeg"
              alt="person img"
              className="realtor__img"
            />
            <h4 className="heading-4 heading-4--white">erik feinman</h4>
            <p className="realtor__sold">245 houses sold</p>
          </div>
          <div className="realtor">
            <img
              src="./img/realtor-2.jpeg"
              alt="person img"
              className="realtor__img"
            />
            <h4 className="heading-4 heading-4--white">kim brown</h4>
            <p className="realtor__sold">245 houses sold</p>
          </div>
          <div className="realtor">
            <img
              src="./img/realtor-3.jpeg"
              alt="person img"
              className="realtor__img"
            />
            <h4 className="heading-4 heading-4--white">toby ramsey</h4>
            <p className="realtor__sold">200 houses sold</p>
          </div>
        </div>
      </div>
    );
}
 
export default Realtors;