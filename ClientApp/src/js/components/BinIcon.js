var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from "react";
import * as Icon from "react-bootstrap-icons";
var InnerIcon = function (_a) {
    var binKey = _a.binKey;
    switch (binKey) {
        case "foodWaste":
            return React.createElement(Icon.EggFried, null);
        case "recycling":
            return React.createElement(Icon.Trash2, null);
        case "rubbish":
        default:
            return React.createElement(Icon.Trash, null);
    }
};
export var BinIcon = function (props) {
    // Wrapping a component with exact same props in the div so we can have a container
    // And abstract away css class details
    return (React.createElement("div", { className: "bin-icon" },
        React.createElement(InnerIcon, __assign({}, props))));
};
