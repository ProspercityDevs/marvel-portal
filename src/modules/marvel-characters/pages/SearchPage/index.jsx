import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

function SearchPage() {
  return (
    <div className="Container_Searchtwo">
    <input className="mvl-container-search-two" type="text" placeholder="SEARCH" />
    <FontAwesomeIcon icon={faMagnifyingGlass} className="search_Icon" />
    </div>
  );
}
export { SearchPage };

