import './styles.scss';
import PropTypes from 'prop-types';

ResultsTotalItems.propTypes = {
    totalItems: PropTypes.number.isRequired
};

function ResultsTotalItems( { totalItems }) {
    return(
        <div className="Container-span">
            <span className="span-results">{totalItems} RESULTADOS</span>
        </div>
    )    
};

export default ResultsTotalItems;


