import { pageZigZagGenerator } from "/src/scripts/Scripts-Categories/CategoriesZigZagGenerator.js";
import { makeZigzagLessBody } from "/src/scripts/Scripts-Categories/makeZigZagLessCategoiresBody.js";
import { navbarResponsive } from "/src/scripts/Scripts-Navigation/navbar.js";
import { cartModal } from "/src/scripts/Scripts-Navigation/cart.js";

export const makePageBody = (category) => {
  makeZigzagLessBody(category);
  pageZigZagGenerator(category);
  //!NAVIGATION\\
  navbarResponsive();
  cartModal();
};
