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

const menu = () => {
  const content = document.getElementById("content");
  const head = document.createElement("h1");

  head.textContent = "Food";
  content.appendChild(head);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiw2Q0FBSTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2RCtCO0FBQ1o7QUFDbUI7QUFDWDtBQUNKO0FBQ0k7QUFDTjtBQUNZO0FBQ0k7O0FBRXpEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsRUFBRSxvREFBVztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSw4Q0FBSztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSx5REFBYTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsRUFBRSxrREFBUztBQUNYO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixnREFBTzs7QUFFcEM7QUFDQSxFQUFFLG9EQUFPO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLCtDQUFNO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHVEQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFQUFFLHlEQUFZO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZ0I7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZxQjtBQUNKOztBQUVqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGtEQUFRO0FBQ1osR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksOENBQUk7QUFDUixHQUFHOztBQUVIO0FBQ0E7O0FBRWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQy9CaEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNmaUM7QUFDSTs7QUFFckMsMEJBQTBCLDhDQUFJO0FBQzlCLDBCQUEwQixrREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYWZlIGZyb20gXCIuL2Fzc2V0cy9jYWZlLmpwZ1wiO1xuXG5jb25zdCBob21lUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaG9tZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICBjb25zdCBjYWZlSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGNvcHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob3Vyc0hlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IHN1bmRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IG1vbmRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHR1ZXNkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB3ZWRuZXNkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0aHVyc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGZyaWRheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHNhdHVyZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBsb2NhdGlvbkhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBCcmVhayBOJyBCcmV3XCI7XG4gIGNhZmVJbWcuc3JjID0gQ2FmZTtcbiAgY29weS50ZXh0Q29udGVudCA9IFwiQnJlYWsgTicgQnJldywgRWRtb250b24ncyBwcmVtaWVyIHJ1c3RpYyBkaW5lciFcIjtcbiAgaG91cnNIZWFkLnRleHRDb250ZW50ID0gXCJIb3Vyc1wiO1xuICBzdW5kYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiU3VuZGF5OiA4YW0gLSA0cG1cIjtcbiAgbW9uZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIk1vbmRheTogOGFtIC0gMTFwbVwiO1xuICB0dWVzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIlR1ZXNkYXk6IDhhbSAtIDExcG1cIjtcbiAgd2VkbmVzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIldlZG5lc2RheTogOGFtIC0gMTFwbVwiO1xuICB0aHVyc2RheUhvdXJzLnRleHRDb250ZW50ID0gXCJUaHVyc2RheTogOGFtIC0gMTFwbVwiO1xuICBmcmlkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiRnJpZGF5OiA4YW0gLSAxYW1cIjtcbiAgc2F0dXJkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiU2F0dXJkYXk6IDhhbSAtIDFhbVwiO1xuICBsb2NhdGlvbkhlYWQudGV4dENvbnRlbnQgPSBcIkxvY2F0aW9uXCI7XG4gIGFkZHJlc3MudGV4dENvbnRlbnQgPSBcIjEyMzQ1IDIwMCBTdHJlZXQsIEVkbW9udG9uLCBBbGJlcnRhXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChob21lRGl2KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChoZWFkbGluZSk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoY2FmZUltZyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoY29weSk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaG91cnMpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uRGl2KTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc3VuZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZChtb25kYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHR1ZXNkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHdlZG5lc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodGh1cnNkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGZyaWRheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoc2F0dXJkYXlIb3Vycyk7XG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSGVhZCk7XG4gIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGFkZHJlc3MpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgaG9tZVBhZ2UgfTtcbiIsImltcG9ydCBiZWxnaWFuV2FmZiBmcm9tIFwiLi9hc3NldHMvYmVsZ2lhbldhZmYuanBnXCI7XG5pbXBvcnQgYmVubnkgZnJvbSBcIi4vYXNzZXRzL2Jlbm55LmpwZ1wiO1xuaW1wb3J0IGJyZWFrZmFzdFdhZmYgZnJvbSBcIi4vYXNzZXRzL2JyZWFrZmFzdFdhZmZsZS5qcGVnXCI7XG5pbXBvcnQgY2hpY2tXYWZmIGZyb20gXCIuL2Fzc2V0cy9jaGlja1dhZmYuanBnXCI7XG5pbXBvcnQgY2lubkJ1biBmcm9tIFwiLi9hc3NldHMvY2lubkJ1bi5qcGdcIjtcbmltcG9ydCBmcmVuY2hUIGZyb20gXCIuL2Fzc2V0cy9mcmVuY2hUb2FzdC5qcGdcIjtcbmltcG9ydCBodWV2b3MgZnJvbSBcIi4vYXNzZXRzL2h1ZXZvcy5qcGdcIjtcbmltcG9ydCBwdWxsZWRQb3JrIGZyb20gXCIuL2Fzc2V0cy9wdWxsZWRQb3JrSGFzaC5qcGdcIjtcbmltcG9ydCB2ZWdhblNhdXNhZ2UgZnJvbSBcIi4vYXNzZXRzL3ZlZ2FuU2F1c2FnZVRvZnUuanBnXCI7XG5cbmNvbnN0IGZvb2RJdGVtID0gKGltZ1NyYywgbmFtZSwgZGVzYywgcHJpY2UpID0+IHtcbiAgcmV0dXJuIHsgaW1nU3JjLCBuYW1lLCBkZXNjLCBwcmljZSB9O1xufTtcblxuY29uc3QgYmVsZ2lhbldhZmZsZXMgPSBmb29kSXRlbShcbiAgYmVsZ2lhbldhZmYsXG4gIFwiQmVsZ2lhbiBXYWZmbGVzXCIsXG4gIFwiV2FmZmxlcyB0b3BwZWQgd2l0aCBmcmVzaCBmcnVpdCwgZnJ1aXQgc3lydXBzLCBhbmQgd2hpcHBlZCBjcmVhbVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBlZ2dzQmVubnkgPSBmb29kSXRlbShcbiAgYmVubnksXG4gIFwiRWdncyBCZW5ueVwiLFxuICBcIkhvdXNlLW1hZGUgY29ybmJyZWFkIHRvcHBlZCB3aXRoIDIgc2xpY2VzIG9mIGJhY2sgYmFjb24gYW5kIDIgcG9hY2hlZCBlZ2dzIGZyb20gRm91ciBXaGlzdGxlIEZhcm0sIHNtb3RoZXJlZCBpbiBiw6ljaGFtZWwgc2F1Y2VcIixcbiAgXCIkMTdcIlxuKTtcblxuY29uc3QgYnJlYWtmYXN0V2FmZmxlID0gZm9vZEl0ZW0oXG4gIGJyZWFrZmFzdFdhZmYsXG4gIFwiQnJlYWtmYXN0IFdhZmZsZVwiLFxuICBcIldhZmZsZSB0b3BwZWQgd2l0aCAxIHN1bm55LXNpZGUgdXAgZWdnLCAzIHBvcmsgYnJlYWtmYXN0IHNhdXNhZ2VzIGFuZCBtYXBsZSBidXR0ZXJcIixcbiAgXCIkMTRcIlxuKTtcblxuY29uc3QgY2hpY2tlbldhZmZsZXMgPSBmb29kSXRlbShcbiAgY2hpY2tXYWZmLFxuICBcIkNoaWNrZW4gJiBXYWZmbGVzXCIsXG4gIFwiV2FmZmxlIHRvcHBlZCB3aXRoIDIgZnJpZWQgJiBicmVhZGVkIGNoaWNrZW4gYnJlYXN0cywgd2F0ZXJtZWxvbiBzYWxzYSwgYW5kIG1hcGxlIGJ1dHRlclwiLFxuICBcIiQxOVwiXG4pO1xuXG5jb25zdCBjaW5uYW1vbkJ1biA9IGZvb2RJdGVtKGNpbm5CdW4sIFwiQ2lubmFtb24gQnVuXCIsIFwiQmFrZWQgRGFpbHlcIiwgXCIkNVwiKTtcblxuY29uc3QgZnJlbmNoVG9hc3QgPSBmb29kSXRlbShcbiAgZnJlbmNoVCxcbiAgXCJGcmVuY2ggVG9hc3RcIixcbiAgXCJPdXIgaG91c2UtbWFkZSBjaW5uYW1vbiBidW4sIHNsaWNlZCBhbmQgY29va2VkIGluIGEgbnV0bWVnIGVnZyB3YXNoLCB0b3BwZWQgd2l0aCBiZXJyeSBjb21wb3RlIGFuZCBjcsOobWUgZnJhw65jaGVcIixcbiAgXCIkMTZcIlxuKTtcblxuY29uc3QgaHVldm9zUmFuY2hlcm9zID0gZm9vZEl0ZW0oXG4gIGh1ZXZvcyxcbiAgXCJIdWV2b3MgUmFuY2hlcm9zXCIsXG4gIFwiMiBmcmllZCB0b3J0aWxsYXMgdG9wcGVkIHdpdGggaG91c2Ugc3BpY3kgYmVhbiBibGVuZCwgY2hlZGRhciBjaGVlc2UsIHR3byBwb2FjaGVkIGVnZ3MsIGFuZCBjaWxhbnRybyBnYXJuaXNoLCB3aXRoIHNpZGUgc2Fsc2FcIixcbiAgXCIkMTZcIlxuKTtcblxuY29uc3QgcHVsbGVkUG9ya0hhc2ggPSBmb29kSXRlbShcbiAgcHVsbGVkUG9yayxcbiAgXCJQdWxsZWQgUG9yayBIYXNoXCIsXG4gIFwiSGFuZC1jdXQgaGFzaCBicm93bnMgdG9wcGVkIHdpdGggZGljZWQgb25pb24sIGJlbGwgcGVwcGVycywgY2hlZXNlIGN1cmRzLCBob3VzZSBzbG93LXJvYXN0ZWQgcHVsbGVkIHBvcmsgYW5kIDIgc3Vubnktc2lkZSB1cCBlZ2dzXCIsXG4gIFwiJDIxXCJcbik7XG5cbmNvbnN0IHZlZ2FuU2F1c2FnZVRvZnUgPSBmb29kSXRlbShcbiAgdmVnYW5TYXVzYWdlLFxuICBcIlZlZ2FuIFNhdXNhZ2UgJiBUb2Z1IFNjcmFtYmxlXCIsXG4gIFwiQmV5b25kIE1lYXQgdmVnYW4gc2F1c2FnZSwgYmVsbCBwZXBwZXJzLCBrYWxlLCByb2FzdGVkIHlhbXMsIGFuZCBwYW4tZnJpZWQgdG9mdSwgc2NyYW1ibGVkIHRvZ2V0aGVyIHdpdGggdHVybWVyaWMgYW5kIG51dHJpdGlvbmFsIHllYXN0LiBTZXJ2ZWQgd2l0aCBFbGVhbm9yICYgTGF1cmVudCBzb3VyZG91Z2ggdG9hc3RcIixcbiAgXCIkMTdcIlxuKTtcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBoZWFkLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZCk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBtZW51IH07XG4iLCJpbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCB7IG1lbnUgfSBmcm9tIFwiLi9tZW51LmpzXCI7XG5cbmNvbnN0IHRhYnMgPSAoKSA9PiB7XG4gIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgaG9tZVRhYi50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICBtZW51VGFiLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG5cbiAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChtZW51VGFiKTtcblxuICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBob21lUGFnZSgpO1xuICB9KTtcblxuICBtZW51VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgIH1cbiAgICBtZW51KCk7XG4gIH0pO1xuXG4gIHJldHVybiB0YWJDb250ZW50O1xufTtcblxuZXhwb3J0IHsgdGFicyB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IHRhYnMgfSBmcm9tIFwiLi90YWJzLmpzXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJzKCkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lUGFnZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==