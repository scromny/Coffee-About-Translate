import React from "react";
import "./Header.scss";
import CofeLogo from "../img/Cofe-logo.svg";
import Languages from "../Localization/Localization"

// JSX
// class => className

function Header({ lang, setLang }) {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="header__link" href="#link">
            <img
              className="header__logo"
              src={CofeLogo}
              alt="cofe logo"
              width="237"
              height="27"
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

          <select value={lang} onChange={(evt) => setLang(evt.target.value)}>
            <option value="uz">UZ</option>
            <option value="ru">RU</option>
            <option value="en">ENG</option>
          </select>
        </div>
      </header>
    </>
  );
}

export default Header;