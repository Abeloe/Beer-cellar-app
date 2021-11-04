import Beers from './Beers';

const BeersList = (props) => {
  return (
    <div>
      <ul className="beer-list">
        {props.items.map((beers) => (
          <Beers
            key={beers.id}
            brand={beers.brand}
            type={beers.type}
            percentage={beers.percentage}
            price={beers.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default BeersList;
