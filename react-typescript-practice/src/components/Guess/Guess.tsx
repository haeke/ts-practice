import React, { Component } from "react";

import { heroes } from "../../api/api";

import CompoundInputField from "../CompoundInputField/CompoundInputField";

interface Hero {
  localized_name?: string;
  url_full_portrait?: string;
  name?: string;
  url_small_portrait?: string;
  url_large_portrait?: string;
  url_vertical_portrait?: string;
  id?: number;
}

interface State {
  [key: string]: any;
  currentHero: Hero;
}

class Guess extends Component<{}, State> {
  state = {
    character: "",
    heroes: heroes,
    currentHero: {
      localized_name: "",
      name: "",
      url_full_portrait: "",
      url_large_portrait: "",
      url_small_portrait: "",
      url_vertical_portrait: "",
      id: 0
    },
    correct: 0
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    this.findCharacter();
  };

  findCharacter = () => {
    const { character, heroes } = this.state;
    // Check to see if the character is found in the heroes array if it is add a found property and set it to true.
    let newHeroes = heroes.map(hero => {
      // The regular expression will remove any characters that are not alphanumberic
      if (
        hero.localized_name.replace(/[^A-Z0-9]+/gi, "").toLowerCase() ===
        character.replace(/[^A-Z0-9]+/gi, "").toLowerCase()
      ) {
        this.setState({
          currentHero: hero
        });
        return { ...hero, found: true };
      } else {
        return hero;
      }
    });

    this.setState(
      () => ({
        character: "",
        heroes: newHeroes
      }),
      () => {
        this.charactersFound();
      }
    );

    console.log("new characters", newHeroes);
  };

  charactersFound = () => {
    const { heroes } = this.state;
    // should count all of the objects who have a found value of true
    let heroCount = heroes.filter(hero => hero.found && hero);

    this.setState({
      correct: heroCount.length
    });
  };
  render() {
    const { character, currentHero, correct } = this.state;
    return (
      <section className="col-md-6 mx-auto">
        <form onSubmit={this.handleSubmit}>
          <CompoundInputField
            labelName="Character Name"
            inputName="character"
            inputType="text"
            inputValue={character}
            placeholderName="Click Guess or Press Enter..."
            handleChange={this.handleChange}
            inputDescription="Enter as many heroes as you can."
          />
          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.handleSubmit}
          >
            Guess
          </button>
        </form>
        {currentHero.localized_name !== "" ? (
          <article
            className="card my-3"
            style={{
              background:
                "linear-gradient(101.99deg, #00463E 38.64%, #019C89 97.04%)"
            }}
          >
            <div className="text-center my-3">
              <img
                src={currentHero.url_full_portrait}
                alt={currentHero.localized_name}
                className="img-responsive"
              />

              <h1 className="text-white">{currentHero.localized_name}</h1>
            </div>
          </article>
        ) : null}
        <span className="display-4">Current Count: {correct} / 114</span>
      </section>
    );
  }
}

export default Guess;
