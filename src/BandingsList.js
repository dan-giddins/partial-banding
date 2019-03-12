import React, { Component } from "react";
import Banding from "./Banding.js";

class BandingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandingsList: [
        {
          id: 0,
          min: this.props.min,
          value: Math.round((this.props.min + this.props.max) / 2),
          max: this.props.max
        }
      ]
    };
  }

  delete = id => {
    console.log(id);
    this.setState({
      bandingsList: this.state.bandingsList.filter(x => x.id !== id)
    });
  };

  update = (event, id) => {
    const name = event.target.name;
    let value = event.target.value;
    if (value < this.props.min) {
      value = this.props.min;
    } else if (value > this.props.max) {
      value = this.props.max;
    }
    switch (name) {
      case "min":
        this.setState({
          bandingsList: this.state.bandingsList.map(x => {
            if (x.id === id) {
              x.min = value;
              return x;
            } else {
              return x;
            }
          })
        });
        break;
      case "val":
        this.setState({
          bandingsList: this.state.bandingsList.map(x => {
            if (x.id === id) {
              x.value = value;
              return x;
            } else {
              return x;
            }
          })
        });
        break;
      case "max":
        this.setState({
          bandingsList: this.state.bandingsList.map(x => {
            if (x.id === id) {
              x.max = value;
              return x;
            } else {
              return x;
            }
          })
        });
        break;
      default:
    }
  };

  render() {
    return (
      <div>
        {this.state.bandingsList.map(x => (
          <Banding
            key={x.id}
            id={x.id}
            min={x.min}
            value={x.value}
            max={x.max}
            onDeleteClick={this.delete}
            onChange={this.update}
          />
        ))}
        <div className="row mx-0 my-2">
          <button type="button" className="btn btn-success m-2">
            <i className="fas fa-plus" />
          </button>
        </div>
      </div>
    );
  }
}

export default BandingsList;
