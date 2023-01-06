
export function mapCharacterToCard(item) {
  return {
    name: item.name,
    image: item.thumbnail,
    title: item.title,
    id: item.id,
    description: item.description,
    url: item.urls,
    fullName: item.fullName
  };
}
