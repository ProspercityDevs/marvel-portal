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
<<<<<<< HEAD
        <h6 className="u-no-margin">1939 Timely comics</h6> <br></br>
=======
        <h6 className="marvel-label">1939 Timely Comics</h6>
        <h6>Current Year {new Date().getFullYear().toString()}</h6>
>>>>>>> develop
        <h4 className="u-no-margin">{name}</h4>
        <h6 className="etiqueta-marvel">
          1939<br></br>Timely Comics
        </h6>
      </div>
    </div>
  );
}
