function toggleLight() {
  let bodyStyle = document.body.style;
  if (bodyStyle.backgroundColor === 'black') {
    bodyStyle.backgroundColor = 'white';
  } else {
    bodyStyle.backgroundColor = 'black';
  }
}

export default function ToggleLight() {
  return (
    <>
    <h1 style={{color: 'darkorange'}}>Turn light on and off</h1>
    <button onClick={toggleLight}>
    Toggle light
    </button>
    </>
  );
}
