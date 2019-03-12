import React from "react";
import PropTypes from "prop-types";

const Banding = props => {
  return (
    <div className="border-bottom p-2">
      <div className="row mx-0 my-2">
        <div className="col p-0">
          <button
            type="button"
            className="btn btn-danger float-right"
            onClick={() => props.onDeleteClick(props.id)}
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="row mx-0 my-2">
        <div className="col p-0">Minimum spine value:</div>
        <div className="col p-0">
          <input
            type="number"
            className="form-control"
            min="0"
            step="1"
            pattern="\d+"
            value={props.min}
            name="min"
            onChange={(event) => props.onChange(event, props.id)}
          />
        </div>
      </div>
      <div className="row mx-0 my-2">
        <div className="col p-0">Banding value:</div>
        <div className="col p-0">
          <input
            type="number"
            className="form-control"
            min="0"
            step="1"
            pattern="\d+"
            value={props.value}
            name="val"
            onChange={(event) => props.onChange(event, props.id)}
          />
        </div>
      </div>
      <div className="row mx-0 my-2">
        <div className="col p-0">Maximum spine value:</div>
        <div className="col p-0">
          <input
            type="number"
            className="form-control maximum"
            min="0"
            step="1"
            pattern="\d+"
            value={props.max}
            name="max"
            onChange={(event) => props.onChange(event, props.id)}
          />
        </div>
      </div>
    </div>
  );
};

Banding.propTypes = {
  id: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  max: PropTypes.number,
  onDeleteClick: PropTypes.func,
  onChange: PropTypes.func
};

export default Banding;
