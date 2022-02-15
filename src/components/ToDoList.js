import React, { Component } from "react";
import Task from "./Task";

class ToDoList extends Component {
  getStyles() {
    return {
      width: "90%",
      flexDirection: "column",
      margin: "10px auto",
      display: "flex",
      paddingBottom: "20px",
    };
  }
  render() {
    return (
      <div style={this.getStyles()}>
        <p style={{ textAlign: "center", fontSize: "30px" }}>My ToDoList</p>
        {this.props.tasks.map((todo) => (
          <Task task={todo} onCheckBoxClicked={this.props.onCheckBoxClicked} />
        ))}
      </div>
    );
  }
}
export default ToDoList;
