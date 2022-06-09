import "./Expenses.css";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenseItems = props.expenses.map((expense) => (
    <ExpenseItem
      key={expense.id}
      date={expense.date}
      title={expense.title}
      amount={expense.amount}
    />
  ));

  return <Card className="expenses">{expenseItems}</Card>;
}

export default Expenses;
