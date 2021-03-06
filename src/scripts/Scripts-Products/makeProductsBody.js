import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/Body-Generaotors/makeGeneralBody.js";
import {
  mainStorage,
  STORAGE_KEY,
  addToCart,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";
import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import { plusMinusBtnFunctiality } from "/src/scripts/Scripts-Helpers/Others/plusMinusButtonsFunctionality.js";
import { productGenerator } from "/src/scripts/Scripts-Products/Helpers/productGenerator.js";

export const productPageGenerator = (product) => {
  makeGeneralBody("products");
  productGenerator(product);
  plusMinusBtnFunctiality();

  //! modal

  updateModalUI(mainStorage, STORAGE_KEY);
  addToCart();
  clearCartModal();
  updateCartWithPlusMinus(mainStorage);
};
