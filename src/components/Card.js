import React from "react";
import { Card, Image } from "semantic-ui-react";

const CharacterCard = props => (
  <Card onClick={() => props.handleClick(props.id)}>
    <Image alt={props.name} src={props.image} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{props.name}</Card.Header>
      <Card.Meta>
        <span className="date" />
      </Card.Meta>
      <Card.Description />
    </Card.Content>
    <Card.Content extra />
  </Card>
);

export default CharacterCard;
