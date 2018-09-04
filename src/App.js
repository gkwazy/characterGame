import React, { Component } from 'react';
import logo from './logo.svg';
import Wrapper from "./components/Wrapper";
import NavBar from "./components/NavBar";
import './App.css';


class App extends Component {
  render() {
    return (
      <Wrapper>
        <NavBar />
      </Wrapper>
    );
  }
}

export default App;
