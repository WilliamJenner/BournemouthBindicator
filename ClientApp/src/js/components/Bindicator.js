import React, { useEffect } from "react";
import ReactJson from "react-json-view";
import moment from "moment";
import { GetBins } from "../actions/bins";
import { BinIcon } from "./BinIcon";
import { GetDisplayName } from "../utils/string";
import { useInterval } from "../hooks/useInterval";
import { hoursToMilliseconds } from "../utils/number";
const BinNotification = (props) => {
    const { bin, name } = props.namedBin;
    const textClass = props.callToAction ? "call-to-action" : "";
    return (React.createElement("div", { className: "bin-notification" },
        React.createElement(BinIcon, { binKey: name }),
        React.createElement("div", { className: "bin-notification__text" },
            React.createElement("h1", null,
                React.createElement("span", { className: textClass }, GetDisplayName(name)),
                " is next due on",
                " ",
                React.createElement("span", { className: textClass }, moment(bin.next).format("dddd, MMMM Do YYYY")),
                "."))));
};
export const Bindicator = (props) => {
    const [binLookup, setBinLookup] = React.useState();
    const getAndSetLookup = () => {
        GetBins().then((result) => {
            setBinLookup(result);
        });
    };
    // Lookup bins on startup
    useEffect(() => {
        getAndSetLookup();
    }, []);
    // Then poll every X time
    useInterval(() => {
        getAndSetLookup();
    }, hoursToMilliseconds(1));
    if (binLookup === undefined) {
        return null;
    }
    const orderedBins = Object.keys(binLookup)
        .map((key) => {
        return {
            bin: binLookup[key],
            name: key,
        };
    })
        .sort((a, b) => {
        if (a.bin.next < b.bin.next) {
            return -1;
        }
        else if (a.bin.next === b.bin.next) {
            return 0;
        }
        else if (a.bin.next > b.bin.next) {
            return 1;
        }
        else
            return 1;
    });
    const lastBin = orderedBins[orderedBins.length - 1];
    return (React.createElement(React.Fragment, null,
        orderedBins.map((b, index) => {
            return (React.createElement(BinNotification, { key: index, namedBin: b, callToAction: (b === null || b === void 0 ? void 0 : b.name) !== (lastBin === null || lastBin === void 0 ? void 0 : lastBin.name) }));
        }),
        React.createElement(ReactJson, { src: binLookup, name: "spoopy-doopy-json", theme: "colors" })));
};
