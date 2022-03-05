import { pageZigZagGenerator } from "/src/scripts/Scripts-Categories/CategoriesZigZagGenerator.js";
import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/makeGeneralBody.js";

import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import {
  mainStorage,
  STORAGE_KEY,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";

export const makePageBody = (category) => {
  makeGeneralBody("pages");
  pageZigZagGenerator(category);

  //!modal
  updateModalUI(mainStorage, STORAGE_KEY);
  clearCartModal();
  updateCartWithPlusMinus(mainStorage);
};
