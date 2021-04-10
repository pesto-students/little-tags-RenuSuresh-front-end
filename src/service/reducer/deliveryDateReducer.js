import { SET_ESTIMATED_DELIVERY } from "../../constant/properties";

const initialState = {
  estimatedDelivery: Date,
};

function deliveryDateReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ESTIMATED_DELIVERY:
      return {
        ...state,
        estimatedDelivery: action.data,
      };
    default:
      return { ...state };
  }
}

export default deliveryDateReducer;
