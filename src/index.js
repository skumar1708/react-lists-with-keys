import React from "react";
import ReactDOM from "react-dom";
import Sfull from "./StateFullComponent";

// import "./styles.css";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//       <Sfull pValue="I am from props" />
//     </div>
//   );
// }

const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

class Todos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { title: "take out the trash", done: false, notes: ["boring"], id: 21 },
        { title: "walk dog", done: true, notes: ["exercise"], id: 22 },
        { title: "read about React", done: false, notes: ["fun!"], id: 23 }
      ]
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(oldState => {
        return { todos: [...oldState.todos] };
      });
    }, 1000);

    setTimeout(() => {
      this.setState(oldState => {
        return {
          todos: [
            {
              title: "Birdeye Rep Managament",
              done: false,
              notes: ["boring"],
              id: 25
            }
          ].concat(oldState.todos)
        };
      });
    }, 5000);
  }

  render() {
    console.log("Todos render called");
    return (
      <div>
        {this.state.todos.map((todo, i) => {
          return (
            <TodoItem
              key={todo.id}
              title={todo.title}
              done={todo.done}
              notes={todo.notes}
            />
          );
        })}
      </div>
    );
  }
}

class TodoItem extends React.PureComponent {
  // shouldComponentUpdate = pp => {
  //   return pp.title !== this.props.title;
  // };
  render() {
    console.log("TodoItem render called");
    return (
      <div>
        {this.props.done ? "✓" : "▢"} {this.props.title}(
        {this.props.notes.join(", ")})
      </div>
    );
  }
}

ReactDOM.render(<Todos />, rootElement);
