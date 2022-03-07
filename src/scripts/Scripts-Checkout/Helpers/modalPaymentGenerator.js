import { totalPriceCalculator } from "../../Scripts-Cart/updateModalUI.js";

export const modalPaymentGenerator = (storage) => {
  const firstItem = storage[0];

  const navbar = document.querySelector(`.navbar__container`);
  console.log(navbar);

  const html = `
    <div class="modal__payment hidden">
  

    <h3 class="heading__3 payment__heading">thank you for your order</h3>

    <p class="text text--gray-dark">you will recieve an email confirmation shortly</p>

    <div class="payment__check">

      <div class="modal__items-container summary__items-container payment__items-container">
        <div class="modal__item payment__item">

          <div class="modal__text-side">
            <img class="modal__img" src="${firstItem.image}"
              alt="mark2">
            <p class="text text--black bold modal__name">${firstItem.name}</p>
            <p class="text text--gray-dark bold modal__price-item">$${firstItem.price.toLocaleString()}</p>
          </div>

          <p class="text text--gray-dark bold summary__quantity">x${
            firstItem.quantity
          }</p>
        </div>
        <p class="text text--gray-dark payment__others">and ${
          storage.length - 1
        } other items(s)</p>


      </div>

      <div class="check__grand-total payment__grand-total">
        <div class="pricing__field">
          <p class="text text--gray uppercase">Grand Total</p>
          <h6 class="heading__6 heading__6--primary summary__price-grand payment__price-grand c-white"> $ ${totalPriceCalculator(
            storage
          )?.toLocaleString()}</h6>
        </div>
      </div>



    </div>
    <button class="btn__primary btn__primary--orange summary__btn" 
      onclick="location.replace('/src/home.html')">Back to home</button>
  </div>
  `;

  navbar.insertAdjacentHTML("beforeend", html);
};
