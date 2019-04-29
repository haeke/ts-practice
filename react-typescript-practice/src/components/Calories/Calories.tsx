import React, { Component } from "react";

interface State {
  gender: string;
  age: string;
  weight: string;
  inches: string;
  feet: string;
  moderate: boolean;
  active: boolean;
  veryActive: boolean;
  [key: string]: any;
}

class Calories extends Component<{}, State> {
  state = {
    gender: "",
    age: "",
    weight: "",
    inches: "",
    feet: "",
    BMR: 0,
    moderate: false,
    active: false,
    veryActive: false
  };

  handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    this.calculateBMR();
    console.log("called submit");
  };

  calculateBMR = () => {
    // Use the Mifflin-St Jeor Equation to calculate the Basal Metabolic Rate
    // Formula - Men - 10W + 6.25H - 5A + 5
    // Women - 10W + 6.25H - 5A - 161
    let { weight, feet, inches, age, gender } = this.state;
    // height in centimeters
    let height = 6.25 * (parseInt(feet) * 12 + parseInt(inches));
    let tempWeight = 10 * parseInt(weight);
    let tempAge = 5 * parseInt(age);
    let BMR: number = tempWeight + height - tempAge;
    if (gender === "male") {
      BMR += 5;
    } else {
      BMR -= 161;
    }

    this.setState({
      BMR
    });
  };

  render() {
    const { gender, age, feet, inches, weight, BMR } = this.state;
    return (
      <section className="col-md-6 mx-auto">
        <h1 className="display-4 text-center">Basal Metabolic Rate</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="formGroup">
            <label htmlFor="Age">Age</label>
            <input
              type="text"
              name="age"
              value={age}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="formGroup">
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="Gender">Gender</label>
              </div>
            </div>
            <select
              name="gender"
              id="gender"
              value={gender}
              onChange={this.handleChange}
              className="form-control"
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="formGroup">
            <label htmlFor="Weight">Weight</label>
            <input
              type="text"
              name="weight"
              value={weight}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>
          <div className="formGroup">
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="Height">Height</label>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  placeholder="Feet..."
                  name="feet"
                  value={feet}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="Inches..."
                  name="inches"
                  value={inches}
                  onChange={this.handleChange}
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="Activity">Activity</label>
            <select name="activity" id="activity" className="form-control">
              <option value="moderate">Moderate</option>
              <option value="active">Active</option>
              <option value="veryActive">Very Active</option>
            </select>
          </div>
          <div className="formGroup">
            <button type="submit" className="btn btn-block btn-primary my-4">
              Submit
            </button>
          </div>
        </form>
        <div className="row">
          <div className="col">
            <div className="card p-3 mb-3">
              <h1 className="display-4 text-center">Maintain Weight</h1>
              <div className="card-body text-center">
                <span className="display-4">{Math.ceil(BMR)}</span>
                <span className="text-muted">Calories/Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card p-3 mb-3">
              <h1 className="display-4 text-center">Mid Weight Loss</h1>
              <div className="card-body text-center">
                <span className="display-4">{Math.ceil(BMR * 0.9)}</span>
                <span className="text-muted">Calories/Day</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card p-3 mb-3">
              <h1 className="display-4 text-center">Weight Loss</h1>
              <div className="card-body text-center">
                <span className="display-4">{Math.ceil(BMR * 0.79)}</span>
                <span className="text-muted">Calories/Day</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calories;
