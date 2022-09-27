import "@/assets/styles/components/_character-card.scss";

export default function CharacterCard({ image, name, isSkeleton }) {
  return (
    <div className="mvl-character-card" data-is-skeleton={isSkeleton}>
      <div className="mvl-character-card__image-container">
        <img className="mvl-character-card__image" src={image} alt="" />
      </div>
      <div className="mvl-character-card__body">
        <h4 className="u-no-margin">{name}</h4>
      </div>
    </div>
  );
}
