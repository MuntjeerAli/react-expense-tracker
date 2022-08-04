import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpense = () => {
  const {transactions} = useContext(GlobalContext);
  
  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);

  const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);
  
  return (
    <div className="cashflow-container">
        <div className="income-container">
        <h2>Income</h2>
        <div id="income">₹{income}</div>
        </div>
        <div className="expense-container">
        <h2>Expense</h2>
        <div id="expense">₹ {expense}</div>
        </div>
    </div>
  )
}
