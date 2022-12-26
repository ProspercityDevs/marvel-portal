import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool,
  description: PropTypes.any
};

function Fecha() {
  let fecha = new Date().toDateString();
  return fecha;
}

export default function CharacterCard({ image, name, isSkeleton, description }) {
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        <h5 className="u-no-margin">{name}</h5>
        <h5 className="mvl-character-card__data">{Fecha()}</h5>
        <h7 className="u-no-margin_2">{description}</h7>
      </div>
    </div>
  );
}
