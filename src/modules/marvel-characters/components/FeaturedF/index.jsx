import './styles.scss';
import React from 'react';
import { SeriesGridPaginated} from '../CharacterGrid/itemnsName';

const img = require.context('@/assets/images', true);

export function FeaturedGrid() {
  const domain="characters/1017100/comics";
  const comics=SeriesGridPaginated(domain)
  console.log(comics)
  console.log('comics')

  return (
    <div className='featured-container'>
      <section className="mvl-featuredCharacters-card-section">
      <h1>FEATURED CHARACTERS</h1>
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
      <section className='featured-comics'>
        <h1>FEATURED Comics</h1>
        <div className='featured-comics-items'>
          {comics.map((item)=>(
            <figure key={item.id} className='featured-comics-items_figure'>
              <img className='featured-comics-items__img'src={`${item.image.path}.${item.image.extension}`}></img>
              <p className='parrafo'>COMICS</p>
              <figcaption>
                {item.name}
              </figcaption>
            </figure>
          ))}
        
        </div>
        

      </section>
    </div>
  );
}