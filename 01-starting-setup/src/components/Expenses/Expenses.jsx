import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "../Filter/ExpensesFilter";
import React, { useState } from "react";

const Expenses = (props) => {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));
  const currentYear = new Date(Date.now).getFullYear();
  const [yearSelected, setYearSelected] = useState(currentYear);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          yearSelected={yearSelected}
          onYearSelect={setYearSelected}
        />
        {expenseItems}
      </Card>
    </div>
  );
};

export default Expenses;
