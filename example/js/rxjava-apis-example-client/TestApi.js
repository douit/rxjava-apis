"use strict";

Object.defineProperty(exports, "__esModule", {
value: true
});
exports.default = exports.AdminTestApi = void 0;

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.reflect.get");

require("core-js/modules/es6.object.set-prototype-of");

var _rxjavaApiCore = require("rxjava-api-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var _TestForm = _interopRequireDefault(require('./form/TestForm'))


var TestApi =
/*#__PURE__*/
function (_AbstractApi) {
_inherits(TestApi, _AbstractApi);

function TestApi() {
_classCallCheck(this, TestApi);

return _possibleConstructorReturn(this, _getPrototypeOf(TestApi).apply(this, arguments));
}

    
    _createClass(TestApi, [{
    key: "testPath",

    /**
     *
     *
     * <div class='http-info'>http 说明<ul>
     * <li><b>Uri:</b>dashboard/testPath/{id}</li>
     * <li><b>PathVariable:</b> string id</li>
     * <li><b>Form:</b>TestFormtestPath</li>
     * <li><b>Model:</b> number</li>
     * <li>需要登录</li>
     * </ul>
     * </div>
     * @see TestForm
     */
    value: function testPath(id, form) {
        var _path = {};
        _path["id"] = id;

        return _get(_getPrototypeOf(TestApi.prototype), "_request", this).call(this, "example", "GET", "client/testPath/{id}", _path, form);
    }
    }]);
    

return TestApi;
}(_rxjavaApiCore.AbstractApi);

exports.TestApi = TestApi;
var testApi = { TestApi };
var _default = testApi;
exports.default = _default;