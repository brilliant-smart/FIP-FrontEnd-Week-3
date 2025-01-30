import React, { Component, Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Components
const Task = ({ task, toggleComplete }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.text}
      </span>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleComplete(task.id)}
      />
    </li>
  );
};

// Classes
class TodoApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: "Virtual DOM", completed: false },
        { id: 2, text: "State and Props", completed: false },
        { id: 3, text: "JSX", completed: false },
        {
          id: 4,
          text: "Components(Functional and Class)",
          completed: false,
        },
        { id: 5, text: "Lifecycle Components", completed: false },
        { id: 6, text: "Fragments", completed: false },
        { id: 7, text: "Event Handlers in React", completed: false },
      ],
    };
  }

  // Lifecycle
  componentDidMount() {
    console.log("TodoApp Mounted");
  }

  // where to trigger task completion in order to crossout the completed task
  toggleComplete = (taskId) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      ),
    }));
  };

  //fragment
  render() {
    return (
      <Fragment>
        <div className="container mt-5 w-75 w-md-50">
          <h2 className="text-center text-dark">
            FIP FontEnd Week 3 Deliverable
          </h2>
          <p className="text-center text-dark">
            Below are the list of the learning outcome based on the resource
            given
          </p>
          <small className="d-block text-center text-muted">
            click on the tick box to mark a learning outcome finished
          </small>
          <ul className="list-group">
            {this.state.tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                toggleComplete={this.toggleComplete}
              />
            ))}
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default TodoApp;
