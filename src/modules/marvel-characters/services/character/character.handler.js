export function getCharacterImage(character) {
  if (!character.thumbnail) {
    return null;
  }
  const { path, extension } = character.thumbnail;
  return `${path}.${extension}`;
}
