import './styles.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSquareFill } from 'react-icons/bs';

ShowMoviesList.propTypes = {
  estado: PropTypes.bool,
  closeShowMoviesList: PropTypes.object
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

function ShowMoviesList({ estado, closeShowMoviesList }) {
  const [estado1, setEstado1] = useState(false);

  const openShowMoviesList = () => {
    if (estado1 == true) {
      setEstado1(false);
    } else {
      setEstado1(true);
    }
  };
  
  const resetShowMoviesList = () => {
    setEstado1(false);
    
  };

  return (
     <div className={`ShowMoviesList ${estado && 'ShowMoviesList-open'}`}>
       <ul className="list-items">
         <li className="item" onClick={openShowMoviesList}>
           <span className="checkbox">
             <BsSquareFill className={`check-icon1 ${estado && 'check-icon-open1'}`} />
           </span>
           <span className="item-text">ANT-MAN</span>
         </li>
        
       </ul>

       <button className="boton_cancel" onClick={closeShowMoviesList}>
         CANCEL
       </button>
       <button className="boton_reset" onClick={resetShowMoviesList}>
         RESET
       </button>
       <button className="boton_aply">APPLY</button>
     </div>
   );
}

export default ShowMoviesList;

