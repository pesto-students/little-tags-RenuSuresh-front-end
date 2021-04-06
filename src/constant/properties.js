import popular1 from "../assets/images/popular1.png";
import popular2 from "../assets/images/popular2.png";
import popular3 from "../assets/images/popular3.png";
import popular4 from "../assets/images/popular4.png";
import cloth_1 from "../assets/images/cloth_1.jpg";
import cloth_2 from "../assets/images/cloth_2.jpg";
import cloth_3 from "../assets/images/cloth_3.jpg";
import shoe_1 from "../assets/images/shoe_1.jpg";
import shoe_2 from "../assets/images/shoe_2.jpg";
import watch_1 from "../assets/images/watch_1.jpg";
import arrival1 from "../assets/images/arrival1.png";
import arrival6 from "../assets/images/arrival6.png";
import arrival8 from "../assets/images/arrival8.png";
import slide_4 from "../assets/images/slide_4.webp";
import slide_5 from "../assets/images/slide_5.webp";
import slide_6 from "../assets/images/slide_6.jpg";

import PhonePeImage from "../assets/images/phone-pe.png";
import GooglePayImage from "../assets/images/google-pay.png";

export const LANG_OPTION = ["english", "hindi"];
export const LOGO_IMG = "https://cdn.worldvectorlogo.com/logos/arrow-2.svg";
export const CONTACT_DETAILS =
  "9 , Shivaji Colony, Opp Guddy Bar,\r\nAndheri Kurla Rd, Chakala,\r\nAndheri (west),\r\nMumbai\r\nMaharashtra- 400099\r\n02228232309";

export const SET_USER = "SET_USER";
export const SET_PRODUCT = "SET_PRODUCT";
export const SET_CATEGORY = "SET_CATEGORY";
export const SET_CART_ITEM = "SET_CART_ITEM";
export const MODIFY_ITEM_QUANTITY = "MODIFY_ITEM_QUANTITY";
export const MODIFY_ITEM_SIZE = "MODIFY_ITEM_SIZE";
export const REMOVE_FROM_BAG = "REMOVE_FROM_BAG";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const SET_ADDRESS = "SET_ADDRESS";
export const SET_SELECTED_ADDRESS = "SET_SELECTED_ADDRESS";
export const SET_FILTER = "SET_FILTER";

export const HOME_CATEGORY = [
  {
    spotlight: [
      {
        image: popular1,
        tagline: "glasses",
        name: "glass",
      },
      {
        image: popular2,
        tagline: "watches",
        name: "watch",
      },
      {
        image: popular3,
        tagline: "jackets",
        name: "jacket",
      },
      // https://m.media-amazon.com/images/I/81lPDmJfeWL._AC_UL480_FMwebp_QL65_.jpg
      {
        image: popular4,
        tagline: "clothes",
        name: "cloth",
      },
    ],
    special: [
      {
        image: cloth_1,
        tagline: "dress",
        name: "dress",
      },
      {
        image: cloth_2,
        tagline: "sleeveDress",
        name: "sleeve",
      },
      {
        image: cloth_3,
        tagline: "kidDress",
        name: "kids",
      },
      {
        image: shoe_1,
        tagline: "ladyShoe",
        name: "shoe",
      },
    ],
    toptrends: [
      {
        image: shoe_2,
        tagline: "latestShoe",
        name: "shoe",
      },
      {
        image: watch_1,
        tagline: "watches",
        name: "watch",
      },

      {
        image: arrival6,
        tagline: "stylishGlasses",
        name: "glass",
      },
      {
        image: arrival8,
        tagline: "shoes",
        name: "shoe",
      },
    ],
  },
];

export const SLIDE_INFO = [
  {
    backgroundImage: slide_4,
  },
  {
    backgroundImage: slide_5,
  },
  {
    backgroundImage: slide_6,
  },
];

export const ERRORS = {
  SELECT_SIZE_ERROR: "Please select Size",
};

export const SELECT_SIZE = "Select size";
export const PAY_WITH_UPI = [
  { id: 1, type: "PhonePe", image: PhonePeImage },
  { id: 2, type: "Google Pay", image: GooglePayImage },
];
