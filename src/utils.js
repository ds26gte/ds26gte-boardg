// this just contains a helper fn, not a component

export function getImageUrl(person, thumbnailSize = 's') {
  return (
    'https://i.imgur.com/' + person.imageId + thumbnailSize + '.jpg'
  );
}
