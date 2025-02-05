function Recipe({ drinkers }) {
  return (
    <ol>
    <li>Boil {drinkers} cups of water</li>
    <li>Add {drinkers} spoons of tea</li>
    <li>Add {0.5 * drinkers} cups of milk</li>
    </ol>
  );
}

export default function MultRecipes() {
  return (
    <>
    <h1>Spiced Chai</h1>
    <h2>For two</h2>
    <Recipe drinkers={2} />
    <h2>For four</h2>
    <Recipe drinkers={4} />
    </>
  );
}
