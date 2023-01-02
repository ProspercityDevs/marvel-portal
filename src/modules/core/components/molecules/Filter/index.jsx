import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOM from 'react-dom/client';
import  CharacterGridPaginated  from '@/modules/marvel-characters/components/CharacterGrid/index';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ItemsName } from 'src/modules/marvel-characters/components/CharacterGrid/itemnsName';
import ButtonArrow from '../Filter_2';
import { useState } from 'react';
// import {AiFillCaretDown} from "react-icons/ai";
function OnChangeName(text){
  const name={
    nameStartsWith:text
  }
  const root3 = ReactDOM.createRoot(document.getElementById('container-grid'));
  root3.render(
    <CharacterGridPaginated name={name} domain={`characters`}/>, 
  );
}

export default function Filter() {
  const [text, setText]=useState("");
  const results=ItemsName();
  
  const inputElem= document.getElementById("input-search");
  const resultsElem=document.getElementById("autocomplete-results");
  const onChangeValue=((e)=>{
    setText(e.target.value);
  })
 
  if(text.length>2){
    autoComplete()
  };

  async function autoComplete(){
    const valueInput=inputElem.value;
    const resultados =results.filter((result)=>{
      return result.name.toLowerCase().startsWith(valueInput.toLowerCase())
    });
    const resultsElem=document.getElementById("autocomplete-results");
    resultsElem.innerHTML = resultados.map((result, index) => {
      const isSelected = index === 0;
      return `
        <li
          id='autocomplete-result-${index}'
          class='autocomplete-result${isSelected ? ' selected' : ''}'
          role='option'
          ${isSelected ? "aria-selected='true'" : ''}
        >
          ${result.name}
        </li>
      `
        }).join('');
        resultsElem.classList.remove('hidden');
  }
  const handleResultClick=((event)=> {
    if (event.target && event.target.nodeName === 'LI') {
      selectItem(event.target)
    }
  })
  
  const selectItem=((e) =>{
    if (e) {
      inputElem.value = e.innerText;
      hideResults();
      OnChangeName(e.innerText)
    }
  })
  
  const hideResults=(()=> {
    resultsElem.innerHTML = '';
    resultsElem.classList.add('hidden');
  })
 
  const handler=((e)=>{if(e.key=="Enter"){
    OnChangeName(text);
  }})
  return (
    <>
      <div className="mvl-character-gri-filters">
        <input 
        className="mvl-container-search-left" 
        id="input-search" type="text" 
        value={text} 
        onChange={onChangeValue} 
        onKeyDown={handler} 
        placeholder="SEARCH"  
        aria-label='Search'
        aria-autocomplete='both'
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="search-container__icon" />
        <ul
        id='autocomplete-results'
        role='listbox'
        aria-label='Search'
        onClick={handleResultClick}
        >
        </ul>

        <div className="container-checked-two">
          <ButtonArrow/>
        </div>
       
      </div>
      
    </>
  );
}