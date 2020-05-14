/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Products = __webpack_require__(13);

var _Products2 = _interopRequireDefault(_Products);

var _ProductDetails = __webpack_require__(15);

var _ProductDetails2 = _interopRequireDefault(_ProductDetails);

var _NotFound = __webpack_require__(22);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
    loadData: _Products.loadData,
    path: '/',
    component: _Products2.default,
    exact: true
}, {
    path: '/product',
    component: _ProductDetails2.default,
    exact: true
}, {
    component: _NotFound.NotFound
}];

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fetchProducts = exports.FETCH_PRODUCTS = undefined;

var _axios = __webpack_require__(14);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var FETCH_PRODUCTS = exports.FETCH_PRODUCTS = 'fetch_products';

var fetchProducts = exports.fetchProducts = function fetchProducts() {
    return function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(dispatch) {
            var products, promises, res, totalResults, resultsWithImages;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            products = [], promises = [];
                            _context.next = 3;
                            return _axios2.default.get('https://dev-api.danielwellington.com/frontend/products/');

                        case 3:
                            res = _context.sent;

                            if (!(res.data && res.data.data)) {
                                _context.next = 14;
                                break;
                            }

                            res.data.data.forEach(function (product) {
                                promises.push(_axios2.default.get('https://dev-api.danielwellington.com/frontend/products/' + product.id));
                            });

                            _context.next = 8;
                            return _axios2.default.all(promises);

                        case 8:
                            totalResults = _context.sent;

                            if (totalResults) {
                                promises = [];
                                totalResults.forEach(function (response) {
                                    if (response.data && response.data.data && response.data.data.elements) {
                                        var assetElement = response.data.data.elements.find(function (x) {
                                            return x.type == "href";
                                        });
                                        if (assetElement && assetElement.value) {
                                            var assetId = assetElement.value.id;
                                            var productInfo = response.data.data;
                                            productInfo.assetId = assetId;
                                            products.push(productInfo);
                                            promises.push(_axios2.default.get('https://dev-api.danielwellington.com/frontend/assets/' + assetId));
                                        }
                                    }
                                });
                            }

                            _context.next = 12;
                            return _axios2.default.all(promises);

                        case 12:
                            resultsWithImages = _context.sent;

                            if (resultsWithImages) {
                                resultsWithImages.forEach(function (res, i) {
                                    if (res.data && res.data.data) {
                                        products[i].image = res.data.data.uri;
                                    }
                                });
                                dispatch({
                                    type: FETCH_PRODUCTS,
                                    payload: products
                                });
                            }

                        case 14:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, undefined);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }();
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    header: {
        backgroundColor: 'rgba(0, 14, 34, 0.9)',
        height: '8vh',
        fontSize: 15,
        color: 'white',
        textTransform: 'uppercase',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    listItems: {
        verticalAlign: 'middle',
        alignSelf: 'center',
        marginLeft: 20
    },
    listItemsLogo: {
        maxWidth: '10%',
        fontSize: 25,
        verticalAlign: 'middle',
        textAlign: 'center'
    },
    middle: {
        display: 'flex',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginLeft: '10%',
        width: '60%'
    },
    cartIcon: {
        alignSelf: 'center',
        verticalAlign: 'middle',
        marginLeft: '20%'
    }
};

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'header',
                { style: styles.header },
                _react2.default.createElement(
                    'div',
                    { style: styles.listItemsLogo },
                    'DW'
                ),
                _react2.default.createElement(
                    'div',
                    { style: styles.middle },
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'NEWS'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'All watches'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'Accessories'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'Watch Straps'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'Gift Cards'
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.listItems },
                        'Store Locations'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { style: styles.cartIcon },
                    'cart'
                )
            );
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(9);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(11);

var _renderer2 = _interopRequireDefault(_renderer);

var _createStore = __webpack_require__(17);

var _createStore2 = _interopRequireDefault(_createStore);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterConfig = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    var store = (0, _createStore2.default)();
    var promises = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path).map(function (_ref) {
        var route = _ref.route;

        return route.loadData ? route.loadData(store) : null;
    });
    Promise.all(promises).then(function () {
        res.send((0, _renderer2.default)(req, store));
    });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(12);

