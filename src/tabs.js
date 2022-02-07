import home from './home.js';
import { addToFoodMenu, foodMenuDiv } from './food.js';
import { addToDrinkMenu, drinkMenuDiv } from './drinks.js';
import contactUs from './contact.js';

export default function tabs() {
    const tabContent = document.createElement('div');
    const homeTab = document.createElement('button');
    const foodTab = document.createElement('button');
    const drinkTab = document.createElement('button');
    const contactTab = document.createElement('button');

    tabContent.appendChild(homeTab);
    tabContent.appendChild(foodTab);
    tabContent.appendChild(drinkTab);
    tabContent.appendChild(contactTab);

    homeTab.setAttribute('id', 'home');
    foodTab.setAttribute('id', 'food');
    drinkTab.setAttribute('id', 'drink');
    contactTab.setAttribute('id', 'contact');

    homeTab.textContent = 'Home';
    foodTab.textContent = 'Food';
    drinkTab.textContent = 'Beverages';
    contactTab.textContent = 'Contact';

    homeTab.addEventListener('click', function() {
        while(content.firstChild){
            content.firstChild.remove();
        }
        home();
    });

    foodTab.addEventListener('click', function() {
        while(content.firstChild){
            content.firstChild.remove();
        }
        while(foodMenuDiv.firstChild){
            foodMenuDiv.firstChild.remove();
        }
        addToFoodMenu();
    });

    drinkTab.addEventListener('click', function(){
        while(content.firstChild){
            content.firstChild.remove();
        }
        while(drinkMenuDiv.firstChild){
            drinkMenuDiv.firstChild.remove();
        }
        addToDrinkMenu();
    });

    contactTab.addEventListener('click', function(){
        while(content.firstChild){
            content.firstChild.remove();
        }
        contactUs();
    })

    return tabContent;
};