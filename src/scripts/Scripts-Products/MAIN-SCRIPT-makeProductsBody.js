import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/makeGeneralBody.js";
import {
  mainStorage,
  STORAGE_KEY,
  addToCart,
  clearCartModal,
} from "/src/scripts/Scripts-Cart/addToCart.js";
import {
  updateItemsInCart,
  updateModalUI,
  updateTotal,
} from "/src/scripts/Scripts-Cart/updateModalUI.js";
import { plusMinusBtnFunctiality } from "/src/scripts/Scripts-Helpers/plusMinusButtonsFunctionality.js";
import { productGenerator } from "/src/scripts/Scripts-Products/productGenerator.js";

export const productPageGenerator = (product) => {
  makeGeneralBody("products");
  productGenerator(product);
  plusMinusBtnFunctiality();

  //! modal

  updateTotal(mainStorage);
  updateItemsInCart(mainStorage);
  updateModalUI(mainStorage, STORAGE_KEY);
  addToCart();
  clearCartModal();
};

// localStorage.clear();
