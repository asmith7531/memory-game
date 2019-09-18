import React, { Component } from "react";
import Card from "./components/Card";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Container from "./Container";
import Column from "./Column";
import characters from "./characters.json";
import "./App.css";
import "semantic-ui-css/semantic.min.css";
//shuffles the array of character cards so we can ge a new random order (Fischer-Yates)
function shuffleCharacterCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 0,
    rightWrong: "",
    clicked: []
  };
  //searches the clicked array for the id of our character
  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
    console.log(this.state.clicked);
  };
  //handles the score, will only be called when the clicked array does not contain the id of the clicked character
  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      rightWrong: "You are safe... for now"
    });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore });
    } else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };
  //prints Wrong! and resets the game, current score, and high score if applicable
  handleReset = () => {
    this.setState({
      currentScore: 0,
      topScore: this.state.topScore,
      rightWrong: "Wrong!",
      clicked: []
    });
    this.handleShuffle();
  };
  handleShuffle = () => {
    let shuffledCharacters = shuffleCharacterCards(characters);
    this.setState({ characters: shuffledCharacters });
  };
  render() {
    return (
      <Wrapper>
        <Nav
          title="Game of Thrones Clicky Game"
          score={this.state.currentScore}
          topScore={this.state.topScore}
          rightWrong={this.state.rightWrong}
        />
        <Title>
          This is a memory game. Try to click on each character once. Remember,
          when you play the game of thrones, you either win or you die.
        </Title>
        <Container>
          {this.state.characters.map(character => (
            <Column size="md-3 sm-6">
              <Card
                key={character.id}
                handleClick={this.handleClick}
                id={character.id}
                image={character.image}
              />
            </Column>
          ))}
        </Container>
      </Wrapper>
    );
  }
}
export default App;
