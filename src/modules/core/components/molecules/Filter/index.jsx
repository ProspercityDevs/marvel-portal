import './styles.scss';
import MovieFilter from '../MovieFilter';

export default function Filter() {
  return (
    <div className="mvl-character-gri-filters">
      <div className="col">
        <div className="contenerdor_1">
          <input className="mvl-character-gri-input" type="text" placeholder="search" />
        </div>
      </div>

      <div className="col">
        <div className="contenerdor_2">
          <MovieFilter />
        </div>
      </div>
    </div>
  );
}
