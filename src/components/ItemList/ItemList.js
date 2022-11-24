import { useEffect, useState } from "react";
import "./ItemList.css";

export default function ItemList() {
  const URL = "https://pokeapi.co/api/v2/item/";
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function catchItem() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setItems(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    }
    catchItem();
  }, []);

  return (
    <section className="ItemList__ItemList">
      {items.map((item) => (
        <article className="ItemList__Item" key={item.name}>
          {item.name}
        </article>
      ))}
    </section>
  );
}
