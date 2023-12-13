// Local Storage Dark Mode
let darkMode = localStorage.getItem("darkMode");
// Body
const body = document.getElementById("body");
// Theme Toogle
const theme = document.getElementById("theme");

const darkModeEnable = () => {
  // 1. Add the class dark mode into the html
  document.body.classList.add("darkmode");
  // 2. Update Dark Mode in the local storage
  localStorage.setItem("darkMode", "darkModeEnabled");
};
const darkModeDisable = () => {
  // 1. Remove the class dark mode into the html
  document.body.classList.remove("darkmode");
  // 2. Update Dark Mode in the local storage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "darkModeEnabled") {
  darkModeEnable();
}

theme.addEventListener("click", function () {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "darkModeEnabled") {
    darkModeEnable();
  } else {
    darkModeDisable();
  }
});
