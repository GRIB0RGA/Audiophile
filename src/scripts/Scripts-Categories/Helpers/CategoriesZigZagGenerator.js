import data from "/src/data.json" assert { type: "json" };

import { imageRefactorer } from "/src/scripts/Scripts-Helpers/Functions/imageRefactorer.js";
import { folderNameMaker } from "/src/scripts/Scripts-Helpers/Functions/folderNameMaker.js";
import { zigzagDivGenerator } from "/src/scripts/Scripts-Helpers/Body-Generaotors/Helpers/divZigZagGenerator.js";

const categoryAndNewItemsGenerator = (category) =>
  data.filter((x) => x.category === category).sort((a, b) => b.new - a.new);

const zigzagCardGenerator = (pageCategory) => {
  const zigzagContainer = document.querySelector(`.zigzag`);

  categoryAndNewItemsGenerator(pageCategory).forEach((headphone, i) => {
    const image = headphone.categoryImage;
    const alt = headphone.slug;
    const name = headphone.name;
    const description = headphone.description;
    const category = headphone.category;
    const newItem =
      i === 0 ? `<p class="overline overline--primary">New product</p>` : ``;
    const html = `
    <div class="zigzag__card zigzag__card zigzag__card--categories">
        <picture>
          <source media="(max-width:500px)"
            srcset="${imageRefactorer(image.mobile)}">
          <source media="(max-width:780px)"
            srcset="${imageRefactorer(image.tablet)}">
          <img src="${imageRefactorer(image.desktop)}"
            class="zigzag__image" alt="${alt}">
        </picture>

        <div class="zigzag__title zigzag__title--categories">
         ${newItem}
          <h1 class="heading__2">${name}</h1>
          <p class="text text--gray-dark">
            ${description}
          </p>

          <a class="btn__primary btn__primary--orange mr-xs-t"
            href="/src/components/products/${category}/${folderNameMaker(
      name
    )}/product-${alt}.html">See
            product</a>
        </div>
      </div>
      `;

    zigzagContainer.insertAdjacentHTML(`beforeend`, html);
  });
};

export const pageZigZagGenerator = (category) => {
  
  
  zigzagDivGenerator("categories");
  zigzagCardGenerator(category);
};
