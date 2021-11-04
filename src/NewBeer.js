import AddBeersForm from "./AddBeersForm";

const NewBeer = (props) => {
  
    const saveBeerDataHandler = (enteredBeerData) => {
        const beerData = {
            ...enteredBeerData,
            id: Math.random().toString,
        };

        props.onAddBeer(beerData)
    }
  
  return <div>
      <AddBeersForm onSaveBeers={saveBeerDataHandler}/>
  </div>;
};

export default NewBeer;
