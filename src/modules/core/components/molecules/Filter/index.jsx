export default function Filter() {
  return (
    <div id="srch" className="mvl-character-gri-filters">
      <input
        type="text"
        value=""
        autoComplete="off"
        aria-autocomplete="list"
        aria-controls="react-autowhatever-1"
        className="typeahead__input"
        placeholder="Search"></input>
      {/* <input className="input" type="text" placeholder="search" onClick="cambiacolor" />*/}
    </div>
  );
}
