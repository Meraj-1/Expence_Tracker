import React from 'react';

export const Transaction = ({ transaction, deleteTransaction }) => {
    return (
        <li className={transaction.type === 'Deposit' ? 'plus' : 'minus'}>
            {transaction.type} <span>${transaction.amount}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>
                X
            </button>
        </li>
    );
};
