

// src/App.js
import React from 'react';
import CounterBox from './counterbox';


const Counterss = () => {
  const counters = [
    { icon: 'fa-solid fa-thumbs-up', end: 2147, text: 'Happy Customers', isColored: true },
    { icon:  "fa-solid fa-users", end: 3275, text: 'Registered Members', isColored: false },
    { icon: 'fa-shopping-cart', end: 289, text: 'Available Products', isColored: false },
    { icon: 'fa-user', end: 1563, text: 'Saved Trees', isColored: false }
  ];

  return (
    <div className='counter-main bg-succees'>
    <div className="container">
    <div className="row">
      {counters.map((counter, index) => (
        <div className="four col-md-3" key={index}>
          <CounterBox 
            icon={counter.icon} 
            end={counter.end} 
            text={counter.text} 
            isColored={counter.isColored} 
          />
        </div>
      ))}
    </div>
  </div>
    </div>
   
  );
};

export default Counterss;
