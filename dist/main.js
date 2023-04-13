/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/drinks.js":
/*!***********************!*\
  !*** ./src/drinks.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drinks": () => (/* binding */ drinks)
/* harmony export */ });
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

const displayDrinks = (item) => {
  const drinkItemDiv = document.createElement("div");
  const drinkName = document.createElement("h3");
  const drinkDesc = document.createElement("p");
  const drinkPrice = document.createElement("p");

  drinkName.textContent = item.name;
  drinkDesc.textContent = item.desc;
  drinkPrice.textContent = item.price;

  drinkItemDiv.appendChild(drinkName);
  drinkItemDiv.appendChild(drinkDesc);
  drinkItemDiv.appendChild(drinkPrice);

  return drinkItemDiv;
};

const drinks = () => {
  const content = document.getElementById("content");
  const drinkDiv = document.createElement("div");
  const head = document.createElement("h1");

  head.textContent = "Drinks";

  content.appendChild(drinkDiv);
  drinkDiv.appendChild(head);
  drinkDiv.appendChild(displayDrinks(coffeeTea));
  drinkDiv.appendChild(displayDrinks(sanPellegrinoFruit));
  drinkDiv.appendChild(displayDrinks(espresso));
  drinkDiv.appendChild(displayDrinks(sanPellegrinoWater));
  drinkDiv.appendChild(displayDrinks(americano));
  drinkDiv.appendChild(displayDrinks(latte));
  drinkDiv.appendChild(displayDrinks(cappuccino));
  drinkDiv.appendChild(displayDrinks(royalJamaican));
  drinkDiv.appendChild(displayDrinks(chaiLatte));
  drinkDiv.appendChild(displayDrinks(mulekicker));
  drinkDiv.appendChild(displayDrinks(hotChocolateFog));
  drinkDiv.appendChild(displayDrinks(painapplePunch));
  drinkDiv.appendChild(displayDrinks(coldBrew));
  drinkDiv.appendChild(displayDrinks(stieglNonAlc));
  drinkDiv.appendChild(displayDrinks(sodaPop));
  drinkDiv.appendChild(displayDrinks(annexCraftSoda));
  drinkDiv.appendChild(displayDrinks(feverTree));

  return content;
};




/***/ }),

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "food": () => (/* binding */ food)
/* harmony export */ });
/* harmony import */ var _assets_belgianWaff_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/belgianWaff.jpg */ "./src/assets/belgianWaff.jpg");
/* harmony import */ var _assets_benny_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/benny.jpg */ "./src/assets/benny.jpg");
/* harmony import */ var _assets_breakfastWaffle_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/breakfastWaffle.jpeg */ "./src/assets/breakfastWaffle.jpeg");
/* harmony import */ var _assets_chickWaff_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/chickWaff.jpg */ "./src/assets/chickWaff.jpg");
/* harmony import */ var _assets_cinnBun_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/cinnBun.jpg */ "./src/assets/cinnBun.jpg");
/* harmony import */ var _assets_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/frenchToast.jpg */ "./src/assets/frenchToast.jpg");
/* harmony import */ var _assets_huevos_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/huevos.jpg */ "./src/assets/huevos.jpg");
/* harmony import */ var _assets_pulledPorkHash_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/pulledPorkHash.jpg */ "./src/assets/pulledPorkHash.jpg");
/* harmony import */ var _assets_veganSausageTofu_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/veganSausageTofu.jpg */ "./src/assets/veganSausageTofu.jpg");










const foodItem = (imgSrc, name, desc, price) => {
  return { imgSrc, name, desc, price };
};

const belgianWaffles = foodItem(
  _assets_belgianWaff_jpg__WEBPACK_IMPORTED_MODULE_0__,
  "Belgian Waffles",
  "Waffles topped with fresh fruit, fruit syrups, and whipped cream",
  "$16"
);

const eggsBenny = foodItem(
  _assets_benny_jpg__WEBPACK_IMPORTED_MODULE_1__,
  "Eggs Benny",
  "House-made cornbread topped with 2 slices of back bacon and 2 poached eggs from Four Whistle Farm, smothered in béchamel sauce",
  "$17"
);

