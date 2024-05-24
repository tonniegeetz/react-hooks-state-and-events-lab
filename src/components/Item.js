import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function changeCart() {
    setInCart((empty) => !empty)
  }

  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={changeCart} className="add">
        {inCart ? "Remove from cart" : "Add to cart"}
      </button>
    </li>
  );
}

export default Item;
