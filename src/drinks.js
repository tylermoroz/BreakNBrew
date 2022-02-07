export const drinkMenuDiv = document.createElement('div');

const drinkTitle = function(){
    const drinkPage = document.getElementById('content');
    const title = document.createElement('h1');

    title.textContent = 'Beverages';
    title.setAttribute('id', 'beverages-title');

    drinkPage.appendChild(title);
}

const drinkItem = function(name, description, price){

    return { name, description, price };
};

const coffeeTea = drinkItem("Brewed Coffee / Tea", "", "$3.50");

const sanPellegrinoFruit = drinkItem("San Pellegrino Sparkling Fruit Beverages", "330 mL Can (Blood Orange / Orange / Lemon)", "$3");

const espresso = drinkItem("Espresso", "Single Shot / Double Shot", "$2.75 / $3.75");

const sanPellegrinoWater = drinkItem("San Pellegrino Sparkling Mineral Water", "250 / 750 mL Bottle", "$2.50 / $5");

const americano = drinkItem("Americano", "", "$3.50");

const latte = drinkItem("Latte", "9 oz / 14 oz", "$4.00 / $5.00");

const cappuccino = drinkItem("Cappuccino", "", "$4.50");

const royalJamaican = drinkItem("Royal Jamaican Ginger Beer", "", "$5");

const chaiLatte = drinkItem("House-Made Chai Latte", "9 oz / 14 oz", "$3.50 / $5.00");

const mulekicker = drinkItem("New Level Craft Soda Mocktail Mulekicker", "", "$6");

const hotChocolateFog = drinkItem("Hot Chocolate / London Fog", "", "$4");

const painapplePunch = drinkItem("New Level Painapple Punch Craft Soda", "", "$6");

const coldBrew = drinkItem("Cold Brew", "Kaffa Roastery’s hot extracted Ethiopian Guji, rapidly chilled. Option of sweetened/unsweetened.", "$4");

const stieglNonAlc = drinkItem("Stiegl Freibier Non-Alcoholic", "", "$6");

const sodaPop = drinkItem("Pop", "Coca-Cola / Diet Coke / Sprite / Cran-Soda / Ice Tea / Ginger Ale", "$3");

const annexCraftSoda = drinkItem("Annex Craft Soda (Root Beer / Saskatoon Lemonade)", "", "$5");

const feverTree = drinkItem("Fever-Tree (Sicilian Lemonade / Ginger Beer)", "200 mL Bottle", "$4");

const drinkMenu = function(drink) {

    const content = document.getElementById('content');
    const drinkDiv = document.createElement('div');
    const drinkName = document.createElement('h3');
    const drinkDesc = document.createElement('p');
    const drinkPrice = document.createElement('p');

    drinkName.textContent = drink.name;
    drinkDesc.textContent = drink.description;
    drinkPrice.textContent = drink.price;

    drinkMenuDiv.setAttribute('id', 'drink-menu');
    drinkDiv.setAttribute('id', 'drink-div');
    drinkName.setAttribute('id', 'drink-name');
    drinkDesc.setAttribute('id', 'drink-description');
    drinkPrice.setAttribute('id', 'drink-price');

    drinkMenuDiv.classList.add("beverages");
    drinkDiv.classList.add("beverages");
    drinkName.classList.add("beverages");
    drinkDesc.classList.add("beverages");
    drinkPrice.classList.add("beverages");

    drinkDiv.appendChild(drinkName);
    drinkDiv.appendChild(drinkDesc);
    drinkDiv.appendChild(drinkPrice);
    drinkMenuDiv.appendChild(drinkDiv);
    content.appendChild(drinkMenuDiv);

    return content, drinkMenuDiv;
};

export function addToDrinkMenu(){
    drinkTitle();
    drinkMenu(latte);
    drinkMenu(coldBrew);
    drinkMenu(espresso);
    drinkMenu(americano);
    drinkMenu(coffeeTea);
    drinkMenu(cappuccino);
    drinkMenu(sanPellegrinoWater);
    drinkMenu(sanPellegrinoFruit);
    drinkMenu(chaiLatte);
    drinkMenu(hotChocolateFog);
    drinkMenu(painapplePunch);
    drinkMenu(stieglNonAlc);
    drinkMenu(royalJamaican);
    drinkMenu(feverTree);
    drinkMenu(mulekicker);
    drinkMenu(annexCraftSoda);
    drinkMenu(sodaPop);
}