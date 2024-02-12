import React from "react";
import Languages from "../Localization/Localization";
import "./Hero.scss";

function Hero({lang, setLang}) {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__info">
            <h1 className="hero__heading">{Languages[lang].hero.about.title}</h1>
            <p className="hero__text">{Languages[lang].hero.about.text}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
