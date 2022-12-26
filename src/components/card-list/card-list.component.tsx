import { Component } from 'react';
import { Monster } from '../../App';
import Card from '../card/card.component';
import './card-list.styles.css';

type CardListType = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListType) => (
  <div className='card-list'>
    {monsters.map((monster) => (
      <Card monster={monster} key={monster.id} />
    ))}
  </div>
);

// class CardList extends Component {
//   render() {
//     // console.log('Render');
//     // React renders on mount and it re-renders when props are changed and setState() is called
//     const { monsters } = this.props;
//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return <Card monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
