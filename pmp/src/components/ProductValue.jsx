import React from "react";
import { useSelector } from "react-redux";

function ProductValue() {
  const totalCost = useSelector(({ form, products: { data, searchTerm } }) => {
    return data
      .filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, product) => acc + product.cost, 0);
  });
  return <div className="productPrice">Toplam Tutar:{totalCost} TL</div>;
}

export default ProductValue;
