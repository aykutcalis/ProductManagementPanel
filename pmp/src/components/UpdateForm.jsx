import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../store/slices/productSlice";

function UpdateForm({ product, onCancel, onUpdate }) {
  const [updatedName, setUpdatedName] = useState(product.name);
  const [updatedDescription, setUpdatedDescription] = useState(
    product.description
  );
  const [updatedCost, setUpdatedCost] = useState(product.cost);

  const dispatch = useDispatch();

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(
      updateProduct({
        id: product.id,
        name: updatedName,
        description: updatedDescription,
        cost: updatedCost,
      })
    );
    onUpdate();
  };

  return (
    <div className="panel">
      <h4 className="subtitle is-3 ">Ürün Güncelle</h4>
      <form onSubmit={handleUpdate}>
        <div className="field">
          <label className="label">Ürün Adı</label>
          <input
            className="input is-expanded"
            value={updatedName}
            onChange={(e) => setUpdatedName(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Açıklama</label>
          <textarea
            className="input is-expanded"
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
          />
        </div>
        <div className="field">
          <label className="label">Fiyat</label>
          <input
            className="input is-expanded"
            type="number"
            value={updatedCost}
            onChange={(e) => setUpdatedCost(parseInt(e.target.value))}
          />
        </div>
        <div className="field">
          <button className="button is-primary" type="submit">
            Güncelle
          </button>
          <button className="button is-danger" onClick={onCancel}>
            İptal
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
