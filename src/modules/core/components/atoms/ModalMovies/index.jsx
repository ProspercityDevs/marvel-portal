import './styles.scss';

import { useState } from 'react';
import MoviesList from '../../molecules/MoviesList';

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

  
  // const resetModalMovies = () => {
  //   setEstado1(false);
    
  return (
    <>
      <MoviesList>
        {
          MoviesList.map(
            Movie=>(
              <MovieItem key={Movie.name} MovieName={Movie.name} checked={Movie.checked} />
            )
        )};                                    
      </MoviesList>    

       <button className="boton_cancel" onClick={closeModalMovies}>
         CANCEL
       </button>
       {/* <button className="boton_reset" onClick={resetModalMovies}>
         RESET
       </button> */}
       <button className="boton_aply">APPLY</button>
    </>
   );
};

export default ModalMovies;
