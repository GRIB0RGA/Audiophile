const checkoutHtml = `
<main class="main main__checkout" id="main">
    <button class="text text--gray-dark btn__go-back" onclick="history.back()">Go back</button>
    <section class="section__checkout">

      <h3 class="heading__3">Checkout</h3>

      <form action="#" class="checkout__form" id="checkoutForm">

        <div class="checkout__container checkout__container--billing">
          <p class="sub-title sub-title--primary">Billing Details</p>
          <div class="input__group input__group--name">
            <label for="name" class="input__label">Name</label>
            <input type="text" id="name" class="input__field" placeholder="Alexei Ward" required />
          </div>
          <div class="input__group input__group--email">
            <label for="email" class="input__label">Email Address</label>
            <input type="email" id="email" class="input__field" placeholder="alexei@gmail.com" required />
          </div>
          <div class="input__group input__group--phone">
            <label for="phoneNumber" class="input__label">Phone Number</label>
            <input type="number" id="phoneNumber" class="input__field" placeholder="+1 202-555-0136" required />
          </div>
        </div>


        <div class="checkout__container checkout__container--info">
          <p class="sub-title sub-title--primary">Shipping Info</p>
          <div class="input__group input__group--address">
            <label for="address" class="input__label">Address</label>
            <input type="text" id="address" class="input__field" placeholder="1137 Wiliams Avenue" required />
          </div>
          <div class="input__group input__group--zip">
            <label for="zipCode" class="input__label">ZIP Code</label>
            <input type="number" id="zipCode" class="input__field" placeholder="10001" required />
          </div>
          <div class="input__group input__group--city">
            <label for="city" class="input__label">city</label>
            <input type="text" id="city" class="input__field" placeholder="New York" required />
          </div>
          <div class="input__group input__group--country">
            <label for="country" class="input__label">country</label>
            <input type="text" id="country" class="input__field" placeholder="United States" required />
          </div>
        </div>

        <div class="checkout__container checkout__container--payment">
          <p class="sub-title sub-title--primary">payment details</p>
          <p class="radio__group--title">payment method</p>

          <div class="radio__group radio__group--emoney">

            <input type="radio" name="paymentMethod" id="emoney" class="radio__field" placeholder="1137 Wiliams Avenue"
              required checked />
            <label for="emoney" class="radio__label"><span class="radio__btn"></span> e-Money</label>
          </div>

          <div class="radio__group radio__group--cash">

            <input type="radio" name="paymentMethod" id="cash" class="radio__field" placeholder="10001" required />
            <label for="cash" class="radio__label"><span class="radio__btn"></span>Cash On Delivery</label>
          </div>


          <div class="input__group input__group--emoney">
            <label for="emoneyNum" class="input__label">e-Money Number</label>
            <input type="text" id="emoneyNum" class="input__field" minlength="9" maxlength="9" placeholder="238521993"
              required />
          </div>
          <div class="input__group input__group--cash">
            <label for="emoneyPin" class="input__label">e-Money PIN</label>
            <input type="email" id="emoneyPin" class="input__field" minlength="4" maxlength="4" placeholder="6891"
              required />
          </div>


        </div>






      </form>




    </section>

    <section class="section__summary">
      <!-- <img src="/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" alt=""> -->
      <h6 class="heading__6 summary__heading">Summary</h6>
      <div class="modal__items-container summary__items-container">
        <div class="modal__item">

          <div class="modal__text-side">
            <img class="modal__img" src="/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              alt="mark2">
            <p class="text text--black bold modal__name">XX99 MK II</p>
            <p class="text text--gray-dark bold modal__price-item">$2,999</p>
          </div>

          <p class="text text--gray-dark bold summary__quantity">x1</p>
        </div>



      </div>

      <div class="summary__pricings">
        <div class="pricing__field">
          <p class="text text--gray-dark uppercase">Total</p>
          <h6 class="heading__6 summary__price-total"> $ 5,396</h6>
        </div>
        <div class="pricing__field">
          <p class="text text--gray-dark uppercase">Shipping</p>
          <h6 class="heading__6  summary__price-shipping"> $ 50</h6>
        </div>
        <div class="pricing__field">
          <p class="text text--gray-dark uppercase">VAT (included)</p>
          <h6 class="heading__6  summary__price-vat"> $ 5,396</h6>
        </div>
      </div>

      <div class="summary__grand-total">
        <div class="pricing__field">
          <p class="text text--gray-dark uppercase">Grand Total</p>
          <h6 class="heading__6 heading__6--primary summary__price-grand"> $ 5,396</h6>
        </div>
      </div>
      <button class="btn__primary btn__primary--orange summary__btn" id="payBtn">Continue & pay</button>
    </section>


  </main>
`;

export const checkoutWholeMainGenerator = () => {
  const footer = document.getElementById(`footer`);
  footer.insertAdjacentHTML(`beforebegin`, checkoutHtml);
};
