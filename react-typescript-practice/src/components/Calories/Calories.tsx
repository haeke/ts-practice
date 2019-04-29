import React, { Component } from "react";

interface Height {
  inches: string;
  feet: string;
}

interface Activity {
  moderate: boolean;
  active: boolean;
  veryActive: boolean;
}

interface State {
  gender: string;
  age: string;
  weight: string;
  height: Height | {};
  activity: Activity | {};
}

class Calories extends Component<{}, State> {
  state = {
    gender: "",
    age: "",
    weight: "",
    height: {},
    activity: {}
  };

  render() {
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
            <input type="text" className="form-control" />
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
                  className="form-control"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  placeholder="Inches..."
                  className="form-control"
                />
              </div>
            </div>
          </div>
          <div className="formGroup">
            <label htmlFor="Activity">Activity</label>
            <input type="text" className="form-control" />
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
