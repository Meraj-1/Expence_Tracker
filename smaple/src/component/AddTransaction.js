import React, { useState, useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState'; // Correct import for the context

const AddTransaction = () => {
    const [Text, SetText] = useState('');
    const [Amount, SetAmount] = useState(0);

    // Use context to get the addTransaction function from GlobalContext
    const { addTransaction } = useContext(GlobalContext);  // Correct use of useContext

    const onSubmit = (e) => {
        e.preventDefault();
        
        // Ensure that Text and Amount are filled out
        if (!Text || Amount === 0) {
            alert("Please enter a valid transaction.");
            return;
        }

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000000), // Unique id
            text: Text,
            amount: +Amount, // Convert amount to number
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
                        Amount<br />(negative - expense, positive - income)
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
