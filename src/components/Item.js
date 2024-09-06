import React, {useState}from "react";

function Item({ name, category }) {
  const [inList, setInList] = useState(false);
  const handleCartToggle = () => {
    setInList((prevInCart) => !prevInCart);
  };

  return (
    <li className={inList ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartToggle}>{inList ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
