import React, { useState } from "react";

//import ExpenseItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

//RETURN ALL THE EXPENSES(EXPENSE ITEM) IN A COMPONENT CARD

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  //console.log(filteredYear);
  //console.log(props.item);
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {/* we add unique key to each expense item so that it can be identified */}
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />

        {/* and'&&' operator is used to check if both the conditions are true or not and it return the second part */}
        {/* {filteredExpenses.length ===0&&<p>No expenses</p>} */}
        {/* {filteredExpenses.length > 0 &&
          filteredExpenses.map((expense) => (
            <ExpenseItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))} */}

        {/* ternary syntax */}
        {/* {filteredExpenses.length === 0
          ? expensesContent
          : filteredExpenses.map((expense) => (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            ))} */}
      </Card>
    </div>
  );
};

export default Expenses;
