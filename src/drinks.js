const drinkItem = (name, desc, price) => {
  return { name, desc, price };
};

const coffeeTea = drinkItem("Brewed Coffee / Tea", "", "$3.50");

const sanPellegrinoFruit = drinkItem(
  "San Pellegrino Sparkling Fruit Beverages",
  "330 mL Can (Blood Orange / Orange / Lemon)",
  "$3"
);

const espresso = drinkItem(
  "Espresso",
  "Single Shot / Double Shot",
  "$2.75 / $3.75"
);

const sanPellegrinoWater = drinkItem(
  "San Pellegrino Sparkling Mineral Water",
  "250 / 750 mL Bottle",
  "$2.50 / $5"
);

const americano = drinkItem("Americano", "", "$3.50");

const latte = drinkItem("Latte", "9 oz / 14 oz", "$4.00 / $5.00");

const cappuccino = drinkItem("Cappuccino", "", "$4.50");

const royalJamaican = drinkItem("Royal Jamaican Ginger Beer", "", "$5");

const chaiLatte = drinkItem(
  "House-Made Chai Latte",
  "9 oz / 14 oz",
  "$3.50 / $5.00"
);

const mulekicker = drinkItem(
  "New Level Craft Soda Mocktail Mulekicker",
  "",
  "$6"
);

const hotChocolateFog = drinkItem("Hot Chocolate / London Fog", "", "$4");

const painapplePunch = drinkItem(
  "New Level Painapple Punch Craft Soda",
  "",
  "$6"
);

const coldBrew = drinkItem(
  "Cold Brew",
  "Kaffa Roastery’s hot extracted Ethiopian Guji, rapidly chilled. Option of sweetened/unsweetened.",
  "$4"
);

const stieglNonAlc = drinkItem("Stiegl Freibier Non-Alcoholic", "", "$6");

const sodaPop = drinkItem(
  "Pop",
  "Coca-Cola / Diet Coke / Sprite / Cran-Soda / Ice Tea / Ginger Ale",
  "$3"
);

const annexCraftSoda = drinkItem(
  "Annex Craft Soda (Root Beer / Saskatoon Lemonade)",
  "",
  "$5"
);

const feverTree = drinkItem(
  "Fever-Tree (Sicilian Lemonade / Ginger Beer)",
  "200 mL Bottle",
  "$4"
);

const water = drinkItem("Water", "Mineral Water", "$0");

const displayDrinks = (item) => {
  const drinkItemDiv = document.createElement("div");
  const drinkName = document.createElement("h3");
  const drinkDesc = document.createElement("p");
  const drinkPrice = document.createElement("p");

  drinkName.textContent = item.name;
  drinkDesc.textContent = item.desc;
  drinkPrice.textContent = item.price;

  drinkItemDiv.classList.add("drink-item");

  drinkItemDiv.appendChild(drinkName);
  drinkItemDiv.appendChild(drinkDesc);
  drinkItemDiv.appendChild(drinkPrice);

  return drinkItemDiv;
};

const drinks = () => {
  const content = document.getElementById("content");
  const drinkPage = document.createElement("div");
  const head = document.createElement("h1");
  const drinkMenu = document.createElement("div");

  head.textContent = "Drinks";

  drinkPage.id = "drink-page";
  drinkMenu.id = "drink-menu";

  content.appendChild(drinkPage);
  drinkPage.appendChild(head);
  drinkPage.appendChild(drinkMenu);
  drinkMenu.appendChild(displayDrinks(coffeeTea));
  drinkMenu.appendChild(displayDrinks(sanPellegrinoFruit));
  drinkMenu.appendChild(displayDrinks(espresso));
  drinkMenu.appendChild(displayDrinks(sanPellegrinoWater));
  drinkMenu.appendChild(displayDrinks(americano));
  drinkMenu.appendChild(displayDrinks(latte));
  drinkMenu.appendChild(displayDrinks(cappuccino));
  drinkMenu.appendChild(displayDrinks(royalJamaican));
  drinkMenu.appendChild(displayDrinks(chaiLatte));
  drinkMenu.appendChild(displayDrinks(mulekicker));
  drinkMenu.appendChild(displayDrinks(hotChocolateFog));
  drinkMenu.appendChild(displayDrinks(painapplePunch));
  drinkMenu.appendChild(displayDrinks(coldBrew));
  drinkMenu.appendChild(displayDrinks(stieglNonAlc));
  drinkMenu.appendChild(displayDrinks(sodaPop));
  drinkMenu.appendChild(displayDrinks(annexCraftSoda));
  drinkMenu.appendChild(displayDrinks(feverTree));
  drinkMenu.appendChild(displayDrinks(water));

  return content;
};

export { drinks };
