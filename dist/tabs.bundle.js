/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/food.js":
/*!*********************!*\
  !*** ./src/food.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _sugarbowl_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sugarbowl.jpg */ "./src/sugarbowl.jpg");


function home() {
    const content = document.getElementById('content');
    const header = document.createElement('h1');
    const image = new Image();
    const copy = document.createElement('p');

    header.textContent = "Sugar Bowl";
    image.src = _sugarbowl_jpg__WEBPACK_IMPORTED_MODULE_0__;
    copy.textContent = "Welcome to The Sugarbowl, the sweetest place in town, we have been providing a unique atmosphere and delicious food to the Garneau and University communities and Edmonton as a whole since 1943.";

    image.classList.add("main");

    content.appendChild(header);
    content.appendChild(image);
    content.appendChild(copy);

    return content;
};

/***/ }),

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

/***/ "./src/sugarbowl.jpg":
/*!***************************!*\
  !*** ./src/sugarbowl.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1928c59b33e064afb866.jpg";

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
  !*** ./src/tabs.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ tabs)
/* harmony export */ });
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ "./src/home.js");
/* harmony import */ var _food_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./food.js */ "./src/food.js");



function tabs() {
    const tabContent = document.createElement('div');
    const homeTab = document.createElement('button');
    const foodTab = document.createElement('button');
    const contactTab = document.createElement('button');

    tabContent.appendChild(homeTab);
    tabContent.appendChild(foodTab);
    tabContent.appendChild(contactTab);

    homeTab.setAttribute('id', 'home');
    foodTab.setAttribute('id', 'food');
    contactTab.setAttribute('id', 'contact');

    homeTab.textContent = 'Home';
    foodTab.textContent = 'Food';
    contactTab.textContent = 'Contact';

    homeTab.addEventListener('click', function() {
        while(content.firstChild){
            content.firstChild.remove();
        }
        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    foodTab.addEventListener('click', function() {
        while(content.firstChild){
            content.firstChild.remove();
        }
        (0,_food_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    return tabContent;
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFicy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBb0M7QUFDVTtBQUNLO0FBQ25CO0FBQ0U7QUFDb0I7QUFDZDtBQUNBO0FBQ0k7O0FBRTVDOztBQUVBLGFBQWE7QUFDYjs7QUFFQSw2QkFBNkIseUNBQU87O0FBRXBDLGdDQUFnQyxnREFBVTs7QUFFMUMsaUNBQWlDLGtEQUFhOztBQUU5QyxnQ0FBZ0MsdUNBQUs7O0FBRXJDLGlDQUFpQyx3Q0FBTTs7QUFFdkMsK0JBQStCLGtEQUFnQjs7QUFFL0MsZ0NBQWdDLDJDQUFTOztBQUV6Qyw2QkFBNkIsNkNBQU87O0FBRXBDLGdDQUFnQyw2Q0FBVzs7QUFFM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNwRXdDOztBQUV6QjtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLDJDQUFTO0FBQ3pCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDbkJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjZCO0FBQ0s7O0FBRW5CO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLG9EQUFJO0FBQ1osS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsb0RBQVM7QUFDakIsS0FBSzs7QUFFTDtBQUNBLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvZm9vZC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL3RhYnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNpbm5CdW4gZnJvbSAnLi9jaW5uQnVuLmpwZyc7XG5pbXBvcnQgcHVsbGVkUG9yayBmcm9tICcuL3B1bGxlZFBvcmtIYXNoLmpwZyc7XG5pbXBvcnQgYnJlYWtmYXN0V2FmZiBmcm9tICcuL2JyZWFrZmFzdFdhZmZsZS5qcGVnJztcbmltcG9ydCBiZW5ueSBmcm9tICcuL2Jlbm55LmpwZyc7XG5pbXBvcnQgaHVldm9zIGZyb20gJy4vaHVldm9zLmpwZyc7XG5pbXBvcnQgdmVnYW5TYXVzYWdlVG9mdSBmcm9tICcuL3ZlZ2FuU2F1c2FnZVRvZnUuanBnJztcbmltcG9ydCBjaGlja1dhZmYgZnJvbSAnLi9jaGlja1dhZmYuanBnJztcbmltcG9ydCBmcmVuY2hUIGZyb20gJy4vZnJlbmNoVG9hc3QuanBnJztcbmltcG9ydCBiZWxnaWFuV2FmZiBmcm9tICcuL2JlbGdpYW5XYWZmLmpwZyc7XG5cbmNvbnN0IGZvb2RJdGVtID0gZnVuY3Rpb24oaW1nU3JjLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2Upe1xuXG4gICAgcmV0dXJuIHsgaW1nU3JjLCBuYW1lLCBkZXNjcmlwdGlvbiwgcHJpY2UgfTtcbn07XG5cbmNvbnN0IGNpbm5hbW9uQnVuID0gZm9vZEl0ZW0oY2lubkJ1biwgJ0Npbm5hbW9uIEJ1bicsICdCYWtlZCBEYWlseScsICckNScpO1xuXG5jb25zdCBwdWxsZWRQb3JrSGFzaCA9IGZvb2RJdGVtKHB1bGxlZFBvcmssICdQdWxsZWQgUG9yayBIYXNoJywgJ0hhbmQtY3V0IGhhc2ggYnJvd25zIHRvcHBlZCB3aXRoIGRpY2VkIG9uaW9uLCBiZWxsIHBlcHBlcnMsIGNoZWVzZSBjdXJkcywgaG91c2Ugc2xvdy1yb2FzdGVkIHB1bGxlZCBwb3JrIGFuZCAyIHN1bm55LXNpZGUgdXAgZWdncycsICckMjEnKTsgXG5cbmNvbnN0IGJyZWFrZmFzdFdhZmZsZSA9IGZvb2RJdGVtKGJyZWFrZmFzdFdhZmYsICdCcmVha2Zhc3QgV2FmZmxlJywgJ1dhZmZsZSB0b3BwZWQgd2l0aCAxIHN1bm55LXNpZGUgdXAgZWdnLCAzIHBvcmsgYnJlYWtmYXN0IHNhdXNhZ2VzIGFuZCBtYXBsZSBidXR0ZXInLCAnJDE0Jyk7XG5cbmNvbnN0IHN1Z2FyYm93bEJlbm55ID0gZm9vZEl0ZW0oYmVubnksICdTdWdhcmJvd2wgQmVubnknLCAnSG91c2UtbWFkZSBjb3JuYnJlYWQgdG9wcGVkIHdpdGggMiBzbGljZXMgb2YgYmFjayBiYWNvbiBhbmQgMiBwb2FjaGVkIGVnZ3MgZnJvbSBGb3VyIFdoaXN0bGUgRmFybSwgc21vdGhlcmVkIGluIGLDqWNoYW1lbCBzYXVjZScsICckMTcnKTtcblxuY29uc3QgaHVldm9zUmFuY2hlcm9zID0gZm9vZEl0ZW0oaHVldm9zLCAnSHVldm9zIFJhbmNoZXJvcycsICcyIGZyaWVkIHRvcnRpbGxhcyB0b3BwZWQgd2l0aCBob3VzZSBzcGljeSBiZWFuIGJsZW5kLCBjaGVkZGFyIGNoZWVzZSwgdHdvIHBvYWNoZWQgZWdncywgYW5kIGNpbGFudHJvIGdhcm5pc2gsIHdpdGggc2lkZSBzYWxzYScsICckMTYnKTtcblxuY29uc3QgdmVnYW5TY3JhbWJsZSA9IGZvb2RJdGVtKHZlZ2FuU2F1c2FnZVRvZnUsICdWZWdhbiBTYXVzYWdlICYgVG9mdSBTY3JhbWJsZScsICdCZXlvbmQgTWVhdCB2ZWdhbiBzYXVzYWdlLCBiZWxsIHBlcHBlcnMsIGthbGUsIHJvYXN0ZWQgeWFtcywgYW5kIHBhbi1mcmllZCB0b2Z1LCBzY3JhbWJsZWQgdG9nZXRoZXIgd2l0aCB0dXJtZXJpYyBhbmQgbnV0cml0aW9uYWwgeWVhc3QuIFNlcnZlZCB3aXRoIEVsZWFub3IgJiBMYXVyZW50IHNvdXJkb3VnaCB0b2FzdCcsICckMTcnKTtcblxuY29uc3QgY2hpY2tlbldhZmZsZXMgPSBmb29kSXRlbShjaGlja1dhZmYsICdDaGlja2VuICYgV2FmZmxlcycsICdXYWZmbGUgdG9wcGVkIHdpdGggMiBmcmllZCAmIGJyZWFkZWQgY2hpY2tlbiBicmVhc3RzLCB3YXRlcm1lbG9uIHNhbHNhLCBhbmQgbWFwbGUgYnV0dGVyJywgJyQxOScpO1xuXG5jb25zdCBmcmVuY2hUb2FzdCA9IGZvb2RJdGVtKGZyZW5jaFQsICdGcmVuY2ggVG9hc3QnLCAnU3VnYXJib3ds4oCZcyBmYW1vdXMgY2lubmFtb24gYnVuLCBzbGljZWQgYW5kIGNvb2tlZCBpbiBhIG51dG1lZyBlZ2cgd2FzaCwgdG9wcGVkIHdpdGggYmVycnkgY29tcG90ZSBhbmQgY3LDqG1lIGZyYcOuY2hlJywgJyQxNicpO1xuXG5jb25zdCBiZWxnaWFuV2FmZmxlcyA9IGZvb2RJdGVtKGJlbGdpYW5XYWZmLCAnQmVsZ2lhbiBXYWZmbGVzJywgJ1dhZmZsZXMgdG9wcGVkIHdpdGggZnJlc2ggZnJ1aXQsIGZydWl0IHN5cnVwcywgYW5kIHdoaXBwZWQgY3JlYW0nLCAnJDE2Jyk7XG5cbmNvbnN0IGZvb2RNZW51ID0gZnVuY3Rpb24oZm9vZCkge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG4gICAgY29uc3QgaXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGl0ZW1JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaXRlbUltZy5zcmMgPSBmb29kLmltZ1NyYztcbiAgICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGZvb2QubmFtZTtcbiAgICBpdGVtRGVzYy50ZXh0Q29udGVudCA9IGZvb2QuZGVzY3JpcHRpb247XG4gICAgaXRlbVByaWNlLnRleHRDb250ZW50ID0gZm9vZC5wcmljZTtcblxuICAgIGl0ZW1JbWcuY2xhc3NMaXN0LmFkZChcIm1lbnVcIik7XG5cbiAgICBpdGVtLmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbU5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGl0ZW0pO1xuXG4gICAgcmV0dXJuIGNvbnRlbnQsIGl0ZW07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRUb01lbnUoKXtcbiAgICBmb29kTWVudShjaW5uYW1vbkJ1bik7XG4gICAgZm9vZE1lbnUocHVsbGVkUG9ya0hhc2gpO1xuICAgIGZvb2RNZW51KGJyZWFrZmFzdFdhZmZsZSk7XG4gICAgZm9vZE1lbnUoc3VnYXJib3dsQmVubnkpO1xuICAgIGZvb2RNZW51KGh1ZXZvc1JhbmNoZXJvcyk7XG4gICAgZm9vZE1lbnUodmVnYW5TY3JhbWJsZSk7XG4gICAgZm9vZE1lbnUoY2hpY2tlbldhZmZsZXMpO1xuICAgIGZvb2RNZW51KGZyZW5jaFRvYXN0KTtcbiAgICBmb29kTWVudShiZWxnaWFuV2FmZmxlcyk7XG59IiwiaW1wb3J0IHN1Z2FyYm93bCBmcm9tICcuL3N1Z2FyYm93bC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBob21lKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBjb25zdCBjb3B5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJTdWdhciBCb3dsXCI7XG4gICAgaW1hZ2Uuc3JjID0gc3VnYXJib3dsO1xuICAgIGNvcHkudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gVGhlIFN1Z2FyYm93bCwgdGhlIHN3ZWV0ZXN0IHBsYWNlIGluIHRvd24sIHdlIGhhdmUgYmVlbiBwcm92aWRpbmcgYSB1bmlxdWUgYXRtb3NwaGVyZSBhbmQgZGVsaWNpb3VzIGZvb2QgdG8gdGhlIEdhcm5lYXUgYW5kIFVuaXZlcnNpdHkgY29tbXVuaXRpZXMgYW5kIEVkbW9udG9uIGFzIGEgd2hvbGUgc2luY2UgMTk0My5cIjtcblxuICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29weSk7XG5cbiAgICByZXR1cm4gY29udGVudDtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lLmpzJztcbmltcG9ydCBhZGRUb01lbnUgZnJvbSAnLi9mb29kLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGFicygpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGZvb2RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICB0YWJDb250ZW50LmFwcGVuZENoaWxkKGhvbWVUYWIpO1xuICAgIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vZFRhYik7XG4gICAgdGFiQ29udGVudC5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcblxuICAgIGhvbWVUYWIuc2V0QXR0cmlidXRlKCdpZCcsICdob21lJyk7XG4gICAgZm9vZFRhYi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Zvb2QnKTtcbiAgICBjb250YWN0VGFiLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGFjdCcpO1xuXG4gICAgaG9tZVRhYi50ZXh0Q29udGVudCA9ICdIb21lJztcbiAgICBmb29kVGFiLnRleHRDb250ZW50ID0gJ0Zvb2QnO1xuICAgIGNvbnRhY3RUYWIudGV4dENvbnRlbnQgPSAnQ29udGFjdCc7XG5cbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHdoaWxlKGNvbnRlbnQuZmlyc3RDaGlsZCl7XG4gICAgICAgICAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgaG9tZSgpO1xuICAgIH0pO1xuXG4gICAgZm9vZFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB3aGlsZShjb250ZW50LmZpcnN0Q2hpbGQpe1xuICAgICAgICAgICAgY29udGVudC5maXJzdENoaWxkLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGFkZFRvTWVudSgpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRhYkNvbnRlbnQ7XG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==