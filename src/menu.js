import belgianWaff from "./assets/belgianWaff.jpg";
import benny from "./assets/benny.jpg";
import breakfastWaff from "./assets/breakfastWaffle.jpeg";
import chickWaff from "./assets/chickWaff.jpg";
import cinnBun from "./assets/cinnBun.jpg";
import frenchT from "./assets/frenchToast.jpg";
import huevos from "./assets/huevos.jpg";
import pulledPork from "./assets/pulledPorkHash.jpg";
import veganSausage from "./assets/veganSausageTofu.jpg";

const foodItem = (imgSrc, name, desc, price) => {
  return { imgSrc, name, desc, price };
};

const belgianWaffles = foodItem(
  belgianWaff,
  "Belgian Waffles",
  "Waffles topped with fresh fruit, fruit syrups, and whipped cream",
  "$16"
);

const eggsBenny = foodItem(
  benny,
  "Eggs Benny",
  "House-made cornbread topped with 2 slices of back bacon and 2 poached eggs from Four Whistle Farm, smothered in béchamel sauce",
  "$17"
);

const breakfastWaffle = foodItem(
  breakfastWaff,
  "Breakfast Waffle",
  "Waffle topped with 1 sunny-side up egg, 3 pork breakfast sausages and maple butter",
  "$14"
);

const chickenWaffles = foodItem(
  chickWaff,
  "Chicken & Waffles",
  "Waffle topped with 2 fried & breaded chicken breasts, watermelon salsa, and maple butter",
  "$19"
);

const cinnamonBun = foodItem(cinnBun, "Cinnamon Bun", "Baked Daily", "$5");

const frenchToast = foodItem(
  frenchT,
  "French Toast",
  "Our house-made cinnamon bun, sliced and cooked in a nutmeg egg wash, topped with berry compote and crème fraîche",
  "$16"
);

const huevosRancheros = foodItem(
  huevos,
  "Huevos Rancheros",
  "2 fried tortillas topped with house spicy bean blend, cheddar cheese, two poached eggs, and cilantro garnish, with side salsa",
  "$16"
);

const pulledPorkHash = foodItem(
  pulledPork,
  "Pulled Pork Hash",
  "Hand-cut hash browns topped with diced onion, bell peppers, cheese curds, house slow-roasted pulled pork and 2 sunny-side up eggs",
  "$21"
);

const veganSausageTofu = foodItem(
  veganSausage,
  "Vegan Sausage & Tofu Scramble",
  "Beyond Meat vegan sausage, bell peppers, kale, roasted yams, and pan-fried tofu, scrambled together with turmeric and nutritional yeast. Served with Eleanor & Laurent sourdough toast",
  "$17"
);

const menu = () => {
  const content = document.getElementById("content");
  const head = document.createElement("h1");

  head.textContent = "Food";
  content.appendChild(head);

  return content;
};

export { menu };
