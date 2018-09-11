import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import character from "./character.json";
import CharacterCard from "./components/CharacterCard";
import './App.css';
import Directions from "./components/Directions";
import Footer from "./components/Footer";


class App extends Component {
  state = {
    totalCorrect: 0,
    character
  };
  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  gameOver() {
    let { totalCorrect } = this.state;
    alert("Sorry Mate, you done clicked the same fighter twice. please try again");
    for (let i = 0; i < character.length; i++) {
      character[i].clicked = false;
    }
    totalCorrect = 0;
    this.setState({ totalCorrect: 0, });
  };

  characterClicked = (idWanted) => {
    const { totalCorrect, character } = this.state;
    let card = this.state.character;

    for (let i = 0; i < card.length; i++) {
      if (idWanted === card[i].id) {
        if (card[i].clicked === true) {
          this.gameOver();
        } else {
          card[i].clicked = true;
          this.setState({ totalCorrect: totalCorrect + 1, character })
        }
      }
    };
    this.shuffle(character);

  };

  render() {
    return (
      <div>
        <NavBar correct={this.state.totalCorrect} />
        <Directions />
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
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
