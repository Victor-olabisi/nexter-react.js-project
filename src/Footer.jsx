const Footer = () => {
    return (
      <footer className="footer">
        <ul className="footer__items">
          <li className="footer__item">
            <a href="#" className="footer__link">
              find your dream home{' '}
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              request proposal
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              download home planner
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              contact us
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              submit ur properties
            </a>
          </li>
          <li className="footer__item">
            <a href="#" className="footer__link">
              come work with us
            </a>
          </li>
        </ul>
        <div className="footer__info">
          <p>
            © Copyright 2023 by victor olabisi. Feel free to use this project
            for your own purposes. This does NOT apply if you plan to produce
            your own course or tutorials based on this project.
          </p>
        </div>
      </footer>
    );
}

export default Footer;