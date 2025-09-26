import React from 'react';

const Input = ({
  label,
  amount,
  omAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = 'usd',
}) => {
  return (
    <>
      <div>
        <label>{label}</label>
        <input type="text" placeholder="Enter Value" />
        <select>
          <option value="usd">usd</option>
        </select>
      </div>
    </>
  );
};
export default Input;
