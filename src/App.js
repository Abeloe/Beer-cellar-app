import { useState } from 'react/cjs/react.development';
import BeersList from './BeersList';
import NewBeer from './NewBeer';

const dummy_data = [
  {
    id: '1',
    brand: 'Carlsberg',
    type: 'Pilsner',
    percentage: 5,
    price: 10,
  },
  {
    id: '2',
    brand: 'Tuborg',
    type: 'Classic',
    percentage: 4,
    price: 12,
  },
  {
    id: '3',
    brand: 'Albani',
    type: 'Pilsner',
    percentage: 3,
    price: 14,
  },
  {
    id: '4',
    brand: 'Grimbergeren',
    type: 'IPA',
    percentage: 7,
    price: 25,
  },
  {
    id: '5',
    brand: 'Thisted',
    type: 'Brown ale',
    percentage: 5,
    price: 20,
  },
  {
    id: '6',
    brand: 'Guinness',
    type: 'stout',
    percentage: 5,
    price: 18,
  },
];

const App = () => {
  const [beers, setBeers] = useState(dummy_data);

  // const addBeerHandler = (beers) => {
  //   setBeers((prevBeers) => {
  //     return [beers, ...prevBeers]
  //   })
  // }

  return (
    <div>
      {/* onSaveBeers={addBeerHandler} */}
      <NewBeer />
      <BeersList items={beers} />
    </div>
  );
};

export default App;
