import {
  SET_PRODUCT,
  SET_USER,
  SET_CATEGORY,
  SET_CART_ITEM,
} from "../../constant/properties";

export const setUser = (data) => {
  return {
    type: SET_USER,
    data,
  };
};

export const setProduct = (data) => {
  return {
    type: SET_PRODUCT,
    data,
  };
};

export const setCategory = (data) => {
  return {
    type: SET_CATEGORY,
    data,
  };
};

export const setCart = (data) => {
  return {
    type: SET_CART_ITEM,
    data,
  };
};
