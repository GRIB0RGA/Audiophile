export const navbarHTML = `<div class="navbar__container">

    <nav class="navbar">

      <div class="navbar__desktop">
        <a href="/src/home.html"><img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo"></a>
        <ul class="navbar__list">
          <li><a href="/src/home.html" class="navbar__link">Home</a></li>
          <li><a href="/src/components/pages/headphones/headphones.html" class="navbar__link">Headphones</a></li>
          <li><a href="/src/components/pages/speakers/speakers.html" class="navbar__link">Speakers</a></li>
          <li><a href="/src/components/pages/earphones/earphones.html" class="navbar__link">Earphones</a></li>
        </ul>
        <img class="navbar__icon" src="/src/assets/shared/desktop/icon-cart.svg" alt="cartIcon">
      </div>


      <div class="navbar__tablet">

        <div class="navbar__logo-plus-hamburger">
          <img class="navbar__hamburger" src="/src/assets/shared/tablet/icon-hamburger.svg" alt="icon-hamburger">
          <a href="/src/home.html"><img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo"></a>
        </div>

        <img class="navbar__icon navbar__icon--tablet" src="/src/assets/shared/desktop/icon-cart.svg" alt="cartIcon">
      </div>

      <div class="navbar__mobile">
        <img class="navbar__hamburger" src="/src/assets/shared/tablet/icon-hamburger.svg" alt="icon-hamburger">
        <a href="/src/home.html"><img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo"></a>
        <img class="navbar__icon navbar__icon--mobile" src="/src/assets/shared/desktop/icon-cart.svg" alt="cartIcon">
      </div>



    </nav>

    <div class="navbar__menu hidden">
      <section class="section__categories section__categories--navbar">
        <div class="categories__card categories__card--navbar categories__headphones">
          <img class="categories__img" src="/src/assets/shared/desktop/image-category-thumbnail-headphones.png"
            alt="headphones">
          <h6 class=" categories__heading heading__6">Headphones</h6>
          <a class=" btn__text--with-arrow" href="/src/components/pages/headphones/headphones.html">Shop</a>
        </div>
        <div class="categories__card categories__card--navbar categories__speakers">
          <img class="categories__img" src="/src/assets/shared/desktop/image-category-thumbnail-speakers.png"
            alt="speakers">
          <h6 class="categories__heading heading__6">Speakers</h6>
          <a class="btn__text--with-arrow" href="/src/components/pages/speakers/speakers.html">Shop</a>
        </div>
        <div class="categories__card categories__card--navbar categories__earphones">
          <img class="categories__img" src="/src/assets/shared/desktop/image-category-thumbnail-earphones.png"
            alt="earphones">
          <h6 class="categories__heading heading__6">Earphones</h6>
          <a class="btn__text--with-arrow" href="/src/components/pages/earphones/earphones.html">Shop</a>
        </div>
      </section>
    </div>

    <div class="modal hidden" id="modal">

      <h6 class="heading__6"  >Cart(<span id="itemsInCart" >3</span>)</h6>

      <button class="text text--gray-dark" id="removeAllBtn">Remove All</button>
      <!-- <img src="/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg" alt=""> -->
      <div class="modal__items-container">
        <div class="modal__item">

          <div class="modal__text-side">
            <img class="modal__img" src="/src/assets/product-xx99-mark-two-headphones/desktop/image-product.jpg"
              alt="mark2">
            <p class="text text--black bold modal__name">XX99 MK II</p>
            <p class="text text--gray-dark bold modal__price-item">$2,999</p>
          </div>

          <div class="quantity__input-group quantity__input-group--modal">
            <button class="quantity__btn quantity__btn--minus modal__btn--minus">-</button>
            <input type="number" name="counter" value="1" class="quantity__input modal__input" >
            <button class="quantity__btn quantity__btn--plus modal__btn--plus">+</button>
          </div>
        </div>


      </div>



      <p class="text text--gray-dark uppercase">Total</p>
      <h6 class="heading__6  modal__price-total"> $5,396</h6>


      <button class="btn__primary btn__primary--orange" id="checkoutBtn">Checkout</button>
    </div>
  </div> `;

export const footerHTML = `
    <footer id="footer" class="footer">
    <div class="footer__container">
      <div class="navbar__footer">
        <img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo">
        <ul class="navbar__list">
          <li><a href="/src/home.html" class="navbar__link">Home</a></li>
          <li><a href="/src/components/pages/headphones/headphones.html" class="navbar__link">Headphones</a></li>
          <li><a href="/src/components/pages/speakers/speakers.html" class="navbar__link">Speakers</a></li>
          <li><a href="/src/components/pages/earphones/earphones.html" class="navbar__link">Earphones</a></li>
        </ul>

      </div>

      <div class="footer__grid">

        <p class="footer__paragraph text text--gray ">
          Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers
          and sound specialists who are devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we’re open 7 days a week.
        </p>
        <p class=" footer__copyright text text--gray">Copyright 2021. All Rights Reserved</p>

        <div class="footer__social">
          <a href=""><img src="/src/assets/shared/desktop/icon-facebook.svg" alt="FbIcon" class="footer__icon"></a>
          <a href=""><img src="/src/assets/shared/desktop/icon-twitter.svg" alt="TwitterIcon" class="footer__icon"></a>
          <a href=""><img src="/src/assets/shared/desktop/icon-instagram.svg" alt="InstagramIcon"
              class="footer__icon"></a>
        </div>
      </div>
    </div>
  </footer>
   `;
