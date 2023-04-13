import { food } from "./food.js";
import { drinks } from "./drinks.js";

const menu = () => {
  while (content.firstChild) {
    content.firstChild.remove();
  }

  const menuTabs = document.createElement("div");
  const foodTab = document.createElement("button");
  const drinkTab = document.createElement("button");

  foodTab.textContent = "Food";
  drinkTab.textContent = "Drinks";

  content.appendChild(menuTabs);
  menuTabs.appendChild(foodTab);
  menuTabs.appendChild(drinkTab);
  food();

  foodTab.addEventListener("click", () => {
    while (content.children[1]) {
      content.children[1].remove();
    }
    food();
  });

  drinkTab.addEventListener("click", () => {
    while (content.children[1]) {
      content.children[1].remove();
    }
    drinks();
  });
};

export { menu };
