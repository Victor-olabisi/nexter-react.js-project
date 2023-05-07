const Header = () => {
    return (
      <header className="header">
        <img
          src="./img/logo.png"
          alt="pcompany logo"
          className="header__logo"
        />
        <h3 className="heading-3">your own home</h3>
        <h1 className="heading-1">the ultimate personal freedom</h1>
        <button className="btn header__btn">view our properties</button>
        <div className="header__seenon">seen on</div>
        <div className="header__seenon-div">
          <img
            src="./img/logo-bbc.png"
            alt=""
            className="header__seenon-logo"
          />
          <img
            src="./img/logo-forbes.png"
            alt=""
            className="header__seenon-logo"
          />
          <img
            src="./img/logo-techcrunch.png"
            alt=""
            className="header__seenon-logo"
          />
          <img src="./img/logo-bi.png" alt="" className="header__seenon-logo" />
        </div>
      </header>
    );
}
export default Header;