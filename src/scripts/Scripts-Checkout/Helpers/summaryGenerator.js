import { totalPriceCalculator } from "/src/scripts/Scripts-Cart/updateModalUI.js";

export const summaryItemsGenerator = (storage) => {
  const summaryItemsContainer = document.querySelector(
    `.summary__items-container`
  );

  summaryItemsContainer.innerHTML = ``;
  console.log(storage);

  storage.forEach((item) => {
    const html = `
        <div class="modal__item">

          <div class="modal__text-side">
            <img class="modal__img" src="${item.image}"
              alt="mark2">
            <p class="text text--black bold modal__name">${item.name}</p>
            <p class="text text--gray-dark bold modal__price-item">$ ${item.price.toLocaleString()}</p>
          </div>

          <p class="text text--gray-dark bold summary__quantity" >x${
            item.quantity
          }</p>
        </div>
  `;

    summaryItemsContainer.insertAdjacentHTML("beforeend", html);
  });
};

const summaryTotalUpdater = (storage) => {
  const summarytotal = document.querySelector(`.summary__price-total`);
  const summaryVat = document.querySelector(`.summary__price-vat`);
  const summaryGrandToTal = document.querySelector(`.summary__price-grand`);

  summarytotal.innerHTML = `$ ${totalPriceCalculator(
    storage
  ).toLocaleString()}`;
  summaryVat.innerHTML = `$ ${(
    (totalPriceCalculator(storage) + 50) /
    5
  ).toLocaleString()}`;

  summaryGrandToTal.innerHTML = `$ ${(
    totalPriceCalculator(storage) + 50
  ).toLocaleString()}`;
};

const paymentMethod = () => {
  const emoneyNum = document.querySelector(`.input__group--emoney`);

  const emoneyPin = document.querySelector(`.input__group--cash`);
  const cashRadio = document.getElementById(`cash`);
  const emoneyRadio = document.getElementById(`emoney`);

  emoneyPin.classList.remove(`hidden`);
  emoneyNum.classList.remove(`hidden`);
  emoneyRadio.parentNode.style.border = `0.5px solid #d87d4a`;
  cashRadio.addEventListener(`click`, () => {
    if (cashRadio.checked) {
      emoneyPin.classList.add(`hidden`);
      emoneyNum.classList.add(`hidden`);
      cashRadio.parentNode.style.border = `0.5px solid #d87d4a`;
      emoneyRadio.parentNode.style.border = `0.5px solid #cfcfcf`;
    }
  });

  emoneyRadio.addEventListener(`click`, () => {
    if (emoneyRadio.checked) {
      emoneyPin.classList.remove(`hidden`);
      emoneyNum.classList.remove(`hidden`);
      emoneyRadio.parentNode.style.border = `0.5px solid #d87d4a`;
      cashRadio.parentNode.style.border = `0.5px solid #cfcfcf`;
    }
  });
};

export const summaryGenerator = (storage) => {
  summaryItemsGenerator(storage);
  summaryTotalUpdater(storage);
  paymentMethod();
};
