import "./Lorem.scss";
import loremimg from "../img/lorem.png";
import Languages from "../Localization/Localization";

function lorem({lang, setLang}) {
  return (
    <>
      <section className="lorem">
        <div className="container">
          <div className="lorem__info">
            <div className="lorem__info2">
              <h3 className="lorem__h3">{Languages[lang].lorem.title}</h3>
              <p className="lorem__text">{Languages[lang].lorem.text}</p>
            </div>
            <img
              className="lorem__img"
              src={loremimg}
              alt="loremimg"
              width="445"
              height="474"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default lorem;
