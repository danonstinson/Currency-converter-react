import React from "react";
import "./style.css";

const Form = () => (
  <form>
    <fieldset>
      <legend>
        Currency converter:
      </legend>
      <p>
        <label>
          <span className="form__text">Currency:
          </span> <select className="form__field" name="currency">
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
          <span className="form__text">
            Value:</span>
          <input className="form__field" type="number" min="0" required
            placeholder="Input the amount of currency" autoFocus />
        </label>
      </p>
      <p>
        <label>
          <span className="form__text">
            Currency rate:</span>
          <input className="form__field" type="number" min="0.0001" step="0.0001" required
            placeholder="Input the current rate" />
        </label>
      </p>
      <p>
        <span className="form__text">
          Calculated value:</span> <strong>N/A</strong>
      </p>
      <button className="button">Recalculate your currency</button>
      <button className="button" type="reset">Clean</button>
    </fieldset>
  </form>
);

export default Form;