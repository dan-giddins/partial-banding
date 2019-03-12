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
          <p>Minimum Spine Point: {this.state.min}</p>
          <p>Maximum Spine Point: {this.state.max}</p>
        </div>
        <BandingsList />
      </div>
    );
  }
}

export default PartialBandingsContainer;
