/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controller/productManage/productManageController.ts":
/*!*****************************************************************!*\
  !*** ./src/controller/productManage/productManageController.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductManageController; }\n/* harmony export */ });\n/* harmony import */ var _model_productManageModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../model/productManageModel */ \"./src/model/productManageModel.ts\");\n/* harmony import */ var _utils_constants_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants/action */ \"./src/utils/constants/action.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\n\n\nvar _model = /*#__PURE__*/new WeakMap();\n\nvar ProductManageController = /*#__PURE__*/function () {\n  function ProductManageController(productStore) {\n    _classCallCheck(this, ProductManageController);\n\n    _classPrivateFieldInitSpec(this, _model, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _model, new _model_productManageModel__WEBPACK_IMPORTED_MODULE_0__[\"default\"](productStore));\n  }\n\n  _createClass(ProductManageController, [{\n    key: \"dispatch\",\n    value: function dispatch(action) {\n      switch (action.type) {\n        case _utils_constants_action__WEBPACK_IMPORTED_MODULE_1__.ADD_PRODUCT:\n          _classPrivateFieldGet(this, _model).addProduct(action.payload);\n\n          break;\n      }\n    }\n  }]);\n\n  return ProductManageController;\n}();\n\n\n\n//# sourceURL=webpack:///./src/controller/productManage/productManageController.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes/router */ \"./src/routes/router.ts\");\n/* harmony import */ var _store_ProductStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store/ProductStore */ \"./src/store/ProductStore.ts\");\n/* harmony import */ var _views_productManage_ProductManageView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/productManage/ProductManageView */ \"./src/views/productManage/ProductManageView.ts\");\n\n\n\nvar productStore = new _store_ProductStore__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\nvar productManageView = new _views_productManage_ProductManageView__WEBPACK_IMPORTED_MODULE_2__[\"default\"](productStore);\nnew _routes_router__WEBPACK_IMPORTED_MODULE_0__.Router({\n  productManageView: productManageView\n});\n\nif (false) {}\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ }),

/***/ "./src/model/productManageModel.ts":
/*!*****************************************!*\
  !*** ./src/model/productManageModel.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductManageModel; }\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\nvar _store = /*#__PURE__*/new WeakMap();\n\nvar ProductManageModel = /*#__PURE__*/function () {\n  function ProductManageModel(product) {\n    _classCallCheck(this, ProductManageModel);\n\n    _classPrivateFieldInitSpec(this, _store, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _store, product);\n  }\n\n  _createClass(ProductManageModel, [{\n    key: \"addProduct\",\n    value: function addProduct(productProp) {\n      _classPrivateFieldGet(this, _store).setProduct(productProp);\n    }\n  }]);\n\n  return ProductManageModel;\n}();\n\n\n\n//# sourceURL=webpack:///./src/model/productManageModel.ts?");

/***/ }),

/***/ "./src/routes/router.ts":
/*!******************************!*\
  !*** ./src/routes/router.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$Root\": function() { return /* binding */ $Root; },\n/* harmony export */   \"Router\": function() { return /* binding */ Router; }\n/* harmony export */ });\n/* harmony import */ var _utils_dom_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/dom/selector */ \"./src/utils/dom/selector.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar FIRST_ROUTE = '#productManage';\nvar $Root = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_0__.$)({\n  selector: '#app'\n});\nvar Router = /*#__PURE__*/function () {\n  function Router(_ref) {\n    var productManageView = _ref.productManageView;\n\n    _classCallCheck(this, Router);\n\n    this.productManageView = productManageView;\n    this.init();\n  }\n\n  _createClass(Router, [{\n    key: \"onHashChange\",\n    value: function onHashChange() {\n      var hash = window.location.hash;\n\n      switch (hash) {\n        case '#productManage':\n          this.productManageView.render();\n          break;\n\n        case '#chargeMoney':\n          $Root.innerHTML = '<div>chargeMoney</div>'; // render charge money\n\n          break;\n\n        case '#productPurchase':\n          $Root.innerHTML = '<div>productPurchase</div>'; // render product purchase\n\n          break;\n      }\n    }\n  }, {\n    key: \"init\",\n    value: function init() {\n      window.addEventListener('hashchange', this.onHashChange.bind(this));\n      window.location.hash = FIRST_ROUTE;\n    }\n  }]);\n\n  return Router;\n}();\n\n//# sourceURL=webpack:///./src/routes/router.ts?");

