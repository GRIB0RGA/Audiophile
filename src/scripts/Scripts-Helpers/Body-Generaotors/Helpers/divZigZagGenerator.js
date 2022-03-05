export const zigzagDivGenerator = (category) => {
  const main = document.querySelector(`.main`);
  const html = `<div class="zigzag zigzag__${category}"></div>`;
  main.insertAdjacentHTML("afterbegin", html);
};
