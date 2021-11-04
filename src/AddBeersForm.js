import React, { useState } from 'react';
import './AddBeersForm.css';

const AddBeersForm = (props) => {
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [percentage, setPercantage] = useState();
  const [price, setPrice] = useState();

  const brandChangeHandler = (e) => {
    setBrand(e.target.value);
  };

  const typeChangeHandler = (e) => {
    setType(e.target.value);
  };
  const percentageChangeHandler = (e) => {
    setPercantage(e.target.value);
  };

  const priceChangeHandler = (e) => {
    setPrice(e.target.value);
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();

  //   const beerData = {
  //     brand: brand,
  //     type: type,
  //     percentage: percentage,
  //     price: price,
  //   };

  //   props.onSaveBeers(beerData);
  //   setBrand('');
  //   setType('');
  //   setPercantage('');
  //   setPrice('');
  // };

  return (
    // onSubmit={submitHandler}
    <form>
      <div className="brand">
        <label>Brand</label>
        <input
          type="text"
          onChange={brandChangeHandler}
          value={brand}
          key={props.id}
        ></input>
      </div>
      <div className="type">
        <label>Type</label>

        <input
          type="text"
          onChange={typeChangeHandler}
          value={type}
          key={props.id}
        ></input>
      </div>
      <div className="percentage">
        <label>Percentage</label>
        <input
          type="number"
          onChange={percentageChangeHandler}
          value={percentage}
          key={props.id}
        ></input>
      </div>
      <div className="price">
        <label>Price</label>
        <input
          type="number"
          onChange={priceChangeHandler}
          value={price}
          key={props.id}
        ></input>
      </div>
      <button type="submit">
        Add beer
      </button>
    </form>
  );
};

export default AddBeersForm;
