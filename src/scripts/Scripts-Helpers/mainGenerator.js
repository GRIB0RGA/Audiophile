export const mainGenerator = (pageType) => {
  const footer = document.querySelector(`.footer`);
  const html = `
   <main class="main main__${pageType}" id="main"></div>
  `;
  footer.insertAdjacentHTML("beforebegin", html);
};
