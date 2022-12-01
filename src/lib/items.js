import useFetch from "./fetch";
import { useState } from "react";

export default function useItems(url) {
  const [URL, setURL] = useState(url);
  const items = useFetch(URL);

  function handleNextPage() {
    setURL(items.next);
  }

  function handlePreviousPage() {
    setURL(items.previous);
  }
  return { items, handleNextPage, handlePreviousPage };
}
