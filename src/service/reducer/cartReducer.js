import {
  SET_CART_ITEM,
  MODIFY_ITEM_QUANTITY,
  MODIFY_ITEM_SIZE,
} from "../../constant/properties";

const initialState = {
  cart: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEM:
      console.log("actions>>>", action.data);
      return {
        ...state,
        cart: [...state.cart, action.data],
      };
    case MODIFY_ITEM_QUANTITY:
      state.cart.map((item) => {
        if (item.data.productId == action.data[1]) {
          item["quantity"] = action.data[0] + 1;
        }
      });
      return {
        ...state,
      };
    case MODIFY_ITEM_SIZE:
      state.cart.map((item) => {
        if (item.data.productId == action.data[1]) {
          item["size"] = action.data[0];
        }
      });
      return {
        ...state,
      };

    default:
      return { ...state };
  }
}

export default productReducer;
