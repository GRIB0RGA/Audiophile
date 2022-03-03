export const overlayGenerator = () => {
  const body = [...document.getElementsByTagName(`body`)][0];
  const html = `
  <div class="overlay hidden" id="overlay"></div>
  `;
  body.insertAdjacentHTML("afterbegin", html);
};
