import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [fromCurrency, setFromCurrency] = useState('usd');
  const [toCurrency, setToCurrency] = useState('inr');
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[fromCurrency]));
  }, [fromCurrency]);

  const onFromCurrencyChange = (e) => {
    setFromCurrency(e.target.value);
  };

  const onToCurrencyChange = (e) => {
    setToCurrency(e.target.value);
  };

  const onAmountChange = (e) => {
    setAmount(e.target.value);
  };

  console.log(data);
  const rate = data[toCurrency];

  const currencyList = Object.keys(data || {});

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  return (
    <>
      <h1>Currency App</h1>
      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={onAmountChange}
      />
      <br />
      <select value={fromCurrency} onChange={onFromCurrencyChange}>
        <option value="" disabled>
          Select currency
        </option>
        {currencyList?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>{' '}
      <select value={toCurrency} onChange={onToCurrencyChange}>
        <option value="" disabled>
          Select currency
        </option>
        {currencyList?.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <br />
      <span>
        {amount} {fromCurrency.toUpperCase()} -{' '}
        {amount * Number(rate?.toFixed(2))} {toCurrency.toUpperCase()}
      </span>
      <br />
      <br />
      <button onClick={handleSwap}>Swap</button>
    </>
  );
}

export default App;
