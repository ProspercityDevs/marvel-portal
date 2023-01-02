import React from 'react';
import './styles.scss';

export default function OrderCharacters(){
    return(
        <>
          <div>
            <h3>Ordenar por</h3>
          </div>
          <div>
            <select
              className="Arizona"
              id="lang"
            //   value={select}
              onChange={(e) => setselect(e.target.value)}>
              <option value="A-Z" tabIndex="0" className="Option-order-active " type="checkbox">
                A-Z
              </option>
              <option value="Z-A" tabIndex="0" className="Option-order" type="checkbox">
                Z-A
              </option>
            </select>
          </div>
        </>
    )
}
