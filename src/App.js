import React, { Component } from "react";

class Banding extends Component {
  render() {
    return (
      <div className="border-bottom p-2">
        <div className="row mx-0 my-2">
          <div className="col p-0">Minimum spine value:</div>
          <div className="col p-0">
            <input asp-for="Bandings[0].LowerSpineValue"
              className="form-control"
              id="grade-minimum"/>
          </div>
        </div>
        <div className="row mx-0 my-2">
          <div className="col p-0">Banding value:</div>
          <div className="col p-0">
            <input asp-for="Bandings[0].BandingValue"
              id="grade-banding"
              className="form-control"
              min="0"
              step="1"
              pattern="\d+" />
          </div>
        </div>
        <div className="row mx-0 my-2">
          <div className="col p-0">Maximum spine value:</div>
          <div className="col p-0">
            <input asp-for="Bandings[0].UpperSpineValue"
              id="grade-maximum-banding"
              className="form-control maximum"
              min="0"
              step="1"
              pattern="\d+" />
          </div>
        </div>
      </div>
    );
  };
}

class BandingList extends Component {
  render() {
    return (
      <div>
        <Banding />
      </div>
    );
  }
}

class PartialBandings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeid: 0,
      max: 0,
      min: 0
    };
  }

  render() {
    return (
      <div className="m-4">
        <div className="border-bottom p-2">
          <p>Minimum Spine Point: {this.state.min}</p>
          <p>Maximum Spine Point: {this.state.max}</p>
        </div>
        <BandingList />
        <div className="row mx-0 my-2">
          <button type="button" className="btn btn-success m-2">Add Partial Banding</button>
        </div>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <PartialBandings />
    );
  }
}

export default App;
