import React, { useState } from 'react';
import Navbar from './components/Navbar';
import data from './data.json';
import TradeCard from './components/TradeCard';
import './index.css';

function App() {

  const [trades, settrades] = useState(data);

  // function that filter the trades based on type
  const filterTrade = (filter) => {
    var arr = [];
    data.map((trade) => {
      if (trade.type === filter) {
        arr.push(trade);
      }
    })
    settrades(arr);
  }

  // renders the TradeCard 
  const renderTrade = () => {
    return trades.map((trade, index) => {
      return (
        <div className="col-md-6 col-sm-6 col-xs-12" key={index}>
          <TradeCard trade={trade} />
        </div>
      )
    })
  }

  const filterButtons = () => {
    return (
      <div className="fixed">
        <p className="form-check">Supplier Types : </p>
        <div className="form-check ml-1">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={() => filterTrade("s6")} />
          <label className="form-check-label">s6</label>
        </div>
        <div className="form-check ml-1">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={() => filterTrade("Shankar 6")} />
          <label className="form-check-label">Shankar 6</label>
        </div>
        <div className="form-check ml-1">
          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" onChange={() => filterTrade("type")} />
          <label className="form-check-label">Type</label>
        </div>
      </div >
    )
  }


  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <p className="display-4 text-center heading">Trades for cotton fiber</p>
        {filterButtons()}
        <div className="row mt-1 mb-3">
          {renderTrade()}
        </div>
      </div>
    </div>
  );
}

export default App;
