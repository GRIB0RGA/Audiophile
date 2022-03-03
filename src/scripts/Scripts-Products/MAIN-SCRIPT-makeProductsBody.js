import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/makeGeneralBody.js";
import {
  addToCart,
  mainStorage,
  updateCart
} from "/src/scripts/Scripts-Helpers/addToCart.js";
import { plusMinusBtnFunctiality } from "/src/scripts/Scripts-Helpers/plusMinusButtonsFunctionality.js";
import { productGenerator } from "/src/scripts/Scripts-Products/productGenerator.js";

export const productPageGenerator = (product) => {
  makeGeneralBody();
  productGenerator(product);

  plusMinusBtnFunctiality();
  updateCart(mainStorage);
  addToCart();
};

// localStorage.clear();
