import cinnBun from './cinnBun.jpg';
import pulledPork from './pulledPorkHash.jpg';
import breakfastWaff from './breakfastWaffle.jpeg';
import benny from './benny.jpg';
import huevos from './huevos.jpg';
import veganSausageTofu from './veganSausageTofu.jpg';
import chickWaff from './chickWaff.jpg';
import frenchT from './frenchToast.jpg';
import belgianWaff from './belgianWaff.jpg';

export const foodMenuDiv = document.createElement('div');

const foodTitle = function(){
    const foodPage = document.getElementById('content');
    const title = document.createElement('h1');

    title.textContent = '24 Hour Breakfast';
    title.setAttribute('id', 'food-title');

    foodPage.appendChild(title);
}

const foodItem = function(imgSrc, name, description, price){

    return { imgSrc, name, description, price };
};

const cinnamonBun = foodItem(cinnBun, 'Cinnamon Bun', 'Baked Daily', '$5');

const pulledPorkHash = foodItem(pulledPork, 'Pulled Pork Hash', 'Hand-cut hash browns topped with diced onion, bell peppers, cheese curds, house slow-roasted pulled pork and 2 sunny-side up eggs', '$21'); 

const breakfastWaffle = foodItem(breakfastWaff, 'Breakfast Waffle', 'Waffle topped with 1 sunny-side up egg, 3 pork breakfast sausages and maple butter', '$14');

const eggsBenny = foodItem(benny, 'Eggs Benny', 'House-made cornbread topped with 2 slices of back bacon and 2 poached eggs from Four Whistle Farm, smothered in béchamel sauce', '$17');

const huevosRancheros = foodItem(huevos, 'Huevos Rancheros', '2 fried tortillas topped with house spicy bean blend, cheddar cheese, two poached eggs, and cilantro garnish, with side salsa', '$16');

const veganScramble = foodItem(veganSausageTofu, 'Vegan Sausage & Tofu Scramble', 'Beyond Meat vegan sausage, bell peppers, kale, roasted yams, and pan-fried tofu, scrambled together with turmeric and nutritional yeast. Served with Eleanor & Laurent sourdough toast', '$17');

const chickenWaffles = foodItem(chickWaff, 'Chicken & Waffles', 'Waffle topped with 2 fried & breaded chicken breasts, watermelon salsa, and maple butter', '$19');

const frenchToast = foodItem(frenchT, 'French Toast', 'Our house-made cinnamon bun, sliced and cooked in a nutmeg egg wash, topped with berry compote and crème fraîche', '$16');

const belgianWaffles = foodItem(belgianWaff, 'Belgian Waffles', 'Waffles topped with fresh fruit, fruit syrups, and whipped cream', '$16');

const foodMenu = function(food) {

    const content = document.getElementById('content');
    const foodDiv = document.createElement('div');
    const foodImg = new Image();
    const foodName = document.createElement('h3');
    const foodDesc = document.createElement('p');
    const foodPrice = document.createElement('p');

    foodImg.src = food.imgSrc;
    foodName.textContent = food.name;
    foodDesc.textContent = food.description;
    foodPrice.textContent = food.price;

    foodMenuDiv.setAttribute('id', 'menu-div');
    foodDiv.setAttribute('id', 'food-div');
    foodImg.setAttribute('id', 'food-img');
    foodName.setAttribute('id', 'food-name');
    foodDesc.setAttribute('id', 'food-description');
    foodPrice.setAttribute('id', 'food-price');

    foodMenuDiv.classList.add("food");
    foodDiv.classList.add("food");
    foodImg.classList.add("food");
    foodName.classList.add("food");
    foodDesc.classList.add("food");
    foodPrice.classList.add("food");

    foodDiv.appendChild(foodImg);
    foodDiv.appendChild(foodName);
    foodDiv.appendChild(foodDesc);
    foodDiv.appendChild(foodPrice);
    foodMenuDiv.appendChild(foodDiv);
    content.appendChild(foodMenuDiv);

    return content, foodMenuDiv;
};

export function addToFoodMenu(){
    foodTitle();
    foodMenu(cinnamonBun);
    foodMenu(pulledPorkHash);
    foodMenu(breakfastWaffle);
    foodMenu(eggsBenny);
    foodMenu(huevosRancheros);
    foodMenu(veganScramble);
    foodMenu(chickenWaffles);
    foodMenu(frenchToast);
    foodMenu(belgianWaffles);
}