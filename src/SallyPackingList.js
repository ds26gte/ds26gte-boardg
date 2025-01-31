function Item({name, isPacked}) {
  return (
    <li className='item'>{name} {isPacked && ' ✅'}</li>
  );
}

export default function SallyPackingList() {
  return (
    <>
    <h1>Sally Ride's Packing List</h1>
    uses conditional content based on prop value
    <ul>
    <Item name="Space suit" isPacked={true} />
    <Item name="Helmet with a golden leaf" isPacked={true} />
    <Item name="Photo of Tam" isPacked={false} />
    </ul>
    </>
  );
}
