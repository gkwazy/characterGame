import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import character from "./character.json";
import CharacterCard from "./components/CharacterCard";
import './App.css';
import { Container, Row, Col } from "./components/Grid";
let rowNum = 0;
let colNum = 0;

class App extends Component {
  state = {
    totalCorrect: 0,
    character
  };

  characterClicked = (idWanted) => {
    const { totalCorrect, character } = this.state;
    let card = this.state.character;
    for (let i = 0; i < card.length; i++) {
      console.log("card id: " + idWanted + " and " + "card: " + card)
      if (idWanted === card[i].id) {
        card[i].clicked = true;
        console.log("te clicked was changed " + card[i].clicked)
      }
    };
    this.setState({ totalCorrect: totalCorrect + 1, character })
  };

  render() {
    return (
      <Container>
        <NavBar correct={this.state.totalCorrect} />
        <Wrapper>
          {this.state.character.map(character => (
            <CharacterCard
              characterClicked={this.characterClicked}
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
              clicked={character.clicked}
            />

          ))}
        </Wrapper>
      </Container>
    );
  }
}

export default App;
