import { plusMinusBtnFunctiality } from "/src/scripts/Scripts-Helpers/Others/plusMinusButtonsFunctionality.js";

const totalPriceCalculator = (storage) =>
  storage?.reduce((a, b) => a + b.price * b.quantity, 0);

export const updateStorage = (key, storageObj) => {
  localStorage.setItem(key, JSON.stringify(storageObj));
};

export const updateTotal = (storage) => {
  const total = document.querySelector(`.modal__price-total`);

  total.innerHTML = `$${totalPriceCalculator(storage)}`;
};

export const updateItemsInCart = (storage) => {
  const itemsInCart = document.getElementById(`itemsInCart`);
  itemsInCart.innerHTML = storage?.length;
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
            <button class="quantity__btn quantity__btn--minus modal__btn--minus" id="modal__btn--minus">-</button>
            <input type="number" name="counter" value="${item.quantity}" class="quantity__input modal__input" id="modal__input">
            <button class="quantity__btn quantity__btn--plus modal__btn--plus" id="modal__btn--plus">+</button>
          </div>
          
        </div>
  `;

    cartModalItemsContainer.insertAdjacentHTML("beforeend", html);
  });
};

export const updateModalUI = (storage, key) => {
  updateStorage(key, storage);
  updateTotal(storage);
  updateItemsInCart(storage);
  updateCart(storage);
};
