export const categoriesAndAboutSectionsGenerator = () => {
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
        <a class="btn__text--with-arrow" href="/src/components/pages/earphones/earphones.html">Shop</a>
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
