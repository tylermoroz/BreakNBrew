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


const menu = () => {
  (0,_food_js__WEBPACK_IMPORTED_MODULE_0__.food)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvdGFicy5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYmVsZ2lhbldhZmYgZnJvbSBcIi4vYXNzZXRzL2JlbGdpYW5XYWZmLmpwZ1wiO1xuaW1wb3J0IGJlbm55IGZyb20gXCIuL2Fzc2V0cy9iZW5ueS5qcGdcIjtcbmltcG9ydCBicmVha2Zhc3RXYWZmIGZyb20gXCIuL2Fzc2V0cy9icmVha2Zhc3RXYWZmbGUuanBlZ1wiO1xuaW1wb3J0IGNoaWNrV2FmZiBmcm9tIFwiLi9hc3NldHMvY2hpY2tXYWZmLmpwZ1wiO1xuaW1wb3J0IGNpbm5CdW4gZnJvbSBcIi4vYXNzZXRzL2Npbm5CdW4uanBnXCI7XG5pbXBvcnQgZnJlbmNoVCBmcm9tIFwiLi9hc3NldHMvZnJlbmNoVG9hc3QuanBnXCI7XG5pbXBvcnQgaHVldm9zIGZyb20gXCIuL2Fzc2V0cy9odWV2b3MuanBnXCI7XG5pbXBvcnQgcHVsbGVkUG9yayBmcm9tIFwiLi9hc3NldHMvcHVsbGVkUG9ya0hhc2guanBnXCI7XG5pbXBvcnQgdmVnYW5TYXVzYWdlIGZyb20gXCIuL2Fzc2V0cy92ZWdhblNhdXNhZ2VUb2Z1LmpwZ1wiO1xuXG5jb25zdCBmb29kSXRlbSA9IChpbWdTcmMsIG5hbWUsIGRlc2MsIHByaWNlKSA9PiB7XG4gIHJldHVybiB7IGltZ1NyYywgbmFtZSwgZGVzYywgcHJpY2UgfTtcbn07XG5cbmNvbnN0IGJlbGdpYW5XYWZmbGVzID0gZm9vZEl0ZW0oXG4gIGJlbGdpYW5XYWZmLFxuICBcIkJlbGdpYW4gV2FmZmxlc1wiLFxuICBcIldhZmZsZXMgdG9wcGVkIHdpdGggZnJlc2ggZnJ1aXQsIGZydWl0IHN5cnVwcywgYW5kIHdoaXBwZWQgY3JlYW1cIixcbiAgXCIkMTZcIlxuKTtcblxuY29uc3QgZWdnc0Jlbm55ID0gZm9vZEl0ZW0oXG4gIGJlbm55LFxuICBcIkVnZ3MgQmVubnlcIixcbiAgXCJIb3VzZS1tYWRlIGNvcm5icmVhZCB0b3BwZWQgd2l0aCAyIHNsaWNlcyBvZiBiYWNrIGJhY29uIGFuZCAyIHBvYWNoZWQgZWdncyBmcm9tIEZvdXIgV2hpc3RsZSBGYXJtLCBzbW90aGVyZWQgaW4gYsOpY2hhbWVsIHNhdWNlXCIsXG4gIFwiJDE3XCJcbik7XG5cbmNvbnN0IGJyZWFrZmFzdFdhZmZsZSA9IGZvb2RJdGVtKFxuICBicmVha2Zhc3RXYWZmLFxuICBcIkJyZWFrZmFzdCBXYWZmbGVcIixcbiAgXCJXYWZmbGUgdG9wcGVkIHdpdGggMSBzdW5ueS1zaWRlIHVwIGVnZywgMyBwb3JrIGJyZWFrZmFzdCBzYXVzYWdlcyBhbmQgbWFwbGUgYnV0dGVyXCIsXG4gIFwiJDE0XCJcbik7XG5cbmNvbnN0IGNoaWNrZW5XYWZmbGVzID0gZm9vZEl0ZW0oXG4gIGNoaWNrV2FmZixcbiAgXCJDaGlja2VuICYgV2FmZmxlc1wiLFxuICBcIldhZmZsZSB0b3BwZWQgd2l0aCAyIGZyaWVkICYgYnJlYWRlZCBjaGlja2VuIGJyZWFzdHMsIHdhdGVybWVsb24gc2Fsc2EsIGFuZCBtYXBsZSBidXR0ZXJcIixcbiAgXCIkMTlcIlxuKTtcblxuY29uc3QgY2lubmFtb25CdW4gPSBmb29kSXRlbShjaW5uQnVuLCBcIkNpbm5hbW9uIEJ1blwiLCBcIkJha2VkIERhaWx5XCIsIFwiJDVcIik7XG5cbmNvbnN0IGZyZW5jaFRvYXN0ID0gZm9vZEl0ZW0oXG4gIGZyZW5jaFQsXG4gIFwiRnJlbmNoIFRvYXN0XCIsXG4gIFwiT3VyIGhvdXNlLW1hZGUgY2lubmFtb24gYnVuLCBzbGljZWQgYW5kIGNvb2tlZCBpbiBhIG51dG1lZyBlZ2cgd2FzaCwgdG9wcGVkIHdpdGggYmVycnkgY29tcG90ZSBhbmQgY3LDqG1lIGZyYcOuY2hlXCIsXG4gIFwiJDE2XCJcbik7XG5cbmNvbnN0IGh1ZXZvc1JhbmNoZXJvcyA9IGZvb2RJdGVtKFxuICBodWV2b3MsXG4gIFwiSHVldm9zIFJhbmNoZXJvc1wiLFxuICBcIjIgZnJpZWQgdG9ydGlsbGFzIHRvcHBlZCB3aXRoIGhvdXNlIHNwaWN5IGJlYW4gYmxlbmQsIGNoZWRkYXIgY2hlZXNlLCB0d28gcG9hY2hlZCBlZ2dzLCBhbmQgY2lsYW50cm8gZ2FybmlzaCwgd2l0aCBzaWRlIHNhbHNhXCIsXG4gIFwiJDE2XCJcbik7XG5cbmNvbnN0IHB1bGxlZFBvcmtIYXNoID0gZm9vZEl0ZW0oXG4gIHB1bGxlZFBvcmssXG4gIFwiUHVsbGVkIFBvcmsgSGFzaFwiLFxuICBcIkhhbmQtY3V0IGhhc2ggYnJvd25zIHRvcHBlZCB3aXRoIGRpY2VkIG9uaW9uLCBiZWxsIHBlcHBlcnMsIGNoZWVzZSBjdXJkcywgaG91c2Ugc2xvdy1yb2FzdGVkIHB1bGxlZCBwb3JrIGFuZCAyIHN1bm55LXNpZGUgdXAgZWdnc1wiLFxuICBcIiQyMVwiXG4pO1xuXG5jb25zdCB2ZWdhblNhdXNhZ2VUb2Z1ID0gZm9vZEl0ZW0oXG4gIHZlZ2FuU2F1c2FnZSxcbiAgXCJWZWdhbiBTYXVzYWdlICYgVG9mdSBTY3JhbWJsZVwiLFxuICBcIkJleW9uZCBNZWF0IHZlZ2FuIHNhdXNhZ2UsIGJlbGwgcGVwcGVycywga2FsZSwgcm9hc3RlZCB5YW1zLCBhbmQgcGFuLWZyaWVkIHRvZnUsIHNjcmFtYmxlZCB0b2dldGhlciB3aXRoIHR1cm1lcmljIGFuZCBudXRyaXRpb25hbCB5ZWFzdC4gU2VydmVkIHdpdGggRWxlYW5vciAmIExhdXJlbnQgc291cmRvdWdoIHRvYXN0XCIsXG4gIFwiJDE3XCJcbik7XG5cbmNvbnN0IGRpc3BsYXlNZW51SXRlbSA9IChpdGVtKSA9PiB7XG4gIGNvbnN0IGZvb2RJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaXRlbUltZyA9IG5ldyBJbWFnZSgpO1xuICBjb25zdCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgY29uc3QgaXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaXRlbVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5cbiAgaXRlbUltZy5zcmMgPSBpdGVtLmltZ1NyYztcbiAgaXRlbU5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gIGl0ZW1EZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICBpdGVtUHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuXG4gIGZvb2RJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1JbWcpO1xuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtTmFtZSk7XG4gIGZvb2RJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1EZXNjKTtcbiAgZm9vZEl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbVByaWNlKTtcblxuICByZXR1cm4gZm9vZEl0ZW1EaXY7XG59O1xuXG5jb25zdCBmb29kID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBtZW51RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcblxuICBoZWFkLnRleHRDb250ZW50ID0gXCJGb29kXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51RGl2KTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChoZWFkKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oYmVsZ2lhbldhZmZsZXMpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oZWdnc0Jlbm55KSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGJyZWFrZmFzdFdhZmZsZSkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShjaGlja2VuV2FmZmxlcykpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShjaW5uYW1vbkJ1bikpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShmcmVuY2hUb2FzdCkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShodWV2b3NSYW5jaGVyb3MpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0ocHVsbGVkUG9ya0hhc2gpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0odmVnYW5TYXVzYWdlVG9mdSkpO1xuXG4gIHJldHVybiBjb250ZW50O1xufTtcblxuZXhwb3J0IHsgZm9vZCB9O1xuIiwiaW1wb3J0IENhZmUgZnJvbSBcIi4vYXNzZXRzL2NhZmUuanBnXCI7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNhZmVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvdXJzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3Qgc3VuZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbW9uZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdHVlc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHdlZG5lc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRodXJzZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZnJpZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc2F0dXJkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhlYWRsaW5lLnRleHRDb250ZW50ID0gXCJXZWxjb21lIHRvIEJyZWFrIE4nIEJyZXdcIjtcbiAgY2FmZUltZy5zcmMgPSBDYWZlO1xuICBjb3B5LnRleHRDb250ZW50ID0gXCJCcmVhayBOJyBCcmV3LCBFZG1vbnRvbidzIHByZW1pZXIgcnVzdGljIGRpbmVyIVwiO1xuICBob3Vyc0hlYWQudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIHN1bmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDhhbSAtIDRwbVwiO1xuICBtb25kYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHR1ZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogOGFtIC0gMTFwbVwiO1xuICB3ZWRuZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHRodXJzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIGZyaWRheUhvdXJzLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDhhbSAtIDFhbVwiO1xuICBzYXR1cmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogOGFtIC0gMWFtXCI7XG4gIGxvY2F0aW9uSGVhZC50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzNDUgMjAwIFN0cmVldCwgRWRtb250b24sIEFsYmVydGFcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKGhvbWVEaXYpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhlYWRsaW5lKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChjYWZlSW1nKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChjb3B5KTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChob3Vycyk7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25EaXYpO1xuICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc0hlYWQpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzdW5kYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKG1vbmRheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQodHVlc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQod2VkbmVzZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh0aHVyc2RheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQoZnJpZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZChzYXR1cmRheUhvdXJzKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25IZWFkKTtcbiAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBob21lUGFnZSB9O1xuIiwiaW1wb3J0IHsgZm9vZCB9IGZyb20gXCIuL2Zvb2QuanNcIjtcblxuY29uc3QgbWVudSA9ICgpID0+IHtcbiAgZm9vZCgpO1xufTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zdCB0YWJzID0gKCkgPT4ge1xuICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgaG9tZVBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgbWVudSgpO1xuICB9KTtcblxuICByZXR1cm4gdGFiQ29udGVudDtcbn07XG5cbmV4cG9ydCB7IHRhYnMgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyB0YWJzIH0gZnJvbSBcIi4vdGFicy5qc1wiO1xuaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFicygpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=