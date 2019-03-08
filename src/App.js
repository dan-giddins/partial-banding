import React, { Component } from "react";

class Banding extends Component {
  render() {
    return (
      <div className="border-bottom p-2">
        <div className="row mx-0 my-2">
          <p>{this.key}</p>
          <div className="col p-0">
            <button type="button" className="btn btn-danger float-right" onClick={this.props.close.bind(this)}>
              <i className="fas fa-times" />
            </button>
          </div>
        </div>
        <div className="row mx-0 my-2">
          <div className="col p-0">Minimum spine value:</div>
          <div className="col p-0">
            <input type="number"
              className="form-control"
              min="0"
              step="1"
              pattern="\d+"
              value={this.props.min} />
          </div>
        </div>
        <div className="row mx-0 my-2">
          <div className="col p-0">Banding value:</div>
          <div className="col p-0">
            <input type="number"
              className="form-control"
              min="0"
              step="1"
              pattern="\d+"
              value={this.props.value} />
          </div>
        </div>
        <div className="row mx-0 my-2">
          <div className="col p-0">Maximum spine value:</div>
          <div className="col p-0">
            <input type="number"
              className="form-control maximum"
              min="0"
              step="1"
              pattern="\d+"
              value={this.props.max} />
          </div>
        </div>
      </div>
    );
  };
}

class BandingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bandingList: [
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
    }
  }

  close(id) {
    console.log(id)
    console.log(this.state.bandingList)
    if (true) {
      for (var i = 0; i < this.state.bandingList.length; i++) {
        if (this.state.bandingList[i].id === id) {
          this.setState({
            bandingList: this.state.bandingList.splice(i, 1)
          });
        }
      }
    }
  }

  render() {
    let bandings = this.state.bandingList.map(x => {
      return (
        <Banding key={x.id} id={x.id} min={x.min} value={x.value} max={x.max} close={() => this.close(x.id)} />
      )
    })
    return (
      <div>{bandings}</div>
    );
  }
}

class PartialBandings extends Component {
  constructor(props) {
    super(props);
    this.gradeid = 0;
    this.min = 0;
    this.max = 0;
  }

  render() {
    return (
      <div className="m-4">
        <div className="border-bottom p-2">
          <p>Minimum Spine Point: {this.min}</p>
          <p>Maximum Spine Point: {this.max}</p>
        </div>
        <BandingList />
        <div className="row mx-0 my-2">
          <button type="button" className="btn btn-success m-2">
            <i className="fas fa-plus" />
          </button>
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