const breakfastWaffle = foodItem(
  _assets_breakfastWaffle_jpeg__WEBPACK_IMPORTED_MODULE_2__,
  "Breakfast Waffle",
  "Waffle topped with 1 sunny-side up egg, 3 pork breakfast sausages and maple butter",
  "$14"
);

const chickenWaffles = foodItem(
  _assets_chickWaff_jpg__WEBPACK_IMPORTED_MODULE_3__,
  "Chicken & Waffles",
  "Waffle topped with 2 fried & breaded chicken breasts, watermelon salsa, and maple butter",
  "$19"
);

const cinnamonBun = foodItem(_assets_cinnBun_jpg__WEBPACK_IMPORTED_MODULE_4__, "Cinnamon Bun", "Baked Daily", "$5");

const frenchToast = foodItem(
  _assets_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_5__,
  "French Toast",
  "Our house-made cinnamon bun, sliced and cooked in a nutmeg egg wash, topped with berry compote and crème fraîche",
  "$16"
);

const huevosRancheros = foodItem(
  _assets_huevos_jpg__WEBPACK_IMPORTED_MODULE_6__,
  "Huevos Rancheros",
  "2 fried tortillas topped with house spicy bean blend, cheddar cheese, two poached eggs, and cilantro garnish, with side salsa",
  "$16"
);

const pulledPorkHash = foodItem(
  _assets_pulledPorkHash_jpg__WEBPACK_IMPORTED_MODULE_7__,
  "Pulled Pork Hash",
  "Hand-cut hash browns topped with diced onion, bell peppers, cheese curds, house slow-roasted pulled pork and 2 sunny-side up eggs",
  "$21"
);

const veganSausageTofu = foodItem(
  _assets_veganSausageTofu_jpg__WEBPACK_IMPORTED_MODULE_8__,
  "Vegan Sausage & Tofu Scramble",
  "Beyond Meat vegan sausage, bell peppers, kale, roasted yams, and pan-fried tofu, scrambled together with turmeric and nutritional yeast. Served with Eleanor & Laurent sourdough toast",
  "$17"
);

const displayMenuItem = (item) => {
  const foodItemDiv = document.createElement("div");
  const itemImg = new Image();
  const itemName = document.createElement("h3");
  const itemDesc = document.createElement("p");
  const itemPrice = document.createElement("p");

  itemImg.src = item.imgSrc;
  itemName.textContent = item.name;
  itemDesc.textContent = item.desc;
  itemPrice.textContent = item.price;

  foodItemDiv.appendChild(itemImg);
  foodItemDiv.appendChild(itemName);
  foodItemDiv.appendChild(itemDesc);
  foodItemDiv.appendChild(itemPrice);

  return foodItemDiv;
};

const food = () => {
  const content = document.getElementById("content");
  const menuDiv = document.createElement("div");
  const head = document.createElement("h1");

  head.textContent = "Food";

  content.appendChild(menuDiv);
  menuDiv.appendChild(head);
  menuDiv.appendChild(displayMenuItem(belgianWaffles));
  menuDiv.appendChild(displayMenuItem(eggsBenny));
  menuDiv.appendChild(displayMenuItem(breakfastWaffle));
  menuDiv.appendChild(displayMenuItem(chickenWaffles));
  menuDiv.appendChild(displayMenuItem(cinnamonBun));
  menuDiv.appendChild(displayMenuItem(frenchToast));
  menuDiv.appendChild(displayMenuItem(huevosRancheros));
  menuDiv.appendChild(displayMenuItem(pulledPorkHash));
  menuDiv.appendChild(displayMenuItem(veganSausageTofu));

  return content;
};




/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "homePage": () => (/* binding */ homePage)
/* harmony export */ });
/* harmony import */ var _assets_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/cafe.jpg */ "./src/assets/cafe.jpg");


