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
      <div className="mvl-character-card__body-container">
        <div className="mvl-character-card__body">
          <h6 className="marvel-label">1939 Timely Comics</h6>
          <h6 className="marvel-label">{new Date().toDateString()}</h6>
          <h4 className="u-no-margin">{name}</h4>
        </div>
      </div>
    </div>
  );
}
