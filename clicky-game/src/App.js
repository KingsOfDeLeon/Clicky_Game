import React from 'react';
import './App.css';
import characters from "./characters.json";
import Sort from "./Sort.js";
import Wrapper from "./components.wrapper.js"
import Nav from './components/nav';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    // take characters array from character.json and shuffle elements around
    characters = Sort.shuffle(characters)
  };

render() {
  return (
    <Wrapper>
      <Nav/>
      
    </Wrapper>
  );
}

}

export default App;
