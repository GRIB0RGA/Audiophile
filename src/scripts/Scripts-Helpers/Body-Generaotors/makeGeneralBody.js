import { headerAndFooterGenerator } from "/src/scripts/Scripts-Helpers/Body-Generaotors/Helpers/headerAndFooterGenerator.js";
import { mainGenerator } from "./Helpers/mainGenerator.js";
import { categoriesAndAboutSectionsGenerator } from "./Helpers/categoriesAndAboutSectionsGenerator.js";
import { overlayGenerator } from "./Helpers/overlayGenerator.js";
import { navigationBar } from "/src/scripts/Scripts-Navigation/navigation.js";

export const makeGeneralBody = (type) => {
  headerAndFooterGenerator();
  mainGenerator(type);
  categoriesAndAboutSectionsGenerator();
  overlayGenerator();
  //!NAVIGATION\\
  navigationBar();
};
