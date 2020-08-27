"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var react_1 = __importStar(require("react"));
var Counter = /** @class */ (function (_super) {
    __extends(Counter, _super);
    function Counter(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { currentCount: 0 };
        _this.incrementCounter = _this.incrementCounter.bind(_this);
        return _this;
    }
    Counter.prototype.incrementCounter = function () {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    };
    Counter.prototype.render = function () {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, "Counter"),
            react_1.default.createElement("p", null, "This is a simple example of a React component."),
            react_1.default.createElement("p", { "aria-live": "polite" },
                "Current count: ",
                react_1.default.createElement("strong", null, this.state.currentCount)),
            react_1.default.createElement("button", { className: "btn btn-primary", onClick: this.incrementCounter }, "Increment")));
    };
    Counter.displayName = Counter.name;
    return Counter;
}(react_1.Component));
exports.Counter = Counter;
