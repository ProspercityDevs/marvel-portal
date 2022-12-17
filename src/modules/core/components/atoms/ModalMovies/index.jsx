import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import MoviesList from '../../molecules/MoviesList';

ModalMovies.propTypes = {
  estado: PropTypes.bool,
  closeModalMovies: PropTypes.bool
};

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
  { name: 'ETERNALS', checked: false },
];

function ModalMovies({ estado, closeModalMovies }) {
  const [estado1, setEstado1] = useState(false);

  const openModalMovies = () => {
    if (estado1 == true) {
      setEstado1(false);
    } else {
      setEstado1(true);
    }
  };
  
  const resetModalMovies = () => {
    setEstado1(false);
    
  };

  return (
    <div className={`ModalMovies ${estado && 'ModalMovies-open'}`}>
       {/* <ul className="list-items">
         <li className="item" onClick={openModalMovies}>
           <span className="checkbox">
             <BsSquareFill className={`check-icon1 ${moviesList[1].checked && 'check-icon-open1'}`} />
           </span>
           <span className="item-text">{moviesList[1].name}</span>
         </li>        
       </ul> */}
    <MoviesList>
          {
            MoviesList.map(Movie=>(
              <MovieItem key={Movie.name} MovieName={Movie.name} checked={Movie.checked} />
            )
          )};          
    </MoviesList>


       <button className="boton_cancel" onClick={closeModalMovies}>
         CANCEL
       </button>
       <button className="boton_reset" onClick={resetModalMovies}>
         RESET
       </button>
       <button className="boton_aply">APPLY</button>
     </div>
   );
}

export default ModalMovies;
