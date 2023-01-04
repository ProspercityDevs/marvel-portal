import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

ModalAuto.propTypes = {
  search: PropTypes.string,
  modalAuto: PropTypes.func
};

function ModalAuto({ search, modalAuto }) {
  const [estado1, setestado1] = useState(true);
  const openModalAuto1 = () => {
    if (estado1 == true) {
      setestado1(false);
    } else {
      setestado1(true);
    }
  };

  const name = ['hola', 'buenos dias'];
  console.log(name);
  function modalAutoModal(a) {
    if (search.length > 0) {
      modalAuto(a);
    }
  }

  return (
    <div className="principalM">
      <div className={`modalAuto ${search && 'modalAuto-open'}`}>
        <ul className="listaM">
          {name.map((item) => (
            <li
              className="listaMa"
              key={item}
              onClick={() => modalAutoModal(item)}
              onChange={openModalAuto1}>
              <span className="item">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ModalAuto;
