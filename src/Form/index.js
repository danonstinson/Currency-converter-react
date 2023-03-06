import React, { useState } from "react";
import "./style.css";


const Form = (value) => {
  const [currencyValue, setcurrencyValue] = useState("");
  const [rate, setRate] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();

    value = currencyValue * rate;
    setcurrencyValue("");
    setRate("");
    console.log(value);
  };

  return (
    <form>
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
              value={currencyValue}
              className="form__field" type="number" min="0"
              required
              placeholder="Input the amount of currency"
              autoFocus
              onChange={(event => setcurrencyValue(event.target.value))}
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
              onChange={(event => setRate(event.target.value))}
            />
          </label>
        </p>
        <p>
          <span
            className="form__text">Calculated value:
          </span>
          <strong>
            N/A
          </strong>
        </p>
        <button
          onClick={onFormSubmit}
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