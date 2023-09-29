import { createSlice, nanoid } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "form",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    addProduct(state, action) {
      debugger;
      state.data.push({
        name: action.payload.name,
        description: action.payload.description,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    removeProducts(state, action) {
      debugger;
      const updatedProducts = state.data.filter((product) => {
        return product.id !== action.payload;
      });
      state.data = updatedProducts;
    },
    updateProduct(state, action) {
      const { id, name, description, cost } = action.payload;
      const productIndex = state.data.findIndex((product) => product.id === id);

      if (productIndex !== -1) {
        state.data[productIndex].name = name;
        state.data[productIndex].description = description;
        state.data[productIndex].cost = cost;
      }
    },
  },
});
export const { addProduct, removeProducts, changeSearchTerm, updateProduct } =
  productSlice.actions;
export const productReducer = productSlice.reducer;
