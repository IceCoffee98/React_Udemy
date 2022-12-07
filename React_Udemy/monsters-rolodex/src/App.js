import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    console.log("constructor");
  }

  //
  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(mstrs => {
        this.setState(
          () => {
            return { monsters: mstrs };
          },
          () => {
            console.log(this.state.monsters);
          },
        );
      });
  }

  render() {
    console.log("render");

    const filteredMonsters = this.state.monsters.filter(monster =>
      monster.name.toLowerCase().includes(this.state.searchField),
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={event => {
            console.log(event.target.value);
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map(monster => (
          <div key={monster.id}>
            <h2>{monster.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
