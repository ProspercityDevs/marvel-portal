import './style.scss';
import { AiFillCaretDown } from 'react-icons/ai';
import { useState } from 'react'; // Hooks paquete, para ver los estados
import Modal from './Modal';
import PropTypes from 'prop-types';

MovieFilter.propTypes = {
  letterMod: PropTypes.object,
  modalFcambio: PropTypes.object
};

export default function MovieFilter({letterMod, modalFcambio}) {
  const [estado, setestado] = useState(false);

  // useState, va hacer el estado inicial

  const openModal = () => {
    if (estado == true) {
      setestado(false);
    } else {
      setestado(true);
    }
  };

  const closeModal = () => {
    setestado(false);
  };

  return (
    <div className="container">
      <div className="selec-btn">
        <button className="btn-text" onClick={openModal}>
          SERIES <AiFillCaretDown className={`icon1 ${estado && 'icon1-open'}`} />
        </button>
      </div>

      <Modal letterMod={letterMod} modalFcambio={modalFcambio} estado={estado} closeModal={closeModal} />
    </div>
  );
}
