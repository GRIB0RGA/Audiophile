export const exitWithOverlay = () => {
  const modal = document.getElementById(`modal`);
  const overlay = document.querySelector(`.overlay`);
  const navbarMenu = document.querySelector(`.navbar__menu`);

  overlay.addEventListener(`click`, () => {
    modal.classList.add(`hidden`);
    navbarMenu.classList.add(`hidden`);

    if (
      document.querySelector(`.modal__payment`).className.includes("hidden")
    ) {
      overlay.classList.toggle(`hidden`);
    }
    if (!document.querySelector(`.modal__payment`)) {
      overlay.classList.remove(`hidden`);
    }
  });
};
