import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
    const [Text, SetText] = useState('');
    const [Amount, SetAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        // Ensure that Text and Amount are filled out
        if (!Text || Amount === 0) {
            alert("Please enter a valid transaction.");
            return;
        }

        // Create a new transaction object
        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000),  // Generate a random unique ID
            text: Text,
            amount: +Amount,  // Convert the amount to a number
        };

        // Call addTransaction function to add the new transaction
        addTransaction(newTransaction);

        // Clear the input fields after submission
        SetText('');
        SetAmount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form id="form-control" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={Text}
                        onChange={(e) => SetText(e.target.value)}
                        placeholder="Enter Text..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount<br />(negative for expense, positive for income)
                    </label>
                    <input
                        type="number"
                        value={Amount}
                        onChange={(e) => SetAmount(e.target.value)}
                        placeholder="Enter Amount..."
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
};

export default AddTransaction;