var _reactRouterDom = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

var _reactRouterConfig = __webpack_require__(6);

var _reactRedux = __webpack_require__(3);

var _serializeJavascript = __webpack_require__(16);

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reactHelmet = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Rather than hardcoding, we make use of renderer to return the html
exports.default = function (req, store) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            _reactRouterDom.StaticRouter,
            { location: req.path, context: {} },
            _react2.default.createElement(
                'div',
                null,
                (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
            )
        )
    ));
    var helmet = _reactHelmet.Helmet.renderStatic();
    return '<html><head>' + helmet.title.toString() + helmet.meta.toString() + '\n    <style>html,body{padding:0;margin:0;font-family:DWFutura,sans-serif;}.listItems:hover{ box-shadow: 0 0 17px rgba(33,33,33,.2)}</style></head><body><script>window.INITIAL_STATE = ' + (0, _serializeJavascript2.default)(store.getState()) + '</script><div id="root">' + content + '</div><script src="bundle.js"></script></body></html>';
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadData = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(3);

var _actions = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _reactHelmet = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    box: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    productsBox: {
        marginTop: '1.6rem',
        marginBottom: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '0px 0.7rem',
        listStyle: 'none'
    },
    listItems: {
        width: '20%',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '2rem',
        textAlign: 'center',
        transition: 'box-shadow .2s'
    },
    productImage: {
        width: '100%'
    }
};

var ProductsList = function (_Component) {
    _inherits(ProductsList, _Component);

    function ProductsList() {
        _classCallCheck(this, ProductsList);

        return _possibleConstructorReturn(this, (ProductsList.__proto__ || Object.getPrototypeOf(ProductsList)).apply(this, arguments));
    }

    _createClass(ProductsList, [{
        key: 'componenDidMount',
        value: function componenDidMount() {
            this.props.fetchProducts();
        }
    }, {
        key: 'renderProducts',
        value: function renderProducts() {
            if (this.props.products && this.props.products.products) {
                return this.props.products.products.map(function (product, i) {
                    var name = product.key;
                    var image = product.image;

                    var price = product.elements.find(function (x) {
                        return x.type == 'quantityValue';
                    });
                    price = price && price.value ? price.value.value : '';

                    var description = product.elements.find(function (x) {
                        return x.type == 'textarea';
                    });
                    description = description ? description.value : '';

                    var color = product.elements.find(function (x) {
                        return x.name == 'color';
                    });
                    color = color ? color.value : '';

                    var size = product.elements.find(function (x) {
                        return x.name == 'size';
                    });
                    size = size ? size.value : '';

                    var productDet = { name: name, price: price, description: description, color: color, size: size, image: image };

                    return _react2.default.createElement(
                        'li',
                        { key: i, className: 'listItems', style: styles.listItems },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: { pathname: '/product', productDetails: productDet }, style: { textDecoration: 'none', color: 'black' } },
                            _react2.default.createElement('img', { src: product.image, style: styles.productImage }),
                            _react2.default.createElement(
                                'div',
                                { style: { margin: 20 } },
                                name
                            ),
                            _react2.default.createElement(
                                'div',
                                { style: { margin: 20 } },
                                '$ ',
                                price
                            )
                        )
                    );
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement(
                        'title',
                        null,
                        'Daniel Wellington'
                    ),
                    _react2.default.createElement('meta', { property: 'og:title', content: 'Daniel Wellington' })
                ),
                _react2.default.createElement(_Header2.default, null),
                _react2.default.createElement(
                    'div',
                    { style: styles.box },
                    this.props.products.products ? this.props.products.products.length : 0,
                    ' Products'
                ),
                _react2.default.createElement(
                    'ul',
                    { style: styles.productsBox },
                    this.renderProducts()
                )
            );
        }
    }]);

    return ProductsList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
    return {
        products: state.products
    };
};

function loadData(store) {
    return store.dispatch((0, _actions.fetchProducts)());
}

exports.loadData = loadData;
exports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchProducts: _actions.fetchProducts })(ProductsList);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

var _reactRouterDom = __webpack_require__(1);

