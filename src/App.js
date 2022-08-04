import React from 'react';
import {Header} from './components/Header';
import {Balance} from './components/Balance';
import {IncomeExpense} from './components/IncomeExpense';
import {TransactionList} from './components/TransactionList';
import {AddTransaction} from './components/AddTransaction';

import './App.css';

import {GlobalProvider} from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <div className = "app">
      <Header />
      <div className="balance-container">
        <Balance />
      </div>
      <div>
      <IncomeExpense/>
      </div>
      <div>
      <TransactionList/>
      </div>
      <div>
      <AddTransaction/>
      </div>
    </div>
    </GlobalProvider>
    
  )
}

export default App;
