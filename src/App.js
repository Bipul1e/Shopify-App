import React, { useState } from "react";
import "./App.css";

import ferreroRocherImage from "./images/ferrero-rocher-chocolates2.jpg";
import hersheyImage from "./images/Hershey-56b007823df78cf772cb32d02.jpg";
import marsImage from "./images/mars-chocolates.jpg";

const chocolatesData = [
  { id: 1, name: "ferreroRocher", price: 1000, image: ferreroRocherImage },
  { id: 2, name: "Hershey", price: 225, image: hersheyImage },
  { id: 3, name: "Mars", price: 300, image: marsImage },
  // Add more chocolates here
];

function formatPrice(price) {
  // Convert the price to a formatted Rupees string
  return `₹${price.toFixed(2)}`;
}

function App() {
  const [selectedChocolates, setSelectedChocolates] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChocolateSelection = (chocolate) => {
    if (selectedChocolates.length < 8) {
      const updatedSelection = [...selectedChocolates, chocolate];
      setSelectedChocolates(updatedSelection);

      setTotalPrice((prevPrice) => prevPrice + chocolate.price);
    } else {
      alert("You have reached the maximum limit of 8 items.");
    }
  };

  const handleRemoveChocolate = (chocolate) => {
    const updatedSelection = selectedChocolates.filter(
      (item) => item.id !== chocolate.id
    );
    setSelectedChocolates(updatedSelection);

    setTotalPrice((prevPrice) => prevPrice - chocolate.price);
  };

  return (
    <div className="App">
      <h1>Custom Chocolate Pack</h1>
      <div className="chocolates-list">
        {chocolatesData.map((chocolate) => (
          <div key={chocolate.id} className="chocolate">
            <img src={chocolate.image} alt={chocolate.name} />
            <p>{chocolate.name}</p>
            <p>{formatPrice(chocolate.price)}</p>
            <button onClick={() => handleChocolateSelection(chocolate)}>
              Add
            </button>
          </div>
        ))}
      </div>
      <div className="custom-pack">
        <h2>Your Custom Pack</h2>
        <p>Total Price: {formatPrice(totalPrice)}</p>
        <div className="selected-chocolates">
          {selectedChocolates.map((chocolate) => (
            <div key={chocolate.id} className="selected-chocolate">
              <img src={chocolate.image} alt={chocolate.name} />
              <p>{chocolate.name}</p>
              <p>{formatPrice(chocolate.price)}</p>
              <button onClick={() => handleRemoveChocolate(chocolate)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
