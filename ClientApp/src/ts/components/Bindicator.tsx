import React, { Component, useEffect } from "react";
import ReactJson from "react-json-view";
import { GetBins } from "../actions/bins";
import * as Icon from "react-bootstrap-icons";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Alert,
} from "reactstrap";
import { BinLookup, Bin } from "../types/BinTypes";

interface IBindicatorProps {}

const BinNotification: React.SFC<{
  bin: Bin | undefined;
  binName: string;
}> = ({ bin, binName }) => {
  console.log({ bin });

  if (bin === undefined) {
    return null;
  }

  return (
    <Alert color="info">
      <Icon.Trash />
      {binName} is next due on {bin.Next.toString()}
    </Alert>
  );
};

export const Bindicator: React.FunctionComponent<IBindicatorProps> = (
  props
) => {
  const [binLookup, setBinLookup] = React.useState<BinLookup>();

  useEffect(() => {
    const lookup = async () => {
      const result = await GetBins();
      console.log({ result });
      setBinLookup(result);
    };
    lookup();
  }, []);

  console.log({ binLookup });

  return (
    <div>
      <BinNotification bin={binLookup?.recycling} binName={"Recycling"} />
      <BinNotification bin={binLookup?.rubbish} binName={"Rubbish"} />
      <BinNotification bin={binLookup?.foodWaste} binName={"Food Waste"} />
    </div>
  );
};
