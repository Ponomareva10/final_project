import React from "react";
import Product from "../Product/Product";

const SetAcces = ({ looksItem }) => {
  return (
    <div>
      {looksItem.map((card) => (
        <Product key={card.id} card={card} />
      ))}
    </div>
  );
};

export default SetAcces;
