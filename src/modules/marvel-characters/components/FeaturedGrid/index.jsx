import './styles.scss';
import React from 'react';
import { ItemsName } from '../ItemInfo/itemnsName';
import PropTypes from 'prop-types';
FeaturedGrid.propTypes={id: PropTypes.string};
export function FeaturedGrid({id}) {
  const domain="characters/"+id+"/comics";
  //1009368,1011027,1010733 1011299  1010794 1009268 ironcap star guadia spidi deadpool
  const comics=ItemsName({domain})

  return (
    <div className='featured-comics'>
      <h1>FEATURED COMICS</h1>
      <section className='slider'>
        
        <div className='featured-comics-items'>
          {comics.map((item)=>(
            <a key={item.id} href={`${item.url[0].url}`} target="_blank" rel="noopener noreferrer">
              <figure key={item.id} className='featured-comics-items_figure'>
                <img className='featured-comics-items__img'src={`${item.image.path}.${item.image.extension}`}></img>
                <p className='parrafo'>COMICS</p>
                <figcaption>
                  {item.title}
                </figcaption>
              </figure>
            </a>
          ))}
        
        </div>
        

      </section>
    </div>
  );
}