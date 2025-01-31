import Profile from './Profile.js';

const linLanying = {
  name: 'Lin Lanying',
  imageId: '1bX5QH6'
}

const katsukoSaruhashi = {
  name: 'Katsuko Saruhashi',
  imageId: 'YfeOqp2'
}

const marieSklodowskaCurie = {
  name: 'Marie Skłodowska-Curie',
  imageId: 'szV5sdG'
}

export default function Gallery() {
  return (
    <>
    <h1>Amazing scientists</h1>
    uses subcomponents, passing props, changing one prop based on another
    <br/><br/>
    <Profile person={katsukoSaruhashi} />
    <Profile person={linLanying} size={80}/>
    <Profile person={marieSklodowskaCurie} size={90}/>
    </>
  );
}
