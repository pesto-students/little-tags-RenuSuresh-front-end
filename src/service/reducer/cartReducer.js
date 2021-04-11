import {
  SET_CART_ITEM,
  MODIFY_ITEM_QUANTITY,
  MODIFY_ITEM_SIZE,
  REMOVE_FROM_BAG,
  ADD_TO_WISHLIST,
  EMPTY_CART,
} from "../../constant/properties";

const initialState = {
  cart: [],
  wishlist: [],
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CART_ITEM:
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
    case REMOVE_FROM_BAG:
      let newBag = [...state.cart];
      const index = state.cart.findIndex((bagItem) => {
        return bagItem.data.productId === action.productId;
      });

      if (index > -1) {
        newBag.splice(index, 1);
      }
      return {
        ...state,
        cart: newBag,
      };
    case ADD_TO_WISHLIST:
      let cartArr = [...state.cart];
      let wishlistArr = [...state.wishlist];
      const indexofProduct = state.cart.findIndex((bagItem) => {
        return bagItem.data.productId === action.productId;
      });

      if (indexofProduct > -1) {
        wishlistArr.push(cartArr[indexofProduct]);
        cartArr.splice(indexofProduct, 1);
      }
      return { ...state, cart: cartArr, wishlist: wishlistArr };
    case EMPTY_CART:
      return { ...state, cart: [] };
    default:
      return { ...state };
  }
}

export default productReducer;
