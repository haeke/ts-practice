interface IngredientType {
  name: string;
  type: string;
  calories: string;
}

// Abstract classes cannot be instantiated on its own. We use the extends propery to extend the Ingredient class above.
abstract class FoodFactory implements IngredientType {
  constructor(
    public name: string,
    public type: string,
    public calories: string
  ) {}
}

// The ingrident class extends the foodfactory abstract class.
export default class Ingredient extends FoodFactory {
  constructor(
    public name: string,
    public type: string,
    public calories: string
  ) {
    super(name, type, calories);
  }

  public identify() {
    return console.log(`${this.name} ${this.type} ${this.calories}`);
  }
}

let apple = new Ingredient("apple", "fruit", "140");
apple.identify();

class Fridge {
  items: IngredientType[];
  constructor(public ingredients: IngredientType[]) {
    this.items = ingredients;
  }

  get(type: string) {
    return this.items.filter((i: IngredientType) => i.type == type, 0);
  }
}

const ingredients = [
  { name: "water", type: "water", calories: "0" },
  { name: "red_wine", type: "wine", calories: "20" },
  { name: "white_wine", type: " wine", calories: "120" }
];

let Frigidiare = new Fridge(ingredients);

console.log(Frigidiare.get("wine"));
