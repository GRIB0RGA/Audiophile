export const navbarResponsive = () => {
  const navbarMenu = document.querySelector(`.navbar__menu`);
  const navbarHamburgerIcon = document.querySelector(`.navbar__hamburger`);
  const overlay = document.querySelector(`.overlay`);

  navbarHamburgerIcon.addEventListener(`click`, () => {
    navbarMenu.classList.toggle(`hidden`);
    overlay.classList.toggle(`hidden`);
  });
};


