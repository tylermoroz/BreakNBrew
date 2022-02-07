/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/belgianWaff.jpg":
/*!*****************************!*\
  !*** ./src/belgianWaff.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22478e232b0fe44b10db.jpg";

/***/ }),

/***/ "./src/benny.jpg":
/*!***********************!*\
  !*** ./src/benny.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "99620a20cc97b6038d83.jpg";

/***/ }),

/***/ "./src/breakfastWaffle.jpeg":
/*!**********************************!*\
  !*** ./src/breakfastWaffle.jpeg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a926c71ba9d4d1925f67.jpeg";

/***/ }),

/***/ "./src/chickWaff.jpg":
/*!***************************!*\
  !*** ./src/chickWaff.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "81e60d169aaa9e468fca.jpg";

/***/ }),

/***/ "./src/cinnBun.jpg":
/*!*************************!*\
  !*** ./src/cinnBun.jpg ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34f2e548063808fa9e98.jpg";

/***/ }),

/***/ "./src/frenchToast.jpg":
/*!*****************************!*\
  !*** ./src/frenchToast.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "16f2e8c8f278e73c18c9.jpg";

/***/ }),

/***/ "./src/huevos.jpg":
/*!************************!*\
  !*** ./src/huevos.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27beca6fe172327e8c26.jpg";

/***/ }),

/***/ "./src/pulledPorkHash.jpg":
/*!********************************!*\
  !*** ./src/pulledPorkHash.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1ae8523a7608380e0c4f.jpg";

/***/ }),

/***/ "./src/veganSausageTofu.jpg":
/*!**********************************!*\
  !*** ./src/veganSausageTofu.jpg ***!
  \**********************************/
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
/******/ 				scriptUrl = document.currentScript.src
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
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addToMenu)
/* harmony export */ });
/* harmony import */ var _cinnBun_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cinnBun.jpg */ "./src/cinnBun.jpg");
/* harmony import */ var _pulledPorkHash_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pulledPorkHash.jpg */ "./src/pulledPorkHash.jpg");
/* harmony import */ var _breakfastWaffle_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breakfastWaffle.jpeg */ "./src/breakfastWaffle.jpeg");
/* harmony import */ var _benny_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./benny.jpg */ "./src/benny.jpg");
/* harmony import */ var _huevos_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./huevos.jpg */ "./src/huevos.jpg");
/* harmony import */ var _veganSausageTofu_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./veganSausageTofu.jpg */ "./src/veganSausageTofu.jpg");
/* harmony import */ var _chickWaff_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chickWaff.jpg */ "./src/chickWaff.jpg");
/* harmony import */ var _frenchToast_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./frenchToast.jpg */ "./src/frenchToast.jpg");
/* harmony import */ var _belgianWaff_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./belgianWaff.jpg */ "./src/belgianWaff.jpg");










const foodItem = function(imgSrc, name, description, price){

    return { imgSrc, name, description, price };
};

const cinnamonBun = foodItem(_cinnBun_jpg__WEBPACK_IMPORTED_MODULE_0__, 'Cinnamon Bun', 'Baked Daily', '$5');

const pulledPorkHash = foodItem(_pulledPorkHash_jpg__WEBPACK_IMPORTED_MODULE_1__, 'Pulled Pork Hash', 'Hand-cut hash browns topped with diced onion, bell peppers, cheese curds, house slow-roasted pulled pork and 2 sunny-side up eggs', '$21'); 

const breakfastWaffle = foodItem(_breakfastWaffle_jpeg__WEBPACK_IMPORTED_MODULE_2__, 'Breakfast Waffle', 'Waffle topped with 1 sunny-side up egg, 3 pork breakfast sausages and maple butter', '$14');

const sugarbowlBenny = foodItem(_benny_jpg__WEBPACK_IMPORTED_MODULE_3__, 'Sugarbowl Benny', 'House-made cornbread topped with 2 slices of back bacon and 2 poached eggs from Four Whistle Farm, smothered in béchamel sauce', '$17');

