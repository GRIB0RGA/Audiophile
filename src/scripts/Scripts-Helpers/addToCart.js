export const STORAGE_KEY = `cart`;
export let mainStorage =
  JSON.parse(localStorage.getItem(STORAGE_KEY)) === null
    ? []
    : JSON.parse(localStorage.getItem(STORAGE_KEY));

console.log(mainStorage);

const updateStorage = (key, storageObj) => {
  localStorage.setItem(key, JSON.stringify(storageObj));
};

export const updateCart = (storage) => {
  const cartModalItemsContainer = document.querySelector(
    `.modal__items-container`
  );

  cartModalItemsContainer.innerHTML = ``;

  storage.forEach((item) => {
    const html = `
    
     <div class="modal__item">

          <div class="modal__text-side">
            <img class="modal__img" src="${item.image}"
              >
            <p class="text text--black bold modal__name">${item.name}</p>
            <p class="text text--gray-dark bold modal__price-item">$${item.price}</p>
          </div>

          <div class="quantity__input-group quantity__input-group--modal">
            <button class="quantity__btn quantity__btn--minus" id="modal__btn--minus">-</button>
            <input type="number" name="counter" value="${item.quantity}" class="quantity__input" id="modal__input">
            <button class="quantity__btn quantity__btn--plus" id="modal__btn--plus">+</button>
          </div>
          
        </div>
  `;

    cartModalItemsContainer.insertAdjacentHTML("beforeend", html);
  });
};

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

    const productPrice = addInCartBtn
      .closest(`.zigzag__title`)
      .querySelector(`.heading__6`)
      .innerHTML.slice(1);

    const productTitle = addInCartBtn
      .closest(`.zigzag__title`)
      .querySelector(`.heading__2`).innerHTML;

    const inputValue = Number(productInput.value);

    const alreadyStored = mainStorage.filter(
      (product) => product.name === productTitle
    )[0];

    if (alreadyStored) {
      alreadyStored.quantity += inputValue;
      updateItem(alreadyStored, alreadyStored.quantity);
      updateStorage(STORAGE_KEY, mainStorage);
      updateCart(mainStorage);
    } else {
      mainStorage.push({
        name: `${productTitle}`,
        price: productPrice,
        quantity: inputValue,
        image: `${productImage}`,
      });

      updateStorage(STORAGE_KEY, mainStorage);
      updateCart(mainStorage);
    }

    if (mainStorage.length === 0) {
      mainStorage.push({
        name: `${productTitle}`,
        price: productPrice,
        quantity: inputValue,
        image: `${productImage}`,
      });

      updateStorage(STORAGE_KEY, mainStorage);
      updateCart(mainStorage);
    }

    productInput.value = 1;
  });
};

// localStorage.clear();
