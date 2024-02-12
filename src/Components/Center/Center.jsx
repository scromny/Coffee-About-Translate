import "./Center.scss";
import centerlogo from "../img/center.svg";
import Languages from "../Localization/Localization";

function Center({lang, setLang}) {
  return (
    <>
      <section className="center">
        <div className="container">
          <div className="center__info">
            <h3 className="center__h3">{Languages[lang].lorem.title}</h3>

            <nav className="center__list">
              <li className="center__item">
                <img src={centerlogo} alt="centerlogo" width="41" height="49" />
                <h3 className="center__heading">{Languages[lang].center.joylashuv}</h3>
                <p className="center__text">{Languages[lang].center.text}</p>
                <p className="center__text">{Languages[lang].center.text1}</p>
                <p className="center__text">{Languages[lang].center.text2}</p>
                <p className="center__text">{Languages[lang].center.text3}</p>
              </li>

              <li className="center__item">
                <img src={centerlogo} alt="centerlogo" width="41" height="49" />
                <h3 className="center__heading">{Languages[lang].center.joylashuv}</h3>
                <p className="center__text">{Languages[lang].center.text}</p>
                <p className="center__text">{Languages[lang].center.text1}</p>
                <p className="center__text">{Languages[lang].center.text2}</p>
                <p className="center__text">{Languages[lang].center.text3}</p>
              </li>

              <li className="center__item">
                <img src={centerlogo} alt="centerlogo" width="41" height="49" />
                <h3 className="center__heading">{Languages[lang].center.joylashuv}</h3>
                <p className="center__text">{Languages[lang].center.text}</p>
                <p className="center__text">{Languages[lang].center.text1}</p>
                <p className="center__text">{Languages[lang].center.text2}</p>
                <p className="center__text">{Languages[lang].center.text3}</p>
              </li>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}

export default Center;
