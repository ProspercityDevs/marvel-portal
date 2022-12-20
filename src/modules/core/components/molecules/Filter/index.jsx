import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
// import { Multiselect } from 'multiselect-react-dropdown';
// import { useState } from 'react';
import ButtonArrow from '../../atoms/ButtonArrow';
// import {AiFillCaretDown} from "react-icons/ai";


export default function Filter() {
  // const [movie] = useState([
  //   'ANT-MAN',
  //   'ANT-MAN AND THE WASP',
  //   'ARMOR WARS',
  //   'AVENGERS: AGE OF ULTRON',
  //   'AVENGER: INFINITY WAR',
  //   'BLACK PANTER',
  //   'BLACK PANTER: WAKANDA FOREVER'
  // ]);
  return (
    <div className="mvl-character-gri-filters">
      <input className="mvl-container-search-left" type="text" placeholder="SEARCH" />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-container__icon" />

      <div className="container-checked-two" >
      <ButtonArrow/>
        {/* <Multiselect
          className="MOVIE-2"
          placeholder="MOVIE" 
          isObject={false}
          onkeyPressFn={function noRefCheck() {}}
          onRemove={function noRefCheck() {}}
          onSearch={function noRefCheck() {}}
          onSelect={function noRefCheck() {}}
          options={movie}
          showCheckbox
        /> */}
      </div>
    </div>
  );
}