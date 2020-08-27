import React, { Component } from "react";
import ReactJson from 'react-json-view'
import { GetBins } from "../actions/bins";

interface IHomeProps {}

export const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [state, setState] = React.useState(() => {
    const initialState = GetBins();
    return initialState;
  });
  

  return <div>
    <ReactJson src={state} />
  </div>;
};
