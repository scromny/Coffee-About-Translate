import React from "react";
import "./Our.scss";
import ourphoto from "../img/our.png";
import Languages from "../Localization/Localization";

function Our({lang, setLang}) {
  return (
    <>
      <section className="Our">
        <div className="container">
          <div className="our__info">
            <img
              className="our__photo"
              src={ourphoto}
              alt="photo"
              width="445"
              height="520"
            />

            <div className="our__commit">
                <h2 className="our__h2">{Languages[lang].our.title}</h2>
                <p className="our__text">{Languages[lang].our.text}</p> 
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Our;
