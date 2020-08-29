import React, { useEffect } from "react";
import ReactJson from "react-json-view";
import moment from "moment";
import { GetBins } from "../actions/bins";
import { BinIcon } from "./BinIcon";
import { CapitaliseFirst } from "../utils/string";
import { useInterval } from "../hooks/useInterval";
import { hoursToMilliseconds } from "../utils/number";
var BinNotification = function (props) {
    var _a = props.namedBin, bin = _a.bin, name = _a.name;
    var textClass = props.callToAction ? "call-to-action" : "";
    return (React.createElement("div", { className: "bin-notification" },
        React.createElement(BinIcon, { binKey: name }),
        React.createElement("div", { className: "bin-notification__text" },
            React.createElement("h1", null,
                React.createElement("span", { className: textClass }, CapitaliseFirst(name)),
                " is next due on",
                " ",
                React.createElement("span", { className: textClass }, moment(bin.next).format("dddd, MMMM Do YYYY")),
                "."))));
};
export var Bindicator = function (props) {
    var _a = React.useState(), binLookup = _a[0], setBinLookup = _a[1];
    // Lookup bins on startup
    useEffect(function () {
        GetBins().then(function (result) {
            setBinLookup(result);
        });
    }, []);
    // Then poll every X time
    useInterval(function () {
        GetBins().then(function (result) {
            setBinLookup(result);
        });
    }, hoursToMilliseconds(1));
    if (binLookup === undefined) {
        return null;
    }
    var orderedBins = Object.keys(binLookup)
        .map(function (key) {
        return {
            bin: binLookup[key],
            name: key,
        };
    })
        .sort(function (a, b) {
        if (a.bin.next < b.bin.next) {
            return -1;
        }
        else if (a.bin.next === b.bin.next) {
            return 0;
        }
        else
            a.bin.next > b.bin.next;
        {
            return 1;
        }
    });
    var lastBin = orderedBins[orderedBins.length - 1];
    return (React.createElement(React.Fragment, null,
        orderedBins.map(function (b, index) {
            return (React.createElement(BinNotification, { key: index, namedBin: b, callToAction: (b === null || b === void 0 ? void 0 : b.name) !== (lastBin === null || lastBin === void 0 ? void 0 : lastBin.name) }));
        }),
        React.createElement(ReactJson, { src: binLookup, name: "spoopy-doopy-json", theme: "colors" })));
};
