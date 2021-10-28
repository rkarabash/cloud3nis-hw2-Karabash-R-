import React, { Component } from "react";

class Task extends Component {
  getContainerStyle() {
    return {
      padding: "10px",
      margin: "10px 5px",
      border: "2px solid #000000",
      borderRadius: "10px",
      width: "100%",
      position: "relative",
    };
  }

  getInputStyle() {
    return {
      position: "absolute",
      top: "10px",
      right: "10px",
      width: "40px",
      height: "40px",
    };
  }

  render() {
    const { id, title, description, completed } = this.props.task;
    return (
      <div style={this.getContainerStyle()}>
        <h2 style={{ width: "80%" }}>{title}</h2>
        <p style={{ width: "80%" }}>{description}</p>
        <input
          type="checkbox"
          style={this.getInputStyle()}
          checked={completed}
          onClick={() => this.props.onCheckBoxClicked(id)}
        />
      </div>
    );
  }
}
export default Task;
