import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Balance from './component/Balance';
import IncomeExpencces from './component/IncomeExpencces';
import TransactionList from './component/TransactionList';
import AddTransaction from './component/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';
// import { GlobalProvider } from './Context/GlobalState';

function App() {
  return (
    <div>
      <GlobalProvider>
         <Header/>
         <div className='container'>
          <Balance/>
          <IncomeExpencces/>
          <TransactionList/>
          <AddTransaction/>
         </div>
         </GlobalProvider>
    </div>
  );
}

export default App;
