import { useState } from 'react';

import { sculptureList } from './sculptureList';

const numSculptures = sculptureList.length;

export default function SculptureShow() {
  // React state variables are associated with a component,
  // and as such must be declared and used within the component
  const [index, setIndex] = useState(0);
  function handleClick() {
    if (index === (numSculptures - 1)) {
      // can't setIndex to an overflowing index, and then zero it, as
      // each setIndex causes a re-render
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  let sculpture = sculptureList[index];
  return (
    <>
    <h1>Sculpture SlideShow</h1>
    <button onClick={handleClick}>Next</button>
    <h2>{sculpture.name} by {sculpture.artist}</h2>
    ({index+1} of {numSculptures})
    <br />
    <img src={sculpture.url} alt={sculpture.alt} />
    <p>
    {sculpture.description}
    </p>
    </>
  );
}
