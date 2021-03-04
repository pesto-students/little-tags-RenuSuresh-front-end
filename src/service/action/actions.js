import { SET_USER } from "../../constant/properties";

export const setUser = (data) => {
  return {
    type: SET_USER,
    data,
  };
};
