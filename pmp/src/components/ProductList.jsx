import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeProducts } from "../store/slices/productSlice";
import UpdateForm from "./UpdateForm";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import { ThemeProvider, useTheme } from "@mui/material/styles";

function ProductList() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { products } = useSelector(
    ({ form, products: { data, searchTerm } }) => {
      const filteredProducts = data.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return {
        products: filteredProducts,
      };
    }
  );

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsUpdateFormOpen(true);
  };

  const handleCloseUpdateForm = () => {
    setSelectedProduct(null);
    setIsUpdateFormOpen(false);
  };

  const renderedProducts = products.map((product) => (
    <Grid item xs={12} sm={6} md={4} key={product.id}>
      <div
        className="productMain panel"
       
      >
        <h1>Ürün Adı: {product.name}</h1>
        <p>Ürün Açıklaması: {product.description}</p>
        <p>{product.cost} TL</p>
        <div className="buttons">
          <button
            className="button is-danger"
            onClick={() => {
              dispatch(removeProducts(product.id));
            }}
          >
            Sil
          </button>
          <button
            className="button is-primary"
            onClick={() => handleEditClick(product)}
          >
            Güncelle
          </button>
        </div>
      </div>
    </Grid>
  ));

  return (
    <div className="productList" style={{ marginBottom: "20px" }}>
      <Grid container spacing={2}>
        {renderedProducts}
      </Grid>
      <Modal open={isUpdateFormOpen} onClose={handleCloseUpdateForm}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: "20px",
          }}
        >
          {selectedProduct && (
            <UpdateForm
              product={selectedProduct}
              onCancel={handleCloseUpdateForm}
              onUpdate={handleCloseUpdateForm}
            />
          )}
        </div>
      </Modal>
    </div>
  );
}

export default ProductList;