/***/ }),

/***/ "./src/store/ProductStore.ts":
/*!***********************************!*\
  !*** ./src/store/ProductStore.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductStore; }\n/* harmony export */ });\n/* harmony import */ var _utils_data_localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/data/localStorage */ \"./src/utils/data/localStorage.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\nvar VENDING_PRODUCT_KEY = 'vending_machine_product_key';\n\nvar _productMap = /*#__PURE__*/new WeakMap();\n\nvar _productList = /*#__PURE__*/new WeakMap();\n\nvar ProductStore = /*#__PURE__*/function () {\n  function ProductStore() {\n    var _getLocalStorageItem,\n        _this = this;\n\n    _classCallCheck(this, ProductStore);\n\n    _classPrivateFieldInitSpec(this, _productMap, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldInitSpec(this, _productList, {\n      writable: true,\n      value: void 0\n    });\n\n    _classPrivateFieldSet(this, _productMap, new Map());\n\n    var savedProducts = (_getLocalStorageItem = (0,_utils_data_localStorage__WEBPACK_IMPORTED_MODULE_0__.getLocalStorageItem)({\n      key: VENDING_PRODUCT_KEY\n    })) !== null && _getLocalStorageItem !== void 0 ? _getLocalStorageItem : [];\n\n    _classPrivateFieldSet(this, _productList, savedProducts);\n\n    savedProducts.forEach(function (_ref) {\n      var name = _ref.name,\n          price = _ref.price,\n          quantity = _ref.quantity;\n\n      _classPrivateFieldGet(_this, _productMap).set(name, {\n        price: price,\n        quantity: quantity\n      });\n    });\n  }\n\n  _createClass(ProductStore, [{\n    key: \"setProduct\",\n    value: function setProduct(_ref2) {\n      var name = _ref2.name,\n          price = _ref2.price,\n          quantity = _ref2.quantity;\n\n      if (!this.isValidProduct({\n        name: name,\n        price: price,\n        quantity: quantity\n      })) {\n        return false;\n      }\n\n      var isDuplicated = !!_classPrivateFieldGet(this, _productMap).get(name);\n\n      if (isDuplicated) {\n        _classPrivateFieldGet(this, _productMap).set(name, {\n          price: price,\n          quantity: quantity\n        });\n\n        _classPrivateFieldSet(this, _productList, _classPrivateFieldGet(this, _productList).filter(function (product) {\n          return product.name !== name;\n        }));\n      }\n\n      _classPrivateFieldGet(this, _productList).push({\n        name: name,\n        price: price,\n        quantity: quantity\n      });\n\n      (0,_utils_data_localStorage__WEBPACK_IMPORTED_MODULE_0__.setLocalStorageItem)({\n        key: VENDING_PRODUCT_KEY,\n        value: _classPrivateFieldGet(this, _productList)\n      });\n      return true;\n    }\n  }, {\n    key: \"getProduct\",\n    value: function getProduct(_ref3) {\n      var name = _ref3.name;\n\n      var product = _classPrivateFieldGet(this, _productMap).get(name);\n\n      if (!product) {\n        return null;\n      }\n\n      return {\n        name: name,\n        price: product.price,\n        quantity: product.quantity\n      };\n    }\n  }, {\n    key: \"isValidProduct\",\n    value: function isValidProduct(_ref4) {\n      var name = _ref4.name,\n          price = _ref4.price,\n          quantity = _ref4.quantity;\n\n      if (!name || !price || !quantity) {\n        return false;\n      }\n\n      return this.isPriceValid(price);\n    }\n  }, {\n    key: \"getProducts\",\n    value: function getProducts() {\n      return _classPrivateFieldGet(this, _productList);\n    }\n  }, {\n    key: \"isPriceValid\",\n    value: function isPriceValid(price) {\n      if (price < 100) {\n        return false;\n      }\n\n      if (price % 10 !== 0) {\n        return false;\n      }\n\n      return true;\n    }\n  }]);\n\n  return ProductStore;\n}();\n\n\n\n//# sourceURL=webpack:///./src/store/ProductStore.ts?");

