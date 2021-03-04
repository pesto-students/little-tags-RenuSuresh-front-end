import { SET_USER } from "../../constant/properties";

const initialState = {
  userData: "",
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userData: action.data,
      };
    default:
      return { ...state };
  }
}

export default userReducer;
