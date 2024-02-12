import "./footer.scss";
import footerlogo from "../img/footer.svg";
import footerlinklogo from "../img/footer2.svg";
import Languages from "../Localization/Localization";

function footer({ lang, setLang }) {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__info">
            <a className="footer__link__logo" href="#link">
              <img
                className="footer__logo"
                src={footerlogo}
                alt="footerlogo"
                width="236"
                height="26"
              />
            </a>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <a className="nav__link" href="#link">
                    {Languages[lang].header.nav.navLink1}
                  </a>
                </li>

                <li className="nav__item">
                  <a className="nav__link" href="#link">
                    {Languages[lang].header.nav.navLink2}
                  </a>
                </li>

                <li className="nav__item">
                  <a className="nav__link" href="#link">
                    {Languages[lang].header.nav.navLink3}
                  </a>
                </li>
              </ul>
            </nav>

            <a className="footer__link" href="#link">
              <img
                className="footerlinklogo"
                src={footerlinklogo}
                alt="footerlinklogo"
                width="120"
                height="24"
              />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default footer;
