import { Component } from 'react';
import logo from './logo.svg';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((mstrs) => {
        this.setState(() => {
          return { monsters: mstrs };
        });
      });
  }

  /**
   * @param {event} event that captured
   * if the function is written within 'onChange' attribute of input, the function would be created
   * everytime when 'onChange' is called, which is less performance
   */
  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // use destruction in ES6 to avoid using too many 'this'
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );

    return (
      <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox
          className='monster-search-box'
          placeholder='please input the name'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
