function Item({name, isPacked}) {
  return (
    <li className='item'>{name} {isPacked? ' ✅' : ''}</li>
  );
}

export default function SallyPackingList() {
  return (
    <section>
    <h1>Sally Ride's Packing List</h1>
    <ul>
    <Item name="Space suit" isPacked={true} />
    <Item name="Helmet with a golden leaf" isPacked={true} />
    <Item name="Photo of Tam" isPacked={false} />
    </ul>
    </section>
  );
}
