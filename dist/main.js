/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: rgb(240, 171, 67);\n  min-height: 100vh;\n}\n\n#content {\n  min-width: 95vw;\n}\n\n#home {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 4fr 2fr;\n  grid-template-rows: 1fr;\n}\n\n.head {\n  font-size: 38px;\n  grid-column: 1 / 2;\n}\n\n#cafe-img {\n  grid-column: 1 / 2;\n}\n\n.copy {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: -10px;\n  font-style: italic;\n}\n\n#hours {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  margin-top: 50px;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,mCAAmC;EACnC,iBAAiB;AACnB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,8BAA8B;EAC9B,uBAAuB;AACzB;;AAEA;EACE,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,gBAAgB;AAClB","sourcesContent":["body {\n  background-color: rgb(240, 171, 67);\n  min-height: 100vh;\n}\n\n#content {\n  min-width: 95vw;\n}\n\n#home {\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 4fr 2fr;\n  grid-template-rows: 1fr;\n}\n\n.head {\n  font-size: 38px;\n  grid-column: 1 / 2;\n}\n\n#cafe-img {\n  grid-column: 1 / 2;\n}\n\n.copy {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  font-size: 24px;\n  font-weight: bold;\n  margin-top: -10px;\n  font-style: italic;\n}\n\n#hours {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  margin-top: 50px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



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

  homeDiv.id = "home";

  headline.textContent = "Welcome to Break N' Brew";
  headline.classList.add("head");

  cafeImg.src = _assets_cafe_jpg__WEBPACK_IMPORTED_MODULE_0__;
  cafeImg.id = "cafe-img";

  copy.textContent = "Break N' Brew, Edmonton's premier rustic diner!";
  copy.classList.add("copy");

  hours.id = "hours";
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




