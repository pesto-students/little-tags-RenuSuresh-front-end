import { SET_ADDRESS, SET_SELECTED_ADDRESS } from "../../constant/properties";

const initialState = {
  addressData: [
    {
      id: "1",
      name: "Shakti  Palan",

      location: "Rounak Arcade, Gokhale Rd, Nr Sandesh Sweets",
      town: "Thane (west)",
      city: "Mumbai",
      state: "Maharashtra",
      pinCode: 400602,

      mobile: "9876655409",
      default: true,
    },
    {
      id: "2",
      name: "Pratik Mohan",

      location: "MG Road (west)",
      town: "",
      city: "Chennai",
      state: "Tamil Nadu",
      pinCode: 400602,

      mobile: "9876655408",
      default: false,
    },
  ],
  selectedAddress: {
    id: "1",
    name: "Shakti  Palan",

    location: "Rounak Arcade, Gokhale Rd, Nr Sandesh Sweets",
    town: "Thane (west)",
    city: "Mumbai",
    state: "Maharashtra",
    pinCode: 400602,

    mobile: "9876655409",
    default: true,
  },
};

function addressReducer(state = initialState, action) {
  switch (action.type) {
    case SET_ADDRESS:
      return {
        ...state,
        addressData: action.data,
      };
    case SET_SELECTED_ADDRESS:
      const addressAll = [...state.addressData];
      let selectedAddr = {};
      const index = addressAll.findIndex((addr) => {
        return addr.id === action.id;
      });

      if (index > -1) {
        selectedAddr = addressAll[index];
      }

      return { ...state, selectedAddress: selectedAddr };

    default:
      return { ...state };
  }
}

export default addressReducer;
