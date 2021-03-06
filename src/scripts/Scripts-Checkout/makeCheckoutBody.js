import { headerAndFooterGenerator } from "/src/scripts/Scripts-Helpers/Body-Generaotors/Helpers/headerAndFooterGenerator.js";
import { navigationBar } from "/src/scripts/Scripts-Navigation/navigation.js";
import { checkoutWholeMainGenerator } from "./Helpers/checkoutWholeMainGenerator.js";
import { changeBodyColor } from "./Helpers/changeBodyColor.js";
import { overlayGenerator } from "/src/scripts/Scripts-Helpers/Body-Generaotors/Helpers/overlayGenerator.js";
import {
  mainStorage,
  STORAGE_KEY,
  clearCartModal,
  updateCartWithPlusMinus,
} from "/src/scripts/Scripts-Cart/addToCart.js";
import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";
import { summaryGenerator } from "./Helpers/summaryGenerator.js";
import { modalPaymentGenerator } from "./Helpers/modalPaymentGenerator.js";

export const makeChckoutBody = () => {
  //! body
  headerAndFooterGenerator();
  changeBodyColor();
  checkoutWholeMainGenerator();
  overlayGenerator();
  navigationBar();

  // !cart
  updateModalUI(mainStorage, STORAGE_KEY);
  clearCartModal();
  updateCartWithPlusMinus(mainStorage);
  summaryGenerator(mainStorage);
  modalPaymentGenerator(mainStorage);

  //! pay

  const payBtb = document.getElementById(`payBtn`);
  const paymentModal = document.querySelector(`.modal__payment`);
  const overlay = document.querySelector(`.overlay`);

  payBtb.addEventListener(`click`, () => {
    overlay.classList.remove("hidden");
    paymentModal.classList.remove(`hidden`);

    document.body.style.overflow = `hidden`;
  });
};
