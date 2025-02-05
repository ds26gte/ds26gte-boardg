import { getImageUrl } from './utils';

export default function Avatar({person, size = 100}) {
  let thumbnailSize = 's';
  if (size > 90) {
    thumbnailSize = 'b';
  }
  // a component returns a single tag.
  // the HTML attribute `class` should be called `className` in React
  return (
    <img
      className="avatar"
      src={getImageUrl(person, thumbnailSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

