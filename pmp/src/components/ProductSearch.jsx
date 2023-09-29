import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchTerm } from "../store/slices/productSlice";
import Grid from "@mui/material/Grid";

function ProductSearch() {
  const dispatch = useDispatch();

  const searchTerm = useSelector((state) => {
    debugger;
    return state.products.searchTerm;
  });
  return (
    <div className="listHeader">
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item xs={12} sm={6} marginBottom={("5px")}>
        <h3 className="title is-3">Ürünlerim</h3>
      </Grid>
      <Grid item xs={12} sm={3}  >
        <div className="search field is-horizontal" style={{ textAlign: 'right' }}>
          <label className="label" style={{ marginRight: '8px' }}>Ara</label>
          <input
            className="input"
            onChange={(event) => {
              dispatch(changeSearchTerm(event.target.value));
            }}
            value={searchTerm}
          />
        </div>
      </Grid>
    </Grid>
  </div>
  );
}

export default ProductSearch;
