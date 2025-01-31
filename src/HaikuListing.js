import { Fragment } from 'react';

const poem = {
  lines: [
    'I write, erase, rewrite',
    'Erase again, and then',
    'A poppy blooms.'
  ]
}

export default function HaikuListing() {
  const lastIndex = poem.lines.length - 1;
  return (
    <>
    <h1>Haiku</h1>
    Insert hr between lines but not before 1st or after last line. Haiku starts:
    <br/><br/>
    {poem.lines.map(function(line, i) {
      return (
        <Fragment key={i}>
        {line}
        {(i !== lastIndex) && <hr />}
        </Fragment>
      );
    })}
    </>
  );
}

