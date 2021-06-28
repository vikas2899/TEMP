import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  state = {
    task: "",
    taskList: [],
  };

  handleSubmit = () => {
    const t = document.getElementById("task").value;
    const newList = [...this.state.taskList, t];
    this.setState({ taskList: newList });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Enter task"
          value={this.state.task}
          id="task"
          onChange={(e) => this.setState({ task: e.target.value })}
        />
        <button onClick={this.handleSubmit}>Submit</button>
        {this.state.taskList}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
