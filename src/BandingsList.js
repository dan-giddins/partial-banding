import React, { Component } from "react";
import Banding from "./Banding.js";

class BandingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandingsList: [
        {
          id: 0,
          min: 0,
          value: 0,
          max: 0
        },
        {
          id: 1,
          min: 1,
          value: 1,
          max: 1
        },
        {
          id: 2,
          min: 2,
          value: 2,
          max: 2
        }
      ]
    };
  }

  delete = id => {
    this.setState({
      bandingsList: this.state.bandingsList.filter(x => x.id !== id)
    });
  };

  render() {
    return (
      <div>
        {this.state.bandingsList.map(x => (
          <Banding
            key={x.id}
            min={x.min}
            value={x.value}
            max={x.max}
            onDeleteClick={() => this.delete(x.id)}
            // onChange={() => }
          />
        ))}
      </div>
    );
  }
}

export default BandingsList;
