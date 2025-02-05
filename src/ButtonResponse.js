function onPlayMovie() {
  alert('Playing');
}

function onUploadImage() {
  alert('Uploading image');
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
    {children}
    </button>
  );
}

export default function ButtonList() {
  return (
    <>
    <h1>Responsive buttons</h1>
    <Button onClick={onPlayMovie}>
    Play movie
    </Button>
    <Button onClick={onUploadImage}>
    Upload image
    </Button>
    </>
  );
}

