import './Beers.css';
// import React, { useState } from 'react';

const Beers = (props) => {
  return (
    <div className="container">
      <ul>
        <li className="brand">{props.brand}</li>
        <li className="type">{props.type}</li>
        <li className="percentage">{props.percentage} %</li>
        <li className="price">{props.price} dkk</li>
      </ul>
    </div>
  );
};

export default Beers;
