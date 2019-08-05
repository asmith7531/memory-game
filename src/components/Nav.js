import React from "react";
import img from "../components/game-of-thrones-iron-throne.jpg";
import { Header, Segment, Container, Grid } from "semantic-ui-react";
const Nav = props => (
  <>
    <Container
      textAlign="center"
      style={{
        minWidth: "100vw",
        minHeight: "30pc",
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        fontWeight: "normal",
        marginBottom: 0
      }}
      className="brand  lightSpeedIn"
    >
      <Header
        size="huge"
        inverted
        content={props.title}
        textAlign="center"
        href="/clicky-game/"
        textAlign="center"
        className="animated"
      />
    </Container>

    <Grid textAlign="center">
      <Segment textAlign="center">
        <Segment id="rw">{props.rightWrong}</Segment>

        <Segment id="cur-sco">Current Score: {props.score}</Segment>

        <Segment id="top-sco">Top Score: {props.topScore}</Segment>
      </Segment>
    </Grid>
  </>
);

export default Nav;
