import { SET_CATEGORY, SET_FILTER } from "../../constant/properties";

const initialState = {
  categoryData: [],
  category: [],
};

function categoryReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        categoryData: action.data,
      };
    case SET_FILTER:
      return {
        ...state,
        category: action.data,
      };
    default:
      return { ...state };
  }
}

export default categoryReducer;
