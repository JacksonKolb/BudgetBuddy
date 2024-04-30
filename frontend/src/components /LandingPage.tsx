import React from 'react';
import TransactionForm from './TransactionForm';

//TODO - Possibly move this to a models class or something? I don't front end that well yet.
type Transaction = {
    id: number;
    description: string;
    amount: number;
    date: string;
};

//Mock transaction data. Should eventually be fetched from postgres 
const transactions: Transaction[] = [
    { id: 1, description: "Groceries", amount: -150, date: "2024-04-28" },
    { id: 2, description: "Salary", amount: 2000, date: "2024-04-25" },
    { id: 3, description: "Cafe", amount: -30, date: "2024-04-27" }
];


function LandingPage() {
    const handleLogout = () => {
        console.log('Logout');
    };

    return (
        <div>
            <header>
                <h1>Budget Buddy</h1>
                <button onClick={handleLogout}>Logout</button>
            </header>
            <section>
                <h2>Logged in as: Jack</h2>
            </section>
            <section>
                <h2>Transactions</h2>
                <ul>
                    {transactions.map(transaction => (
                        <li key={transaction.id}>
                            {transaction.date}: {transaction.description} ${transaction.amount}
                        </li>
                    ))}
                </ul>
            </section>
            <TransactionForm/>
        </div>
    );
};

export default LandingPage;
