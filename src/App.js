import React, { Component } from "react";
import AddTask from "./components/AddTask";
import ToDoList from "./components/ToDoList";
export class App extends Component {
  state = {
    isOpen: false,
    tasks: [
      {
        id: 1,
        title: "Mathematic",
        description: "Do homework",
        completed: false,
      },
      {
        id: 2,
        title: "Informatic",
        description: "Do homework",
        completed: false,
      },
      { id: 3, title: "OKT", description: "Do homework", completed: true },
      { id: 4, title: "NIS", description: "Do homework", completed: true },
      { id: 5, title: "ANDAN", description: "Do homework", completed: true },
    ],
  };
  getStyle() {
    return {
      margin: 0,
      width: "100%",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      background: "#F4F4F4",
      marginBottom: "20px",
    };
  }
  getButtonStyle() {
    return {
      position: "fixed",
      right: "20px",
      bottom: "20px",
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      border: "none",
      backgroundColor: "#4b82dc",
      color: "white",
      fontSize: "20px",
      fontWeight: "bold",
    };
  }

  onCheckBoxClicked = (id) => {
    this.setState({
      isOpen: this.state.isOpen,
      tasks: this.state.tasks.map((task) => {
        if (task.id === id) task.completed = !task.completed;
        return task;
      }),
    });
  };

  onTaskAdded = (task) => {
    this.setState({
      isOpen: !this.state.isOpen,
      tasks: [...this.state.tasks, task],
    });
  };

  onCloseAddTask = () => {
    this.setState({
      isOpen: !this.state.isOpen,
      tasks: this.state.tasks,
    });
  };

  render() {
    return (
      <div style={this.getStyle()}>
        <style jsx global>{`
          * {
            margin: 0px;
            padding: 0px;
          }
        `}</style>
        <ToDoList
          tasks={this.state.tasks}
          onCheckBoxClicked={this.onCheckBoxClicked}
        />
        <AddTask
          isOpen={this.state.isOpen}
          onTaskAdded={this.onTaskAdded}
          numTasks={this.state.tasks.length}
          onCloseAddTask={this.onCloseAddTask}
        />
        <button
          style={this.getButtonStyle()}
          onClick={() => this.onCloseAddTask()}
        >
          +
        </button>
      </div>
    );
  }
}

export default App;
