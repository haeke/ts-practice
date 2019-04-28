const characters = [
  { name: "subzero", img: "../" },
  { name: "johnny cage", img: "../" },
  { name: "baraka", img: "../" }
];

function findCharacter(name) {
  let newCharacters = characters.map(character => {
    return character.name === name ? { ...character, found: true } : character;
  });

  console.log(newCharacters);
}

findCharacter("subzero");
