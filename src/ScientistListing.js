import { people } from './data';
import { getImageUrl } from './utils';

const listItems = people.map(function(person) {
  return (
    <li key={person.id}>
    <img src={getImageUrl(person)}
    alt={person.name} />
    <p>
    <b>{person.name}</b>
    {' ' + person.profession + ' '}
    known for {person.accomplishment}
    </p>
    </li>
  );

});

export default function ScientistListing() {
  return (
    <>
    <h1>Lists of scientists</h1>
    manipulates lists
    <ul>{listItems}</ul>
    </>
  );
}
