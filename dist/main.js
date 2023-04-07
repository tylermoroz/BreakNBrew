/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

const menu = () => {
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
    while (content.firstChild) {
      content.firstChild.remove();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw2Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RCtCO0FBQ1o7QUFDbUI7QUFDWDtBQUNKO0FBQ0k7QUFDTjtBQUNZO0FBQ0k7O0FBRXpEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsRUFBRSxvREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4Q0FBSztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixnREFBTzs7QUFFcEM7QUFDQSxFQUFFLG9EQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtDQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVnQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSHFCO0FBQ0o7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksa0RBQVE7QUFDWixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4Q0FBSTtBQUNSLEdBQUc7O0FBRUg7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2ZpQztBQUNJOztBQUVyQywwQkFBMEIsOENBQUk7QUFDOUIsMEJBQTBCLGtEQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL3RhYnMuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhZmUgZnJvbSBcIi4vYXNzZXRzL2NhZmUuanBnXCI7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNhZmVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvdXJzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3Qgc3VuZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbW9uZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdHVlc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHdlZG5lc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRodXJzZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZnJpZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc2F0dXJkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJyZWFrIE4nIEJyZXdcIjtcbiAgY2FmZUltZy5zcmMgPSBDYWZlO1xuICBjb3B5LnRleHRDb250ZW50ID0gXCJCcmVhayBOJyBCcmV3LCBFZG1vbnRvbidzIHByZW1pZXIgcnVzdGljIGRpbmVyIVwiO1xuICBob3Vyc0hlYWQudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIHN1bmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDhhbSAtIDRwbVwiO1xuICBtb25kYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHR1ZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogOGFtIC0gMTFwbVwiO1xuICB3ZWRuZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHRodXJzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIGZyaWRheUhvdXJzLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDhhbSAtIDFhbVwiO1xuICBzYXR1cmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogOGFtIC0gMWFtXCI7XG4gIGxvY2F0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzNDUgMjAwIFN0cmVldCwgRWRtb250b24sIEFsYmVydGFcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChjYWZlSW1nKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChjb3B5KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWQpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzdW5kYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheUhvdXJzKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSB9O1xuIiwiaW1wb3J0IGJlbGdpYW5XYWZmIGZyb20gXCIuL2Fzc2V0cy9iZWxnaWFuV2FmZi5qcGdcIjtcbmltcG9ydCBiZW5ueSBmcm9tIFwiLi9hc3NldHMvYmVubnkuanBnXCI7XG5pbXBvcnQgYnJlYWtmYXN0V2FmZiBmcm9tIFwiLi9hc3NldHMvYnJlYWtmYXN0V2FmZmxlLmpwZWdcIjtcbmltcG9ydCBjaGlja1dhZmYgZnJvbSBcIi4vYXNzZXRzL2NoaWNrV2FmZi5qcGdcIjtcbmltcG9ydCBjaW5uQnVuIGZyb20gXCIuL2Fzc2V0cy9jaW5uQnVuLmpwZ1wiO1xuaW1wb3J0IGZyZW5jaFQgZnJvbSBcIi4vYXNzZXRzL2ZyZW5jaFRvYXN0LmpwZ1wiO1xuaW1wb3J0IGh1ZXZvcyBmcm9tIFwiLi9hc3NldHMvaHVldm9zLmpwZ1wiO1xuaW1wb3J0IHB1bGxlZFBvcmsgZnJvbSBcIi4vYXNzZXRzL3B1bGxlZFBvcmtIYXNoLmpwZ1wiO1xuaW1wb3J0IHZlZ2FuU2F1c2FnZSBmcm9tIFwiLi9hc3NldHMvdmVnYW5TYXVzYWdlVG9mdS5qcGdcIjtcblxuY29uc3QgZm9vZEl0ZW0gPSAoaW1nU3JjLCBuYW1lLCBkZXNjLCBwcmljZSkgPT4ge1xuICByZXR1cm4geyBpbWdTcmMsIG5hbWUsIGRlc2MsIHByaWNlIH07XG59O1xuXG5jb25zdCBiZWxnaWFuV2FmZmxlcyA9IGZvb2RJdGVtKFxuICBiZWxnaWFuV2FmZixcbiAgXCJCZWxnaWFuIFdhZmZsZXNcIixcbiAgXCJXYWZmbGVzIHRvcHBlZCB3aXRoIGZyZXNoIGZydWl0LCBmcnVpdCBzeXJ1cHMsIGFuZCB3aGlwcGVkIGNyZWFtXCIsXG4gIFwiJDE2XCJcbik7XG5cbmNvbnN0IGVnZ3NCZW5ueSA9IGZvb2RJdGVtKFxuICBiZW5ueSxcbiAgXCJFZ2dzIEJlbm55XCIsXG4gIFwiSG91c2UtbWFkZSBjb3JuYnJlYWQgdG9wcGVkIHdpdGggMiBzbGljZXMgb2YgYmFjayBiYWNvbiBhbmQgMiBwb2FjaGVkIGVnZ3MgZnJvbSBGb3VyIFdoaXN0bGUgRmFybSwgc21vdGhlcmVkIGluIGLDqWNoYW1lbCBzYXVjZVwiLFxuICBcIiQxN1wiXG4pO1xuXG5jb25zdCBicmVha2Zhc3RXYWZmbGUgPSBmb29kSXRlbShcbiAgYnJlYWtmYXN0V2FmZixcbiAgXCJCcmVha2Zhc3QgV2FmZmxlXCIsXG4gIFwiV2FmZmxlIHRvcHBlZCB3aXRoIDEgc3Vubnktc2lkZSB1cCBlZ2csIDMgcG9yayBicmVha2Zhc3Qgc2F1c2FnZXMgYW5kIG1hcGxlIGJ1dHRlclwiLFxuICBcIiQxNFwiXG4pO1xuXG5jb25zdCBjaGlja2VuV2FmZmxlcyA9IGZvb2RJdGVtKFxuICBjaGlja1dhZmYsXG4gIFwiQ2hpY2tlbiAmIFdhZmZsZXNcIixcbiAgXCJXYWZmbGUgdG9wcGVkIHdpdGggMiBmcmllZCAmIGJyZWFkZWQgY2hpY2tlbiBicmVhc3RzLCB3YXRlcm1lbG9uIHNhbHNhLCBhbmQgbWFwbGUgYnV0dGVyXCIsXG4gIFwiJDE5XCJcbik7XG5cbmNvbnN0IGNpbm5hbW9uQnVuID0gZm9vZEl0ZW0oY2lubkJ1biwgXCJDaW5uYW1vbiBCdW5cIiwgXCJCYWtlZCBEYWlseVwiLCBcIiQ1XCIpO1xuXG5jb25zdCBmcmVuY2hUb2FzdCA9IGZvb2RJdGVtKFxuICBmcmVuY2hULFxuICBcIkZyZW5jaCBUb2FzdFwiLFxuICBcIk91ciBob3VzZS1tYWRlIGNpbm5hbW9uIGJ1biwgc2xpY2VkIGFuZCBjb29rZWQgaW4gYSBudXRtZWcgZWdnIHdhc2gsIHRvcHBlZCB3aXRoIGJlcnJ5IGNvbXBvdGUgYW5kIGNyw6htZSBmcmHDrmNoZVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBodWV2b3NSYW5jaGVyb3MgPSBmb29kSXRlbShcbiAgaHVldm9zLFxuICBcIkh1ZXZvcyBSYW5jaGVyb3NcIixcbiAgXCIyIGZyaWVkIHRvcnRpbGxhcyB0b3BwZWQgd2l0aCBob3VzZSBzcGljeSBiZWFuIGJsZW5kLCBjaGVkZGFyIGNoZWVzZSwgdHdvIHBvYWNoZWQgZWdncywgYW5kIGNpbGFudHJvIGdhcm5pc2gsIHdpdGggc2lkZSBzYWxzYVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBwdWxsZWRQb3JrSGFzaCA9IGZvb2RJdGVtKFxuICBwdWxsZWRQb3JrLFxuICBcIlB1bGxlZCBQb3JrIEhhc2hcIixcbiAgXCJIYW5kLWN1dCBoYXNoIGJyb3ducyB0b3BwZWQgd2l0aCBkaWNlZCBvbmlvbiwgYmVsbCBwZXBwZXJzLCBjaGVlc2UgY3VyZHMsIGhvdXNlIHNsb3ctcm9hc3RlZCBwdWxsZWQgcG9yayBhbmQgMiBzdW5ueS1zaWRlIHVwIGVnZ3NcIixcbiAgXCIkMjFcIlxuKTtcblxuY29uc3QgdmVnYW5TYXVzYWdlVG9mdSA9IGZvb2RJdGVtKFxuICB2ZWdhblNhdXNhZ2UsXG4gIFwiVmVnYW4gU2F1c2FnZSAmIFRvZnUgU2NyYW1ibGVcIixcbiAgXCJCZXlvbmQgTWVhdCB2ZWdhbiBzYXVzYWdlLCBiZWxsIHBlcHBlcnMsIGthbGUsIHJvYXN0ZWQgeWFtcywgYW5kIHBhbi1mcmllZCB0b2Z1LCBzY3JhbWJsZWQgdG9nZXRoZXIgd2l0aCB0dXJtZXJpYyBhbmQgbnV0cml0aW9uYWwgeWVhc3QuIFNlcnZlZCB3aXRoIEVsZWFub3IgJiBMYXVyZW50IHNvdXJkb3VnaCB0b2FzdFwiLFxuICBcIiQxN1wiXG4pO1xuXG5jb25zdCBkaXNwbGF5TWVudUl0ZW0gPSAoaXRlbSkgPT4ge1xuICBjb25zdCBmb29kSXRlbURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGl0ZW1JbWcuc3JjID0gaXRlbS5pbWdTcmM7XG4gIGl0ZW1OYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzYztcbiAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgZm9vZEl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtRGVzYyk7XG4gIGZvb2RJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG5cbiAgcmV0dXJuIGZvb2RJdGVtRGl2O1xufTtcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgaGVhZC50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudURpdik7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoaGVhZCk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGJlbGdpYW5XYWZmbGVzKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGVnZ3NCZW5ueSkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShicmVha2Zhc3RXYWZmbGUpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oY2hpY2tlbldhZmZsZXMpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oY2lubmFtb25CdW4pKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oZnJlbmNoVG9hc3QpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oaHVldm9zUmFuY2hlcm9zKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKHB1bGxlZFBvcmtIYXNoKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKHZlZ2FuU2F1c2FnZVRvZnUpKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IG1lbnUgfTtcbiIsImltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuaW1wb3J0IHsgbWVudSB9IGZyb20gXCIuL21lbnUuanNcIjtcblxuY29uc3QgdGFicyA9ICgpID0+IHtcbiAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvbWVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBtZW51VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICBob21lVGFiLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gIG1lbnVUYWIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcblxuICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICB0YWJDb250ZW50LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuXG4gIGhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIGhvbWVQYWdlKCk7XG4gIH0pO1xuXG4gIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5maXJzdENoaWxkKSB7XG4gICAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgfVxuICAgIG1lbnUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYkNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0YWJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgdGFicyB9IGZyb20gXCIuL3RhYnMuanNcIjtcbmltcG9ydCB7IGhvbWVQYWdlIH0gZnJvbSBcIi4vaG9tZS5qc1wiO1xuXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRhYnMoKSk7XG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGhvbWVQYWdlKCkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9