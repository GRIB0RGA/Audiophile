import data from "/src/data.json" assert { type: "json" };

import { imageRefactorer } from "/src/scripts/Scripts-Helpers/imageRefactorer.js";
import { folderNameMaker } from "/src/scripts/Scripts-Helpers/folderNameMaker.js";

const getItem = (slug) =>
  data.filter((products) => products.slug.includes(`${slug}`))[0];

const productsZigZagGenerator = (currentItem) => {
  const main = document.querySelector(`.main`);

  const image = currentItem.image;
  const price = currentItem.price;

  const alt = currentItem.slug;
  const name = currentItem.name;
  const description = currentItem.description;
  const category = currentItem.category;
  const ifNew = currentItem.new
    ? `<p class="overline overline--primary">New product</p>`
    : "";

  const html = `
  <button class="text text--gray-dark btn__go-back" onclick="history.back()" >Go back</button>
<div class="zigzag zigzag__products">
    
    <div class="zigzag__card zigzag__card--products">
      <picture>
        <source media="(max-width:640px)"
          srcset="${imageRefactorer(image.mobile)}">
        <source media="(max-width:850px)"
          srcset="${imageRefactorer(image.tablet)}">
        <img src="${imageRefactorer(image.desktop)}" class="zigzag__image"
          alt="${alt}">
      </picture>

      <div class="zigzag__title zigzag__title--products">
        ${ifNew}
        <h1 class="heading__2">${name}</h1>
        <p class="text text--gray-dark">
         ${description}
        </p>
        <h6 class="heading__6">$${price}</h6>

        <div class="quantity__btn-group">
          <div class="quantity__input-group">
            <button class="quantity__btn quantity__btn--minus" id="productMinusBtn">-</button>
            <input type="number" name="counter" value="1" class="quantity__input" id="productInput">
            <button class="quantity__btn quantity__btn--plus" id="productPlusBtn">+</button>
          </div>

          <button class="btn__primary btn__primary--orange" id="addToCartBtn">Add to cart</button>

        </div>

      </div>
    </div>


  </div>  `;

  main.insertAdjacentHTML("afterbegin", html);
};

const sectionFeaturesGenerator = (currentItem) => {
  const zigZagDiv = document.querySelector(`.zigzag`);

  const paragraphOne = currentItem.features.split("\n\n")[0];
  const paragraphTwo = currentItem.features.split("\n\n")[1];

  const html = `
  <section class="section__features">
    <div class="features__text">
      <h3 class="heading__3">Features</h3>
      <p class="text text--gray-dark">
        ${paragraphOne}
      </p>
      <p class="text text--gray-dark">
        ${paragraphTwo}
      </p>

    </div>

    <div class="features__box">
      <h3 class="heading__3">In the box</h3>
      <ul class="box__list">
        

      </ul>
    </div>
  </section>`;

  zigZagDiv.insertAdjacentHTML("afterend", html);
};

const featuresItemsInjector = (currentItem) => {
  const itemBox = document.querySelector(`.box__list`);
  currentItem.includes.forEach((boxItem) => {
    const quantity = boxItem.quantity;
    const item = boxItem.item;

    const html = `<li class="box__item"><span class="box__quantity">${quantity}x</span> ${item}t</li>`;

    itemBox.insertAdjacentHTML(`beforeend`, html);
  });
};

const altMakerForGallery = (link) => link.split("/")[4].slice(0, -4);

const galleryGenerator = (currentItem) => {
  const gallery = currentItem.gallery;

  const features = document.querySelector(`.section__features`);
  const img1 = gallery.first;
  const img2 = gallery.second;
  const img3 = gallery.third;

  const html = ` 
   <section class="section__product-gallery">

    <picture class="product-gallery product-gallery__img product-gallery__img--1 ">
      <source media="(max-width:784px)"
        srcset="${imageRefactorer(img1.mobile)}">
      <source media="(max-width:1110px)"
        srcset="${imageRefactorer(img1.tablet)}">
      <img class="product-gallery product-gallery__img product-gallery__img--1 "
        src="${imageRefactorer(img1.desktop)}" alt="${altMakerForGallery(
    img1.mobile
  )}">
    </picture>


    <picture class=" product-gallery product-gallery__img product-gallery__img--2 ">
      <source media="(max-width:784px)"
        srcset="${imageRefactorer(img2.mobile)}">
      <source media="(max-width:1110px)"
        srcset="${imageRefactorer(img2.tablet)}">
      <img class="product-gallery product-gallery__img product-gallery__img--2 "
        src="${imageRefactorer(img2.desktop)}" alt="${altMakerForGallery(
    img2.mobile
  )}">
    </picture>



    <picture class="product-gallery product-gallery__img product-gallery__img--3 ">
      <source media="(max-width:784px)"
        srcset="${imageRefactorer(img3.mobile)}">
      <source media="(max-width:1110px)"
        srcset="${imageRefactorer(img3.tablet)}">
      <img class="product-gallery product-gallery__img product-gallery__img--3"
        src="${imageRefactorer(img3.desktop)}" alt="${altMakerForGallery(
    img3.mobile
  )}">
    </picture>
  </section>
  
  
  `;

  features.insertAdjacentHTML(`afterend`, html);
};

