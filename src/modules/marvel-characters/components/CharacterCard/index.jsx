import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function CharacterCard({ image, name, isSkeleton }) {
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        {/* aca se trae la descripcion de lo solicitado */}
        <h4 className="u-no-margin">{name}</h4>
        <h6 className="marvel-label">
          1939<br></br>Timely Comics
        </h6>
        {/* <h6>Current Year { new Date().getFullYear().toString() }</h6> */}
      </div>
    </div>
  );
}
