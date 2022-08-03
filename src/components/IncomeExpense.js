import React from 'react'

export const IncomeExpense = () => {
  return (
    <div className="cashflow-container">
        <div className="income-container">
        <h2>Income</h2>
        <div id="income">₹ 1200</div>
        </div>
        <div className="expense-container">
        <h2>Expense</h2>
        <div id="expense">₹ 200</div>
        </div>
    </div>
  )
}
