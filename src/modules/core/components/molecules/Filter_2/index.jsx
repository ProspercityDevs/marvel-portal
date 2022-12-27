import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import PropTypes from 'prop-types';
import {SeriesGridPaginated} from '../../../../marvel-characters/components/CharacterGrid/seriesGrid.jsx';
// import CharacterCard from 'src/modules/marvel-characters/components/CharacterCard';
//  import CharacterGrid from 'src/modules/marvel-characters/components/CharacterGrid/index';
 import CharacterGridPaginated from 'src/modules/marvel-characters/components/CharacterGrid/index';




function ShowMoviesList() {
  const series=SeriesGridPaginated();
  const [id, setId]=useState([series.id]);
  const [setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [domain, setDomain]=useState("");
  const handleReset = () => {};

  const handleSelect=(e)=>{
    setId(e.target.value);
    setDomain("series/"+e.target.value+"/characters")
   
  };
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="movies">
      <ul className="movies__list">
      {series.map((item, index) => (
          <li key={index} onClick={handleSelect} className="movies__list--item">
            <input value={item.id} type="radio" name="series"/>
            <label className="movies__list--text">{item.name}</label>
          </li>
        ))}
      </ul>
      <div className="movies__buttons--container">
        <div className="movies__buttons--left">
          <button className="movies__buttons" onClick={()=> HandleApply(domain) }>
            Apply
          </button>
        </div>
        <div className="movies__buttons--right">
          <button className="movies__buttons" onClick={handleReset}>
            Reset
          </button>
          <button className="movies__buttons" onClick={handleToggle}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

HandleApply.propTypes = {
  domain: PropTypes.string
}
function HandleApply (domain) {

  console.log("hande "+domain);
  const containerGrid = document.getElementById('container-grid');
  ReactDOM.render(
    <CharacterGridPaginated domain={domain}/>,
    containerGrid,
   
  );
 
};

export default ShowMoviesList;