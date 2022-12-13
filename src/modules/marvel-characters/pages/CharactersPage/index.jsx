import React from 'react';
import CharactersGrid from '@/modules/marvel-characters/components/CharacterGrid';
import './styles.scss';

export function CharacterPage() {
  return (
    <div className="mvl-characters-page">
      <header className="mvl-characters-page-header">
        <h1 className="u-no-margin">MARVELS CHARACTERS</h1>
        <p>Get a list of all Marvels characters and villians</p>
      </header>

      <div className="container">
        <section className="Featured-Characters">
          <div className="Container-Card-Title">
            <h1 className="Title-featured-characters">FEATURED CHARACTERS</h1>
          </div>
          <div className="Container-Cards-grip-6">
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/107shr_ons_crd_03.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">SHURI</p>
              </div>
            </div>
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/124irh_ons_crd_01.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">RIRI WILLIANS</p>
                <div className="Cards-Title-Characters-Secondary">
                  <p className="Cards-Title-Characters-Secondary-text">Ironheart</p>
                </div>
              </div>
            </div>
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/276mbk_ons_crd_01.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">M&apos;BAKU</p>
              </div>
            </div>
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/110oky_ons_crd_04.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">OKOYE</p>
              </div>
            </div>
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/129nam_ons_crd_01.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">NAMOR</p>
              </div>
            </div>
            <div className="Cards-General-Characters">
              <div className="Card-img">
                <img
                  className="Img-Cards"
                  src="https://terrigen-cdn-dev.marvel.com/content/prod/1x/277qrm_ons_crd_01.jpg"></img>
              </div>
              <div className="Cards-Title-Characters">
                <p className="Title-Featured-Character">QUEEN RAMONDA</p>
              </div>
            </div>
          </div>
        </section>
        <br></br>
        <br></br>
        <section className="mvl-section-card">
          <p>Use this space to add some cards and other content</p>
        </section>
        <br></br>
        <br></br>
        <h1>MARVEL CHARACTERS LIST</h1>
        <CharactersGrid />
      </div>
    </div>
  );
}
