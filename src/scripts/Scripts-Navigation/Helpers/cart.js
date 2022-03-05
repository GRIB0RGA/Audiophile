const toggleModal = (btnArr) => {
  const modal = document.getElementById(`modal`);
  const overlay = document.querySelector(`.overlay`);
  const navbarMenu = document.querySelector(`.navbar__menu`);
  btnArr.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      const modalIsVisible = ![...navbarMenu.classList].includes(`hidden`);
      if (modalIsVisible) {
        navbarMenu.classList.add(`hidden`);
        overlay.classList.add(`hidden`);
      }
      modal.classList.toggle("hidden");
      overlay.classList.toggle("hidden");
    });
  });
};

export const cartModal = () => {
  const cart = document.querySelector(`.navbar__icon`);
  const cartTablet = document.querySelector(`.navbar__icon--tablet`);
  const cartMobile = document.querySelector(`.navbar__icon--mobile`);

  toggleModal([cart, cartTablet, cartMobile]);
};
