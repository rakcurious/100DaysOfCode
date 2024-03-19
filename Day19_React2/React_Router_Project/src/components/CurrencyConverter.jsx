import React, { useId } from "react";

function CurrencyConverter({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  className = "",
}) {
  const amountInputId = useId();

  return (
    <div
      className={`bg-gradient-to-r from-cyan-800 to-purple-800 p-3 rounded-lg text-lg font-bold flex ${className}`}
    >
      <div className="w-1/2 flex flex-col">
        <label
          htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          disabled={amountDisable}
          className="outline-none rounded-md w-1/2 bg-white px-2 py-1.5"
          type="number"
          placeholder="Amount"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency</p>
        <select
          className="rounded-lg w-1/2 px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default CurrencyConverter;
