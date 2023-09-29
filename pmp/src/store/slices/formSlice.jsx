import { createSlice } from "@reduxjs/toolkit";
import { addProduct } from "./productSlice";

const formSlice = createSlice({
  name: "form",
  initialState: {
    name: "",
    description: "",
    cost: 0,
  },
  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
    changeDescription(state, action) {
      state.description = action.payload;
    },
    changeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addProduct, (state, action) => {
      state.name = "";
      state.description = "";
      state.cost = 0;
    });
  },
});
export const { changeName } = formSlice.actions;
export const { changeDescription } = formSlice.actions;
export const { changeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
