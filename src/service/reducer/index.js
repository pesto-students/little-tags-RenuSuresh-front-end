import { combineReducers } from "redux";
import userReducer from "./reducer";
import productReducer from "./productReducer";
import categoryReducer from "./categoryReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";
import orderReducer from "./orderReducer";
import deliveryDateReducer from "./deliveryDateReducer";
import historyReducer from "./historyReducer";

export default combineReducers({
  userReducer,
  productReducer,
  categoryReducer,
  cartReducer,
  addressReducer,
  orderReducer,
  deliveryDateReducer,
  historyReducer,
});
