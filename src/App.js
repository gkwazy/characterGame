import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import character from "./character.json";
import CharacterCard from "./components/CharacterCard";
import './App.css';



class App extends Component {
  state = {
    totalCorrect: 0,
    character
  };

  characterClicked = (id) => {
    const { totalCorrect, character } = this.state;
    let card = this.state.character.filter(character => character.key === id)[0];
    character[card].clicked = true;
    console.log("it worked " + card[0].name);
    this.setState({ totalCorrect: totalCorrect + 1, character })
  };

  render() {
    return (
      <Wrapper>
        <NavBar correct={this.state.totalCorrect} />
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
    );
  }
}

export default App;
