import React, {useState, useContext} from 'react';
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {
const [text, setText] = useState('');
const [amount, setAmount] = useState(0);

const { addTransaction } = useContext(GlobalContext);

const onSubmit = e =>{
  e.preventDefault();

  const newTransaction = {
    id: Math.floor(Math.random() * 1000000),
    text,
    amount: +amount
  }

  addTransaction(newTransaction);
  
}
  return (
    <div className="form-container">
        <h2>Add New Transaction</h2>
        <form onSubmit={onSubmit}>
            <label htmlFor="name">Transaction Details</label>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} id="name"></input>
            <label htmlFor="amount">Amount</label>
            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}  id="amount"></input>
            <div className="btn-container">
                <button className="transactionBtn">Add Transaction</button>
            </div>
        </form>
    </div>
  )
}
