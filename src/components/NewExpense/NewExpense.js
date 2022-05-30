import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

//RETURNS THE FORM COMPONENT CONTAINER ALONG WITH USER INPUT AS PROPS ON SUBMIT

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  //HANDLER FUNCTION FOR FORM SUBMIT
  //this function passed as prop in ExpenseForm.js
  //enteredExpenseData = expenseData from ExpenseForm.js
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      //appending id in the object
      id: Math.floor(Math.random() * 10).toString(),
    };

    //passing expenseData coming from ExpenseForm.js to App.js through props
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  //RETURNING JSX
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
