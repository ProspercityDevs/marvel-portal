export function getSerieImage(serie) {
  if (!serie.thumbnail) {
    return null;
  }
  const { path, extension } = serie.thumbnail;
  return `${path}.${extension}`;
}
