/*global chrome*/
import React, { useState, setState, Component } from "react";
import "../styles/timersettings.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
class TimerSetting extends Component {
  constructor(props) {
    super(props);
    let loadedSettings = {};
    

    this.state = {
      easy: 15,
      medium: 30,
      hard: 45,
      isTimer: "Timer"
    };
  }

  handleSubmit = (event) => {
    alert(`${this.state.isTimer} ${this.state.easy} ${this.state.medium} ${this.state.hard}`);

    event.preventDefault();
  };
  handleIsTimerChange = (event) => {
    this.setState({
      isTimer: event.target.value,
    });
  };
  handleEasyChange = (event) => {
    this.setState({
      easy: event.target.value,
    });
  };
  handleMediumChange = (event) => {
    this.setState({
      medium: event.target.value,
    });
  };
  handleHardChange = (event) => {
    this.setState({
      hard: event.target.value,
    });
  };
  render() {
    return (
      <div className="StopWatchToggle">
        <div className="DropdownHolder">
          <select name="Clock Mode" id="mode" value={this.state.isTimer} onChange={this.handleIsTimerChange}>
            <option value="Timer">Timer</option>
            <option value="Stop Watch">Stop Watch</option>
          </select>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="timeSelection">
            <label for="easy">Easy: </label>
            <input
              type="number"
              id="easy"
              name="easy"
              value={this.state.easy}
              onChange={this.handleEasyChange}
            />
          </div>
          <div className="timeSelection">
            <label for="medium">Medium: </label>
            <input
              type="number"
              id="medium"
              name="medium"
              value={this.state.medium}
              onChange={this.handleMediumChange}
            />
          </div>
          <div className="timeSelection">
            <label for="Hard">Hard: </label>
            <input
              type="number"
              id="hard"
              name="hard"
              value={this.state.hard}
              onChange={this.handleHardChange}
            />
          </div>
          <div className="SaveChangesHolder">
            <button type="submit">Save Changes</button>
          </div>
        </form>
      </div>
    );
  }
}
export default TimerSetting;
