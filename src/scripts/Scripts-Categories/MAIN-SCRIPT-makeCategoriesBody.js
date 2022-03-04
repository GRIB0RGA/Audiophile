import { pageZigZagGenerator } from "/src/scripts/Scripts-Categories/CategoriesZigZagGenerator.js";
import { makeGeneralBody } from "/src/scripts/Scripts-Helpers/makeGeneralBody.js";

export const makePageBody = (category) => {
  makeGeneralBody("pages");
  pageZigZagGenerator(category);
};
