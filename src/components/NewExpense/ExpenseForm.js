import React, { useState } from "react";

import "./ExpenseForm.css";

/*
USING ONE STATE OR MULTIPLE STATES :- MULTIPLE/SEPERATE STATES USAGE PREFERRED INSTEAD OF ONE STATE FOR ALL

use a function form to call the setUserInput function when stateupdate depends on previous state (line 36-41 instead of line 32-35)

USING ...(spread operator) TO COPY THE OLD STATE AS IT IS

FOR NOW USING MULTI-STATE APPROACH

*/

//RETURN THE EXPENSE FORM

const ExpenseForm = (props) => {
  //USESTATE DECLARE
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //  enteredTitle: "",
  //  enteredAmount: "",
  //  enteredDate: "",
  //});

  //HANDLER FUNCTIONS CALLED ON onchange EVENT
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredTitle: event.target.value,
    //});
    //setUserInput((prevState) => {
    //  return {
    //    ...prevState,
    //    enteredTitle: event.target.value,
    //  };
    //});
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredAmount: event.target.value,
    //});
    //setUserInput((prevState) => {
    //  return {
    //    ...prevState,
    //    enteredAmount: event.target.value,
    //  };
    //});
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    //setUserInput({
    //  ...userInput,
    //  enteredDate: event.target.value,
    //});
    //setUserInput((prevState) => {
    //  return {
    //    ...prevState,
    //    enteredDate: event.target.value,
    //  };
    //});
  };

  //FORM SUBMIT HANDLER
  const submitHandler = (event) => {
    event.preventDefault(); //avoid page reload ie defeault browser behaviour/events

    const expenseData = {
      title: enteredTitle,
      //+ to change string to int ig
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    //[assong expenseData(form inputs by user) to onSaveExpenseData function, which is received through props
    props.onSaveExpenseData(expenseData);
    //basically we will execute saveExpenseDataHandler function in NewExpense.js with enteredExpenseData as expenseData object

    //on submit, clear the form
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  //RETURN JSX
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
