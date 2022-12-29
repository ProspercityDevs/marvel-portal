import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool
};

function Fecha() {
  let fecha = new Date().toDateString();
  return fecha;
}

export default function CharacterCard({ image, name, isSkeleton }) {
  console.log(name);
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        <h5 className="u-no-margin">{name}</h5>
        <h5 className="mvl-character-card__data">{Fecha()}</h5>
      </div>
    </div>
  );
}
