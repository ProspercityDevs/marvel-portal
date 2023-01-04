import './styles.scss';
import React from 'react';
import { SeriesGridPaginated} from '../ItemInfo/itemnsName';

export function FeaturedGrid() {
  const domain="characters/1009368/comics";
  //1009368,1017100
  const comics=SeriesGridPaginated(domain)

  return (
    <div className='featured-comics'>
      <h1>FEATURED COMICS</h1>
      <section className='slider'>
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