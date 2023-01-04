import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.any,
  description:  PropTypes.string,
  name: PropTypes.string,
  domain: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export function CharacterCard({ image, name,description, isSkeleton, domain}) {
  const subName =(name)=>{
    let subNameValue;
    let value=name.indexOf('(');
    if(value==-1){
      return (<p></p>);
    }else{
      subNameValue= name.slice(value+1, -1);
    }
    return subNameValue
  }
    if(domain=='characters'){
      return (
        <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
          <div className="mvl-character-card__image-container">
            <img className="mvl-character-card__image" src={`${image.path}.${image.extension}`} alt={description} />
          </div>
          <div className="mvl-character-card__body">
            <h4 className="u-no-margin">{name}</h4>
            <br></br>
            <h5 className="u-no-margin">{subName(name)}</h5>
          </div>
        </div>
      );
    }
  
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={`${image.path}.${image.extension}`} alt={description} /> 
      </div>
      <div className="mvl-character-card__body">
        <h4 className="u-no-margin">{name}</h4>
        <br></br>
        <h5 className="u-no-margin">{description}</h5>
      </div>
    </div>
  );
}
