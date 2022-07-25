
import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [index, setIndex] = useState(0);
  const [exchange, setExchange] = useState();
  const onSelect = (e) =>{
    setIndex(e.target.value);
  }
  const onChange = (usd) => {
    setExchange(usd.target.value / coins[index].quotes.USD.price +`${coins[index].symbol}`)
  }

  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response=>response.json())
    .then(json => setCoins(json));
    setLoading(false);
  }, []);//처음 불러올 때 한번만 실행하도록 
  return (
    <div> 
      <h1>The Coins! ({coins.length})</h1>
      {loading ? <strong>Loading...</strong>:null}
      <input 
      onChange={onChange}
      type="number"
      placeholder="exchange coin"
      />
      <span> : {exchange ? exchange : 0}</span>
      <br/>
      <select onChange={onSelect}>
        {coins.map((coin,index)=>(
        <option key={index} value={index}>
          {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
        </option>
        ))}
      </select>
    </div>
  );
}
 
export default App;