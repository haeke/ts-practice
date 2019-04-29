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
    moderate: false,
    active: false,
    veryActive: false
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { gender, age, feet, inches, weight } = this.state;
    return (
      <section className="col-md-6 mx-auto">
        <form>
          <div className="formGroup">
            <div className="row">
              <div className="col-md-12">
                <label htmlFor="Gender">Gender</label>
              </div>
            </div>
            <select name="gender" id="gender" className="form-control">
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
              <option value="veryActive">Very ACtive</option>
            </select>
          </div>
          <div className="formGroup">
            <button className="btn btn-block btn-primary">Submit</button>
          </div>
        </form>
      </section>
    );
  }
}

export default Calories;
