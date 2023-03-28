import React, { useState } from "react";
import "./style.css";
import Result from "../Result";

const Form = ({ result, calculatedResult }) => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(amount, rate);

    // setAmount("");
    // setRate("");
    console.log(result.toFixed(4));
  };

  return (
    <form
      onSubmit={onFormSubmit}
    >
      <fieldset>
        <legend>
          Currency converter:
        </legend>
        <p>
          <label>
            <span className="form__text">Currency:
            </span>
            <select
              className="form__field" name="currency">
              <option value="eur-pln">EUR-PLN</option>
              <option value="pln-eur">PLN-EUR</option>
              <option value="usd-pln">USD-PLN</option>
              <option value="pln-usd">PLN-USD</option>
              <option value="eur-usd">EUR-USD</option>
              <option value="usd-eur">USD-EUR</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            <span
              className="form__text">Value:
            </span>
            <input
              value={amount}
              className="form__field" type="number" min="0"
              required
              placeholder="Input the amount of currency"
              autoFocus
              onChange={({ target }) => setAmount(target.value)}
              name="amount"
            />
          </label>
        </p>
        <p>
          <label>
            <span
              className="form__text">Currency rate:
            </span>
            <input
              value={rate}
              className="form__field"
              type="number"
              min="0.0001"
              step="0.0001"
              required
              placeholder="Input the current rate"
              onChange={({ target }) => setRate(target.value)}
              name="rate"
            />
          </label>
        </p>
        <Result result={result} amount={amount} rate={rate} />
        <button
          className="button">Recalculate your currency
        </button>
        <button
          className="button" type="reset">Clean
        </button>
      </fieldset>
    </form>
  );

};

export default Form;