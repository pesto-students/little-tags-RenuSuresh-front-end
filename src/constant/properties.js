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
import slide_1 from "../assets/images/slide_1.webp";
import slide_2 from "../assets/images/slide_2.webp";
import slide_3 from "../assets/images/slide_3.webp";

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

export const HOME_CATEGORY = [
  {
    spotlight: [
      {
        image: popular1,
        tagline: "glasses",
      },
      {
        image: popular2,
        tagline: "watches",
      },
      {
        image: popular3,
        tagline: "jackets",
      },
      // https://m.media-amazon.com/images/I/81lPDmJfeWL._AC_UL480_FMwebp_QL65_.jpg
      {
        image: popular4,
        tagline: "clothes",
      },
    ],
    special: [
      {
        image: cloth_1,
        tagline: "dress",
      },
      {
        image: cloth_2,
        tagline: "sleeveDress",
      },
      {
        image: cloth_3,
        tagline: "kidDress",
      },
      {
        image: shoe_1,
        tagline: "ladyShoe",
      },
    ],
    toptrends: [
      {
        image: shoe_2,
        tagline: "latestShoe",
      },
      {
        image: watch_1,
        tagline: "watches",
      },

      {
        image: arrival6,
        tagline: "stylishGlasses",
      },
      {
        image: arrival8,
        tagline: "shoes",
      },
    ],
  },
];

export const SLIDE_INFO = [
  {
    backgroundImage: slide_1,
  },
  {
    backgroundImage: slide_2,
  },
  {
    backgroundImage: slide_3,
  },
];

export const ERRORS = {
  SELECT_SIZE_ERROR: "Please select Size",
};

export const SELECT_SIZE = "Select size";
