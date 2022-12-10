import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSquareFill } from 'react-icons/bs';

Modal.propTypes = {
  estado: PropTypes.bool,
  closeModal: PropTypes.object
};
function Modal({ estado, closeModal }) {
  const [estado1, setestado1] = useState(false);

  const openModal1 = () => {
    if (estado1 == true) {
      setestado1(false);
    } else {
      setestado1(true);
    }
  };
  const [estado2, setestado2] = useState(false);
  const openModal2 = () => {
    if (estado2 == true) {
      setestado2(false);
    } else {
      setestado2(true);
    }
  };
  const [estado3, setestado3] = useState(false);
  const openModal3 = () => {
    if (estado3 == true) {
      setestado3(false);
    } else {
      setestado3(true);
    }
  };
  const [estado4, setestado4] = useState(false);
  const openModal4 = () => {
    if (estado4 == true) {
      setestado4(false);
    } else {
      setestado4(true);
    }
  };
  const resetModal = () => {
    setestado1(false);
    setestado2(false);
    setestado3(false);
    setestado4(false);
  };

  return (
    <div className={`modal ${estado && 'modal-open'}`}>
      <ul className="list-items">
        <li className="item" onClick={openModal1}>
          <span className="checkbox">
            <BsSquareFill className={`check-icon1 ${estado1 && 'check-icon-open1'}`} />
          </span>
          <span className="item-text">ANT-MAN</span>
        </li>
        <li className="item" onClick={openModal2}>
          <span className="checkbox">
            <BsSquareFill className={`check-icon2 ${estado2 && 'check-icon-open2'}`} />
          </span>
          <span className="item-text">ANT-MAN AND THE WASP</span>
        </li>
        <li className="item" onClick={openModal3}>
          <span className="checkbox">
            <BsSquareFill className={`check-icon3 ${estado3 && 'check-icon-open3'}`} />
          </span>
          <span className="item-text">ARMOR WARS</span>
        </li>
        <li className="item">
          <span className="checkbox" onClick={openModal4}>
            <BsSquareFill className={`check-icon4 ${estado4 && 'check-icon-open4'}`} />
          </span>
          <span className="item-text">AVENGERS: AGE OF ULTRON</span>
        </li>
      </ul>
      <button className="boton_cancel" onClick={closeModal}>
        CANCEL
      </button>
      <button className="boton_reset" onClick={resetModal}>
        RESET
      </button>
      <button className="boton_aply">APPLY</button>
    </div>
  );
}

export default Modal;
