import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//initial dummy list of expenses
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "News Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New Smart TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

//function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  /*getting user entered input*/
  //receiving expense from NewExpense.js which itself is receiving expenseData from ExpenseForm.js
  const addExpenseHandler = (expense) => {
    //console.log("In App.js");
    //console.log(expense);

    //updating state using function as each time it receives latest snap shot of the array
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // JSX RETURNS THE FORM AND ALL EXPENSES, IE ENTIRE BODY OF APP
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      {/* <h2>Let's get started ,marvelBoy!</h2> */}
      <Expenses items={expenses} />
    </div>
  );
  //alternative react working to return JSX
  /*return React.createElement(
    "div",
    {},
    React.createElement("h2", {}, "Let's get started ,marvelBoy!"),
    React.createElement(Expenses, { item: expenses })
  );*/
};

export default App;
