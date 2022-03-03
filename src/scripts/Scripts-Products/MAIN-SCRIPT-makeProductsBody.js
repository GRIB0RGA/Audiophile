import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/makeGeneralBody.js";
import { productGenerator } from "/src/scripts/Scripts-Products/productGenerator.js";

export const productPageGenerator = (product) => {
  makeGeneralBody();
  productGenerator(product);
};
