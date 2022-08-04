import React, {useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({transaction}) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount < 0 ? '-' : '+';
  return (
        <li>
        {transaction.text} <div><span className={transaction.amount < 0 ? 'expense-amount' : 'income-amount'}>{sign}₹ {Math.abs(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction.id)}>X</button></div>
        </li>
    
  )
}
