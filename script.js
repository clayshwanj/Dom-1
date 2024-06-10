function closeTab() {
  const tabElement = document.querySelector(".Tab");
  if (tabElement) {
    tabElement.remove();
  }
}
let closeShopping = document.getElementById("close");
closeShopping.addEventListener("click", closeTab);

function displayTab() {
  const tab = document.querySelector(".Tab");
  tab.style.display = "block";
}
let iconcart = document.querySelector(".iconcart");
iconcart.addEventListener("click", displayTab);
