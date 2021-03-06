import {
  updateModalUI,
  updateStorage,
  updateTotal,
  updateItemsInCart,
} from "/src/scripts/Scripts-Cart/updateModalUI.js";

import { summaryGenerator } from "/src/scripts/Scripts-Checkout/Helpers/summaryGenerator.js";

//? Local Storage FUNCTIONALITY \\
export const STORAGE_KEY = `cart`;
export let mainStorage =
  localStorage.getItem(STORAGE_KEY) === null
    ? []
    : JSON.parse(localStorage.getItem(STORAGE_KEY));

//? Helpers \\
const updateItem = (item, addedNumber) => {
  const modalItems = document.querySelectorAll(`.modal__name`);

  modalItems.forEach((product) => {
    if (product.innerHTML === item.name) {
      const quantity = product
        .closest(`.modal__item`)
        .querySelector(`.quantity__input-group--modal`)
        .querySelector(`.quantity__input`);

      quantity.value = addedNumber;
    }
  });
};

const pushItemsIntoStorage = (storage, title, price, quantity, imageLink) => {
  storage.push({
    name: title,
    price: Number(price),
    quantity: Number(quantity),
    image: `${imageLink}`,
  });
};

//? ADD IN CART \\
//! MAIN FUNCTION \\\
export const addToCart = () => {
  const addInCartBtn = document.getElementById(`addToCartBtn`);
  const productInput = document.getElementById(`productInput`);

  addInCartBtn.addEventListener(`click`, () => {
    const productImage = `/src${
      addInCartBtn
        .closest(`.zigzag__card`)
        .querySelector(`.zigzag__image`)
        .src.split("src")[1]
    }`;

    const productPrice = Number(
      addInCartBtn
        .closest(`.zigzag__title`)
        .querySelector(`.heading__6`)
        .innerHTML.replace(/\D/g, "")
    );

    const productTitle = addInCartBtn
      .closest(`.zigzag__title`)
      .querySelector(`.heading__2`).innerHTML;

    const inputValue = Number(productInput.value);

    const alreadyStored = mainStorage.filter(
      (product) => product.name === productTitle
    )[0];

    ///!MAIN LOGIC \\\

    //? CHECK IF ITEM IS ALREADY STORED \\\
    if (alreadyStored) {
      alreadyStored.quantity += inputValue;
      updateItem(alreadyStored, alreadyStored.quantity);
    } else {
      pushItemsIntoStorage(
        mainStorage,
        productTitle,
        productPrice,
        inputValue,
        productImage
      );
    }

    //? IF LOCALSTORAGE IS EMPTY \\\
    if (mainStorage.length === 0) {
      pushItemsIntoStorage(
        mainStorage,
        productTitle,
        productPrice,
        inputValue,
        productImage
      );
    }
    updateModalUI(mainStorage, STORAGE_KEY);
    productInput.value = 1;
  });
};

//? CLEAR ALL  \\

const clearCart = () => {
  const modalItemsContainer = document.querySelector(`.modal__items-container`);

  const totalPirce = document.querySelector(`.modal__price-total`);

  itemsInCart.innerHTML = 0;
  modalItemsContainer.innerHTML = ``;
  totalPirce.innerHTML = `$0`;
  const iconCounter = document.querySelectorAll(`.items-in-cart`);
  iconCounter.forEach((icon) => {
    icon.classList.add(`hidden`);
  });
};
//! MAIN FUNCTION \\\
export const clearCartModal = () => {
  const removeAll = document.getElementById(`removeAllBtn`);
  removeAll.addEventListener(`click`, () => {
    clearCart();
    localStorage.clear();
    mainStorage = [];
    if (document.querySelector(`.main__checkout`)) {
      summaryGenerator(mainStorage);
    }
  });
};

//? Update cart with item +- buttons \\
const getItem = (btn) => btn.closest(`.modal__item`);

const removeItem = (btn) => getItem(btn).parentNode.removeChild(getItem(btn));
const getItemInput = (btn) =>
  btn.closest(`.quantity__input-group--modal`).querySelector(`.modal__input`);

const getItemProductTitle = (btn) =>
  btn
    .closest(`.modal__item`)
    .querySelector(`.modal__text-side`)
    .querySelector(`.modal__name`).innerHTML;

const getCurrentItem = (storage, productTitle) =>
  storage.find((item) => item.name === productTitle);

const getIndexOfCurrentItem = (storage, currentItem) =>
  storage.indexOf(currentItem);

const setCurrentItemInStorage = (storage, index, currentItem) =>
  (storage[index] = currentItem);

const updateCartWithPlusMinusBtnFunctionality = (btn, type, storage) => {
  const cartInput = getItemInput(btn);

  const productTitle = getItemProductTitle(btn);
  const currentItem = getCurrentItem(storage, productTitle);

  if (currentItem) {
    const currentItemInStorage = getIndexOfCurrentItem(storage, currentItem);
    if (type === `+`) {
      cartInput.value++;
      currentItem.quantity++;
      setCurrentItemInStorage(storage, currentItemInStorage, currentItem);
    }
    if (type === "-") {
      cartInput.value--;
      currentItem.quantity--;
      if (cartInput.value > 0) {
        setCurrentItemInStorage(storage, currentItemInStorage, currentItem);
      }
      if (cartInput.value == 0) {
        removeItem(btn);
        storage.splice(currentItemInStorage, 1);

        updateItemsInCart(storage);
        const itemsInCart = document.getElementById(`itemsInCart`);
        const iconCounter = document.querySelectorAll(`.items-in-cart`);
        iconCounter.forEach((icon) => {
          if (itemsInCart.innerHTML === 0) {
            icon.classList.add(`hidden`);
          }
        });
      }
    }
  }
  if (document.querySelector(`.main__checkout`)) {
    summaryGenerator(storage);
    const itemX = [...document.querySelectorAll(`.summary__quantity`)].slice(1);
    console.log(itemX);

    itemX.forEach((item) => {
      const currentItemName =
        item.previousElementSibling.querySelector(`.modal__name`);

      item.innerHTML = `x ${
        getCurrentItem(storage, currentItemName.innerHTML).quantity
      }`;
    });
  }
  updateTotal(storage);
  updateStorage(STORAGE_KEY, storage);
};

//! MAIN FUNCTION \\\
export const updateCartWithPlusMinus = (storage) => {
  document.addEventListener(`click`, (e) => {
    const checkIfPlus = e.target.className.includes(`modal__btn--plus`);

    const checkIfMinus = e.target.className.includes(`modal__btn--minus`);

    if (checkIfPlus) {
      const cartPlusBtn = e.target;

      updateCartWithPlusMinusBtnFunctionality(cartPlusBtn, "+", storage);
    }

    if (checkIfMinus) {
      const cartMinusBtn = e.target;

      updateCartWithPlusMinusBtnFunctionality(cartMinusBtn, "-", storage);
    }
  });
};
