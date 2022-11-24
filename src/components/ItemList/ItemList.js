import { useEffect, useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import "./ItemList.css";

export default function ItemList() {
  const [URL, setURL] = useState("https://pokeapi.co/api/v2/item/");
  const [items, setItems] = useState();

  function handleNextPage() {
    setURL(items.next);
  }

  function handlePreviousPage() {
    setURL(items.previous);
  }

  useEffect(() => {
    async function catchItem() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    catchItem();
  }, [URL]);

  return (
    <>
      <section className="ItemList__ItemList">
        {items?.results.map((item) => (
          <ShoppingItem key={item.name} url={item.url} />
        ))}
      </section>
      <button
        className="ItemList__button"
        type="button"
        onClick={handlePreviousPage}
      >
        previous
      </button>
      <button
        className="ItemList__button"
        type="button"
        onClick={handleNextPage}
      >
        next
      </button>
    </>
  );
}
