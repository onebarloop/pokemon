import { useState, useEffect } from "react";
import "./ShoppingItem.css";
import avatar from "../../assets/images/avatar.png";

export default function ShoppingItem({ url }) {
  const [details, setDetails] = useState({
    image: avatar,
    cost: "?",
    name: "",
  });

  useEffect(() => {
    async function fetchItem() {
      // setDetails({ image: "../assets/images/avatar.png" });
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDetails({
          image: data.sprites.default,
          cost: data.cost,
          name: data.name,
        });
      } catch (error) {
        console.log(error);
      }
    }
    fetchItem();
  }, [url]);

  return (
    <>
      <article className="ShoppingItem__Item">
        <img
          className="ShoppingItem__image"
          src={details.image}
          alt="ShoppingItemImage"
        />
        <ul className="ShoppingItem__list">
          <li>{details.name}</li>
          <li>cost: {details.cost} ¥</li>
        </ul>
      </article>
    </>
  );
}
