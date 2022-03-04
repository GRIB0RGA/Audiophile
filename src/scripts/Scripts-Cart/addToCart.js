import { updateModalUI } from "/src/scripts/Scripts-Cart/updateModalUI.js";

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
        .innerHTML.slice(1)
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
};

export const clearCartModal = () => {
  const removeAll = document.getElementById(`removeAllBtn`);
  removeAll.addEventListener(`click`, () => {
    clearCart();
    localStorage.clear();
    mainStorage = [];
  });
};
