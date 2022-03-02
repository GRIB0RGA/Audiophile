import { pageZigZagGenerator } from "/src/scripts/pagezigzagGenerator.js";
import { makeZigzagLessBody } from "/src/scripts/pageHeaderAndFooterGenerator.js";
import { navbarResponsive } from "/src/scripts/navbar.js";

export const makePageBody = (category) => {
  makeZigzagLessBody(category);
  pageZigZagGenerator(category);
  navbarResponsive();
};
