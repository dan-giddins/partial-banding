import React, { Component } from "react";
import BandingsList from "./BandingsList.js";

class PartialBandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeid: 0,
      min: 0,
      max: 0
    };
  }

  render() {
    return (
      <div className="m-4">
        <div className="border-bottom p-2">
          <p>Minimum Spine Point: {this.min}</p>
          <p>Maximum Spine Point: {this.max}</p>
        </div>
        <BandingsList />
        <div className="row mx-0 my-2">
          <button type="button" className="btn btn-success m-2">
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default PartialBandingsContainer;