const homePage = () => {
  const content = document.getElementById("content");
  const homeDiv = document.createElement("div");
  const headline = document.createElement("h1");
  const cafeImg = new Image();
  const copy = document.createElement("p");
  const hours = document.createElement("div");
  const hoursHead = document.createElement("h2");
  const sundayHours = document.createElement("p");
  const mondayHours = document.createElement("p");
  const tuesdayHours = document.createElement("p");
  const wednesdayHours = document.createElement("p");
  const thursdayHours = document.createElement("p");
  const fridayHours = document.createElement("p");
  const saturdayHours = document.createElement("p");
  const locationDiv = document.createElement("div");
  const locationHead = document.createElement("h2");
  const address = document.createElement("p");

  headline.textContent = "Welcome to Break N' Brew";
  cafeImg.src = _assets_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__;
  copy.textContent = "Break N' Brew, Edmonton's premier rustic diner!";
  hoursHead.textContent = "Hours";
  sundayHours.textContent = "Sunday: 8am - 4pm";
  mondayHours.textContent = "Monday: 8am - 11pm";
  tuesdayHours.textContent = "Tuesday: 8am - 11pm";
  wednesdayHours.textContent = "Wednesday: 8am - 11pm";
  thursdayHours.textContent = "Thursday: 8am - 11pm";
  fridayHours.textContent = "Friday: 8am - 1am";
  saturdayHours.textContent = "Saturday: 8am - 1am";
  locationHead.textContent = "Location";
  address.textContent = "12345 200 Street, Edmonton, Alberta";

  content.appendChild(homeDiv);
  homeDiv.appendChild(headline);
  homeDiv.appendChild(cafeImg);
  homeDiv.appendChild(copy);
  homeDiv.appendChild(hours);
  homeDiv.appendChild(locationDiv);
  hours.appendChild(hoursHead);
  hours.appendChild(sundayHours);
  hours.appendChild(mondayHours);
  hours.appendChild(tuesdayHours);
  hours.appendChild(wednesdayHours);
  hours.appendChild(thursdayHours);
  hours.appendChild(fridayHours);
  hours.appendChild(saturdayHours);
  locationDiv.appendChild(locationHead);
  locationDiv.appendChild(address);

  return content;
};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menu": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./food.js */ "./src/food.js");
/* harmony import */ var _drinks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./drinks.js */ "./src/drinks.js");



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
  (0,_food_js__WEBPACK_IMPORTED_MODULE_0__.food)();

  foodTab.addEventListener("click", () => {
    while (content.children[1]) {
      content.children[1].remove();
    }
    (0,_food_js__WEBPACK_IMPORTED_MODULE_0__.food)();
  });

  drinkTab.addEventListener("click", () => {
    while (content.children[1]) {
      content.children[1].remove();
    }
    (0,_drinks_js__WEBPACK_IMPORTED_MODULE_1__.drinks)();
  });
};




/***/ }),

/***/ "./src/tabs.js":
/*!*********************!*\
  !*** ./src/tabs.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tabs": () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");



const tabs = () => {
  const tabContent = document.createElement("div");
  const homeTab = document.createElement("button");
  const menuTab = document.createElement("button");

  homeTab.textContent = "Home";
  menuTab.textContent = "Menu";

  tabContent.appendChild(homeTab);
  tabContent.appendChild(menuTab);

  homeTab.addEventListener("click", () => {
    while (content.firstChild) {
      content.firstChild.remove();
    }
    (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.homePage)();
  });

  menuTab.addEventListener("click", () => {
    (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.menu)();
  });

  return tabContent;
};




/***/ }),

/***/ "./src/assets/belgianWaff.jpg":
/*!************************************!*\
  !*** ./src/assets/belgianWaff.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22478e232b0fe44b10db.jpg";

/***/ }),

/***/ "./src/assets/benny.jpg":
/*!******************************!*\
  !*** ./src/assets/benny.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99620a20cc97b6038d83.jpg";

/***/ }),

/***/ "./src/assets/breakfastWaffle.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/breakfastWaffle.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a926c71ba9d4d1925f67.jpeg";

/***/ }),

/***/ "./src/assets/cafe.jpg":
/*!*****************************!*\
  !*** ./src/assets/cafe.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b84698b7a0dfa229ef9b.jpg";

/***/ }),

/***/ "./src/assets/chickWaff.jpg":
/*!**********************************!*\
  !*** ./src/assets/chickWaff.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81e60d169aaa9e468fca.jpg";

/***/ }),

