export function getCharacterImage(comic) {
  if (!comic.thumbnail) {
    return null;
  }
  const { path, extension } = comic.thumbnail;
  return `${path}.${extension}`;
}
