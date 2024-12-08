import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import { Transaction } from './Transaction';

const TransactionList = () => {
    const { transactions, deleteTransaction } = useContext(GlobalContext);

    if (!transactions || transactions.length === 0) {
        return <p>No transactions available</p>; // Fallback UI
    }

    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />
                ))}
            </ul>
        </>
    );
};

export default TransactionList;
