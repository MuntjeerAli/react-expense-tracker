import React, {useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState';

export const TransactionList = () => {
    
const {transactions} = useContext(GlobalContext);

  return (
    <div className="transaction-container">
    <h2>Transaction History</h2>
    <ul id="transaction" className="transaction">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction ={transaction}/> ))}
    </ul>
</div>
  )
}
