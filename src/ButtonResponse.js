function onPlayMovie() {
  alert('Playing');
}

function onUploadImage() {
  alert('Uploading image');
}

function Button({ onClick, children }) {
  // the argument object of Button contains info about how
  // it was called. The fields correspond to the attributes.
  // The special attribute `children` contains the array of
  // the enclosed tags
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

