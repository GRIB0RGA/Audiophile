export const navbarResponsive = () => {
  const navbarMenu = document.querySelector(`.navbar__menu`);
  const navbarHamburgerIcon = document.querySelector(`.navbar__hamburger`);
  const overlay = document.querySelector(`.overlay`);
  const modal = document.getElementById(`modal`);

  navbarHamburgerIcon.addEventListener(`click`, () => {
    const modalIsVisible = ![...modal.classList].includes(`hidden`);
    if (modalIsVisible) {
      modal.classList.add(`hidden`);
      overlay.classList.add(`hidden`);
    }
    navbarMenu.classList.toggle(`hidden`);
    overlay.classList.toggle(`hidden`);
  });
};
