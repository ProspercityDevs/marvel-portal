import './styles.scss';

const img = require.context('@/assets/images', true);

export default function FeaturedCharacters() {
  return (
    <section className="mvl-featuredCharacters-card-section">
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img

          
            className="mvl-featuredCharacters-card__image"
            src={img(`./Shuri.jpg`)}
            alt="imagen de Shuri"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">Shuri</h5>
        </div>
      </div>
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img
            className="mvl-featuredCharacters-card__image"
            src={img(`./Riri_Williams.jpg`)}
            alt="imagen de Riri Williams"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">Riri Williams</h5>
        </div>
      </div>
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img
            className="mvl-featuredCharacters-card__image"
            src={img(`./M'Baku.jpg`)}
            alt="imagen de M'baku"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">M’baku</h5>
        </div>
      </div>
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img
            className="mvl-featuredCharacters-card__image"
            src={img(`./Okoye.jpg`)}
            alt="imagen de Okoye"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">Okoye</h5>
        </div>
      </div>
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img
            className="mvl-featuredCharacters-card__image"
            src={img(`./Namor.jpg`)}
            alt="imagen de Namor"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">Namor</h5>
        </div>
      </div>
      <div className="mvl-featuredCharacters-card">
        <div className="mvl-featuredCharacters-card__image-container">
          <img
            className="mvl-featuredCharacters-card__image"
            src={img(`./Queen_Ramonda.jpg`)}
            alt="imagen de Queen Ramonda"
          />
        </div>
        <div className="mvl-featuredCharacters-card__body">
          <h5 className="u-no-margin">Queen Ramonda</h5>
        </div>
      </div>
    </section>
  );
}