/***/ }),

/***/ "./src/utils/constants/action.ts":
/*!***************************************!*\
  !*** ./src/utils/constants/action.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ADD_PRODUCT\": function() { return /* binding */ ADD_PRODUCT; }\n/* harmony export */ });\nvar ADD_PRODUCT = 'ADD_PRODUCT';\n\n\n//# sourceURL=webpack:///./src/utils/constants/action.ts?");

/***/ }),

/***/ "./src/utils/constants/element.ts":
/*!****************************************!*\
  !*** ./src/utils/constants/element.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PRODUCT_NAME_INPUT\": function() { return /* binding */ PRODUCT_NAME_INPUT; },\n/* harmony export */   \"PRODUCT_PRICE_INPUT\": function() { return /* binding */ PRODUCT_PRICE_INPUT; },\n/* harmony export */   \"PRODUCT_QUANTITY_INPUT\": function() { return /* binding */ PRODUCT_QUANTITY_INPUT; },\n/* harmony export */   \"PRODUCT_CONTAINER\": function() { return /* binding */ PRODUCT_CONTAINER; },\n/* harmony export */   \"PRODUCT_INVENTORY\": function() { return /* binding */ PRODUCT_INVENTORY; },\n/* harmony export */   \"PRODUCT_ADD_BUTTON\": function() { return /* binding */ PRODUCT_ADD_BUTTON; },\n/* harmony export */   \"PRODUCT_INVENTORY_CONTAINER\": function() { return /* binding */ PRODUCT_INVENTORY_CONTAINER; }\n/* harmony export */ });\nvar PRODUCT_NAME_INPUT = '#product-name-input';\nvar PRODUCT_PRICE_INPUT = '#product-price-input';\nvar PRODUCT_QUANTITY_INPUT = '#product-quantity-input';\nvar PRODUCT_INVENTORY_CONTAINER = '#product-inventory-container';\nvar PRODUCT_ADD_BUTTON = '#product-add-button';\nvar PRODUCT_CONTAINER = '#product-container';\nvar PRODUCT_INVENTORY = '#product-inventory';\n\n\n//# sourceURL=webpack:///./src/utils/constants/element.ts?");

/***/ }),

/***/ "./src/utils/constants/errorMessage.ts":
/*!*********************************************!*\
  !*** ./src/utils/constants/errorMessage.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PRODUCT_ADD_INPUT_INVALID\": function() { return /* binding */ PRODUCT_ADD_INPUT_INVALID; },\n/* harmony export */   \"PRODUCT_ADD_PRICE_INVALID\": function() { return /* binding */ PRODUCT_ADD_PRICE_INVALID; },\n/* harmony export */   \"PRODUCT_ADD_QUANTITY_INVALID\": function() { return /* binding */ PRODUCT_ADD_QUANTITY_INVALID; }\n/* harmony export */ });\n// product manage error message\nvar PRODUCT_ADD_INPUT_INVALID = '상품 입력창에 값을 압력해주세요.';\nvar PRODUCT_ADD_PRICE_INVALID = '상품의 금액은 100원 이상이어야 하고 10원으로 나누어 떨어져야 합니다.';\nvar PRODUCT_ADD_QUANTITY_INVALID = '상품의 수량은 1개 이상이어야 합니다.';\n\n\n//# sourceURL=webpack:///./src/utils/constants/errorMessage.ts?");

/***/ }),

/***/ "./src/utils/data/localStorage.ts":
/*!****************************************!*\
  !*** ./src/utils/data/localStorage.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setLocalStorageItem\": function() { return /* binding */ setLocalStorageItem; },\n/* harmony export */   \"getLocalStorageItem\": function() { return /* binding */ getLocalStorageItem; }\n/* harmony export */ });\nvar setLocalStorageItem = function setLocalStorageItem(_ref) {\n  var key = _ref.key,\n      value = _ref.value;\n\n  if (typeof value === 'string') {\n    localStorage.setItem(key, value);\n    return;\n  }\n\n  localStorage.setItem(key, JSON.stringify(value));\n};\n\nvar getLocalStorageItem = function getLocalStorageItem(_ref2) {\n  var key = _ref2.key;\n  var item = localStorage.getItem(key);\n\n  if (!item) {\n    return null;\n  }\n\n  try {\n    return JSON.parse(item);\n  } catch (_unused) {\n    return item;\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/data/localStorage.ts?");

