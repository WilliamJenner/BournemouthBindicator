import * as React from "react";
import * as Icon from "react-bootstrap-icons";
const InnerIcon = ({ binKey, }) => {
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
export const BinIcon = (props) => {
    // Wrapping a component with exact same props in the div so we can have a container
    // And abstract away css class details
    return (React.createElement("div", { className: "bin-icon" },
        React.createElement(InnerIcon, Object.assign({}, props))));
};
