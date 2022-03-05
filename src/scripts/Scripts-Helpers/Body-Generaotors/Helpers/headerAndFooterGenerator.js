import { navbarHTML, footerHTML } from "../../Others/navbarAndFooterHTML.js";

export const headerAndFooterGenerator = (category) => {
  const body = [...document.getElementsByTagName(`body`)][0];

  const header = `
  
    

  <header class="header header__categories">
    <h1 class="heading__2 c-white center">${category}</h1>


  </header>
    
    `;

  const headerPlusFooter = category
    ? navbarHTML + header + footerHTML
    : navbarHTML + footerHTML;

  body.insertAdjacentHTML("beforeend", headerPlusFooter);
};
