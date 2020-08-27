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
} from "reactstrap";
import { BinLookup } from "../types/BinTypes";

interface IBindicatorProps {}

const BinCard = (): JSX.Element => {
  return (
    <Card>
      <CardImg>
        <Icon.Trash></Icon.Trash>
      </CardImg>
      <CardBody>
        <CardTitle>Card title</CardTitle>
        <CardSubtitle>Card subtitle</CardSubtitle>
        <CardText>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </CardText>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
};

export const Bindicator: React.FunctionComponent<IBindicatorProps> = (
  props
) => {
  const [binLookup, setBinLookup] = React.useState<BinLookup>();

  useEffect(() => {
    async function lookup() {
      const result = await GetBins();
      console.log({ result });
      setBinLookup(result);
    }
    lookup();
  }, []);

  return (
    <div>
      <BinCard />
      <ReactJson src={{ binLookup }} />
    </div>
  );
};
