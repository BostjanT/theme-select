const themeSelect = document.querySelector("#themes");
const changeCSS = document.querySelector(".theme");

function chooseTheme() {
  let theme = themeSelect.value;
  changeCSS.setAttribute("href", `theme-${theme}.css`);
}

themeSelect.addEventListener("change", () => {
  chooseTheme();
});

chooseTheme();
