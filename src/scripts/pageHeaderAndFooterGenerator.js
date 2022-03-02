const headerAndFooterGenerator = (category) => {
  const body = [...document.getElementsByTagName(`body`)][0];

  const header = `
  
     <div class="navbar__container">

    <nav class="navbar">

      <div class="navbar__desktop ">
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

        <img class="navbar__icon" src="/src/assets/shared/desktop/icon-cart.svg" alt="cartIcon">
      </div>

      <div class="navbar__mobile">
        <img class="navbar__hamburger" src="/src/assets/shared/tablet/icon-hamburger.svg" alt="icon-hamburger">
         <a href="/src/home.html"><img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo"></a>
        <img class="navbar__icon" src="/src/assets/shared/mobile/icon-cart.svg" alt="cartIcon">
      </div>



    </nav>

    <div class="navbar__menu hidden">
      <section class="section__categories section__categories--navbar ">
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
          <a class="btn__text--with-arrow" href="/src/components/pages/speakers/speakers.html">Shop</a>
        </div>
      </section>
    </div>
  </div>

  <header class="header header__categories">
    <h1 class="heading__2 c-white center">${category}</h1>


  </header>
    
    `;

  const footer = `
    <footer id="footer" class="footer">
    <div class="footer__container">
      <div class="navbar__footer">
        <img class="navbar__logo" src="/src/assets/shared/desktop/logo.svg" alt="Logo">
        <ul class="navbar__list">
          <li><a href="/src/home.html" class="navbar__link">Home</a></li>
          <li><a href="/src/components/pages/headphones.html" class="navbar__link">Headphones</a></li>
          <li><a href="/src/components/pages/speakers.html" class="navbar__link">Speakers</a></li>
          <li><a href="/src/components/pages/earphones.html" class="navbar__link">Earphones</a></li>
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

  const headerPlusFooter = header + footer;

  body.insertAdjacentHTML("beforeend", headerPlusFooter);
};

const mainGenerator = () => {
  const footer = document.querySelector(`.footer`);
  const html = `
   <main class="main main__pages" id="main"></div>
  `;
  footer.insertAdjacentHTML("beforebegin", html);
};

const leftOverContentGenerator = () => {
  const main = document.querySelector(`.main`);
  const html = `
   <section class="section__categories">
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
        <a class="btn__text--with-arrow" href="/src/components/pages/speakers/speakers.html">Shop</a>
      </div>
    </section>


  <section class="section__about ">

    <div class="about__title">
      <h2 class="heading__2">Bringing you the <span>best</span> audio gear</h2>
      <p class="text text--gray-dark">
        Located at the heart of New York City, Audiophile is the premier store for high end headphones,
        earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration
        rooms available for you to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place to buy your portable
        audio equipment.
      </p>
    </div>

    <div class="about__image"></div>
  </section>
  `;

  main.insertAdjacentHTML("beforeend", html);
};

const overlayGenerator = () => {
  const body = [...document.getElementsByTagName(`body`)][0];
  const html = `
  <div class="overlay hidden" id="overlay"></div>
  `;
  body.insertAdjacentHTML("afterbegin", html);
};

export const makeZigzagLessBody = (category) => {
  headerAndFooterGenerator(category);
  mainGenerator();
  leftOverContentGenerator();
  overlayGenerator();
};
