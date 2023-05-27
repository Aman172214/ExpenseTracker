import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [displayForm, setDisplayForm] = useState(false);

  const displayFormHandler = () => {
    setDisplayForm(true);
  };
  const hideFormHandler = () =>{
    setDisplayForm(false);
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setDisplayForm(false);
  };

  return (
    <div className="new-expense">
      {!displayForm && (
        <button onClick={displayFormHandler}>Add Expense</button>
      )}
      {displayForm && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
