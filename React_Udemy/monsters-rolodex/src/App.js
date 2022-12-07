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

  componentDidMount() {
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((mstrs) => {
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

  /**
   * @param {event} event that captured
   * if the function is written within 'onChange' attribute of input, the function would be created
   * everytime when 'onChange' is called, which is less performance
   */
  onSearchChange = (event) => {
    console.log(event.target.value);
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    console.log("render");

    // use destruction in ES6 to avoid using too many 'this'
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField),
    );

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => (
          <div key={monster.id}>
            <h2>{monster.name}</h2>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
