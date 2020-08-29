import React, { Component, useEffect } from "react";
import ReactJson from "react-json-view";
import moment from "moment";
import { GetBins } from "../actions/bins";
import { BinLookup, NamedBin } from "../types/BinTypes";
import { BinIcon } from "./BinIcon";
import { CapitaliseFirst } from "../utils/string";
import { useInterval } from "../hooks/useInterval";
import { hoursToMilliseconds } from "../utils/number";

interface IBindicatorProps {}

interface IBinNotificationProps {
  namedBin: NamedBin;
  callToAction: boolean;
}

const BinNotification: React.SFC<IBinNotificationProps> = (props) => {
  const { bin, name } = props.namedBin;
  const textClass = props.callToAction ? "call-to-action" : "";

  return (
    <div className={"bin-notification"}>
      <BinIcon binKey={name as keyof BinLookup} />
      <div className={"bin-notification__text"}>
        <h1>
          <span className={textClass}>{CapitaliseFirst(name)}</span> is next due
          on{" "}
          <span className={textClass}>
            {moment(bin.next).format("dddd, MMMM Do YYYY")}
          </span>
          .
        </h1>
      </div>
    </div>
  );
};

export const Bindicator: React.FunctionComponent<IBindicatorProps> = (
  props
) => {
  const [binLookup, setBinLookup] = React.useState<BinLookup>();

  // Lookup bins on startup
  useEffect(() => {
    GetBins().then((result) => {
      setBinLookup(result);
    });
  }, []);

  // Then poll every X time
  useInterval(() => {
    GetBins().then((result) => {
      setBinLookup(result);
    });
  }, hoursToMilliseconds(1));

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

  const lastBin = orderedBins[orderedBins.length - 1];

  return (
    <React.Fragment>
      {orderedBins.map((b, index) => {
        return (
          <BinNotification
            key={index}
            namedBin={b}
            callToAction={b?.name !== lastBin?.name}
          />
        );
      })}
      <ReactJson src={binLookup} name={"spoopy-doopy-json"} theme={"colors"} />
    </React.Fragment>
  );
};
