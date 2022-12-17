import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { useState } from 'react';
import ShowMoviesList from '../ShowMoviesList';

export default function ButtonArrow() {
  const [estado, setEstado] = useState(false);

  const openShowMoviesList = () => {
    if (estado == true) {
      setEstado(false);
    } else {
      setEstado(true);
    }
  };

  const closeShowMoviesList = () => {
    setEstado(false);
  };

  return (
    <div className="container">
      <div className="selec-btn">
        <button className="btn-text" onClick={openShowMoviesList}>
          MOVIE <RiArrowDropDownFill className={`icon1 ${estado && 'icon1-open'}`} />
        </button>
      </div>
      <ShowMoviesList estado={estado} closeShowMoviesList={closeShowMoviesList} />
    </div>
  );
}
