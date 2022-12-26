import './styles.scss';
import PropTypes from 'prop-types';

CharacterItem.propTypes = {
  name: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function CharacterItem({ name, isSkeleton }) {
  return (
    <div className="mvl-character-list" data-is-skeleton={isSkeleton}>
        <div className="mvl-character-card__body-container">
        <div className="mvl-character-card__body">
          <h4 className="u-no-margin">{name}</h4>
        </div>
      </div>
    </div>
  );
}
