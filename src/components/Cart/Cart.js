import "./Cart.css";

export default function Cart({ shoppingCart }) {
  return (
    <>
      <section className="ItemList__ItemList">
        <ul>
          {shoppingCart?.map((item) => (
            <li key={item.name}>
              {item.name}
              {item.cost}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
