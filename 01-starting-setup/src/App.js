import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";

const App = () => {
  const [expenses, setExpenses] = useState({
    values: [],
  });
  const addNewExpense = (expenseData) => {
    console.log(expenseData);
    setExpenses((prevState) => {
      prevState.values.push(expenseData);
      return { values: prevState.values };
    });
  };
  return (
    <div>
      <NewExpense onAddNewExpense={addNewExpense} />
      <Expenses expenses={expenses.values} />
    </div>
  );
};

export default App;
