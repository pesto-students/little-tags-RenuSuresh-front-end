import { combineReducers } from "redux";
import userReducer from "./reducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";

export default combineReducers({
  userReducer,
  productReducer,
  categoryReducer,
  cartReducer,
});
