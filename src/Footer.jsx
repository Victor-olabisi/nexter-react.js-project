import {links} from '../data'

const Footer = () => {
    return (
      <footer className="footer">
        <ul className="footer__items">
          {links.map(link => {
            const { id, text } = link
            return (
              <li className="footer__item" key={id}>
                <a href="#" className="footer__link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>
        <div className="footer__info">
          <p>
            © Copyright 2023 by victor olabisi.
          </p>
        </div>
      </footer>
    );
}

export default Footer;