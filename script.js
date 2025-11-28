const arr = [1, 2, 3, "John"];
console.log(arr);
// Current Year
const currentYearEl = document.getElementById("current-year");
if (currentYearEl) {
  const currentYear = new Date().getFullYear();
  currentYearEl.textContent = currentYear;
}