document.body.appendChild((0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.tabs)());
document.body.appendChild((0,_home_js__WEBPACK_IMPORTED_MODULE_1__.homePage)());

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBaUM7QUFDSTtBQUNoQjs7QUFFckIsMEJBQTBCLDhDQUFJO0FBQzlCLDBCQUEwQixrREFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9kcmlua3MuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy9mb29kLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9icmVha25icmV3Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy8uL3NyYy90YWJzLmpzIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYnJlYWtuYnJldy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9icmVha25icmV3L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JyZWFrbmJyZXcvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JyZWFrbmJyZXcvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDE3MSwgNjcpO1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIG1pbi13aWR0aDogOTV2dztcXG59XFxuXFxuI2hvbWUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMmZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbi5oZWFkIHtcXG4gIGZvbnQtc2l6ZTogMzhweDtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuI2NhZmUtaW1nIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG59XFxuXFxuLmNvcHkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuI2hvdXJzIHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxtQ0FBbUM7RUFDbkMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgMTcxLCA2Nyk7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgbWluLXdpZHRoOiA5NXZ3O1xcbn1cXG5cXG4jaG9tZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAyZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuLmhlYWQge1xcbiAgZm9udC1zaXplOiAzOHB4O1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4jY2FmZS1pbWcge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbn1cXG5cXG4uY29weSB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4jaG91cnMge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGRyaW5rSXRlbSA9IChuYW1lLCBkZXNjLCBwcmljZSkgPT4ge1xuICByZXR1cm4geyBuYW1lLCBkZXNjLCBwcmljZSB9O1xufTtcblxuY29uc3QgY29mZmVlVGVhID0gZHJpbmtJdGVtKFwiQnJld2VkIENvZmZlZSAvIFRlYVwiLCBcIlwiLCBcIiQzLjUwXCIpO1xuXG5jb25zdCBzYW5QZWxsZWdyaW5vRnJ1aXQgPSBkcmlua0l0ZW0oXG4gIFwiU2FuIFBlbGxlZ3Jpbm8gU3BhcmtsaW5nIEZydWl0IEJldmVyYWdlc1wiLFxuICBcIjMzMCBtTCBDYW4gKEJsb29kIE9yYW5nZSAvIE9yYW5nZSAvIExlbW9uKVwiLFxuICBcIiQzXCJcbik7XG5cbmNvbnN0IGVzcHJlc3NvID0gZHJpbmtJdGVtKFxuICBcIkVzcHJlc3NvXCIsXG4gIFwiU2luZ2xlIFNob3QgLyBEb3VibGUgU2hvdFwiLFxuICBcIiQyLjc1IC8gJDMuNzVcIlxuKTtcblxuY29uc3Qgc2FuUGVsbGVncmlub1dhdGVyID0gZHJpbmtJdGVtKFxuICBcIlNhbiBQZWxsZWdyaW5vIFNwYXJrbGluZyBNaW5lcmFsIFdhdGVyXCIsXG4gIFwiMjUwIC8gNzUwIG1MIEJvdHRsZVwiLFxuICBcIiQyLjUwIC8gJDVcIlxuKTtcblxuY29uc3QgYW1lcmljYW5vID0gZHJpbmtJdGVtKFwiQW1lcmljYW5vXCIsIFwiXCIsIFwiJDMuNTBcIik7XG5cbmNvbnN0IGxhdHRlID0gZHJpbmtJdGVtKFwiTGF0dGVcIiwgXCI5IG96IC8gMTQgb3pcIiwgXCIkNC4wMCAvICQ1LjAwXCIpO1xuXG5jb25zdCBjYXBwdWNjaW5vID0gZHJpbmtJdGVtKFwiQ2FwcHVjY2lub1wiLCBcIlwiLCBcIiQ0LjUwXCIpO1xuXG5jb25zdCByb3lhbEphbWFpY2FuID0gZHJpbmtJdGVtKFwiUm95YWwgSmFtYWljYW4gR2luZ2VyIEJlZXJcIiwgXCJcIiwgXCIkNVwiKTtcblxuY29uc3QgY2hhaUxhdHRlID0gZHJpbmtJdGVtKFxuICBcIkhvdXNlLU1hZGUgQ2hhaSBMYXR0ZVwiLFxuICBcIjkgb3ogLyAxNCBvelwiLFxuICBcIiQzLjUwIC8gJDUuMDBcIlxuKTtcblxuY29uc3QgbXVsZWtpY2tlciA9IGRyaW5rSXRlbShcbiAgXCJOZXcgTGV2ZWwgQ3JhZnQgU29kYSBNb2NrdGFpbCBNdWxla2lja2VyXCIsXG4gIFwiXCIsXG4gIFwiJDZcIlxuKTtcblxuY29uc3QgaG90Q2hvY29sYXRlRm9nID0gZHJpbmtJdGVtKFwiSG90IENob2NvbGF0ZSAvIExvbmRvbiBGb2dcIiwgXCJcIiwgXCIkNFwiKTtcblxuY29uc3QgcGFpbmFwcGxlUHVuY2ggPSBkcmlua0l0ZW0oXG4gIFwiTmV3IExldmVsIFBhaW5hcHBsZSBQdW5jaCBDcmFmdCBTb2RhXCIsXG4gIFwiXCIsXG4gIFwiJDZcIlxuKTtcblxuY29uc3QgY29sZEJyZXcgPSBkcmlua0l0ZW0oXG4gIFwiQ29sZCBCcmV3XCIsXG4gIFwiS2FmZmEgUm9hc3RlcnnigJlzIGhvdCBleHRyYWN0ZWQgRXRoaW9waWFuIEd1amksIHJhcGlkbHkgY2hpbGxlZC4gT3B0aW9uIG9mIHN3ZWV0ZW5lZC91bnN3ZWV0ZW5lZC5cIixcbiAgXCIkNFwiXG4pO1xuXG5jb25zdCBzdGllZ2xOb25BbGMgPSBkcmlua0l0ZW0oXCJTdGllZ2wgRnJlaWJpZXIgTm9uLUFsY29ob2xpY1wiLCBcIlwiLCBcIiQ2XCIpO1xuXG5jb25zdCBzb2RhUG9wID0gZHJpbmtJdGVtKFxuICBcIlBvcFwiLFxuICBcIkNvY2EtQ29sYSAvIERpZXQgQ29rZSAvIFNwcml0ZSAvIENyYW4tU29kYSAvIEljZSBUZWEgLyBHaW5nZXIgQWxlXCIsXG4gIFwiJDNcIlxuKTtcblxuY29uc3QgYW5uZXhDcmFmdFNvZGEgPSBkcmlua0l0ZW0oXG4gIFwiQW5uZXggQ3JhZnQgU29kYSAoUm9vdCBCZWVyIC8gU2Fza2F0b29uIExlbW9uYWRlKVwiLFxuICBcIlwiLFxuICBcIiQ1XCJcbik7XG5cbmNvbnN0IGZldmVyVHJlZSA9IGRyaW5rSXRlbShcbiAgXCJGZXZlci1UcmVlIChTaWNpbGlhbiBMZW1vbmFkZSAvIEdpbmdlciBCZWVyKVwiLFxuICBcIjIwMCBtTCBCb3R0bGVcIixcbiAgXCIkNFwiXG4pO1xuXG5jb25zdCBkaXNwbGF5RHJpbmtzID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgZHJpbmtJdGVtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZHJpbmtOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBkcmlua0Rlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHJpbmtQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGRyaW5rTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgZHJpbmtEZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjO1xuICBkcmlua1ByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcblxuICBkcmlua0l0ZW1EaXYuYXBwZW5kQ2hpbGQoZHJpbmtOYW1lKTtcbiAgZHJpbmtJdGVtRGl2LmFwcGVuZENoaWxkKGRyaW5rRGVzYyk7XG4gIGRyaW5rSXRlbURpdi5hcHBlbmRDaGlsZChkcmlua1ByaWNlKTtcblxuICByZXR1cm4gZHJpbmtJdGVtRGl2O1xufTtcblxuY29uc3QgZHJpbmtzID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBkcmlua0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG5cbiAgaGVhZC50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChkcmlua0Rpdik7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGhlYWQpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGNvZmZlZVRlYSkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKHNhblBlbGxlZ3Jpbm9GcnVpdCkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGVzcHJlc3NvKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3Moc2FuUGVsbGVncmlub1dhdGVyKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoYW1lcmljYW5vKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MobGF0dGUpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhjYXBwdWNjaW5vKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3Mocm95YWxKYW1haWNhbikpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGNoYWlMYXR0ZSkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKG11bGVraWNrZXIpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhob3RDaG9jb2xhdGVGb2cpKTtcbiAgZHJpbmtEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheURyaW5rcyhwYWluYXBwbGVQdW5jaCkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGNvbGRCcmV3KSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3Moc3RpZWdsTm9uQWxjKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3Moc29kYVBvcCkpO1xuICBkcmlua0Rpdi5hcHBlbmRDaGlsZChkaXNwbGF5RHJpbmtzKGFubmV4Q3JhZnRTb2RhKSk7XG4gIGRyaW5rRGl2LmFwcGVuZENoaWxkKGRpc3BsYXlEcmlua3MoZmV2ZXJUcmVlKSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBkcmlua3MgfTtcbiIsImltcG9ydCBiZWxnaWFuV2FmZiBmcm9tIFwiLi9hc3NldHMvYmVsZ2lhbldhZmYuanBnXCI7XG5pbXBvcnQgYmVubnkgZnJvbSBcIi4vYXNzZXRzL2Jlbm55LmpwZ1wiO1xuaW1wb3J0IGJyZWFrZmFzdFdhZmYgZnJvbSBcIi4vYXNzZXRzL2JyZWFrZmFzdFdhZmZsZS5qcGVnXCI7XG5pbXBvcnQgY2hpY2tXYWZmIGZyb20gXCIuL2Fzc2V0cy9jaGlja1dhZmYuanBnXCI7XG5pbXBvcnQgY2lubkJ1biBmcm9tIFwiLi9hc3NldHMvY2lubkJ1bi5qcGdcIjtcbmltcG9ydCBmcmVuY2hUIGZyb20gXCIuL2Fzc2V0cy9mcmVuY2hUb2FzdC5qcGdcIjtcbmltcG9ydCBodWV2b3MgZnJvbSBcIi4vYXNzZXRzL2h1ZXZvcy5qcGdcIjtcbmltcG9ydCBwdWxsZWRQb3JrIGZyb20gXCIuL2Fzc2V0cy9wdWxsZWRQb3JrSGFzaC5qcGdcIjtcbmltcG9ydCB2ZWdhblNhdXNhZ2UgZnJvbSBcIi4vYXNzZXRzL3ZlZ2FuU2F1c2FnZVRvZnUuanBnXCI7XG5cbmNvbnN0IGZvb2RJdGVtID0gKGltZ1NyYywgbmFtZSwgZGVzYywgcHJpY2UpID0+IHtcbiAgcmV0dXJuIHsgaW1nU3JjLCBuYW1lLCBkZXNjLCBwcmljZSB9O1xufTtcblxuY29uc3QgYmVsZ2lhbldhZmZsZXMgPSBmb29kSXRlbShcbiAgYmVsZ2lhbldhZmYsXG4gIFwiQmVsZ2lhbiBXYWZmbGVzXCIsXG4gIFwiV2FmZmxlcyB0b3BwZWQgd2l0aCBmcmVzaCBmcnVpdCwgZnJ1aXQgc3lydXBzLCBhbmQgd2hpcHBlZCBjcmVhbVwiLFxuICBcIiQxNlwiXG4pO1xuXG5jb25zdCBlZ2dzQmVubnkgPSBmb29kSXRlbShcbiAgYmVubnksXG4gIFwiRWdncyBCZW5ueVwiLFxuICBcIkhvdXNlLW1hZGUgY29ybmJyZWFkIHRvcHBlZCB3aXRoIDIgc2xpY2VzIG9mIGJhY2sgYmFjb24gYW5kIDIgcG9hY2hlZCBlZ2dzIGZyb20gRm91ciBXaGlzdGxlIEZhcm0sIHNtb3RoZXJlZCBpbiBiw6ljaGFtZWwgc2F1Y2VcIixcbiAgXCIkMTdcIlxuKTtcblxuY29uc3QgYnJlYWtmYXN0V2FmZmxlID0gZm9vZEl0ZW0oXG4gIGJyZWFrZmFzdFdhZmYsXG4gIFwiQnJlYWtmYXN0IFdhZmZsZVwiLFxuICBcIldhZmZsZSB0b3BwZWQgd2l0aCAxIHN1bm55LXNpZGUgdXAgZWdnLCAzIHBvcmsgYnJlYWtmYXN0IHNhdXNhZ2VzIGFuZCBtYXBsZSBidXR0ZXJcIixcbiAgXCIkMTRcIlxuKTtcblxuY29uc3QgY2hpY2tlbldhZmZsZXMgPSBmb29kSXRlbShcbiAgY2hpY2tXYWZmLFxuICBcIkNoaWNrZW4gJiBXYWZmbGVzXCIsXG4gIFwiV2FmZmxlIHRvcHBlZCB3aXRoIDIgZnJpZWQgJiBicmVhZGVkIGNoaWNrZW4gYnJlYXN0cywgd2F0ZXJtZWxvbiBzYWxzYSwgYW5kIG1hcGxlIGJ1dHRlclwiLFxuICBcIiQxOVwiXG4pO1xuXG5jb25zdCBjaW5uYW1vbkJ1biA9IGZvb2RJdGVtKGNpbm5CdW4sIFwiQ2lubmFtb24gQnVuXCIsIFwiQmFrZWQgRGFpbHlcIiwgXCIkNVwiKTtcblxuY29uc3QgZnJlbmNoVG9hc3QgPSBmb29kSXRlbShcbiAgZnJlbmNoVCxcbiAgXCJGcmVuY2ggVG9hc3RcIixcbiAgXCJPdXIgaG91c2UtbWFkZSBjaW5uYW1vbiBidW4sIHNsaWNlZCBhbmQgY29va2VkIGluIGEgbnV0bWVnIGVnZyB3YXNoLCB0b3BwZWQgd2l0aCBiZXJyeSBjb21wb3RlIGFuZCBjcsOobWUgZnJhw65jaGVcIixcbiAgXCIkMTZcIlxuKTtcblxuY29uc3QgaHVldm9zUmFuY2hlcm9zID0gZm9vZEl0ZW0oXG4gIGh1ZXZvcyxcbiAgXCJIdWV2b3MgUmFuY2hlcm9zXCIsXG4gIFwiMiBmcmllZCB0b3J0aWxsYXMgdG9wcGVkIHdpdGggaG91c2Ugc3BpY3kgYmVhbiBibGVuZCwgY2hlZGRhciBjaGVlc2UsIHR3byBwb2FjaGVkIGVnZ3MsIGFuZCBjaWxhbnRybyBnYXJuaXNoLCB3aXRoIHNpZGUgc2Fsc2FcIixcbiAgXCIkMTZcIlxuKTtcblxuY29uc3QgcHVsbGVkUG9ya0hhc2ggPSBmb29kSXRlbShcbiAgcHVsbGVkUG9yayxcbiAgXCJQdWxsZWQgUG9yayBIYXNoXCIsXG4gIFwiSGFuZC1jdXQgaGFzaCBicm93bnMgdG9wcGVkIHdpdGggZGljZWQgb25pb24sIGJlbGwgcGVwcGVycywgY2hlZXNlIGN1cmRzLCBob3VzZSBzbG93LXJvYXN0ZWQgcHVsbGVkIHBvcmsgYW5kIDIgc3Vubnktc2lkZSB1cCBlZ2dzXCIsXG4gIFwiJDIxXCJcbik7XG5cbmNvbnN0IHZlZ2FuU2F1c2FnZVRvZnUgPSBmb29kSXRlbShcbiAgdmVnYW5TYXVzYWdlLFxuICBcIlZlZ2FuIFNhdXNhZ2UgJiBUb2Z1IFNjcmFtYmxlXCIsXG4gIFwiQmV5b25kIE1lYXQgdmVnYW4gc2F1c2FnZSwgYmVsbCBwZXBwZXJzLCBrYWxlLCByb2FzdGVkIHlhbXMsIGFuZCBwYW4tZnJpZWQgdG9mdSwgc2NyYW1ibGVkIHRvZ2V0aGVyIHdpdGggdHVybWVyaWMgYW5kIG51dHJpdGlvbmFsIHllYXN0LiBTZXJ2ZWQgd2l0aCBFbGVhbm9yICYgTGF1cmVudCBzb3VyZG91Z2ggdG9hc3RcIixcbiAgXCIkMTdcIlxuKTtcblxuY29uc3QgZGlzcGxheU1lbnVJdGVtID0gKGl0ZW0pID0+IHtcbiAgY29uc3QgZm9vZEl0ZW1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpdGVtSW1nID0gbmV3IEltYWdlKCk7XG4gIGNvbnN0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBjb25zdCBpdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpdGVtUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcblxuICBpdGVtSW1nLnNyYyA9IGl0ZW0uaW1nU3JjO1xuICBpdGVtTmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgaXRlbURlc2MudGV4dENvbnRlbnQgPSBpdGVtLmRlc2M7XG4gIGl0ZW1QcmljZS50ZXh0Q29udGVudCA9IGl0ZW0ucHJpY2U7XG5cbiAgZm9vZEl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbUltZyk7XG4gIGZvb2RJdGVtRGl2LmFwcGVuZENoaWxkKGl0ZW1OYW1lKTtcbiAgZm9vZEl0ZW1EaXYuYXBwZW5kQ2hpbGQoaXRlbURlc2MpO1xuICBmb29kSXRlbURpdi5hcHBlbmRDaGlsZChpdGVtUHJpY2UpO1xuXG4gIHJldHVybiBmb29kSXRlbURpdjtcbn07XG5cbmNvbnN0IGZvb2QgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBoZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuXG4gIGhlYWQudGV4dENvbnRlbnQgPSBcIkZvb2RcIjtcblxuICBjb250ZW50LmFwcGVuZENoaWxkKG1lbnVEaXYpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGhlYWQpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShiZWxnaWFuV2FmZmxlcykpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShlZ2dzQmVubnkpKTtcbiAgbWVudURpdi5hcHBlbmRDaGlsZChkaXNwbGF5TWVudUl0ZW0oYnJlYWtmYXN0V2FmZmxlKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGNoaWNrZW5XYWZmbGVzKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGNpbm5hbW9uQnVuKSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGZyZW5jaFRvYXN0KSk7XG4gIG1lbnVEaXYuYXBwZW5kQ2hpbGQoZGlzcGxheU1lbnVJdGVtKGh1ZXZvc1JhbmNoZXJvcykpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbShwdWxsZWRQb3JrSGFzaCkpO1xuICBtZW51RGl2LmFwcGVuZENoaWxkKGRpc3BsYXlNZW51SXRlbSh2ZWdhblNhdXNhZ2VUb2Z1KSk7XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyBmb29kIH07XG4iLCJpbXBvcnQgQ2FmZSBmcm9tIFwiLi9hc3NldHMvY2FmZS5qcGdcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmNvbnN0IGhvbWVQYWdlID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICBjb25zdCBob21lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gIGNvbnN0IGNhZmVJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgY29uc3QgY29weSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGhvdXJzSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3Qgc3VuZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgbW9uZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdHVlc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHdlZG5lc2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRodXJzZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZnJpZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3Qgc2F0dXJkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGxvY2F0aW9uSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuXG4gIGhvbWVEaXYuaWQgPSBcImhvbWVcIjtcblxuICBoZWFkbGluZS50ZXh0Q29udGVudCA9IFwiV2VsY29tZSB0byBCcmVhayBOJyBCcmV3XCI7XG4gIGhlYWRsaW5lLmNsYXNzTGlzdC5hZGQoXCJoZWFkXCIpO1xuXG4gIGNhZmVJbWcuc3JjID0gQ2FmZTtcbiAgY2FmZUltZy5pZCA9IFwiY2FmZS1pbWdcIjtcblxuICBjb3B5LnRleHRDb250ZW50ID0gXCJCcmVhayBOJyBCcmV3LCBFZG1vbnRvbidzIHByZW1pZXIgcnVzdGljIGRpbmVyIVwiO1xuICBjb3B5LmNsYXNzTGlzdC5hZGQoXCJjb3B5XCIpO1xuXG4gIGhvdXJzLmlkID0gXCJob3Vyc1wiO1xuICBob3Vyc0hlYWQudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gIHN1bmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTdW5kYXk6IDhhbSAtIDRwbVwiO1xuICBtb25kYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiTW9uZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHR1ZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiVHVlc2RheTogOGFtIC0gMTFwbVwiO1xuICB3ZWRuZXNkYXlIb3Vycy50ZXh0Q29udGVudCA9IFwiV2VkbmVzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIHRodXJzZGF5SG91cnMudGV4dENvbnRlbnQgPSBcIlRodXJzZGF5OiA4YW0gLSAxMXBtXCI7XG4gIGZyaWRheUhvdXJzLnRleHRDb250ZW50ID0gXCJGcmlkYXk6IDhhbSAtIDFhbVwiO1xuICBzYXR1cmRheUhvdXJzLnRleHRDb250ZW50ID0gXCJTYXR1cmRheTogOGFtIC0gMWFtXCI7XG5cbiAgbG9jYXRpb25IZWFkLnRleHRDb250ZW50ID0gXCJMb2NhdGlvblwiO1xuICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMjM0NSAyMDAgU3RyZWV0LCBFZG1vbnRvbiwgQWxiZXJ0YVwiO1xuXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZURpdik7XG4gIGhvbWVEaXYuYXBwZW5kQ2hpbGQoaGVhZGxpbmUpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGNhZmVJbWcpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGNvcHkpO1xuICBob21lRGl2LmFwcGVuZENoaWxkKGhvdXJzKTtcbiAgaG9tZURpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkRpdik7XG4gIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZCk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHN1bmRheUhvdXJzKTtcbiAgaG91cnMuYXBwZW5kQ2hpbGQobW9uZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh0dWVzZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZCh3ZWRuZXNkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHRodXJzZGF5SG91cnMpO1xuICBob3Vycy5hcHBlbmRDaGlsZChmcmlkYXlIb3Vycyk7XG4gIGhvdXJzLmFwcGVuZENoaWxkKHNhdHVyZGF5SG91cnMpO1xuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkhlYWQpO1xuICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICByZXR1cm4gY29udGVudDtcbn07XG5cbmV4cG9ydCB7IGhvbWVQYWdlIH07XG4iLCJpbXBvcnQgeyBmb29kIH0gZnJvbSBcIi4vZm9vZC5qc1wiO1xuaW1wb3J0IHsgZHJpbmtzIH0gZnJvbSBcIi4vZHJpbmtzLmpzXCI7XG5cbmNvbnN0IG1lbnUgPSAoKSA9PiB7XG4gIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICBjb250ZW50LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cblxuICBjb25zdCBtZW51VGFicyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGZvb2RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkcmlua1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgZm9vZFRhYi50ZXh0Q29udGVudCA9IFwiRm9vZFwiO1xuICBkcmlua1RhYi50ZXh0Q29udGVudCA9IFwiRHJpbmtzXCI7XG5cbiAgY29udGVudC5hcHBlbmRDaGlsZChtZW51VGFicyk7XG4gIG1lbnVUYWJzLmFwcGVuZENoaWxkKGZvb2RUYWIpO1xuICBtZW51VGFicy5hcHBlbmRDaGlsZChkcmlua1RhYik7XG4gIGZvb2QoKTtcblxuICBmb29kVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgd2hpbGUgKGNvbnRlbnQuY2hpbGRyZW5bMV0pIHtcbiAgICAgIGNvbnRlbnQuY2hpbGRyZW5bMV0ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGZvb2QoKTtcbiAgfSk7XG5cbiAgZHJpbmtUYWIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlblsxXSkge1xuICAgICAgY29udGVudC5jaGlsZHJlblsxXS5yZW1vdmUoKTtcbiAgICB9XG4gICAgZHJpbmtzKCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgbWVudSB9O1xuIiwiaW1wb3J0IHsgaG9tZVBhZ2UgfSBmcm9tIFwiLi9ob21lLmpzXCI7XG5pbXBvcnQgeyBtZW51IH0gZnJvbSBcIi4vbWVudS5qc1wiO1xuXG5jb25zdCB0YWJzID0gKCkgPT4ge1xuICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGNvbnN0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIGhvbWVUYWIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgbWVudVRhYi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuXG4gIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gIHRhYkNvbnRlbnQuYXBwZW5kQ2hpbGQobWVudVRhYik7XG5cbiAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHdoaWxlIChjb250ZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgICB9XG4gICAgaG9tZVBhZ2UoKTtcbiAgfSk7XG5cbiAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIG1lbnUoKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRhYkNvbnRlbnQ7XG59O1xuXG5leHBvcnQgeyB0YWJzIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IHRhYnMgfSBmcm9tIFwiLi90YWJzLmpzXCI7XG5pbXBvcnQgeyBob21lUGFnZSB9IGZyb20gXCIuL2hvbWUuanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGFicygpKTtcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=