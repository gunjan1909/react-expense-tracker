import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

//RETURN SINGLE EXPENSE ITEM

function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        {/* date */}
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          {/* title */}
          <h2>{props.title}</h2>
          {/* amount */}
          <div className="expense-item__price">${props.amount}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExpenseItem;
