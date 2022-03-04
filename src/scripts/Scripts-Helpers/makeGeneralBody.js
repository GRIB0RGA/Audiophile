import { headerAndFooterGenerator } from "./headerAndFooterGenerator.js";
import { mainGenerator } from "./mainGenerator.js";
import { categoriesAndAboutSectionsGenerator } from "./categoriesAndAboutSectionsGenerator.js";
import { overlayGenerator } from "./overlayGenerator.js";
import { navbarResponsive } from "/src/scripts/Scripts-Navigation/navbar.js";
import { cartModal } from "/src/scripts/Scripts-Navigation/cart.js";

export const makeGeneralBody = (type) => {
  headerAndFooterGenerator();
  mainGenerator(type);
  categoriesAndAboutSectionsGenerator();
  overlayGenerator();
  //!NAVIGATION\\
  navbarResponsive();
  cartModal();
};
