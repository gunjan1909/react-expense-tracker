import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  //let expensesContent = <h3>No Expenses Found.</h3>;

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expenses Found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
