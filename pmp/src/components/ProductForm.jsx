import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import {
  changeName,
  changeCost,
  changeDescription,
} from "../store/slices/formSlice";
import { addProduct } from "../store/slices/productSlice";
import Grid from "@mui/material/Grid";

function ProductForm() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const { name, description, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      description: state.form.description,
      cost: state.form.cost,
    };
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addProduct({ name, description, cost }));
  };
  console.log(name, description, cost);
  return (
    <Grid className="productForm panel"  >
      <h4 className="subtitle is-3 r" >Ürün Ekle</h4>
      <form onSubmit={handleSubmit}>
        <Grid className="field-group" container spacing={2}  >
          <Grid className="field" item xs={12} sm={3}  style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label">Ürün Adı</label >
            <input
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeName(event.target.value));
              }}
              value={name}
            />
          </Grid>
          <Grid className="field" item xs={12} sm={3}   style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label">Açıklama</label>
            <textarea
              className="input is-expanded"
              onChange={(event) => {
                dispatch(changeDescription(event.target.value));
              }}
              value={description}
            />
          </Grid>
          <Grid className="field" item xs={12} sm={3}  style={{ display: 'flex', flexDirection: 'column' }}>
            <label className="label">Fiyat (TL)</label>
            <input
              className="input is-expanded"
              type="number"
              onChange={(event) => {
                dispatch(changeCost(parseInt(event.target.value)));
              }}
              value={cost}
            />
          </Grid>
        </Grid>
        <Grid className="field">
          <button className="button is-primary">Kaydet</button>
        </Grid>
      </form>
    </Grid>
  );
}

export default ProductForm;
