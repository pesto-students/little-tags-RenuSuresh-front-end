import { SET_ORDER } from "../../constant/properties";

const initialState = {
  orderData: {},
};

function orderReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        orderData: action.data,
      };
    default:
      return { ...state };
  }
}

export default orderReducer;
