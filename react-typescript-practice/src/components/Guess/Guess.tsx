import React, { Component } from "react";

import { heroes } from "../../api/api";

import CompoundInputField from "../CompoundInputField/CompoundInputField";
import { thisExpression } from "@babel/types";

interface State {
  [key: string]: any;
}

class Guess extends Component<{}, State> {
  state = {
    character: "",
    heroes: heroes
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.findCharacter();
    console.log("submitting...");
  };

  findCharacter = () => {
    const { character, heroes } = this.state;
    // Check to see if the character is found in the heroes array if it is add a found property and set it to true.
    let newHeroes = heroes.map(hero => {
      // The regular expression will remove any characters that are not alphanumberic
      return hero.localized_name.replace(/[^A-Z0-9]+/gi, "").toLowerCase() ===
        character.replace(/[^A-Z0-9]+/gi, "").toLowerCase()
        ? { ...hero, found: true }
        : hero;
    });

    this.setState(() => ({
      character: "",
      heroes: newHeroes
    }));

    console.log("new characters", newHeroes);
  };

  charactersFound = () => {
    const { heroes } = this.state;
    // should count all of the objects who have a found value of true
    let heroCount = heroes.filter(hero => hero.found && hero);

    console.log(heroCount.length);
  };
  render() {
    const { character } = this.state;
    return (
      <section className="col-md-6 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <CompoundInputField
            labelName="Character Name"
            inputName="character"
            inputType="text"
            inputValue={character}
            placeholderName="Meepo..."
            handleChange={this.handleChange}
            inputDescription="Enter as many heroes as you can guess."
          />
          <button type="submit" onClick={this.handleSubmit}>
            Guess
          </button>
        </form>
        <button onClick={this.charactersFound}>Heroes found count</button>
      </section>
    );
  }
}

export default Guess;
