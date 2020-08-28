import React, { Component, useEffect } from "react";
import ReactJson from "react-json-view";
import moment from "moment";
import { GetBins } from "../actions/bins";
import { Alert } from "reactstrap";
import { BinLookup, NamedBin } from "../types/BinTypes";
import { BinIcon } from "./BinIcon";
import { CapitaliseFirst } from "../utils/string";

interface IBindicatorProps {}

interface IBinNotificationProps {
  namedBin: NamedBin;
}

const BinNotification: React.SFC<IBinNotificationProps> = (props) => {
  const { bin, name } = props.namedBin;

  return (
    <Alert color="secondary" className={"bin-notification"}>
      <BinIcon binKey={name as keyof BinLookup} />
      <div className={"bin-notification__text"}>
        <h1>
          <span className={"call-to-action"}>{CapitaliseFirst(name)}</span> is
          next due on{" "}
          <span className={"call-to-action"}>
            {moment(bin.next).format("dddd, MMMM Do YYYY")}
          </span>
          .
        </h1>
      </div>
    </Alert>
  );
};

export const Bindicator: React.FunctionComponent<IBindicatorProps> = (
  props
) => {
  const [binLookup, setBinLookup] = React.useState<BinLookup>();

  useEffect(() => {
    GetBins().then((result) => {
      setBinLookup(result);
    });
  }, []);

  if (binLookup === undefined) {
    return null;
  }

  const orderedBins: NamedBin[] = Object.keys(binLookup)
    .map((key) => {
      return {
        bin: binLookup[key as keyof BinLookup],
        name: key,
      };
    })
    .sort((a: NamedBin, b: NamedBin): number => {
      if (a.bin.next < b.bin.next) {
        return -1;
      } else if (a.bin.next === b.bin.next) {
        return 0;
      } else a.bin.next > b.bin.next;
      {
        return 1;
      }
    });

  return (
    <React.Fragment>
      {orderedBins.map((b, index) => {
        return <BinNotification key={index} namedBin={b} />;
      })}
      <ReactJson src={binLookup} />
    </React.Fragment>
  );
};
