import React from 'react'

export const TransactionList = () => {
  return (
    <div className="transaction-container">
    <h2>Transaction History</h2>
    <ul id="transaction" className="transaction">
        <li>
            Salary
            <div>
                <span className="income-amount">₹ 10000</span>
                <button>x</button>
            </div>
        </li>
        <li>
            Grocery
            <div>
                <span className="expense-amount">₹ 200</span>
                <button>x</button>
            </div>
        </li>
        <li>
            Hotel
            <div>
                <span className="expense-amount">₹ 500</span>
                <button>x</button>
            </div>
        </li>
        <li>
            Buy Guitar
            <div>
                <span className="expense-amount">₹ 1000</span>
                <button>x</button>
            </div>
        </li>
    </ul>
</div>
  )
}
