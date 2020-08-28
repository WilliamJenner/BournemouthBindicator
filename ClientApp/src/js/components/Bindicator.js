import React, { useEffect } from "react";
import ReactJson from "react-json-view";
import moment from "moment";
import { GetBins } from "../actions/bins";
import { Alert, } from "reactstrap";
import { BinIcon } from "./BinIcon";
import { CapitaliseFirst } from "../utils/string";
var BinNotification = function (props) {
    var _a = props.namedBin, bin = _a.bin, name = _a.name;
    return (React.createElement(Alert, { color: "secondary", className: "bin-notification" },
        React.createElement(BinIcon, { binKey: name }),
        React.createElement("div", { className: "bin-notification__text" },
            React.createElement("h1", null,
                React.createElement("span", { className: "call-to-action" }, CapitaliseFirst(name)),
                " is next due on",
                " ",
                React.createElement("span", { className: "call-to-action" }, moment(bin.next).format("dddd, MMMM Do YYYY")),
                "."))));
};
export var Bindicator = function (props) {
    var _a = React.useState(), binLookup = _a[0], setBinLookup = _a[1];
    // useEffect(() => {
    //   const lookup = async () => {
    //     const result = await GetBins();
    //     setBinLookup(result);
    //   };
    //   lookup();
    // }, []);
    useEffect(function () {
        GetBins().then(function (result) {
            setBinLookup(result);
        });
    }, []);
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
    return (React.createElement(React.Fragment, null,
        orderedBins.map(function (b, index) {
            return React.createElement(BinNotification, { key: index, namedBin: b });
        }),
        React.createElement(ReactJson, { src: orderedBins })));
};
