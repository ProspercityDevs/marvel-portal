import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { useState } from 'react';
import ModalMovies from '../ModalMovies';

function ButtonArrowMovies() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle);
  };

  return (    
    <div className="movies_filter" onClick={handleToggle} >
      <div className="movies_filter--text">MOVIE</div>
      <RiArrowDropDownFill className={`movies_filter-icon ${toggle && 'movies_filter-icon-open'}`} />
      <ModalMovies />
    </div>
   )
 };

 export default ButtonArrowMovies;
