import './style.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';

ModalAuto.propTypes = {
  search: PropTypes.string
};
function ModalAuto({ search }) {
  const [estado1, setestado1] = useState(true);

  const openModalAuto1 = () => {
    if (estado1 == true) {
      setestado1(false);
    } else {
      setestado1(true);
    }
  };

  return (
    <div className="principalM">
      <div className={`modalAuto ${search && 'modalAuto-open'}`}>
        <ul className="listaM">
          <h6 onChange={openModalAuto1}>hola</h6>
        </ul>
      </div>
    </div>
  );
}

export default ModalAuto;
