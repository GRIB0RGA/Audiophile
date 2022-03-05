export const plusMinusBtnFunctiality = () => {
  const productMinusBtn = document.getElementById(`productMinusBtn`);
  const productInput = document.getElementById(`productInput`);
  const productPlusBtn = document.getElementById(`productPlusBtn`);
  productMinusBtn.addEventListener(`click`, () => {
    if (productInput.value > 1) {
      productInput.value--;
    }
  });
  productPlusBtn.addEventListener(`click`, () => {
    productInput.value++;
  });
};
