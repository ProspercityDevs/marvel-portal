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

  const [estado5, setestado5] = useState(false);
  const openModal5 = () => {
    if (estado5 == true) {
      setestado5(false);
    } else {
      setestado5(true);
    }
  };

  const [estado6, setestado6] = useState(false);
  const openModal6 = () => {
    if (estado6 == true) {
      setestado6(false);
    } else {
      setestado6(true);
    }
  };

  const [estado7, setestado7] = useState(false);
  const openModal7 = () => {
    if (estado7 == true) {
      setestado7(false);
    } else {
      setestado7(true);
    }
  };

  const resetModal = () => {
    setestado1(false);
    setestado2(false);
    setestado3(false);
    setestado4(false);
    setestado5(false);
    setestado6(false);
    setestado7(false);
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
        <li className="item">
          <span className="checkbox" onClick={openModal5}>
            <BsSquareFill className={`check-icon5 ${estado5 && 'check-icon-open5'}`} />
          </span>
          <span className="item-text">AVENGERS: INFINITY WAR</span>
        </li>

        <li className="item">
          <span className="checkbox" onClick={openModal6}>
            <BsSquareFill className={`check-icon6 ${estado6 && 'check-icon-open6'}`} />
          </span>
          <span className="item-text">BLACK PANTER</span>
        </li>
        <li className="item">
          <span className="checkbox" onClick={openModal7}>
            <BsSquareFill className={`check-icon7 ${estado7 && 'check-icon-open7'}`} />
          </span>
          <span className="item-text">BLACK PANTER: WAKANDA FOREVER</span>
        </li>
      </ul>

      <button className="boton_cancel" onClick={closeModal}>
        CANCEL
      </button>
      <button className="boton_reset" onClick={resetModal}>
        RESET
      </button>
      <button className="boton_aply" /*onClick={}*/> 
        APPLY</button>
    </div>
  );
}

export default Modal;