const huevosRancheros = foodItem(_huevos_jpg__WEBPACK_IMPORTED_MODULE_4__, 'Huevos Rancheros', '2 fried tortillas topped with house spicy bean blend, cheddar cheese, two poached eggs, and cilantro garnish, with side salsa', '$16');

const veganScramble = foodItem(_veganSausageTofu_jpg__WEBPACK_IMPORTED_MODULE_5__, 'Vegan Sausage & Tofu Scramble', 'Beyond Meat vegan sausage, bell peppers, kale, roasted yams, and pan-fried tofu, scrambled together with turmeric and nutritional yeast. Served with Eleanor & Laurent sourdough toast', '$17');

const chickenWaffles = foodItem(_chickWaff_jpg__WEBPACK_IMPORTED_MODULE_6__, 'Chicken & Waffles', 'Waffle topped with 2 fried & breaded chicken breasts, watermelon salsa, and maple butter', '$19');

const frenchToast = foodItem(_frenchToast_jpg__WEBPACK_IMPORTED_MODULE_7__, 'French Toast', 'Sugarbowl’s famous cinnamon bun, sliced and cooked in a nutmeg egg wash, topped with berry compote and crème fraîche', '$16');

const belgianWaffles = foodItem(_belgianWaff_jpg__WEBPACK_IMPORTED_MODULE_8__, 'Belgian Waffles', 'Waffles topped with fresh fruit, fruit syrups, and whipped cream', '$16');

const foodMenu = function(food) {

    const content = document.getElementById('content');
    const item = document.createElement('div');
    const itemImg = new Image();
    const itemName = document.createElement('h3');
    const itemDesc = document.createElement('p');
    const itemPrice = document.createElement('p');

    itemImg.src = food.imgSrc;
    itemName.textContent = food.name;
    itemDesc.textContent = food.description;
    itemPrice.textContent = food.price;

    itemImg.classList.add("menu");

    item.appendChild(itemImg);
    item.appendChild(itemName);
    item.appendChild(itemDesc);
    item.appendChild(itemPrice);
    content.appendChild(item);

    return content, item;
};

