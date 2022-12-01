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
        <h6 className="etiqueta-marvel">
          1939<br></br>new date()getFullYear()
        </h6>
      </div>
    </div>
  );
}
