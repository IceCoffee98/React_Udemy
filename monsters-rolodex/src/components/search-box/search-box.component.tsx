import { Component, ChangeEventHandler, ChangeEvent } from 'react';
import './search-box.styles.css';

const func: (a: string, b: number, c: boolean) => boolean = (a, b, c) => true;
const func2: (a: string, b: number, c: boolean) => void = (a, b, c) => {};

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  // onChangeHandler: (a: string) => void;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

// class SearchBox extends Component {
//   render() {
//     const { className, placeholder, onChangeHandler } = this.props;
//     return (
//       <input
//         className={`search-box ${className}`}
//         type='search'
//         placeholder={placeholder}
//         onChange={onChangeHandler}
//       />
//     );
//   }
// }

export default SearchBox;
