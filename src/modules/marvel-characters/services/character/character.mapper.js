
export function mapCharacterToCard(character) {
  return {
    name: character.name,
    image: character.thumbnail,
    id: character.id,
    description: character.description
  };
}
