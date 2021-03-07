import { SET_CATEGORY } from "../../constant/properties";

const initialState = {
  categoryData: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryData: action.data,
      };
    default:
      return { ...state };
  }
}

export default categoryReducer;
