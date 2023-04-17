import { homePage } from "./home.js";
import { menu } from "./menu.js";

const tabs = () => {
  const tabContent = document.createElement("div");
  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");

  tabContent.id = "tabs-content";
  homeTab.classList.add("tab");
  menuTab.classList.add("tab");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";

  tabContent.appendChild(homeTab);
  tabContent.appendChild(menuTab);

  homeTab.addEventListener("click", () => {
    while (content.firstChild) {
      content.firstChild.remove();
    }
    homePage();
  });

  menuTab.addEventListener("click", () => {
    menu();
  });

  return tabContent;
};

export { tabs };