var _reactHelmet = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
    productDetails: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 40,
        flexDirection: 'row'
    },
    productImageContainer: {
        width: '30%'
    },
    productImage: {
        width: '100%'
    },
    productDetailsContainer: {
        width: '60%',
        fontSize: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    productTitle: {
        fontSize: 30
    },
    productDescription: {
        marginTop: 20
    },
    button: {
        marginTop: 20,
        padding: 10,
        alignSelf: 'center',
        backgroundColor: '#bdc3c7',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
};

var ProductDetails = function (_Component) {
    _inherits(ProductDetails, _Component);

    function ProductDetails(props) {
        _classCallCheck(this, ProductDetails);

        return _possibleConstructorReturn(this, (ProductDetails.__proto__ || Object.getPrototypeOf(ProductDetails)).call(this, props));
    }

    _createClass(ProductDetails, [{
        key: 'renderTags',
        value: function renderTags() {
            return _react2.default.createElement(
                _reactHelmet.Helmet,
                null,
                _react2.default.createElement(
                    'title',
                    null,
                    '' + this.props.location.productDetails.name
                ),
                _react2.default.createElement('meta', { property: 'og:title', content: '`${this.props.location.productDetails.name}`' }),
                _react2.default.createElement('meta', { property: 'og:description', content: '`${this.props.location.productDetails.description}`' })
            );
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Header2.default, null),
                this.props.location.productDetails ? _react2.default.createElement(
                    'div',
                    { style: styles.productDetails },
                    _react2.default.createElement(
                        'div',
                        { style: styles.productImageContainer },
                        this.renderTags(),
                        _react2.default.createElement('img', { style: styles.productImage, src: this.props.location.productDetails.image })
                    ),
                    _react2.default.createElement(
                        'div',
                        { style: styles.productDetailsContainer },
                        _react2.default.createElement(
                            'div',
                            { style: styles.productTitle },
                            this.props.location.productDetails.name
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.productTitle },
                            '$ ',
                            this.props.location.productDetails.price
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.productDescription },
                            this.props.location.productDetails.description
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.productDescription },
                            _react2.default.createElement(
                                'b',
                                { style: { fontSize: 15, paddingRight: 20 } },
                                'Color: '
                            ),
                            this.props.location.productDetails.color
                        ),
                        _react2.default.createElement(
                            'div',
                            { style: styles.productDescription },
                            _react2.default.createElement(
                                'b',
                                { style: { fontSize: 15, paddingRight: 20 } },
                                'Size: '
                            ),
                            this.props.location.productDetails.size
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/', style: { textDecoration: 'none' } },
                            _react2.default.createElement(
                                'button',
                                { style: styles.button },
                                'Back'
                            )
                        )
                    )
                ) : _react2.default.createElement(
                    'div',
                    { style: { display: 'flex', alignItems: 'center', justifyContent: 'center' } },
                    _react2.default.createElement(
                        'h1',
                        { style: { textAlign: 'center' } },
                        'No Product Selected'
                    ),
                    _react2.default.createElement('br', null),
                    _react2.default.createElement(
                        'button',
                        { onClick: function onClick(e) {
                                return window.location.href = "/";
                            }, style: styles.button },
                        'Back'
                    )
                )
            );
        }
    }]);

    return ProductDetails;
}(_react.Component);

exports.default = ProductDetails;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("serialize-javascript");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(19);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var store = (0, _redux.createStore)(_reducers2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));
    return store;
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(7);

var _products = __webpack_require__(20);

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
	products: _products2.default
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actions = __webpack_require__(4);

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    var updatedState = Object.assign({}, state);
    switch (action.type) {
        case _actions.FETCH_PRODUCTS:
            updatedState.products = action.payload;
            break;
    }
    return updatedState;
};

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotFound = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(5);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reload = function reload() {
    window.location.href = "/";
};
var NotFound = exports.NotFound = function NotFound() {
    return _react2.default.createElement(
        'div',
        { style: { textAlign: 'center' } },
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
            'h1',
            null,
            'Opps route not found!'
        ),
        _react2.default.createElement(
            'button',
            { onClick: function onClick(e) {
                    return reload();
                } },
            'Home'
        )
    );
};

/***/ })
/******/ ]);