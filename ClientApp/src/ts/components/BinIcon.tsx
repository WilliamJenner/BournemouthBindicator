import * as React from "react";
import * as Icon from "react-bootstrap-icons";
import { BinLookup } from "../types/BinTypes";

const InnerIcon: React.FunctionComponent<{ binKey: keyof BinLookup }> = ({
  binKey,
}) => {
  switch (binKey) {
    case "foodWaste":
      return <Icon.EggFried />;
    case "recycling":
      return <Icon.Trash2 />;
    case "rubbish":
    default:
      return <Icon.Trash />;
  }
};

export const BinIcon: React.FunctionComponent<{ binKey: keyof BinLookup }> = (
  props
) => {
  // Wrapping a component with exact same props in the div so we can have a container
  // And abstract away css class details
  return (
    <div className={"bin-icon"}>
      <InnerIcon {...props} />
    </div>
  );
};
