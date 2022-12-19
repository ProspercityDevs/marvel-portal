import './styles.scss';
import PropTypes from 'prop-types';
//import { useState } from 'react';
import MoviesList from '../../molecules/MoviesList';
import MovieItem from '../MovieItem';

const moviesList = [
  { name: 'ANT-MAN', checked: false },
  { name: 'ANT-MAN AND THE WASP', checked: false },
  { name: 'BLACK PANTHER', checked: false },
  { name: 'BLACK PANTHER: WAKANDA FOREVER', checked: false },
  { name: 'ANT-MAN AND THE WASP: QUANTUMANIA', checked: false },
  { name: 'ARMOR WARS', checked: false },
  { name: 'AVENGERS: AGE OF ULTRON', checked: false },
  { name: 'AVENGERS: INFINITY WAR', checked: false },
  { name: 'BLACK PANTHER', checked: false },
  { name: 'BLACK PANTHER: WAKANDA FOREVER', checked: false },
  { name: 'BLACK WIDOW', checked: false },
  { name: 'CAPTAIN AMERICA: CIVIL WAR', checked: false },
  { name: 'CAPTAIN AMERICA: THE FIRST AVENGER', checked: false },
  { name: 'CAPTAIN AMERICA: THE WINTER SOLDIER', checked: false },
  { name: 'CAPTAIN MARVEL', checked: false },
  { name: 'DOCTOR STRANGE', checked: false },
  { name: 'DOCTOR STRANGE IN THE MULTIVERSE OF MADNESS', checked: false },
  { name: 'ETERNALS', checked: false }
 ];

 MoviesList.propTypes = {
  moviesList: PropTypes.array,
};

function ModalMovies() {  
  return (
    <>
      <MoviesList moviesList={moviesList} >
        {
          moviesList.map(
            (Movie)=>(
            <MovieItem key={Movie.name} name={Movie.name} checked={Movie.checked} />
            )
          )};
      </MoviesList>
      {/* <button className="boton_cancel" onClick={closeModalMovies}> 
          CANCEL
      </button> */}
        {/* <button className="boton_reset" onClick={resetModalMovies}>
          RESET
        </button>  */}
      <button className="boton_aply">APPLY</button>
  </>
  )
};

export default ModalMovies;
