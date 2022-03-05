import { pageZigZagGenerator } from "/src/scripts/Scripts-Categories/Helpers/CategoriesZigZagGenerator.js";
import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/Body-Generaotors/makeGeneralBody.js";

import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import {
  mainStorage,
  STORAGE_KEY,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";

export const makeCategoriesBody = (category) => {
  makeGeneralBody("pages", category);

  pageZigZagGenerator(category);

  //!modal
  updateModalUI(mainStorage, STORAGE_KEY);
  clearCartModal();
  updateCartWithPlusMinus(mainStorage);
};
