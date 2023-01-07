import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { BsSquareFill } from 'react-icons/bs';

Modal.propTypes = {
  letterMod: PropTypes.object,
  modalFcambio: PropTypes.object,
  estado: PropTypes.bool,
  closeModal: PropTypes.object

};
function Modal({letterMod, modalFcambio, estado, closeModal  }) {
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

  const [estado8, setestado8] = useState(false);
  const openModal8 = () => {
    if (estado8 == true) {
      setestado8(false);
    } else {
      setestado8(true);
    }
  };

  const [estado9, setestado9] = useState(false);
  const openModal9 = () => {
    if (estado8 == true) {
      setestado9(false);
    } else {
      setestado9(true);
    }
  };

  const [estado10, setestado10] = useState(false);
  const openModal10 = () => {
    if (estado8 == true) {
      setestado10(false);
    } else {
      setestado10(true);
    }
  };

  const [estado11, setestado11] = useState(false);
  const openModal11 = () => {
    if (estado8 == true) {
      setestado11(false);
    } else {
      setestado11(true);
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
    setestado8(false);
    setestado9(false);
    setestado10(false);
    setestado10(false);
    setestado11(false);
  };
  //series boton apply
  function apply() {
    let text = '';
    if (estado1 == true) {
      console.log('Fantastic Four by Dan Slott Vol. 1');
      let str1 = '31445';
      text = text.concat(',', str1);
    }
    if (estado2 == true) {
      console.log('15 Love');
      let str2 = '13379';
      text = text.concat(',', str2);
    }
    if (estado3 == true) {
      console.log('2020 Ironheart');
      let str3 = '29694';
      text = text.concat(',', str3);
    }
    if (estado4 == true) {
      console.log('2020 Rescue');
      let str4 = '29696';
      text = text.concat(',', str4);
    }
    if (estado5 == true) {
      console.log('2099 Alpha');
      let str5 = '27980';
      text = text.concat(',', str5);
    }
    if (estado6 == true) {
      console.log('4');
      let str6 = '725';
      text = text.concat(',', str6);
    }
    if (estado7 == true) {
      console.log('5 Ronin');
      let str7 = '15276';
      text = text.concat(',', str7);
    }
    if (estado8 == true) {
      console.log('A+X');
      let str8 = '16450';
      text = text.concat(',', str8);
    }
    if (estado9 == true) {
      console.log('A-Force');
      let str9 = '20562';
      text = text.concat(',', str9);
    }
    if (estado10 == true) {
      console.log('A-Next');
      let str10 = '3620';
      text = text.concat(',', str10);
    }

    if (text.length > 0) {
      console.log(text);
      modalFcambio(true);
      letterMod(text);
    } else {
      console.log('No has seleccionado nada aún');
      modalFcambio(false);
      letterMod(text);
    }
  }

  return (
    <div className="principal">
      <div className={`modal ${estado && 'modal-open'}`}>
        <ul className="list-items">
          <li className="item" onClick={openModal1}>
            <span className="checkbox">
              <BsSquareFill className={`check-icon1 ${estado1 && 'check-icon-open1'}`} />
            </span>
            <span className="item-text">Fantastic Four by Dan Slott Vol. 1</span>
          </li>

          <li className="item" onClick={openModal2}>
            <span className="checkbox">
              <BsSquareFill className={`check-icon2 ${estado2 && 'check-icon-open2'}`} />
            </span>
            <span className="item-text">15 Love (2011)</span>
          </li>

          <li className="item" onClick={openModal3}>
            <span className="checkbox">
              <BsSquareFill className={`check-icon3 ${estado3 && 'check-icon-open3'}`} />
            </span>
            <span className="item-text">2020 Ironheart</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal4}>
              <BsSquareFill className={`check-icon4 ${estado4 && 'check-icon-open4'}`} />
            </span>
            <span className="item-text">2020 Rescue</span>
          </li>
          <li className="item">
            <span className="checkbox" onClick={openModal5}>
              <BsSquareFill className={`check-icon5 ${estado5 && 'check-icon-open5'}`} />
            </span>
            <span className="item-text">2099 Alpha</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal6}>
              <BsSquareFill className={`check-icon6 ${estado6 && 'check-icon-open6'}`} />
            </span>
            <span className="item-text">4</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal7}>
              <BsSquareFill className={`check-icon7 ${estado7 && 'check-icon-open7'}`} />
            </span>
            <span className="item-text">5 Ronin</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal8}>
              <BsSquareFill className={`check-icon8 ${estado8 && 'check-icon-open8'}`} />
            </span>
            <span className="item-text">A+X</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal9}>
              <BsSquareFill className={`check-icon9 ${estado9 && 'check-icon-open9'}`} />
            </span>
            <span className="item-text">A-Force</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal10}>
              <BsSquareFill className={`check-icon10 ${estado10 && 'check-icon-open10'}`} />
            </span>
            <span className="item-text">A-Next</span>
          </li>

          <li className="item">
            <span className="checkbox" onClick={openModal11}>
              <BsSquareFill className={`check-icon11 ${estado11 && 'check-icon-open11'}`} />
            </span>
            <span className="item-text">Age of Ultron</span>
          </li>
        </ul>
      </div>
      <div className={`modal ${estado && 'modal-open2'}`}>
        <button className="boton_cancel" onClick={closeModal}>
          CANCEL
        </button>
        <button className="boton_reset" onClick={resetModal}>
          RESET
        </button>
        <button className="boton_aply" onClick={apply}>
          APPLY
        </button>
      </div>
    </div>
  );
}

export default Modal;
