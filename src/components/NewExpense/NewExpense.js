import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const expenseFormSubmitHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="new-expense">
      {isEditing ? (
        <ExpenseForm
          onCancel={stopEditingHandler}
          onExpenseFormSubmit={expenseFormSubmitHandler}
        />
      ) : (
        <button onClick={startEditingHandler}>Add new Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
