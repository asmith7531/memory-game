import React from "react";
import { Header, Segment, Grid } from "semantic-ui-react";
const Nav = props => (
  <>
    <Segment className="brand animated lightSpeedIn">
      <Header size="huge" textAlign="center" href="/clicky-game/">
        {props.title}
      </Header>
    </Segment>

    <Grid>
      <Segment textAlign="center">
        <Segment id="rw">{props.rightWrong}</Segment>

        <Segment id="cur-sco">Current Score: {props.score}</Segment>

        <Segment id="top-sco">Top Score: {props.topScore}</Segment>
      </Segment>
    </Grid>
  </>
);

export default Nav;