/***/ }),

/***/ "./src/utils/dom/selector.ts":
/*!***********************************!*\
  !*** ./src/utils/dom/selector.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"$\": function() { return /* binding */ $; }\n/* harmony export */ });\nvar $ = function $(_ref) {\n  var selector = _ref.selector,\n      _ref$target = _ref.target,\n      target = _ref$target === void 0 ? document : _ref$target;\n  return target.querySelector(selector);\n};\n\n\n\n//# sourceURL=webpack:///./src/utils/dom/selector.ts?");

/***/ }),

/***/ "./src/views/productManage/ProductManageView.ts":
/*!******************************************************!*\
  !*** ./src/views/productManage/ProductManageView.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProductManageView; }\n/* harmony export */ });\n/* harmony import */ var _controller_productManage_productManageController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../controller/productManage/productManageController */ \"./src/controller/productManage/productManageController.ts\");\n/* harmony import */ var _routes_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../routes/router */ \"./src/routes/router.ts\");\n/* harmony import */ var _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/constants/element */ \"./src/utils/constants/element.ts\");\n/* harmony import */ var _utils_constants_errorMessage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/constants/errorMessage */ \"./src/utils/constants/errorMessage.ts\");\n/* harmony import */ var _utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/dom/selector */ \"./src/utils/dom/selector.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }\n\nfunction _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); } }\n\nfunction _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"get\"); return _classApplyDescriptorGet(receiver, descriptor); }\n\nfunction _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }\n\nfunction _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, \"set\"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }\n\nfunction _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError(\"attempted to \" + action + \" private field on non-instance\"); } return privateMap.get(receiver); }\n\nfunction _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError(\"attempted to set read only private field\"); } descriptor.value = value; } }\n\n\n\n\n\n\nvar ProductPurchaseTemplate = \"\\n  <h3>\\uC0C1\\uD488 \\uCD94\\uAC00\\uD558\\uAE30</h3>\\n  <div class=\\\"product-container\\\">\\n    <input type=\\\"text\\\" id=\\\"product-name-input\\\" data-cy=\\\"product-name-input\\\" placeholder=\\\"\\uC0C1\\uD488\\uBA85\\\" />\\n    <input type=\\\"number\\\" id=\\\"product-price-input\\\" data-cy=\\\"product-price-input\\\" placeholder=\\\"\\uAC00\\uACA9\\\" />\\n    <input type=\\\"number\\\" id=\\\"product-quantity-input\\\" data-cy=\\\"product-quantity-input\\\" placeholder=\\\"\\uC218\\uB7C9\\\" />\\n    <button id=\\\"product-add-button\\\" data-cy=\\\"product-add-button\\\">\\uCD94\\uAC00\\uD558\\uAE30</button>\\n  </div>\\n  <table class=\\\"product-inventory\\\">\\n    <colgroup>\\n      <col style=\\\"width: 140px\\\" />\\n      <col style=\\\"width: 100px\\\" />\\n      <col style=\\\"width: 100px\\\" />\\n    </colgroup>\\n    <thead>\\n      <tr>\\n        <th>\\uC0C1\\uD488\\uBA85</th>\\n        <th>\\uAC00\\uACA9</th>\\n        <th>\\uC218\\uB7C9</th>\\n      </tr>\\n    </thead>\\n    <tbody id=\\\"product-inventory-container\\\" data-cy=\\\"product-inventory-container\\\"></tbody>\\n  </table>\\n\";\n\nvar _store = /*#__PURE__*/new WeakMap();\n\nvar ProductManageView = /*#__PURE__*/function () {\n  function ProductManageView(productStore) {\n    _classCallCheck(this, ProductManageView);\n\n    _classPrivateFieldInitSpec(this, _store, {\n      writable: true,\n      value: void 0\n    });\n\n    this.controller = new _controller_productManage_productManageController__WEBPACK_IMPORTED_MODULE_0__[\"default\"](productStore);\n\n    _classPrivateFieldSet(this, _store, productStore);\n  }\n\n  _createClass(ProductManageView, [{\n    key: \"onProductAddButtonClick\",\n    value: function onProductAddButtonClick() {\n      var _this = this;\n\n      this.$addButton.addEventListener('click', function () {\n        var _this$getProduct = _this.getProduct(),\n            errorMessage = _this$getProduct.errorMessage,\n            product = _this$getProduct.product;\n\n        if (errorMessage) {\n          alert(errorMessage);\n          return;\n        }\n\n        if (!product) {\n          return;\n        }\n\n        _this.controller.dispatch({\n          type: 'ADD_PRODUCT',\n          payload: product\n        });\n\n        _this.$productNameInput.value = '';\n        _this.$productPriceInput.value = '';\n        _this.$productQuantityInput.value = '';\n\n        _this.renderProduct();\n      });\n    }\n  }, {\n    key: \"renderProduct\",\n    value: function renderProduct() {\n      var products = _classPrivateFieldGet(this, _store).getProducts();\n\n      var $inventory = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__.$)({\n        selector: _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_INVENTORY_CONTAINER\n      });\n\n      if (!$inventory || !products.length) {\n        return;\n      }\n\n      $inventory.innerHTML = '';\n      products.forEach(function (_ref) {\n        var name = _ref.name,\n            price = _ref.price,\n            quantity = _ref.quantity;\n        var row = $inventory.insertRow(0);\n        var nameCell = row.insertCell(0);\n        var priceCell = row.insertCell(1);\n        var quantityCell = row.insertCell(2);\n        nameCell.textContent = name;\n        priceCell.textContent = price.toLocaleString();\n        quantityCell.textContent = quantity.toLocaleString();\n      });\n    }\n  }, {\n    key: \"getProduct\",\n    value: function getProduct() {\n      var name = this.$productNameInput.value;\n      var price = Number(this.$productPriceInput.value);\n      var quantity = Number(this.$productQuantityInput.value);\n\n      if (quantity && quantity < 1) {\n        return {\n          errorMessage: _utils_constants_errorMessage__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ADD_QUANTITY_INVALID\n        };\n      }\n\n      if (!name || !price || !quantity) {\n        return {\n          errorMessage: _utils_constants_errorMessage__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ADD_INPUT_INVALID\n        };\n      }\n\n      if (!_classPrivateFieldGet(this, _store).isPriceValid(price)) {\n        return {\n          errorMessage: _utils_constants_errorMessage__WEBPACK_IMPORTED_MODULE_3__.PRODUCT_ADD_PRICE_INVALID\n        };\n      }\n\n      return {\n        product: {\n          name: name,\n          price: price,\n          quantity: quantity\n        }\n      };\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var $template = this.createTemplate();\n      _routes_router__WEBPACK_IMPORTED_MODULE_1__.$Root.replaceChildren($template);\n      this.selectDomElement();\n      this.bindEvent();\n      this.renderProduct();\n    }\n  }, {\n    key: \"bindEvent\",\n    value: function bindEvent() {\n      this.onProductAddButtonClick();\n    }\n  }, {\n    key: \"createTemplate\",\n    value: function createTemplate() {\n      var $template = document.createRange().createContextualFragment(ProductPurchaseTemplate);\n      return $template;\n    }\n  }, {\n    key: \"selectDomElement\",\n    value: function selectDomElement() {\n      this.$addButton = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__.$)({\n        selector: _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_ADD_BUTTON,\n        target: this.$template\n      });\n      this.$productNameInput = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__.$)({\n        selector: _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_NAME_INPUT,\n        target: this.$template\n      });\n      this.$productPriceInput = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__.$)({\n        selector: _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_PRICE_INPUT,\n        target: this.$template\n      });\n      this.$productQuantityInput = (0,_utils_dom_selector__WEBPACK_IMPORTED_MODULE_4__.$)({\n        selector: _utils_constants_element__WEBPACK_IMPORTED_MODULE_2__.PRODUCT_QUANTITY_INPUT,\n        target: this.$template\n      });\n    }\n  }]);\n\n  return ProductManageView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/views/productManage/ProductManageView.ts?");

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
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;