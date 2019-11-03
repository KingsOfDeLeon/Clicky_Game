import React from 'react';
import './App.css';
import characters from "./characters.json";
import Sort from "./Sort.js"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    // take characters array from character.json and shuffle elements around
    characters = Sort.shuffle(characters)
  };

render() {
  return (
    <div></div>
  );
}

}

export default App;