const typeGetter = (suggestion) => {
  const suggestionCategory = suggestion.slug.split("-").pop();

  return `${suggestionCategory[0].toUpperCase() + suggestionCategory.slice(1)}`;
};

const headphonesAdder = (suggestion) => {
  return `${typeGetter(suggestion).toLowerCase()}` === `headphones`
    ? `-${typeGetter(suggestion)}`
    : "";
};
const ifSpeakers = (suggestion) => {
  return typeGetter(suggestion) === "Speaker" ? "s" : "";
};

const productSuggestion = (currentItem) => {
  const category = currentItem.category;
  const categoryCapitalized = category[0].toUpperCase() + category.slice(1);

  const suggestions = currentItem.others;
  const suggestionOne = suggestions[0];

  const suggestionTwo = suggestions[1];
  const suggestionThree = suggestions[2];

  const productGalleryDiv = document.querySelector(`.section__product-gallery`);

  const html = `
  <section class="section__product-suggestions">
    <h3 class="heading__3 suggestion__title">You may also like</h3>


    <div class="suggestion suggestion__1">

      <picture>
        <source media="(max-width:640px)"
          srcset="${imageRefactorer(suggestionOne.image.mobile)}">
        <source media="(max-width:850px)"
          srcset="${imageRefactorer(suggestionOne.image.tablet)}">
        <img class="suggestion__image" src="${imageRefactorer(
          suggestionOne.image.desktop
        )}"
          alt="${suggestionOne.slug}">
      </picture>

      <h5 class="heading__5">${suggestionOne.name}</h5>
     <a class="btn__primary btn__primary--orange"
        href="/src/components/products/${typeGetter(
          suggestionOne
        ).toLowerCase()}${ifSpeakers(suggestionOne)}/${folderNameMaker(
    suggestionOne.name
  )}${headphonesAdder(suggestionOne)}/product-${suggestionOne.slug}.html">See
        product</a>
    </div>


    <div class="suggestion suggestion__2">

      <picture>
        <source media="(max-width:640px)"
          srcset="${imageRefactorer(suggestionTwo.image.mobile)}">
        <source media="(max-width:850px)"
          srcset="${imageRefactorer(suggestionTwo.image.tablet)}">
        <img class="suggestion__image" src="${imageRefactorer(
          suggestionTwo.image.desktop
        )}"
          alt="${suggestionTwo.slug}">
      </picture>

      <h5 class="heading__5">${suggestionTwo.name}</h5>
      <a class="btn__primary btn__primary--orange"
        href="/src/components/products/${typeGetter(
          suggestionTwo
        ).toLowerCase()}${ifSpeakers(suggestionTwo)}/${folderNameMaker(
    suggestionTwo.name
  )}${headphonesAdder(suggestionTwo)}/product-${suggestionTwo.slug}.html">See
        product</a>
    </div>


    <div class="suggestion suggestion__3">

      <picture>
        <source media="(max-width:640px)"
          srcset="${imageRefactorer(suggestionThree.image.mobile)}">
        <source media="(max-width:850px)"
          srcset="${imageRefactorer(suggestionThree.image.tablet)}">
        <img class="suggestion__image" src="${imageRefactorer(
          suggestionThree.image.desktop
        )}"
          alt="${suggestionThree.slug}">
      </picture>

      <h5 class="heading__5">${suggestionThree.name}</h5>
      <a class="btn__primary btn__primary--orange"
        href="/src/components/products/${typeGetter(
          suggestionThree
        ).toLowerCase()}${ifSpeakers(suggestionThree)}/${folderNameMaker(
    suggestionThree.name
  )}${headphonesAdder(suggestionThree)}/product-${
    suggestionThree.slug
  }.html">See
        product</a>
    </div>

  </section>
  `;

  productGalleryDiv.insertAdjacentHTML(`afterend`, html);
};

export const productGenerator = (item) => {
  const currentItem = getItem(item);
  productsZigZagGenerator(currentItem);
  sectionFeaturesGenerator(currentItem);
  featuresItemsInjector(currentItem);
  galleryGenerator(currentItem);
  productSuggestion(currentItem);
};
