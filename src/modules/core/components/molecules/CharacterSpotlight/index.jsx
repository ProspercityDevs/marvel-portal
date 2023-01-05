import React, { useEffect, useState } from 'react';
import './styles.scss';
import { getComics } from 'src/modules/core/services/comics.api-rest';
import Loading from '../../atoms/Loading';
import { EmptyState } from 'src/modules/marvel-characters/components/CharacterGrid';
import PropTypes from 'prop-types';

const ITEM_PER_PAGE = 4;

export default function CharacterSpotlight() {
  const [comics, setComics] = useState([]);
  useEffect(() => {
    fetchComics();
  }, []);
  async function fetchComics() {
    const data = await getComics(ITEM_PER_PAGE);
    setComics(data.results);
    console.log(data);
  }

  return (
    <section>
      <div className="container-principal-comics">
        <div className="container-name-comics">
          <h1>CHARACTERS SPOTLIGHT</h1>
        </div>
        <div className="container-grid-comics">
          <ComicsGrid comics={comics} isLoading={Loading} itemsPerPage={ITEM_PER_PAGE} />
        </div>
      </div>
    </section>
  );
}

ComicsGrid.propTypes = {
  comics: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  itemsPerPage: PropTypes.number
};

function ComicsGrid({ comics, isLoading, itemsPerPage }) {
  if (isLoading && comics.length === 0) {
    return <Loading amount={itemsPerPage} />;
  }

  if (comics.length === 0) {
    return <EmptyState />;
  }

  return comics.map(({ title, image }, index) => <Comic title={title} image={image} key={index} />);
}

const Comic = ({ title, image }) => {
  return (
    <div>
      <div>
        <img className="image-comics" src={image} alt="aquí esta la imagen" />
      </div>
      <div>
        <p className="container-text-comics">COMICS</p>
        <a className="link-comics" href="#">
          {title}
        </a>
      </div>
    </div>
  );
};

Comic.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string
};