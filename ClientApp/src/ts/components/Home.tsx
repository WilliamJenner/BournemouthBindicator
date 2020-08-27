import React, { Component, useEffect } from "react";
import ReactJson from "react-json-view";
import { GetBins } from "../actions/bins";
import { BinLookup } from "../types/BinTypes";
import { Bindicator } from "./Bindicator";

interface IHomeProps {}

export const Home: React.FunctionComponent<IHomeProps> = (props) => {
  return (
    <section>
      <Bindicator />
    </section>
  );
};
