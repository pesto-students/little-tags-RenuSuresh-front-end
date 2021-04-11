import { SET_HISTORY } from "../../constant/properties";

const initialState = {
  historyData: {},
};

function historyReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HISTORY:
      return {
        ...state,
        historyData: action.data,
      };
    default:
      return { ...state };
  }
}

export default historyReducer;
