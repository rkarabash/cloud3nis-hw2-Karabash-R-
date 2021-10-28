import React, { Component } from "react";

class AddTask extends Component {
  state = {
    title: "",
    description: "",
  };
  getContainerStyles() {
    return {
      display: this.props.isOpen ? "flex" : "none",
      flexDirection: "column",
      width: "50%",
      padding: "30px",
      position: "fixed",
      top: "20%",
      right: "22%",
      backgroundColor: "#323232",
    };
  }
  getInputStyle() {
    return {
      padding: "10px",
      border: "none",
      marginBottom: "15px",
    };
  }
  getCloseButtonStyle() {
    return {
      position: "absolute",
      top: "8px",
      right: "8px",
      width: "15px",
      height: "20px",
      verticalAlign: "top",
    };
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value,
      description: this.state.description,
    });
  }
  onChangeDescription(e) {
    this.setState({
      title: this.state.title,
      description: e.target.value,
    });
  }
  render() {
    return (
      <div style={this.getContainerStyles()}>
        <input
          style={this.getInputStyle()}
          placeholder="Title"
          value={this.state.title}
          onChange={(e) => this.onChangeTitle(e)}
        />
        <textarea
          value={this.state.description}
          onChange={(e) => this.onChangeDescription(e)}
          rows={10}
          style={this.getInputStyle()}
          aria-multiline={true}
          placeholder="Description"
        />
        <button
          style={this.getInputStyle()}
          onClick={() => {
            this.props.onTaskAdded({
              id: this.props.numTasks + 1,
              title: this.state.title,
              description: this.state.description,
              completed: false,
            });
            this.setState({ title: "", description: "" });
          }}
        >
          Add new task
        </button>
        <button
          style={this.getCloseButtonStyle()}
          onClick={() => this.props.onCloseAddTask()}
        >
          X
        </button>
      </div>
    );
  }
}

export default AddTask;
