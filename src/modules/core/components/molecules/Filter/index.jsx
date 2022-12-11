import Multiselect from 'multiselect-react-dropdown';
import { useState } from 'react';

export default function Filter() {
  const [movie] = useState([
    'ANt-MAN',
    'ANT-MAN AND THE WASP',
    'ARMOR WARS',
    'AVENGERS: AGE OF ULTRON',
    'AVENGER: INFINITY WAR',
    'BLACK PANTER',
    'BLACK PANTER: WAKANDA FOREVER'
  ]);
  return (
    <div className="mvl-character-gri-filters">
      <input type="text" placeholder="search" />
      <div className="container-checked">
        <Multiselect
          isObject={false}
          onKeyPressFn={function noRefCheck() {}}
          onRemove={(event) => {
            console.log(event);
          }}
          onSearch={(event) => {
            console.log(event);
          }}
          onSelect={(event) => {
            console.log(event);
          }}
          options={movie}
          showCheckbox
        />
      </div>
    </div>
  );
}
