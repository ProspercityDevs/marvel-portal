import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Multiselect from "multiselect-react-dropdown"; 
import { useState } from 'react';


export default function Filter() { 
  const [movie, setMovie] = useState([
'ANT-MAN',
'ANT-MAN AND THE WASP', 'ARMOR WARS',
'AVENGERS: AGE OF ULTRON',
'AVENGER: INFINITY WAR', 'BLACK PANTER',
'BLACK PANTER: WAKANDA FOREVER'
]);

 return (
  <div className="mvl-character-gri-filters">    
          <input className="mvl-container-search-left" type="text" placeholder="SEARCH"/> 
           <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon"/>
<div className="container-checked"  >
<Multiselect className="MOVIE-2" placeholder="MOVIE" 
isObject={false}
onkeyPressFn={function noRefCheck() {}}
onRemove= {function noRefCheck() {}}
onSearch={function noRefCheck() {}}
onSelect={function noRefCheck()  {}}
options={movie}
showCheckbox
/>
</div>
</div>
 );
}


















// export default function Filter() {
//   return (
//     <div className="mvl-character-gri-filters">    
//        <input className="mvl-container-search-left" type="text" placeholder="SEARCH"/> 
//          <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon"/>

//       <div className="container-checked">
//         <div className="select-btn">
//           <span className="btn-text">MOVIE</span>
//           <span className="arrow-dwn">
//             <i className="fa-solid fa-chevron-down"></i>
//           </span>
//         </div>

//         <ul className="list-items">
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">HTML & CSS</span>
//           </li>
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">Bootstrap</span>
//           </li>
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">JavaScript</span>
//           </li>
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">Node.Js</span>
//           </li>
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">React JS</span>
//           </li>
//           <li className="item">
//             <span className="checkbox">
//               <i className="fa-solid fa-check check-icon"></i>
//             </span>
//             <span className="item-text">Mango DB</span>
//           </li>
//         </ul>
//       </div>
      
//       <div className="container-checked2">
//         <div className="select-btn">
//           <span className="btn-text">TV</span>
//           <span className="arrow-dwn">
//             <i className="fa-solid fa-chevron-down"></i>
//           </span>
//         </div>
//         </div>
//       </div>
//   );
// }
