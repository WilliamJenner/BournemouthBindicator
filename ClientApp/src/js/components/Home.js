import React from "react";
import ReactJson from 'react-json-view';
import { GetBins } from "../actions/bins";
export var Home = function (props) {
    var _a = React.useState(function () {
        var initialState = GetBins();
        return initialState;
    }), state = _a[0], setState = _a[1];
    return React.createElement("div", null,
        React.createElement(ReactJson, { src: state }));
};
