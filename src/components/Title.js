import React from "react";
import { Segment, Header } from "semantic-ui-react";
const Title = props => (
  <Segment>
    <Header className="title">{props.children}</Header>
  </Segment>
);

export default Title;
