import * as React from "react";
import TodoItem from "./TodoItem";
import Es from "./EmptySpace";
// class based component or stateful component
class Todos extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        text: "Go to Gym",
        done: false
      },

      {
        id: 2,
        text: "Go to school1",
        done: true
      }
    ]
  };

  createNewTodo = () => {
    const text = document.querySelector("#text");
    const value = text.value;
    const obj = {
      text: value,
      done: false,
      id: this.state.todos.length + 1
    };

    this.setState({
      todos: [...this.state.todos, obj]
    });
  };

  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <hr />
        <input type="text" id="text" /> <Es />
        <button onClick={this.createNewTodo}>Add New Todo</button>
        <hr />
        {this.state.todos.map(item => {
          return <TodoItem text={item.text} done={item.done} id={item.id} />;
        })}
      </div>
    );
  }
}

export default Todos;