function addToMenu(){
    foodMenu(cinnamonBun);
    foodMenu(pulledPorkHash);
    foodMenu(breakfastWaffle);
    foodMenu(sugarbowlBenny);
    foodMenu(huevosRancheros);
    foodMenu(veganScramble);
    foodMenu(chickenWaffles);
    foodMenu(frenchToast);
    foodMenu(belgianWaffles);
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZm9DO0FBQ1U7QUFDSztBQUNuQjtBQUNFO0FBQ29CO0FBQ2Q7QUFDQTtBQUNJOztBQUU1Qzs7QUFFQSxhQUFhO0FBQ2I7O0FBRUEsNkJBQTZCLHlDQUFPOztBQUVwQyxnQ0FBZ0MsZ0RBQVU7O0FBRTFDLGlDQUFpQyxrREFBYTs7QUFFOUMsZ0NBQWdDLHVDQUFLOztBQUVyQyxpQ0FBaUMsd0NBQU07O0FBRXZDLCtCQUErQixrREFBZ0I7O0FBRS9DLGdDQUFnQywyQ0FBUzs7QUFFekMsNkJBQTZCLDZDQUFPOztBQUVwQyxnQ0FBZ0MsNkNBQVc7O0FBRTNDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9mb29kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBjaW5uQnVuIGZyb20gJy4vY2lubkJ1bi5qcGcnO1xuaW1wb3J0IHB1bGxlZFBvcmsgZnJvbSAnLi9wdWxsZWRQb3JrSGFzaC5qcGcnO1xuaW1wb3J0IGJyZWFrZmFzdFdhZmYgZnJvbSAnLi9icmVha2Zhc3RXYWZmbGUuanBlZyc7XG5pbXBvcnQgYmVubnkgZnJvbSAnLi9iZW5ueS5qcGcnO1xuaW1wb3J0IGh1ZXZvcyBmcm9tICcuL2h1ZXZvcy5qcGcnO1xuaW1wb3J0IHZlZ2FuU2F1c2FnZVRvZnUgZnJvbSAnLi92ZWdhblNhdXNhZ2VUb2Z1LmpwZyc7XG5pbXBvcnQgY2hpY2tXYWZmIGZyb20gJy4vY2hpY2tXYWZmLmpwZyc7XG5pbXBvcnQgZnJlbmNoVCBmcm9tICcuL2ZyZW5jaFRvYXN0LmpwZyc7XG5pbXBvcnQgYmVsZ2lhbldhZmYgZnJvbSAnLi9iZWxnaWFuV2FmZi5qcGcnO1xuXG5jb25zdCBmb29kSXRlbSA9IGZ1bmN0aW9uKGltZ1NyYywgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlKXtcblxuICAgIHJldHVybiB7IGltZ1NyYywgbmFtZSwgZGVzY3JpcHRpb24sIHByaWNlIH07XG59O1xuXG5jb25zdCBjaW5uYW1vbkJ1biA9IGZvb2RJdGVtKGNpbm5CdW4sICdDaW5uYW1vbiBCdW4nLCAnQmFrZWQgRGFpbHknLCAnJDUnKTtcblxuY29uc3QgcHVsbGVkUG9ya0hhc2ggPSBmb29kSXRlbShwdWxsZWRQb3JrLCAnUHVsbGVkIFBvcmsgSGFzaCcsICdIYW5kLWN1dCBoYXNoIGJyb3ducyB0b3BwZWQgd2l0aCBkaWNlZCBvbmlvbiwgYmVsbCBwZXBwZXJzLCBjaGVlc2UgY3VyZHMsIGhvdXNlIHNsb3ctcm9hc3RlZCBwdWxsZWQgcG9yayBhbmQgMiBzdW5ueS1zaWRlIHVwIGVnZ3MnLCAnJDIxJyk7IFxuXG5jb25zdCBicmVha2Zhc3RXYWZmbGUgPSBmb29kSXRlbShicmVha2Zhc3RXYWZmLCAnQnJlYWtmYXN0IFdhZmZsZScsICdXYWZmbGUgdG9wcGVkIHdpdGggMSBzdW5ueS1zaWRlIHVwIGVnZywgMyBwb3JrIGJyZWFrZmFzdCBzYXVzYWdlcyBhbmQgbWFwbGUgYnV0dGVyJywgJyQxNCcpO1xuXG5jb25zdCBzdWdhcmJvd2xCZW5ueSA9IGZvb2RJdGVtKGJlbm55LCAnU3VnYXJib3dsIEJlbm55JywgJ0hvdXNlLW1hZGUgY29ybmJyZWFkIHRvcHBlZCB3aXRoIDIgc2xpY2VzIG9mIGJhY2sgYmFjb24gYW5kIDIgcG9hY2hlZCBlZ2dzIGZyb20gRm91ciBXaGlzdGxlIEZhcm0sIHNtb3RoZXJlZCBpbiBiw6ljaGFtZWwgc2F1Y2UnLCAnJDE3Jyk7XG5cbmNvbnN0IGh1ZXZvc1JhbmNoZXJvcyA9IGZvb2RJdGVtKGh1ZXZvcywgJ0h1ZXZvcyBSYW5jaGVyb3MnLCAnMiBmcmllZCB0b3J0aWxsYXMgdG9wcGVkIHdpdGggaG91c2Ugc3BpY3kgYmVhbiBibGVuZCwgY2hlZGRhciBjaGVlc2UsIHR3byBwb2FjaGVkIGVnZ3MsIGFuZCBjaWxhbnRybyBnYXJuaXNoLCB3aXRoIHNpZGUgc2Fsc2EnLCAnJDE2Jyk7XG5cbmNvbnN0IHZlZ2FuU2NyYW1ibGUgPSBmb29kSXRlbSh2ZWdhblNhdXNhZ2VUb2Z1LCAnVmVnYW4gU2F1c2FnZSAmIFRvZnUgU2NyYW1ibGUnLCAnQmV5b25kIE1lYXQgdmVnYW4gc2F1c2FnZSwgYmVsbCBwZXBwZXJzLCBrYWxlLCByb2FzdGVkIHlhbXMsIGFuZCBwYW4tZnJpZWQgdG9mdSwgc2NyYW1ibGVkIHRvZ2V0aGVyIHdpdGggdHVybWVyaWMgYW5kIG51dHJpdGlvbmFsIHllYXN0LiBTZXJ2ZWQgd2l0aCBFbGVhbm9yICYgTGF1cmVudCBzb3VyZG91Z2ggdG9hc3QnLCAnJDE3Jyk7XG5cbmNvbnN0IGNoaWNrZW5XYWZmbGVzID0gZm9vZEl0ZW0oY2hpY2tXYWZmLCAnQ2hpY2tlbiAmIFdhZmZsZXMnLCAnV2FmZmxlIHRvcHBlZCB3aXRoIDIgZnJpZWQgJiBicmVhZGVkIGNoaWNrZW4gYnJlYXN0cywgd2F0ZXJtZWxvbiBzYWxzYSwgYW5kIG1hcGxlIGJ1dHRlcicsICckMTknKTtcblxuY29uc3QgZnJlbmNoVG9hc3QgPSBmb29kSXRlbShmcmVuY2hULCAnRnJlbmNoIFRvYXN0JywgJ1N1Z2FyYm93bOKAmXMgZmFtb3VzIGNpbm5hbW9uIGJ1biwgc2xpY2VkIGFuZCBjb29rZWQgaW4gYSBudXRtZWcgZWdnIHdhc2gsIHRvcHBlZCB3aXRoIGJlcnJ5IGNvbXBvdGUgYW5kIGNyw6htZSBmcmHDrmNoZScsICckMTYnKTtcblxuY29uc3QgYmVsZ2lhbldhZmZsZXMgPSBmb29kSXRlbShiZWxnaWFuV2FmZiwgJ0JlbGdpYW4gV2FmZmxlcycsICdXYWZmbGVzIHRvcHBlZCB3aXRoIGZyZXNoIGZydWl0LCBmcnVpdCBzeXJ1cHMsIGFuZCB3aGlwcGVkIGNyZWFtJywgJyQxNicpO1xuXG5jb25zdCBmb29kTWVudSA9IGZ1bmN0aW9uKGZvb2QpIHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XG4gICAgY29uc3QgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGl0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnN0IGl0ZW1QcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcblxuICAgIGl0ZW1JbWcuc3JjID0gZm9vZC5pbWdTcmM7XG4gICAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBmb29kLm5hbWU7XG4gICAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBmb29kLmRlc2NyaXB0aW9uO1xuICAgIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGZvb2QucHJpY2U7XG5cbiAgICBpdGVtSW1nLmNsYXNzTGlzdC5hZGQoXCJtZW51XCIpO1xuXG4gICAgaXRlbS5hcHBlbmRDaGlsZChpdGVtSW1nKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1QcmljZSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChpdGVtKTtcblxuICAgIHJldHVybiBjb250ZW50LCBpdGVtO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkVG9NZW51KCl7XG4gICAgZm9vZE1lbnUoY2lubmFtb25CdW4pO1xuICAgIGZvb2RNZW51KHB1bGxlZFBvcmtIYXNoKTtcbiAgICBmb29kTWVudShicmVha2Zhc3RXYWZmbGUpO1xuICAgIGZvb2RNZW51KHN1Z2FyYm93bEJlbm55KTtcbiAgICBmb29kTWVudShodWV2b3NSYW5jaGVyb3MpO1xuICAgIGZvb2RNZW51KHZlZ2FuU2NyYW1ibGUpO1xuICAgIGZvb2RNZW51KGNoaWNrZW5XYWZmbGVzKTtcbiAgICBmb29kTWVudShmcmVuY2hUb2FzdCk7XG4gICAgZm9vZE1lbnUoYmVsZ2lhbldhZmZsZXMpO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==