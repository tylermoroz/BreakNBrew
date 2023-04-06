import { homePage } from "./home.js";
import { menu } from "./menu.js";

const tabs = () => {
  const tabContent = document.createElement("div");
  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";

  tabContent.appendChild(homeTab);
  tabContent.appendChild(menuTab);

  //   homeTab.addEventListener("click", () => {});
  //   menuTab.addEventListener('click', () => {});

  return tabContent;
};

export { tabs };
