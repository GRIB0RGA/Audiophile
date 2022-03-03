export const mainGenerator = () => {
  const footer = document.querySelector(`.footer`);
  const html = `
   <main class="main main__pages" id="main"></div>
  `;
  footer.insertAdjacentHTML("beforebegin", html);
};
