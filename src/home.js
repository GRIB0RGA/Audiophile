import { navigationBar } from "/src/scripts/Scripts-Navigation/navigation.js";

import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import {
  mainStorage,
  STORAGE_KEY,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";

navigationBar();
updateModalUI(mainStorage, STORAGE_KEY);
clearCartModal();
updateCartWithPlusMinus(mainStorage);
