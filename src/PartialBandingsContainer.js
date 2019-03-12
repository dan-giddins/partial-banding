import React, { Component } from "react";
import BandingsList from "./BandingsList.js";

class PartialBandingsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gradeid: 0,
      min: 1,
      max: 20
    };
  }

  render() {
    return (
      <div className="m-4">
        <div className="border-bottom p-2">
          <p>Minimum Spine Point: {this.state.min}</p>
          <p>Maximum Spine Point: {this.state.max}</p>
        </div>
        <BandingsList min={this.state.min} max={this.state.max} gradeid={this.state.gradeid}/>
      </div>
    );
  }
}

export default PartialBandingsContainer;
