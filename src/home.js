import { navbarResponsive } from "/src/scripts/Scripts-Navigation/navbar.js";
import { cartModal } from "/src/scripts/Scripts-Navigation/cart.js";

import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import {
  mainStorage,
  STORAGE_KEY,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";

cartModal();
navbarResponsive();

updateModalUI(mainStorage, STORAGE_KEY);
clearCartModal();
updateCartWithPlusMinus(mainStorage);
