import './styles.scss';
import PropTypes from 'prop-types';

SerieItem.propTypes = {
  title: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function SerieItem({ title,  isSkeleton }) {
  return (
    <label className="series__list--text">
      <input value={false} type="checkbox" />
        {title}
    </label>

    // <div className="mvl-character-list" data-is-skeleton={isSkeleton}>
    //     <div className="mvl-character-card__body-container">
    //     <div className="mvl-character-card__body">
    //       <h4 className="u-no-margin">{title}</h4>
    //     </div>
    //   </div>
    // </div>
  );
}
