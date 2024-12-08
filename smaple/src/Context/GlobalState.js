import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, type: 'Deposit', amount: 500 },
        { id: 2, type: 'Withdrawal', amount: 100 },
        { id: 3, type: 'Deposit', amount: 200 }
    ]
};

// Create context
export const GlobalContext = createContext(initialState);

// Global provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Function to delete a transaction
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    };

    const addTransaction = (id) => {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: id
        });

    };

    return (
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                deleteTransaction, // Ensure this function is passed down
                addTransaction
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
