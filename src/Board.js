import { useState } from 'react';

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue((value === 'X') ? null : 'X');
  }
  return <button className="square" onClick={handleClick}>{value}</button>;
}

export default function Board() {
  return (
    <>
    <h1>Simple board with togglable squares</h1>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>    
    </>
  );
}
