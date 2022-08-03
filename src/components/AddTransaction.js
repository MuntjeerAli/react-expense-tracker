import React, {useState} from 'react'

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0);
 
  return (
    <div className="form-container">
        <h2>Add New Transaction</h2>
        <form>
            <label htmlFor="name">Transaction Details</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="name"></input>
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  id="amount"></input>
            <div className="btn-container">
                <button id="incomeBtn">Add Income</button>
                <button id="expenseBtn">Add Expense</button>
            </div>
        </form>
    </div>
  )
}
