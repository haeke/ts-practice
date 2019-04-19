interface IngredientType {
  name: string;
  type: string;
  calories: string;
}

export default class Ingredient {
  constructor(
    public name: string,
    public type: string,
    public calories: string
  ) {}
}

abstract class FoodFactory extends Ingredient {
  constructor(
    public name: string,
    public type: string,
    public calories: string
  ) {
    super(name, type, calories);
  }

  public make(what: IngredientType) {
    return new Ingredient(what.name, what.type, what.calories);
  }
}
