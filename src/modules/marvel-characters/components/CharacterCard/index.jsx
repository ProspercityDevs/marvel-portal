import './styles.scss';
import PropTypes from 'prop-types';

CharacterCard.propTypes = {
  image: PropTypes.string,
  description:  PropTypes.string,
  name: PropTypes.string,
  isSkeleton: PropTypes.bool
};

export default function CharacterCard({ image, name,description, isSkeleton}) {
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
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt={description} />
      </div>
      <div className="mvl-character-card__body">
        <h4 className="u-no-margin">{name}</h4>
        <br></br>
        <h5 className="u-no-margin">{subName(name)}</h5>
      </div>
    </div>
  );
}
