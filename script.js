function closeTab() {
  const tab = document.querySelector(".Tab");
  tab.style.display = "none";
}
let closeShopping = document.getElementById("close");
closeShopping.addEventListener("click", closeTab);

function displayTab() {
  const tab = document.querySelector(".Tab");
  tab.style.display = "block";
}
let iconcart = document.querySelector(".iconcart");
iconcart.addEventListener("click", displayTab);

document.addEventListener("DOMContentLoaded", () => {
  const totalButton = document.getElementById("total");

  // Function to update the total price
  function updateTotal() {
    let total = 0;
    document.querySelectorAll(".item").forEach((item) => {
      const count = parseInt(item.querySelector(".count").innerText);
      const price = parseInt(
        item.querySelector(".price").innerText.replace("Ksh ", "")
      );
      total += count * price;
    });
    totalButton.innerText = `Total: Ksh ${total}`;
  }

  // Function to handle quantity adjustment
  function adjustQuantity(event, isIncrease) {
    const countElem = event.target.closest(".item").querySelector(".count");
    let count = parseInt(countElem.innerText);
    if (isIncrease) {
      count++;
    } else {
      if (count > 0) {
        count--;
      }
    }
    countElem.innerText = count;
    updateTotal();
  }

  // Function to handle deleting items
  function deleteItem() {
    const deletionElements = document.querySelectorAll(".dust-bin");

    deletionElements.forEach((deletion) => {
      deletion.addEventListener("click", (event) => {
        let itemElement = event.target.closest(".item");
        if (itemElement) {
          itemElement.remove();
        }
      });
    });
    updateTotal();
  }

  // Function to handle liking items
  function toggleLike() {
    const likeButtons = document.querySelectorAll(".like-button");

    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener("click", () => {
        likeButton.classList.toggle("liked");
      });
    });
  }

  // Event delegation for all .item elements
  document.querySelector(".list").addEventListener("click", (event) => {
    if (
      event.target.closest("div").children[0] === event.target &&
      event.target.innerText === "+"
    ) {
      adjustQuantity(event, true);
    }
    if (
      event.target.closest("div").children[0] === event.target &&
      event.target.innerText === "-"
    ) {
      adjustQuantity(event, false);
    }
    if (
      event.target.closest("div").children[0] === event.target &&
      event.target.closest(".item").querySelector("svg") === event.target
    ) {
    }
    if (
      event.target.closest("div").children[0] === event.target &&
      event.target.closest(".item").querySelector(".heart") === event.target
    ) {
    }
  });
  toggleLike();
  deleteItem();

  // Initialize total
  updateTotal();
});
