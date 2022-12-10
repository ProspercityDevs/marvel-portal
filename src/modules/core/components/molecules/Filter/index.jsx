export default function Filter() {
  // const selectBtn = document.querySelector('.select-btn'),
  //   items = document.querySelectorAll('.item');

  // selectBtn.addEventListener('click', () => {
  //   selectBtn.classList.toggle('open');
  // });

  // items.forEach((item) => {
  //   item.addEventListener('click', () => {
  //     item.classList.toggle('checked');

  //     let checked = document.querySelectorAll('.checked'),
  //       btnText = document.querySelector('.btn-text');

  //     if (checked && checked.length > 0) {
  //       btnText.innerText = `${checked.length} Selected`;
  //     } else {
  //       btnText.innerText = 'Select Language';
  //     }
  //   });
  // });

  return (
    <div className="mvl-character-gri-filters">
      <input type="text" placeholder="search" />

      <div className="container-checked">
        <div className="select-btn">
          <span className="btn-text">Movie</span>
          <span className="arrow-dwn">
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        </div>

        <ul className="list-items">
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">HTML & CSS</span>
          </li>
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">Bootstrap</span>
          </li>
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">JavaScript</span>
          </li>
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">Node.Js</span>
          </li>
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">React JS</span>
          </li>
          <li className="item">
            <span className="checkbox">
              <i className="fa-solid fa-check check-icon"></i>
            </span>
            <span className="item-text">Mango DB</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
