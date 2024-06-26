import React from "react";

import Card from "../UI/Card";
import "./IngredientForm.css";
import { useState } from "react";

const IngredientForm = React.memo((props) => {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
    console.log(name);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    console.log(amount);
  };
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={name}
              onChange={nameChangeHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
