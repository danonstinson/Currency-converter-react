import React, { useState } from "react";
import "./style.css";
import Result from "../Result";
import currencies from "../Currencies";

const Form = ({ result, calculatedResult }) => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState(currencies[0].prefix);

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculatedResult(amount, currency);

  };

  return (
    <form
      className="form"
      onSubmit={onFormSubmit}
    >
      <fieldset>
        <legend>
          Currency converter:
        </legend>
        <p>
          <label>
            <span className="form__text">Currency*:
            </span>
            <select
              className="form__field" name="currency"
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {currencies.map((currency) => (
                <option
                  key={currency.prefix}
                  value={currency.prefix}>
                  {currency.prefix} {currency.rate}
                </option>
              ))}
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
              placeholder="Input the amount of currency in PLN"
              autoFocus
              onChange={({ target }) => setAmount(target.value)}
            />
          </label>
        </p>
        <p>
          <label className="form__result">
            <Result result={result} amount={amount} />
          </label>
        </p>
        <button
          className="button">Recalculate your currency
        </button>
      </fieldset>
      <p>
        *Accordingly to: Tabela nr 065/A/NBP/2023 z dnia 2023-04-03
      </p>
    </form>
  );

};

export default Form;