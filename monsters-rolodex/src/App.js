// import { Component } from 'react';
import logo from './logo.svg';
import SearchBox from './components/search-box/search-box.component';
import CardList from './components/card-list/card-list.component';
import './App.css';
import { useState, useEffect } from 'react';

const App = () => {
  // when the 'searchField' changes rather than setSearchField() called, the func re-runs
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [title, setTitle] = useState('');
  // console.log({ searchField });
  // console.log('render');

  // don't write fetch() here without wrapping into 'useEffect',
  // which will change 'monsters' every time App() is called
  // because the array reference is different
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // the filterMonster is called only when [searchField, monsters] state changed
  // and onload as well
  useEffect(() => {
    // console.log('newFilteredMonsters');
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [searchField, monsters]);

  const onSearchChange = (event) => {
    const searchFieldStr = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldStr);
  };

  const onTitleChange = (event) => {
    const changedTitles = event.target.value.toLocaleLowerCase();
    setTitle(changedTitles);
  };

  // the function will be called everytime when other props changed
  // const filteredMonsters = monsters.filter((monster) =>
  //   monster.name.toLowerCase().includes(searchField)
  // );
  return (
    <div className='App'>
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='monster-search-box'
        placeholder='please input the name'
        onChangeHandler={onSearchChange}
      />
      <SearchBox
        className='title-search-box'
        placeholder='input title name'
        onChangeHandler={onTitleChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class AppAsClass extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((mstrs) => {
//         this.setState(() => {
//           return { monsters: mstrs };
//         });
//       });
//   }

//   /**
//    * @param {event} event that captured
//    * if the function is written within 'onChange' attribute of input, the function would be created
//    * everytime when 'onChange' is called, which is less performance
//    */
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     // use destruction in ES6 to avoid using too many 'this'
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) =>
//       monster.name.toLowerCase().includes(searchField)
//     );

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monster-search-box'
//           placeholder='please input the name'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
