import { SET_PRODUCT } from "../../constant/properties";

const initialState = {
  productData: {},
};

function productReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        productData: action.data,
      };
    default:
      return { ...state };
  }
}

export default productReducer;
