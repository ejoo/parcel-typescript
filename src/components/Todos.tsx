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

  componentDidMount() {
    // it will run this function when render() is called.
    // or when something is shown on the screen.


  }

  componentWillMount() {
    // it will run this function before calling render()
    // or when something is going to be shown on the screen.
  }

  

  deleteTodo = (id) => {
    const todos = [...this.state.todos];
    const newTodos = todos.filter(item => item.id !== id );

    this.setState({
      todos: newTodos
    });

    // misbahve => mutable, misbehave nhe => immutable
    // mishave => objects and array, normal behave: primistive, boolean, string, number

  }

  render() {
    return (
      <div>
        <h1>Todos App</h1>
        <hr />
        <input type="text" id="text" /> 
        <button onClick={this.createNewTodo}>Add New Todo</button>
        <hr />
        {this.state.todos.map(item => {
          return <TodoItem onDelete={this.deleteTodo} text={item.text} done={item.done} id={item.id} />;
        })}
      </div>
    );
  }
}

export default Todos;
