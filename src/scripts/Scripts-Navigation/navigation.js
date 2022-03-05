import { navbarResponsive } from "/src/scripts/Scripts-Navigation/Helpers/navbar.js";
import { cartModal } from "/src/scripts/Scripts-Navigation/Helpers/cart.js";
import { exitWithOverlay } from "/src/scripts/Scripts-Navigation/Helpers/overlay.js";

export const navigationBar = () => {
  navbarResponsive();
  cartModal();
  exitWithOverlay();
};
