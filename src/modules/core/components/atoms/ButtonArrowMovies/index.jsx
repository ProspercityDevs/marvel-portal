import './styles.scss';
import { RiArrowDropDownFill } from 'react-icons/ri';
import { useState } from 'react';
import ModalMovies from '../ModalMovies';
import PropTypes from 'prop-types';

ButtonArrowMovies.propTypes = {
  estado: PropTypes.bool
 };

 function ButtonArrowMovies() {
   const [estado, setEstado] = useState(false);

   const openModalMovies = () => {
     if (estado == true) {
       setEstado(false);
     } else {
       setEstado(true);
     }
   };

   const closeModalMovies = () => {
     setEstado(false);
   };

   return (
     <div className="container">
       <div className="selec-btn">
         <button className="btn-text" onClick={openModalMovies}>
           MOVIE <RiArrowDropDownFill className={`icon1 ${estado && 'icon1-open'}`} />
         </button>
      </div>
         <ModalMovies estado={estado} />
     </div>
   )
 };

 export default ButtonArrowMovies;
