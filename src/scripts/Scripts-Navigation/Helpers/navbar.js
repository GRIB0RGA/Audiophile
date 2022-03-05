export const navbarResponsive = () => {
  const navbarMenu = document.querySelector(`.navbar__menu`);
  const navbarHamburgerIcon = document.querySelectorAll(`.navbar__hamburger`);
  const overlay = document.querySelector(`.overlay`);
  const modal = document.getElementById(`modal`);

  navbarHamburgerIcon.forEach((btn) => {
    btn.addEventListener(`click`, () => {
      const modalIsVisible = ![...modal.classList].includes(`hidden`);
      if (modalIsVisible) {
        modal.classList.add(`hidden`);
        overlay.classList.add(`hidden`);
      }
      navbarMenu.classList.toggle(`hidden`);
      overlay.classList.toggle(`hidden`);
    });
  });
};