/***/ "./src/assets/cinnBun.jpg":
/*!********************************!*\
  !*** ./src/assets/cinnBun.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34f2e548063808fa9e98.jpg";

/***/ }),

/***/ "./src/assets/frenchToast.jpg":
/*!************************************!*\
  !*** ./src/assets/frenchToast.jpg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16f2e8c8f278e73c18c9.jpg";

/***/ }),

/***/ "./src/assets/huevos.jpg":
/*!*******************************!*\
  !*** ./src/assets/huevos.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27beca6fe172327e8c26.jpg";

/***/ }),

/***/ "./src/assets/pulledPorkHash.jpg":
/*!***************************************!*\
  !*** ./src/assets/pulledPorkHash.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ae8523a7608380e0c4f.jpg";

/***/ }),

/***/ "./src/assets/veganSausageTofu.jpg":
/*!*****************************************!*\
  !*** ./src/assets/veganSausageTofu.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "53b9bd7acca1837355d5.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ "./src/tabs.js");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ "./src/home.js");



document.body.appendChild((0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabs)());
document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxrREFBUTtBQUNaLEdBQUc7O0FBRUg7QUFDQSxJQUFJLDhDQUFJO0FBQ1IsR0FBRzs7QUFFSDtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1QmhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7O0FDZmlDO0FBQ0k7O0FBRXJDLDBCQUEwQiw4Q0FBSTtBQUM5QiwwQkFBMEIsa0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL2RyaW5rcy5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL2Zvb2QuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZHJpbmtJdGVtID0gKG5hbWUsIGRlc2MsIHByaWNlKSA9PiB7XG4gIHJldHVybiB7IG5hbWUsIGRlc2MsIHByaWNlIH07XG59O1xuXG5jb25zdCBjb2ZmZWVUZWEgPSBkcmlua0l0ZW0oXCJCcmV3ZWQgQ29mZmVlIC8gVGVhXCIsIFwiXCIsIFwiJDMuNTBcIik7XG5cbmNvbnN0IHNhblBlbGxlZ3Jpbm9GcnVpdCA9IGRyaW5rSXRlbShcbiAgXCJTYW4gUGVsbGVncmlubyBTcGFya2xpbmcgRnJ1aXQgQmV2ZXJhZ2VzXCIsXG4gIFwiMzMwIG1MIENhbiAoQmxvb2QgT3JhbmdlIC8gT3JhbmdlIC8gTGVtb24pXCIsXG4gIFwiJDNcIlxuKTtcblxuY29uc3QgZXNwcmVzc28gPSBkcmlua0l0ZW0oXG4gIFwiRXNwcmVzc29cIixcbiAgXCJTaW5nbGUgU2hvdCAvIERvdWJsZSBTaG90XCIsXG4gIFwiJDIuNzUgLyAkMy43NVwiXG4pO1xuXG5jb25zdCBzYW5QZWxsZWdyaW5vV2F0ZXIgPSBkcmlua0l0ZW0oXG4gIFwiU2FuIFBlbGxlZ3Jpbm8gU3BhcmtsaW5nIE1pbmVyYWwgV2F0ZXJcIixcbiAgXCIyNTAgLyA3NTAgbUwgQm90dGxlXCIsXG4gIFwiJDIuNTAgLyAkNVwiXG4pO1xuXG5jb25zdCBhbWVyaWNhbm8gPSBkcmlua0l0ZW0oXCJBbWVyaWNhbm9cIiwgXCJcIiwgXCIkMy41MFwiKTtcblxuY29uc3QgbGF0dGUgPSBkcmlua0l0ZW0oXCJMYXR0ZVwiLCBcIjkgb3ogLyAxNCBvelwiLCBcIiQ0LjAwIC8gJDUuMDBcIik7XG5cbmNvbnN0IGNhcHB1Y2Npbm8gPSBkcmlua0l0ZW0oXCJDYXBwdWNjaW5vXCIsIFwiXCIsIFwiJDQuNTBcIik7XG5cbmNvbnN0IHJveWFsSmFtYWljYW4gPSBkcmlua0l0ZW0oXCJSb3lhbCBKYW1haWNhbiBHaW5nZXIgQmVlclwiLCBcIlwiLCBcIiQ1XCIpO1xuXG5jb25zdCBjaGFpTGF0dGUgPSBkcmlua0l0ZW0oXG4gIFwiSG91c2UtTWFkZSBDaGFpIExhdHRlXCIsXG4gIFwiOSBveiAvIDE0IG96XCIsXG4gIFwiJDMuNTAgLyAkNS4wMFwiXG4pO1xuXG5jb25zdCBtdWxla2lja2VyID0gZHJpbmtJdGVtKFxuICBcIk5ldyBMZXZlbCBDcmFmdCBTb2RhIE1vY2t0YWlsIE11bGVraWNrZXJcIixcbiAgXCJcIixcbiAgXCIkNlwiXG4pO1xuXG5jb25zdCBob3RDaG9jb2xhdGVGb2cgPSBkcmlua0l0ZW0oXCJIb3QgQ2hvY29sYXRlIC8gTG9uZG9uIEZvZ1wiLCBcIlwiLCBcIiQ0XCIpO1xuXG5jb25zdCBwYWluYXBwbGVQdW5jaCA9IGRyaW5rSXRlbShcbiAgXCJOZXcgTGV2ZWwgUGFpbmFwcGxlIFB1bmNoIENyYWZ0IFNvZGFcIixcbiAgXCJcIixcbiAgXCIkNlwiXG4pO1xuXG5jb25zdCBjb2xkQnJldyA9IGRyaW5rSXRlbShcbiAgXCJDb2xkIEJyZXdcIixcbiAgXCJLYWZmYSBSb2FzdGVyeeKAmXMgaG90IGV4dHJhY3RlZCBFdGhpb3BpYW4gR3VqaSwgcmFwaWRseSBjaGlsbGVkLiBPcHRpb24gb2Ygc3dlZXRlbmVkL3Vuc3dlZXRlbmVkLlwiLFxuICBcIiQ0XCJcbik7XG5cbmNvbnN0IHN0aWVnbE5vbkFsYyA9IGRyaW5rSXRlbShcIlN0aWVnbCBGcmVpYmllciBOb24tQWxjb2hvbGljXCIsIFwiXCIsIFwiJDZcIik7XG5cbmNvbnN0IHNvZGFQb3AgPSBkcmlua0l0ZW0oXG4gIFwiUG9wXCIsXG4gIFwiQ29jYS1Db2xhIC8gRGlldCBDb2tlIC8gU3ByaXRlIC8gQ3Jhbi1Tb2RhIC8gSWNlIFRlYSAvIEdpbmdlciBBbGVcIixcbiAgXCIkM1wiXG4pO1xuXG5jb25zdCBhbm5leENyYWZ0U29kYSA9IGRyaW5rSXRlbShcbiAgXCJBbm5leCBDcmFmdCBTb2RhIChSb290IEJlZXIgLyBTYXNrYXRvb24gTGVtb25hZGUpXCIsXG4gIFwiXCIsXG4gIFwiJDVcIlxuKTtcblxuY29uc3QgZmV2ZXJUcmVlID0gZHJpbmtJdGVtKFxuICBcIkZldmVyLVRyZWUgKFNpY2lsaWFuIExlbW9uYWRlIC8gR2luZ2VyIEJlZXIpXCIsXG4gIFwiMjAwIG1MIEJvdHRsZVwiLFxuICBcIiQ0XCJcbik7XG5cbmNvbnN0IGRpc3BsYXlEcmlua3MgPSAoaXRlbSkgPT4ge1xuICBjb25zdCBkcmlua0l0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkcmlua05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGRyaW5rRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkcmlua1ByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgZHJpbmtOYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICBkcmlua0Rlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gIGRyaW5rUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gIGRyaW5rSXRlbURpdi5hcHBlbmRDaGlsZChkcmlua05hbWUpO1xuICBkcmlua0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZHJpbmtEZXNjKTtcbiAgZHJpbmtJdGVtRGl2LmFwcGVuZENoaWxkKGRyaW5rUHJpY2UpO1xuXG4gIHJldHVybiBkcmlua0l0ZW1EaXY7XG59O1xuXG5jb25zdCBkcmlua3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IGRyaW5rRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBoZWFkLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGRyaW5rRGl2KTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoY29mZmVlVGVhKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3Moc2FuUGVsbGVncmlub0ZydWl0KSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoZXNwcmVzc28pKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhzYW5QZWxsZWdyaW5vV2F0ZXIpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhhbWVyaWNhbm8pKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhsYXR0ZSkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGNhcHB1Y2Npbm8pKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhyb3lhbEphbWFpY2FuKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoY2hhaUxhdHRlKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MobXVsZWtpY2tlcikpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGhvdENob2NvbGF0ZUZvZykpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKHBhaW5hcHBsZVB1bmNoKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoY29sZEJyZXcpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhzdGllZ2xOb25BbGMpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhzb2RhUG9wKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoYW5uZXhDcmFmdFNvZGEpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhmZXZlclRyZWUpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IGRyaW5rcyB9O1xuIiwiaW1wb3J0IGJlbGdpYW5XYWZmIGZyb20gXCIuL2Fzc2V0cy9iZWxnaWFuV2FmZi5qcGdcIjtcbmltcG9ydCBiZW5ueSBmcm9tIFwiLi9hc3NldHMvYmVubnkuanBnXCI7XG5pbXBvcnQgYnJlYWtmYXN0V2FmZiBmcm9tIFwiLi9hc3NldHMvYnJlYWtmYXN0V2FmZmxlLmpwZWdcIjtcbmltcG9ydCBjaGlja1dhZmYgZnJvbSBcIi4vYXNzZXRzL2NoaWNrV2FmZi5qcGdcIjtcbmltcG9ydCBjaW5uQnVuIGZyb20gXCIuL2Fzc2V0cy9jaW5uQnVuLmpwZ1wiO1xuaW1wb3J0IGZyZW5jaFQgZnJvbSBcIi4vYXNzZXRzL2ZyZW5jaFRvYXN0LmpwZ1wiO1xuaW1wb3J0IGh1ZXZvcyBmcm9tIFwiLi9hc3NldHMvaHVldm9zLmpwZ1wiO1xuaW1wb3J0IHB1bGxlZFBvcmsgZnJvbSBcIi4vYXNzZXRzL3B1bGxlZFBvcmtIYXNoLmpwZ1wiO1xuaW1wb3J0IHZlZ2FuU2F1c2FnZSBmcm9tIFwiLi9hc3NldHMvdmVnYW5TYXVzYWdlVG9mdS5qcGdcIjtcblxuY29uc3QgZm9vZEl0ZW0gPSAoaW1nU3JjLCBuYW1lLCBkZXNjLCBwcmljZSkgPT4ge1xuICByZXR1cm4geyBpbWdTcmMsIG5hbWUsIGRlc2MsIHByaWNlIH07XG59O1xuXG5jb25zdCBiZWxnaWFuV2FmZmxlcyA9IGZvb2RJdGVtKFxuICBiZWxnaWFuV2FmZixcbiAgXCJCZWxnaWFuIFdhZmZsZXNcIixcbiAgXCJXYWZmbGVzIHRvcHBlZCB3aXRoIGZyZXNoIGZydWl0LCBmcnVpdCBzeXJ1cHMsIGFuZCB3aGlwcGVkIGNyZWFtXCIsXG4gIFwiJDE2XCJcbik7XG5cbmNvbnN0IGVnZ3NCZW5ueSA9IGZvb2RJdGVtKFxuICBiZW5ueSxcbiAgXCJFZ2dzIEJlbm55XCIsXG4gIFwiSG91c2UtbWFkZSBjb3JuYnJlYWQgdG9wcGVkIHdpdGggMiBzbGljZXMgb2YgYmFjayBiYWNvbiBhbmQgMiBwb2FjaGVkIGVnZ3MgZnJvbSBGb3VyIFdoaXN0bGUgRmFybSwgc21vdGhlcmVkIGluIGLDqWNoYW1lbCBzYXVjZVwiLFxuICBcIiQxN1wiXG4pO1xuXG5jb25zdCBicmVha2Zhc3RXYWZmbGUgPSBmb29kSXRlbShcbiAgYnJlYWtmYXN0V2FmZixcbiAgXCJCcmVha2Zhc3QgV2FmZmxlXCIsXG4gIFwiV2FmZmxlIHRvcHBlZCB3aXRoIDEgc3Vubnktc2lkZSB1cCBlZ2csIDMgcG9yayBicmVha2Zhc3Qgc2F1c2FnZXMgYW5kIG1hcGxlIGJ1dHRlclwiLFxuICBcIiQxNFwiXG4pO1xuXG5jb25zdCBjaGlja2VuV2FmZmxlcyA9IGZvb2RJdGVtKFxuICBjaGlja1dhZmYsXG4gIFwiQ2hpY2tlbiAmIFdhZmZsZXNcIixcbiAgXCJXYWZmbGUgdG9wcGVkIHdpdGggMiBmcmllZCAmIGJyZWFkZWQgY2hpY2tlbiBicmVhc3RzLCB3YXRlcm1lbG9uIHNhbHNhLCBhbmQgbWFwbGUgYnV0dGVyXCIsXG4gIFwiJDE5XCJcbik7XG5cbmNvbnN0IGNpbm5hbW9uQnVuID0gZm9vZEl0ZW0oY2lubkJ1biwgXCJDaW5uYW1vbiBCdW5cIiwgXCJCYWtlZCBEYWlseVwiLCBcIiQ1XCIpO1xuXG5jb25zdCBmcmVuY2hUb2FzdCA9IGZvb2RJdGVtKFxuICBmcmVuY2hULFxuICBcIkZyZW5jaCBUb2FzdFwiLFxuICBcIk91ciBob3VzZS1tYWRlIGNpbm5hbW9uIGJ1biwgc2xpY2VkIGFuZCBjb29rZWQgaW4gYSBudXRtZWcgZWdnIHdhc2gsIHRvcHBlZCB3aXRoIGJlcnJ5IGNvbXBvdGUgYW5kIGNyw6htZSBmcmHDrmNoZVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBodWV2b3NSYW5jaGVyb3MgPSBmb29kSXRlbShcbiAgaHVldm9zLFxuICBcIkh1ZXZvcyBSYW5jaGVyb3NcIixcbiAgXCIyIGZyaWVkIHRvcnRpbGxhcyB0b3BwZWQgd2l0aCBob3VzZSBzcGljeSBiZWFuIGJsZW5kLCBjaGVkZGFyIGNoZWVzZSwgdHdvIHBvYWNoZWQgZWdncywgYW5kIGNpbGFudHJvIGdhcm5pc2gsIHdpdGggc2lkZSBzYWxzYVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBwdWxsZWRQb3JrSGFzaCA9IGZvb2RJdGVtKFxuICBwdWxsZWRQb3JrLFxuICBcIlB1bGxlZCBQb3JrIEhhc2hcIixcbiAgXCJIYW5kLWN1dCBoYXNoIGJyb3ducyB0b3BwZWQgd2l0aCBkaWNlZCBvbmlvbiwgYmVsbCBwZXBwZXJzLCBjaGVlc2UgY3VyZHMsIGhvdXNlIHNsb3ctcm9hc3RlZCBwdWxsZWQgcG9yayBhbmQgMiBzdW5ueS1zaWRlIHVwIGVnZ3NcIixcbiAgXCIkMjFcIlxuKTtcblxuY29uc3QgdmVnYW5TYXVzYWdlVG9mdSA9IGZvb2RJdGVtKFxuICB2ZWdhblNhdXNhZ2UsXG4gIFwiVmVnYW4gU2F1c2FnZSAmIFRvZnUgU2NyYW1ibGVcIixcbiAgXCJCZXlvbmQgTWVhdCB2ZWdhbiBzYXVzYWdlLCBiZWxsIHBlcHBlcnMsIGthbGUsIHJvYXN0ZWQgeWFtcywgYW5kIHBhbi1mcmllZCB0b2Z1LCBzY3JhbWJsZWQgdG9nZXRoZXIgd2l0aCB0dXJtZXJpYyBhbmQgbnV0cml0aW9uYWwgeWVhc3QuIFNlcnZlZCB3aXRoIEVsZWFub3IgJiBMYXVyZW50IHNvdXJkb3VnaCB0b2FzdFwiLFxuICBcIiQxN1wiXG4pO1xuXG5jb25zdCBkaXNwbGF5TWVudUl0ZW0gPSAoaXRlbSkgPT4ge1xuICBjb25zdCBmb29kSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGl0ZW1JbWcuc3JjID0gaXRlbS5pbWdTcmM7XG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgZm9vZEl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gIGZvb2RJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgcmV0dXJuIGZvb2RJdGVtRGl2O1xufTtcblxuY29uc3QgZm9vZCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgaGVhZC50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGJlbGdpYW5XYWZmbGVzKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGVnZ3NCZW5ueSkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShicmVha2Zhc3RXYWZmbGUpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oY2hpY2tlbldhZmZsZXMpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oY2lubmFtb25CdW4pKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oZnJlbmNoVG9hc3QpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oaHVldm9zUmFuY2hlcm9zKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKHB1bGxlZFBvcmtIYXNoKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKHZlZ2FuU2F1c2FnZVRvZnUpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IGZvb2QgfTtcbiIsImltcG9ydCBDYWZlIGZyb20gXCIuL2Fzc2V0cy9jYWZlLmpwZ1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjYWZlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob3Vyc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHN1bmRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1vbmRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHR1ZXNkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB3ZWRuZXNkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0aHVyc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZyaWRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHNhdHVyZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBCcmVhayBOJyBCcmV3XCI7XG4gIGNhZmVJbWcuc3JjID0gQ2FmZTtcbiAgY29weS50ZXh0Q29udGVudCA9IFwiQnJlYWsgTicgQnJldywgRWRtb250b24ncyBwcmVtaWVyIHJ1c3RpYyBkaW5lciFcIjtcbiAgaG91cnNIZWFkLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBzdW5kYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA4YW0gLSA0cG1cIjtcbiAgbW9uZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIk1vbmRheTogOGFtIC0gMTFwbVwiO1xuICB0dWVzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDhhbSAtIDExcG1cIjtcbiAgd2VkbmVzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogOGFtIC0gMTFwbVwiO1xuICB0aHVyc2RheUhvdXJzLnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogOGFtIC0gMTFwbVwiO1xuICBmcmlkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiRnJpZGF5OiA4YW0gLSAxYW1cIjtcbiAgc2F0dXJkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDhhbSAtIDFhbVwiO1xuICBsb2NhdGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMzQ1IDIwMCBTdHJlZXQsIEVkbW9udG9uLCBBbGJlcnRhXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lRGl2KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoY2FmZUltZyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoY29weSk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXlIb3Vycyk7XG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZCk7XG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgaG9tZVBhZ2UgfTtcbiIsImltcG9ydCB7IGZvb2QgfSBmcm9tIFwiLi9mb29kLmpzXCI7XG5pbXBvcnQgeyBkcmlua3MgfSBmcm9tIFwiLi9kcmlua3MuanNcIjtcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNvbnN0IG1lbnVUYWJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZm9vZFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IGRyaW5rVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBmb29kVGFiLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG4gIGRyaW5rVGFiLnRleHRDb250ZW50ID0gXCJEcmlua3NcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVUYWJzKTtcbiAgbWVudVRhYnMuYXBwZW5kQ2hpbGQoZm9vZFRhYik7XG4gIG1lbnVUYWJzLmFwcGVuZENoaWxkKGRyaW5rVGFiKTtcbiAgZm9vZCgpO1xuXG4gIGZvb2RUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlblsxXSkge1xuICAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgZm9vZCgpO1xuICB9KTtcblxuICBkcmlua1RhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmNoaWxkcmVuWzFdKSB7XG4gICAgICBjb250ZW50LmNoaWxkcmVuWzFdLnJlbW92ZSgpO1xuICAgIH1cbiAgICBkcmlua3MoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmNvbnN0IHRhYnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBob21lUGFnZSgpO1xuICB9KTtcblxuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgbWVudSgpO1xuICB9KTtcblxuICByZXR1cm4gdGFiQ29udGVudDtcbn07XG5cbmV4cG9ydCB7IHRhYnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyB0YWJzIH0gZnJvbSBcIi4vdGFicy5qc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFicygpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=